import Router from "express";
import { SignUp } from "../controllers/authController.js";
import { SignIn } from "../controllers/authController.js";

const router = Router()
router.post("/sign-up", SignUp)
router.post("/sign-in", SignIn)

export default router