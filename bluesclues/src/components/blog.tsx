import Link from "next/link";
import { Blog } from "../../app/data";

export default function MyBlog({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      {blogs.map((blog, _) => (
        <li key={blog.blog_slug} className="relative">
          <Link href={`/blog/${blog.blog_slug}`}>
            <div className="flex justify-between items-start mb-1">
              <span className="var-h2">{blog.blog_title}</span>
              <span className="text-sm text-zinc-500 font-normal">
                {blog.blog_date}
              </span>
            </div>
          </Link>

          {blog.blog_media_desc && (
            <p className=" text-sm text-zinc-700 text-center mt-5">
              {blog.blog_media_desc}
            </p>
          )}
          {blog.blog_media}
          {blog.blog_tagline && (
            <p className="text-lg text-zinc-400 mt-2 text-center">
              <i>{blog.blog_tagline}</i>
            </p>
          )}
        </li>
      ))}
    </>
  );
}
