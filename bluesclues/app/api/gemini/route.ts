import { NextRequest, NextResponse } from "next/server";
import { sendPrompt } from "@/src/gemini";
import { insertPrompt } from "@/src/supabase/insert";
import { MetaData } from "@/src/types/types";

export async function POST(req: NextRequest) {
  const prompt = (await req.text()) as string;

  if (process.env.NODE_ENV == "production") {
    const userAgent = req.headers.get("user-agent");
    const ip = req.headers.get("x-vercel-forwarded-for");
    const referer = req.headers.get("referer");
    const acceptLanguage = req.headers.get("accept-language");

    const metadata = {
      userAgent,
      ip,
      referer,
      acceptLanguage,
    } as MetaData;

    try {
      await insertPrompt(prompt, metadata);
    } catch (error) {
      console.error("Unable to save prompt: ", error);
    }
  }

  try {
    const result = await sendPrompt(prompt, "gemini-2.5-flash-lite");
    return NextResponse.json({
      responseText: result,
    });
  } catch (error) {
    console.log("Luckily I have a fallback (sigh), trying gemini-2.5-flash...");
    try {
      const result = await sendPrompt(prompt, "gemini-2.5-flash");
      return NextResponse.json({
        responseText: result,
      });
    } catch (error) {
      console.error("sendPrompt error", error);
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }
  }
}
