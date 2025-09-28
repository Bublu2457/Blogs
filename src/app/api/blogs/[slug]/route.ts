import { connectDB } from "../../../../lib/db";
import Blog from "../../../../models/Blog";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug });
  if (!blog) return NextResponse.json({ error: "Not at all found" }, { status: 404 });
  return NextResponse.json(blog);
}
