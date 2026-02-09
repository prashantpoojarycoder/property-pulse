import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
    title: string;
    iWantTo: "Sell" | "Rent";
    propertyType: "Apartment" | "Independent House" | "Plot/Land" | "Villa";
    commercialType?: "Commercial" | "Residential";
    city: string;
    area: string;
    fullAddress: string;
    bedrooms: number;
    bathrooms: number;
    builtUpArea: number;
    contactNumber: string;
    email: string;
    description: string;
    gallery?: {
        photos: string[];
        videos: string[];
    };
    owner: mongoose.Types.ObjectId;
    isActive: boolean;
    price: number;
    createdAt: Date;
    updatedAt: Date;
};

const PropertySchema = new Schema<IProperty>({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    iWantTo: {
        type: String,
        enum: ["Sell", "Rent"],
        required: true
    },
    propertyType: {
        type: String,
        enum: ["Apartment", "Independent House", "Plot/Land", "Villa"],
        required: true
    },
    commercialType: {
        type: String,
        enum: ["Commercial", "Residential"]
    },
    city: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    area: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    fullAddress: {
        type: String,
        required: true,
        trim: true
    },
    bedrooms: Number,
    bathrooms: Number,
    builtUpArea: Number,
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
    },
    gallery: {
        photos: { type: [String], default: [] },
        videos: { type: [String], default: [] },
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const Property = mongoose.model<IProperty>("Property", PropertySchema);