import { NextRequest, NextResponse } from "next/server";
import { sendPrompt } from "@/src/gemini";

export async function POST(req: NextRequest) {

  try {
    const prompt = await req.json();
    const result = await sendPrompt(prompt);
    return NextResponse.json({
      result: result,
    });
    
  } catch (error) {
    console.error("sendPrompt error", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
