import mongoose from "mongoose";
const { Schema } = mongoose;

const prodCategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
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

const ProdCategory = mongoose.model("ProdCategory", prodCategorySchema);

export default ProdCategory;
