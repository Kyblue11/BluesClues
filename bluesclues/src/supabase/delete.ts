import { supabase } from "./supabase";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function purgeOldRecords(days: number = 2) {
  const cutoff = dayjs()
    .tz("Asia/Kuala_Lumpur")
    .subtract(days, "day")
    .startOf("day")
    .format("YYYY-MM-DD HH:mm:ss");
    
  const { error } = await supabase
    .from("heart_rate_data")
    .delete()
    .lt("timestamp", cutoff);

  if (error) {
    throw new Error(`purgeOldRecords failed: ${error.message}`);
  }
}
