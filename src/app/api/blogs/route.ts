import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(10);
  return NextResponse.json(blogs);
}
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const blog = await Blog.create(body);
    return NextResponse.json(blog, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: err.message || "Server error" }, { status: 500 });
  }
}