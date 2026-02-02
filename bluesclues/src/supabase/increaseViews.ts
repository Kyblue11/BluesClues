import { supabase } from "./supabase";

export async function increaseSiteViews() {
  const { error } = await supabase.rpc("increase_view");
  if (error) {
    throw new Error(`increaseSiteViews failed: ${error.message}`);
  }
}
