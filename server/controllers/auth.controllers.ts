import { Request,Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/users.model";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../middlewares/auth.middleware";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, email, password, role } = req.body;

        if(!firstName || !email || !password) {
            res.status(400).json({ message: "Missing required fields: firstName, email, or password" });
            return;
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: role || "users",
            authProvider: "local"
        });


        res.status(201).json({ 
            message: "User registered successfully",
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
         });
    } catch (error) {
        res.status(500).json({ message: "Internal server error during registration" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            res.status(401).json({ message: "Missing required fields: email or password" });
            return;
        }

        // Find user by email
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }
        // Generate JWT token 
        const JWT_SECRET = process.env.JWT_SECRET as string;
        const token = jwt.sign(
            { 
                userId: user._id, 
                role: user.role 
            }, 
            JWT_SECRET, 
            { 
                expiresIn: "7d"
            }
        );

        res.status(200).json({ 
            message: "Login successful",
            token,
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            }
         });
    } catch (error) {
        res.status(500).json({ message: "Internal server error during login" });
    }
};

export const changePassword = async (req: AuthRequest, res: Response) => {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
        res.status(400).json({ message: "Missing required fields: currentPassword or newPassword" });
        return;
    }
    
    try {
        const user = await User.findById(req.user?.userId).select("+password");
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }  
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Current password is incorrect" });
            return;
        }
        
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error during password change" });
    }

}