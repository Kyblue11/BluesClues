import { supabase } from "./supabase";

export async function markFileProcessed(fileId: string, fileName: string) {
  const { error } = await supabase.from("processed_files").insert({
    file_id: fileId,
    file_name: fileName,
  });

  // ignore duplicates
  if (error && !error.message.includes("duplicate")) {
    throw error;
  }
}
