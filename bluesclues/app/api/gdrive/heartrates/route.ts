import { NextResponse } from "next/server";
import { getDriveClient } from "@/src/googleDrive";
import { parse } from "csv-parse/sync";
import dayjs from "dayjs";

import { HeartRateRow } from "@/src/types/types";
import { isFileProcessed } from "@/src/supabase/checkProcessed";
import { upsertRecords } from "@/src/supabase/insert";
import { markFileProcessed } from "@/src/supabase/markProcessed";
import { purgeOldRecords } from "@/src/supabase/delete";

const dailyFileRegex = /^Heart rate \d{4}\.\d{2}\.\d{2} Huawei Health\.csv$/;

function normalizeRows(rows: any[]) {
  const result: HeartRateRow[] = [];

  for (const row of rows) {
    const bpm = Number(row["Heart rate"]);
    const dateStr = String(row["Date"]);

    const malaysiaTime = dayjs(dateStr, "YYYY.MM.DD HH:mm:ss").format(
      "YYYY-MM-DD HH:mm:ss"
    );

    result.push({
      timestamp: malaysiaTime,
      bpm,
    } as HeartRateRow);
  }

  return result;
}

export async function GET() {
  try {
    const GDriveClient = getDriveClient();

    const files = await GDriveClient.files.list({
      q: "name contains 'Heart rate' and trashed = false",
      orderBy: "name_natural desc",
      pageSize: 4,
    });

    const dailyFiles = (files.data.files ?? []).filter((file) =>
      dailyFileRegex.test(file.name!)
    );

    const file = dailyFiles[0];
    if (!file?.id) {
      return NextResponse.json(
        {
          error: "No heart rate CSV found",
        },
        {
          status: 404,
        }
      );
    }

    const alreadyProcessed = await isFileProcessed(file.id);
    if (alreadyProcessed) {
      return NextResponse.json({
        message: "File already processed",
        file: file.name,
      });
    }

    const output = await GDriveClient.files.get(
      { fileId: file.id, alt: "media" },
      { responseType: "text" }
    );

    const heartRateRecords = parse(output.data as string, {
      columns: true,
    });

    const batch = normalizeRows(heartRateRecords);
    await upsertRecords(batch);
    await markFileProcessed(file.id, file.name!);
    await purgeOldRecords(2);

    return NextResponse.json({
      inserted: batch.length,
      file: file.name,
      latest: heartRateRecords,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
