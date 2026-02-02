import { NextResponse } from "next/server";
import { increaseSiteViews } from "@/src/supabase/increaseViews";
import { getSiteViews } from "@/src/supabase/fetchViews";

export async function POST() {
    try {
        await increaseSiteViews();
        const res = await getSiteViews();
        return NextResponse.json({ ok: true, views: res.sv_views });

    } catch (error) {
    console.error("Supabase increase views error (rpc) ", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}