"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatBot() {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [reply, setReply] = useState<string>("");

  async function submitQuestion() {
    setLoading(true);
    const response = await fetch("/api/gemini", {
      method: "POST",
      body: question,
    });
    const data = await response.json();
    setLoading(false);
    if (data.error) {
      setReply("Woa, you've hit your daily limit!");
    } else {
      setReply(data.responseText);
    }
  }

  return (
    <>
      <div className="w-full mb-4">
        <form
          className="flex flex-col lg:flex-row gap-4 lg:justify-between items-middle bg-zinc-200 p-4 mt-4 mb-4 rounded-lg"
          onSubmit={(i) => {
            i.preventDefault();
            submitQuestion();
            setQuestion("");
          }}
        >
          <input
            className="outline-none lg:w-15/16"
            id="input-box"
            type="text"
            placeholder={
              !loading ? "What did you do at Theodesis..." : "Loading..."
            }
            required
            value={question}
            onChange={(i) => setQuestion(i.target.value)}
            disabled={loading}
          ></input>
          <button
            disabled={loading}
            className="cursor-pointer bg-white p-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
      {reply && (
        <div className="bg-white p-8 rounded-lg overflow-x-auto">
          <Markdown remarkPlugins={[remarkGfm]}>{reply}</Markdown>
        </div>
      )}
    </>
  );
}
