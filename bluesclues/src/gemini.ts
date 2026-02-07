import { GoogleGenAI } from "@google/genai";

export async function sendPrompt(message:string) {
    const ai = new GoogleGenAI( {} );
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: message || "hello! Whst model are you?"
    })
    return response;
}