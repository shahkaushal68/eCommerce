import express from "express";
import {
  createBlogCategory,
  fetchAllBlogCategory,
  singleBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
} from "../controllers/blogCategoryController.js";

import {
  authCheck,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authCheck, verifyTokenAndAdmin, createBlogCategory);
router.get("/", fetchAllBlogCategory);
router.get("/:id", authCheck, verifyTokenAndAdmin, singleBlogCategory);
router.put("/:id", authCheck, verifyTokenAndAdmin, updateBlogCategory);
router.delete("/:id", authCheck, verifyTokenAndAdmin, deleteBlogCategory);

export default router;
