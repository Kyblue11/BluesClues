import BackToTop from "@/src/components/backtotop";
import Footer from "@/src/components/footer";
import { BLOGS } from "../../data";
import WatchAPI from "./watch-api";
import ChatBot from "./portfolio-ai";
import UnsupervisedML from "./unsupervised-ml";

// a promise that will eventually give me type <T>, i.e an object with a slug property
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let BlogContent: React.ReactNode = <div>Blog page not found.</div>;
  const { slug } = (await params) as { slug: string };
  const blog = BLOGS.find((b) => b.blog_slug === slug)!;

  // TODO: it would be better to put the blog contents into the Blog object
  // otherwise this if-selection will continue to grow
  if (slug === "watch-api") {
    BlogContent = <WatchAPI />;
  } else if (slug === "portfolio-ai") {
    BlogContent = <ChatBot />;
  } else if (slug === "unsupervised-ml") {
    BlogContent = <UnsupervisedML />;
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-var">
        <main className="flex flex-col items-center min-h-screen w-full max-w-3xl mx-auto py-12 px-4 bg-zinc-100">
          
          <section className="w-full mb-4">
            <div className="flex justify-start">
              <a href="/#BlogSection">&lt; Back to home</a>
            </div>
          </section>

          <section className="w-full text-center mb-8">
            <div className="flex flex-col">
              <h2 className=" text-2xl font-bold text-zinc-900">
                {blog.blog_title}
              </h2>
              <p className="var-h5">{blog.blog_date}</p>
            </div>
          </section>

          {BlogContent}

          <BackToTop></BackToTop>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
