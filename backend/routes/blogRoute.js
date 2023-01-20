import express from "express";
import {
  createBlog,
  deleteBlog,
  getSingleBlog,
  likeBlogs,
  showAllBlogs,
  updateBlog,
  disLikeBlog,
} from "../controllers/blogController.js";
const router = express.Router();
import {
  authCheck,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";

router.post("/", authCheck, verifyTokenAndAdmin, createBlog);
router.get("/", showAllBlogs);
router.get("/:id", getSingleBlog);
router.put("/likeblog", authCheck, likeBlogs);
router.put("/dislikeblog", authCheck, disLikeBlog);
router.put("/:id", authCheck, verifyTokenAndAdmin, updateBlog);
router.delete("/:id", authCheck, verifyTokenAndAdmin, deleteBlog);

export default router;
