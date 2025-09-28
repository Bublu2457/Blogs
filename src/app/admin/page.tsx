"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, description, content }),
      });
      if (res.ok) {
        router.refresh();
        alert("Created");
        setTitle("");
        setSlug("");
        setDescription("");
        setContent("");
      } else {
        const err = await res.json();
        alert("Error: " + (err.message || "unknown"));
      }
    } catch (err) {
      console.error(err);
      alert("Request failed");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6
                     bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      {/* glass-card */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl shadow-2xl
                      rounded-3xl p-10 border border-white/30">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent
                       bg-clip-text bg-green from-purple-700 to-pink-600">
          Admin — Create Post
        </h1>

        <form onSubmit={handleCreate} className="space-y-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full rounded-xl border border-purple-200 bg-purple-50
                       focus:border-pink-400 focus:ring-2 focus:ring-pink-300
                       px-4 py-3 text-gray-800 placeholder-gray-400"
          />
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Slug (unique)"
            className="w-full rounded-xl border border-purple-200 bg-purple-50
                       focus:border-pink-400 focus:ring-2 focus:ring-pink-300
                       px-4 py-3 text-gray-800 placeholder-gray-400"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
            className="w-full rounded-xl border border-purple-200 bg-purple-50
                       focus:border-pink-400 focus:ring-2 focus:ring-pink-300
                       px-4 py-3 text-gray-800 placeholder-gray-400"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content (HTML or markdown)"
            className="w-full rounded-xl border border-purple-200 bg-purple-50
                       focus:border-pink-400 focus:ring-2 focus:ring-pink-300
                       px-4 py-3 h-44 text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-pink-500 to-purple-600
                       hover:from-pink-600 hover:to-purple-700
                       shadow-lg shadow-pink-300/50
                       transition-all duration-300"
          >
            Create Post
          </button>
        </form>
      </div>
    </main>
  );
}
