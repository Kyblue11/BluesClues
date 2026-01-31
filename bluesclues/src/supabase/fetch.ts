import { supabase } from "./supabase";

export async function fetchYesterday(startStr: string, endStr: string) {
  const { data, error } = await supabase
    .from("heart_rate_data")
    .select("timestamp, bpm")
    .gte("timestamp", startStr)
    .lte("timestamp", endStr)
    .order("timestamp");

  if (error) {
    throw new Error(`fetchYesterday failed: ${error.message}`);
  }
  return data;
}
