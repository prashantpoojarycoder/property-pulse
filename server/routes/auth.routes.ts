import { Router } from "express";
import { register, login, changePassword } from "../controllers/auth.controllers";
import { authGuard } from "../middlewares/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-password", authGuard,changePassword);

export default router;