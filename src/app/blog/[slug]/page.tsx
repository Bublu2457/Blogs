
import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; 
  await connectDB();
  const blog = await Blog.findOne({ slug: resolvedParams.slug });

  if (!blog) return <h1>Blog not found</h1>;

  return (
    <main className="p-6 bg-white">
      <h1 className="text-3xl font-bold text-black">{blog.title}</h1>
      <p className="text-gray-600">{new Date(blog.createdAt).toDateString()}</p>
      <article className="mt-6 text-black">{blog.content}</article>
    </main>
    
  );
}