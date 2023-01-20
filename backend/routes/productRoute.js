import express from "express";
import {
  createProduct,
  deleteProduct,
  fetchAllProducts,
  fetchSingleProduct,
  ratingProducts,
  updateProduct,
  wishListProduct,
} from "../controllers/productController.js";
import {
  authCheck,
  verifyTokenAndAdmin,
} from "../middleware/authMiddleware.js";
import { upload } from "../utils/multer.js";
const router = express.Router();

router.post(
  "/",
  authCheck,
  verifyTokenAndAdmin,
  upload.array("image"),
  createProduct
);
router.get("/", fetchAllProducts);
router.get("/:id", fetchSingleProduct);
router.put("/wishlist", authCheck, wishListProduct);
router.put("/ratings", authCheck, ratingProducts);
router.put(
  "/:id",
  authCheck,
  verifyTokenAndAdmin,
  upload.array("image"),
  updateProduct
);
router.delete("/:id", authCheck, verifyTokenAndAdmin, deleteProduct);

export default router;
