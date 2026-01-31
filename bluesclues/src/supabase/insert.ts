import { supabase } from "./supabase";
import { HeartRateRow } from "../types/types";

export async function upsertRecords(batch: HeartRateRow[]) {
  if (batch.length == 0) return;

  const { error } = await supabase
    .from("heart_rate_data")
    .upsert(batch, { onConflict: "timestamp" });

  if (error) {
    throw new Error(`upsertHeartRates failed: ${error.message}`);
  }
}
