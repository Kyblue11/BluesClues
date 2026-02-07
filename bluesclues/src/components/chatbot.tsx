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
    setReply(data.responseText);
  }

  return (
    <>
      <h2 className=" text-2xl font-bold text-zinc-900 text-center">
        Ask My AI
      </h2>
      <p className="var-h5 text-center">
        Ask me about my projects, tech stack, CS concepts or even hobbies!
      </p>
      <div>
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
            className="cursor-pointer bg-white p-2 rounded-lg"
            type="button"
            onClick={() => {
              submitQuestion();
              setQuestion("");
            }}
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
