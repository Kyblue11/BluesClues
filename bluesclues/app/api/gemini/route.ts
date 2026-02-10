import { NextRequest, NextResponse } from "next/server";
import { sendPrompt } from "@/src/gemini";

export async function POST(req: NextRequest) {
  const prompt = (await req.text()) as string;

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
