import Blog from "../models/blogModel.js";
import slugify from "slugify";
import mongoose from "mongoose";

export const createBlog = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const addBlog = await Blog.create(req.body);
    res.status(200).json(addBlog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const showAllBlogs = async (req, res) => {
  try {
    const fetchAllBlogs = await Blog.find();
    res.status(200).json(fetchAllBlogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleBlog = async (req, res) => {
  var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) return res.status(500).json("Id isn't Valid");
  try {
    const fetchSingleBlogs = await Blog.findById(req.params.id)
      .populate("likes")
      .populate("disLikes");
    await Blog.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { numOfViews: 1 },
      },
      { new: true }
    );
    res.status(200).json(fetchSingleBlogs);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const updateBlog = async (req, res) => {
  var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) return res.status(500).json("Id isn't Valid");
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateBlog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteBlog = async (req, res) => {
  var isValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isValid) return res.status(500).json("Id isn't Valid");
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json("Blog Deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const likeBlogs = async (req, res) => {
  try {
    //Find Blog Id
    const { blogId } = req.body;
    var isValid = mongoose.Types.ObjectId.isValid(blogId);
    if (!isValid) return res.status(500).json("Id isn't Valid");
    //Find Blog based on blogId
    const blog = await Blog.findById(blogId);
    //find User
    const loginUserId = req.user.id;
    //update Blog Likes based on user
    const isLiked = blog?.isLiked;
    // if user has disliked the blog
    const alreadyDisLiked = blog?.disLikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );

    if (alreadyDisLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { disLikes: loginUserId },
          isDisLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    }
    if (isLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { likes: loginUserId },
          isLiked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const disLikeBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    var isValid = mongoose.Types.ObjectId.isValid(blogId);
    if (!isValid) return res.status(500).json("Id isn't Valid");

    const blog = await Blog.findById(blogId);

    const isLoginUserId = req.user.id;

    const isDisLiked = blog?.isDisLiked;

    const isAlreadyLiked = blog?.likes.find(
      (userId) => userId.toString() === isLoginUserId.toString()
    );

    if (isAlreadyLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: isLoginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    }

    if (isDisLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { disLikes: isLoginUserId },
          isDisLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { disLikes: isLoginUserId },
          isDisLiked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
