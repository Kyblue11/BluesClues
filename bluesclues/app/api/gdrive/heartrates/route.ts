import { NextResponse } from "next/server";
import { getDriveClient } from "@/src/googleDrive";
import { parse } from "csv-parse/sync";

export async function GET() {
  const GDriveClient = getDriveClient();

  const files = await GDriveClient.files.list({
    q: "name contains 'Heart rate' and trashed = false",
    orderBy: "name_natural desc",
    pageSize: 1, // TODO: only 1 needed for now?
  });

  const file = files.data.files?.[0];
  if (!file?.id) {
    return NextResponse.json(
      {
        error: "No heart rate file found",
      },
      {
        status: 404,
      }
    );
  }

  const output = await GDriveClient.files.get(
    { fileId: file.id, alt: "media" },
    { responseType: "text" }
  );

  const heartRateRecords = parse(output.data as string, {
    columns: true,
  });

  return NextResponse.json({
    file: file.name,
    latest: heartRateRecords,
  });
}
