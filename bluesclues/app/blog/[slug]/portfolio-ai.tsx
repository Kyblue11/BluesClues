import ChatBot from "@/src/components/chatbot";

export default function PortfolioAI() {
  return (
    <>
      <section className="w-full text-center mb-8">
        <div className="flex flex-col">
          <h2 className=" text-2xl font-bold text-zinc-900">
            Portfolio Chatbot
          </h2>
          <p className="var-h5">8th Feb 2026</p>
        </div>
      </section>

      <ChatBot></ChatBot>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">Talk about RAG (it is not implemented yet)</p>
      </section>
    </>
  );
}
