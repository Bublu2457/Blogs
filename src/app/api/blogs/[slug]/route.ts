import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { connectDB } from "@/lib/db";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }   // ✅ note the Promise
) {
  const { slug } = await context.params;           // ✅ await the params
  await connectDB();

  const blog = await Blog.findOne({ slug });
  if (!blog) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
