"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "./components/BlogCard";

type Blog = {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  createdAt?: string;
  tags?: string[];
};


export default function Home() {
   const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase()) ||
      (b.tags || []).some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="font-sans flex flex-col min-h-screen bg-gray-100 p-8 sm:p-20">
      <section className="max-w-5xl mx-auto p-6">
      {/* Header */}
       <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-gradient-to-r from-yellow-500 to-teal-500 rounded-lg p-4 shadow-md">
    <h1 className="text-3xl font-bold text-white mb-2 md:mb-0">All Blog Posts</h1>
    <Link
      href="/admin"
      className="text-sm px-4 py-2 bg-white text-green-600 font-semibold rounded shadow hover:bg-green-50 transition"
    >
      Admin
    </Link>
  </div>

      {/* Search */}
      <div className="mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, description, or tag..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition bg-white text-gray-800"
        />
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center text-gray-500">No posts found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </section>
    </div>
  );
}
