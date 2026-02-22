import { supabase } from "./supabase";
import { HeartRateRow } from "../types/types";
import { MetaData, GeoMetadata } from "../types/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function upsertRecords(batch: HeartRateRow[]) {
  if (batch.length == 0) return;

  const { error } = await supabase
    .from("heart_rate_data")
    .upsert(batch, { onConflict: "timestamp" });

  if (error) {
    throw new Error(`upsertHeartRates failed: ${error.message}`);
  }
}

export async function insertPrompt(prompt: string, metadata: MetaData, geoMetadata: GeoMetadata) {
  const { error } = await supabase.from("prompt_questions").insert({
    created_at: dayjs().tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD HH:mm:ss"),
    prompt_string: prompt,
    metadata: metadata,
    location: geoMetadata,
  });
  if (error) {
    throw new Error(`insertPrompt failed: ${error.message}`);
  }
}
