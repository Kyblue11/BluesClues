import { supabase } from "./supabase";

export async function upsertRecords(
  batch: {
    timestamp: string;
    bpm: number;
  }[]
) {
  if (batch.length == 0) return;

  const { error } = await supabase
    .from("heart_rate_data")
    .upsert(batch, { onConflict: "timestamp" });

  if (error) {
    throw new Error(`upsertHeartRates failed: ${error.message}`);
  }
}
