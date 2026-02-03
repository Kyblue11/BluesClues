import Footer from "@/src/components/footer";
import WatchAPI from "./watch-api";

// a promise that will eventually give me type <T>, i.e an object with a slug property
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: string };
  let BlogContent: React.ReactNode = <div>Blog page not found.</div>;

  // TODO: it would be better to put the blog contents into the Blog object
  // otherwise this if-selection will continue to grow
  if (slug === "watch-api") {
    BlogContent = <WatchAPI />;
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-var">
        <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-12 px-4 bg-zinc-100">
          <section className="w-full mb-4">
            <div className="flex justify-start">
              <a href="/">&lt; Back to home</a>
            </div>
          </section>
          {BlogContent}
          <a href="#" className="block text-zinc-600 underline mt-24">
            Return to Top
          </a>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
