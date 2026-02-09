import { Response,NextFunction } from "express";
import { AuthRequest } from "./auth.middleware";

export const adminGuard = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
};