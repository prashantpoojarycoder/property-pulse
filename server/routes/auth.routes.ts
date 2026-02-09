import { Router } from "express";
import { register, login, changePassword } from "../controllers/auth.controllers.ts";
import { authGuard } from "../middlewares/auth.middleware.ts";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-password", authGuard,changePassword);

export default router;