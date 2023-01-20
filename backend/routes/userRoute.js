import express from "express";
const router = express.Router();
import {
  deleteUser,
  fetchWishlists,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import {
  authCheck,
  verifyTokenAndAdmin,
  verifyTokenAndUser,
} from "../middleware/authMiddleware.js";

router.get("/wishlists", authCheck, fetchWishlists);
router.get("/", authCheck, verifyTokenAndAdmin, getAllUsers);
router.get("/:id", authCheck, verifyTokenAndUser, getSingleUser);
router.delete("/:id", authCheck, verifyTokenAndUser, deleteUser);
router.put("/:id", authCheck, verifyTokenAndUser, updateUser);

export default router;
