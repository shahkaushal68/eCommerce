import express from "express";
import {
  createProdCategory,
  fetchAllProdCategory,
  singleProdCategory,
  updateProdCategory,
  deleteProdCategory,
} from "../controllers/prodCategoryController.js";

import {
  authCheck,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", authCheck, verifyTokenAndAdmin, createProdCategory);
router.get("/", fetchAllProdCategory);
router.get("/:id", authCheck, verifyTokenAndAdmin, singleProdCategory);
router.put("/:id", authCheck, verifyTokenAndAdmin, updateProdCategory);
router.delete("/:id", authCheck, verifyTokenAndAdmin, deleteProdCategory);

export default router;
