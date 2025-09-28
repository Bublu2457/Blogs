import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  images: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);