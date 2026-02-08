import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/app/data";

export async function sendPrompt(prompt: string) {
  try {
    const ai = new GoogleGenAI({});
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
      },
    });
    return response.text;
  } catch (error) {
    throw new Error(`sendPrompt failed: ${error}`);
  }
}
