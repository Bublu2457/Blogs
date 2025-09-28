import Link from "next/link";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <div className="p-4 bg-blue-400 rounded-lg shadow-sm hover:shadow-md transition">
      <Link href={`/blog/${blog.slug}`}>
        <h2 className="text-xl font-semibold hover:underline">{blog.title}</h2>
      </Link>
      <p className="text-sm text-blue-600 mt-1">{blog.description}</p>
      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
        <span>{blog.tags?.slice(0, 3).join(", ")}</span>
        <span>{blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}</span>
      </div>
    </div>
  );
}
