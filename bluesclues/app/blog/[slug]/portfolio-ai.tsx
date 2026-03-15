import ChatBot from "@/src/components/chatbot";
import Image from "next/image";

export default function PortfolioAI() {
  return (
    <>
      <ChatBot></ChatBot>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Limits</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          Since this portfolio website is simply just a personal project, i am
          dedicated to spending $0.00 on its resources. This means <i>a lot</i>{" "}
          of creative ways and workarounds to keep things free. Hence, say hello
          to ... <b>Gemini 2.5 Flash-Lite</b>!
        </p>
        <ul className="blog-content-ul">
          <li>
            <b>Daily Request Limit (RPD):</b> 20 requests per day
          </li>
          <li>
            <b>Tokens Per Minute (TPM):</b> 250,000 tokens
          </li>
          <li>
            <b>Requests Per Minute:</b> 10 Requests
          </li>
        </ul>
        <p className="text-lg text-zinc-900 mb-2 mt-2">
          This daily limit resets every day at midnight Pacific Time (
          <i>so please share your request limit with other page visitors</i>{" "}
          (づ￣ 3￣)づ, thank you!
        </p>

        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context Memory</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          So how does the LLM actually remember my personal details? It would
          need some form of 'persistent' memory to be able to retrieve data,
          both accurately and consistently. For LLMs, there are plenty of ways
          to achieve this such as RAG, CAG, System Prompt Injections, etc. Each
          method has its use cases and tradeoffs when it comes to storage
          capicity, speed (latency), accuracy and complexity.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <section>
            <p className="text-lg text-zinc-900 mb-2">
              <b>RAG ?</b>
            </p>
            <p className="text-lg text-zinc-900">
              The RAG option would require me to have a <i>Retriever</i> engine
              with its embedding function, in order to turn text into vectors
              (essentially numbers in a coordinate space). This main logic is
              also know as 'Semantic Understanding'. I would also need a vector
              database that stores these embeddings.
            </p>
          </section>
          <div className="items-center flex flex-col flex-shrink-0 ">
            <Image
              src="/rag.png"
              alt="RAG architecture"
              width={400}
              height={100}
              className="rounded-lg"
            />
            <p className=" text-sm text-center text-zinc-600 mt-2">
              <a
                href="https://medium.com/@connectpuneet/what-is-rag-in-the-llm-world-and-why-is-it-significant-999fec9d84ab"
                target="_blank"
              >
                Source: Gupta, 2024
              </a>
            </p>
          </div>
        </div>

        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>System Prompt Injection !</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          RAG would be beneficial for handling large chunks of data (e.g.
          hundreds of text / pdf pages); but for my usecase, my knowledge source
          would only consist of ~1030 words, which translates to around 1800
          tokens. Hence,{" "}
          <u>why not just feed this data into the LLM's system instruction</u>?
          Similar to CAG, this way, each time a user sends a prompt query to the
          LLM model, the system prepends a static prompt instruction (my
          knowledge source) within its API call.
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          This method is simpler, faster and just as effective as RAG when
          handling small to medium-sized data. As a result, the AI will only
          answer the user with my input knowledge as context (its source of
          truth). Try it out! If you were to ask irrelevant questions (
          <i>e.g. bake me a red velvet cake recipe</i>), it will not cooperate.
          Instead, ask it questions about my history, education, work experience
          and projects!
        </p>

        <pre className="flex justify-center w-full">
          <code className="language-typescript text-zinc-400">
            {`
const response = await ai.models
  .generateContent({
      model: modelname,
      contents: prompt,
      config: {
        systemInstruction: PROMPT,
      },
  });
          `}
          </code>
        </pre>

        <p className="text-lg text-zinc-900 mt-2 mb-2">
          And its as simple as that! The <code>systemInstruction: PROMPT</code>{" "}
          config attribute stores my input data as string text. Sometimes,
          over-engineering is a trap that even experienced developers fall into.
          Here is a cool summary table to decide when to use RAG and System
          Instructions.
        </p>

        <div className="mt-6 overflow-x-auto text-sm">
          <table>
            <thead>
              <tr className="bg-zinc-200">
                <th className="px-3 py-2 text-left whitespace-normal break-words">
                  Method
                </th>
                <th className="px-2 py-2 text-left whitespace-normal break-words">
                  Usecase
                </th>
                <th className="px-2 py-2 text-left whitespace-normal break-words">
                  Pros
                </th>
                <th className="px-2 py-2 text-left whitespace-normal break-words">
                  Cons
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 whitespace-normal break-words">RAG</td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Large, dynamic data
                </td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Scalable, accurate for big datasets
                </td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Complex, slower, needs extra infra
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 whitespace-normal break-words">
                  System Prompt Injection
                </td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Small/medium static data
                </td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Simple, fast, easy, free
                </td>
                <td className="px-2 py-2 whitespace-normal break-words">
                  Limited by model context window
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
