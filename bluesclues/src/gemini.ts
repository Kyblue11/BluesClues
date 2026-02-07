import { GoogleGenAI } from "@google/genai";

export async function sendPrompt( prompt: string) {
  const ai = new GoogleGenAI({});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt
  });
  return response.text;
}