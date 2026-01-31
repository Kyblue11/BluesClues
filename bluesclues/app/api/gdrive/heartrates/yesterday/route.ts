import { NextResponse } from "next/server";
import { fetchYesterday } from "@/src/supabase/fetch";
import { HeartRateRow } from "@/src/types/types";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function GET() {
  try {
    const now = dayjs().tz("Asia/Kuala_Lumpur");
    const ystd = now.subtract(1, "day");
    const ystdStart = ystd.startOf("day").format("YYYY-MM-DD HH:mm:ss");
    const ystdEnd = ystd.format("YYYY-MM-DD HH:mm:ss");

    const data = await fetchYesterday(ystdStart, ystdEnd) as HeartRateRow[];

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
