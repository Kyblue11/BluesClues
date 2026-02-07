import ChatBot from "@/src/components/chatbot";

export default function PortfolioAI() {
  return (
    <>
      <ChatBot></ChatBot>

      <section className="w-full">
        <p className="text-lg text-zinc-900 mb-2 mt-8">
          <b>Context</b>
        </p>
        <p className="text-lg text-zinc-900 mb-2">
          Talk about RAG (it is not implemented yet)
        </p>
      </section>
    </>
  );
}
