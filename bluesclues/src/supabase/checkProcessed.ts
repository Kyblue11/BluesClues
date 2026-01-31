import { supabase } from "./supabase";

export async function isFileProcessed(fileId: string) {
  const { data, error } = await supabase
    .from("processed_files")
    .select("file_id")
    .eq("file_id", fileId)
    .limit(1);

  if (error) {
    throw new Error(`checkProcessed failed: ${error.message}`);
  }

  return !!(data && data.length > 0) as Boolean;
}
