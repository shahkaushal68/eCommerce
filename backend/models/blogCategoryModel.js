import mongoose from "mongoose";
const { Schema } = mongoose;

const blogCategorySchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

export default BlogCategory;
