import slugify from "slugify";
import BlogCategory from "../models/blogCategoryModel.js";

export const createBlogCategory = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const addBlog = await new BlogCategory(req.body).save();
    res.status(200).json(addBlog);
  } catch (error) {
    res.status(500).json(error);
    console.log("createBlogError", error);
  }
};

export const fetchAllBlogCategory = async (req, res) => {
  try {
    const fetchBlog = await BlogCategory.find();
    res.status(200).json(fetchBlog);
  } catch (error) {
    res.status(500).json(error);
    console.log("createBlogError", error);
  }
};

export const singleBlogCategory = async (req, res) => {
  try {
    const getsingleBlogCategory = await BlogCategory.findById(req.params.id);

    res.status(200).json(getsingleBlogCategory);
  } catch (error) {
    res.status(500).json(error);
    //console.log("createBlogError", error);
  }
};

export const updateBlogCategory = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateBlogCategory = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateBlogCategory);
  } catch (error) {
    res.status(500).json(error);
    //console.log("updateBlogError", error);
  }
};

export const deleteBlogCategory = async (req, res) => {
  try {
    await BlogCategory.findByIdAndDelete(req.params.id);
    res.status(200).json("BlogCategory deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
    //console.log("deleteBlogError", error);
  }
};
