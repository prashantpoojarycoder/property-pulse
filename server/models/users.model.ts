import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "users" | "admin";
    authProvider: "local" | "google" | "linkedin";
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: function (): boolean {
            return this.authProvider === "local";
        },
        select: false,
    },
    role: {
        type: String,
        enum: ["users", "admin"],
        default: "users"
    },
    authProvider: {
        type: String,
        enum: ["local", "google", "linkedin"],
        default: "local"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>("User", UserSchema);