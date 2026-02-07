import Link from "next/link";
import { Blog } from "../../app/data";

export default function MyBlog({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      {blogs.map((blog, _) => (
        <li key={blog.blog_slug} className="relative">
          <Link href={`/blog/${blog.blog_slug}`}>
            <div className="flex flex-col lg:flex-row justify-between items-start mb-1">
              <span className="var-h2">{blog.blog_title}</span>
              <span className="text-sm text-zinc-500 font-normal">
                {blog.blog_date}
              </span>
            </div>
            {blog.blog_media_desc && (
              <p className="var-h5">{blog.blog_media_desc}</p>
            )}
          </Link>
        </li>
      ))}
    </>
  );
}
