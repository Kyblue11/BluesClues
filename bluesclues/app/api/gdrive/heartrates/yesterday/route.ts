import { NextRequest, NextResponse } from "next/server";
import { fetchPeriod } from "@/src/supabase/fetch";
import { HeartRateRow } from "@/src/types/types";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function GET(req: NextRequest) {
  try {
    var data: HeartRateRow[] = [];
    const now = dayjs().tz("Asia/Kuala_Lumpur");
    const ystd = now.subtract(1, "day");
    const ystdStart = ystd.startOf("day").format("YYYY-MM-DD HH:mm:ss");
    const ystdEnd = ystd.format("YYYY-MM-DD HH:mm:ss");
    data = (await fetchPeriod(ystdStart, ystdEnd)) as HeartRateRow[];

    if (!data || data.length == 0) {
      console.log("database fetch empty, upserting latest data");
      const protocol = req.headers.get("x-forwarded-proto") || "http"; // TODO: band-aid fix
      const host = req.headers.get("host") || "localhost:3000";
      const url = `${protocol}://${host}/api/gdrive/heartrates`;
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) {
        console.error("Upserter failed", await res.text());
      } else {
        console.log("Upserter triggered successfully");
      }
      data = (await fetchPeriod(ystdStart, ystdEnd)) as HeartRateRow[];
    }

    if (!data || data.length == 0) {
      console.log("Upserter also failed, now trying 2 days ago' data");
      const dayb4ystd = now.subtract(2, "day");
      const dayb4ystdStart = dayb4ystd.startOf("day").format("YYYY-MM-DD HH:mm:ss");
      const dayb4ystdEnd = dayb4ystd.format("YYYY-MM-DD HH:mm:ss");
      data = await fetchPeriod(dayb4ystdStart, dayb4ystdEnd) as HeartRateRow[];
    }

    return NextResponse.json({
      start: ystdStart,
      end: ystdEnd,
      length: data.length,
      records: data,
    });
  } catch (error) {
    console.error("Supabase select error", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
