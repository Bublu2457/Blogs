"use client";
import { useEffect, useState } from "react";

type Blog = {
  title: string;
  slug:string;
  content: string;
  description?: string;
  createdAt?: string;
  images?: string[];
};

export default function BlogFetcher({ slug }: { slug: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          setBlog(null);
        } else {
          const data = await res.json();
          setBlog(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) return <div>Loading post...</div>;
  if (!blog) return <div>Post not found.</div>;

  return (
    <article className="prose lg:prose-xl">
      <h1>{blog.title}</h1>
      <p className="text-sm text-gray-500">{blog.createdAt ? new Date(blog.createdAt).toDateString() : ""}</p>
      <p className="mt-4">{blog.description}</p>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
      {/* images (if any) */}
      {blog.images?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {blog.images.map((src, i) => (
            <img key={i} src={src} alt={`image-${i}`} className="rounded shadow-sm" />
          ))}
        </div>
      ) : null}
    </article>
  );
}
