import ChatBot from "@/src/components/chatbot";

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
          of creative ways and workarounds to keep things free. Hence, may i
          introduce you to ... <b>Gemini 2.5 Flash-Lite</b>!
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
      </section>
    </>
  );
}
