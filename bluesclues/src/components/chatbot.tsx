"use client";
import { useEffect, useState } from "react";

export default function ChatBot() {
  const question: string = "Reply this message with the name of a random fruit";
  const [reply, setReply] = useState<string>("");

  useEffect(() => {
    async function load() {
      const response = await fetch("api/gemini", {
        method: "POST",
        body: question,
      });
      const data = await response.json();
      setReply(data.responseText);
    }
    load();
  }, []);

  return <p>{reply}</p>;
}
