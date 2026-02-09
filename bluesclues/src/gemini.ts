import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "@/app/data";

export async function sendPrompt(prompt: string, modelname: string) {
  try {
    const ai = new GoogleGenAI({});
    const response = await ai.models.generateContent({
      model: modelname,
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
