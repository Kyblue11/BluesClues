import { supabase } from "./supabase";

export async function getSiteViews() {
    const { data, error } = await supabase
    .from("site_views")
    .select("sv_views")
    .single();

  if (error) {
    throw new Error(`getSiteViews failed: ${error.message}`);
  }
  return data;

}