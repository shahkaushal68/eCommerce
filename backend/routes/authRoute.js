import express from "express";
const router = express.Router();
import {
  register,
  login,
  handleRefreshToken,
  logout,
  sendPassLink,
} from "../controllers/authController.js";

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.post("/sendPasswordLink", sendPassLink);

export default router;
