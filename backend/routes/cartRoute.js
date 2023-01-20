import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authCheck, addToCart);

export default router;
