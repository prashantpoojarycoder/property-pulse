import { Request, Response } from "express";
import { Property } from "../models/property.model.js";
import { AuthRequest } from "../middlewares/auth.middleware.js";


/**
 * Admin can create a new property listing
 * @route POST /api/properties
 * @access Admin
 */
export const createProperty = async (req: AuthRequest, res: Response) => {
  try {
    const photos =
      (req.files as Express.Multer.File[] | undefined)?.map(
        (file: any) => file.path // cloudinary URL
      ) || [];

    const property = await Property.create({
      ...req.body,
      gallery: {
        photos,
        videos: [],
      },
      owner: req.user?.userId,
    });

    res.status(201).json({
      message: "Property created successfully",
      property,
    });
  } catch (error) {
    console.error("Create property error:", error);
    res.status(500).json({ message: "Internal server error while creating property" });
  }
};


/**
 * List all properties with pagination
 */

export const getProperties = async (req: Request, res: Response) => {
    try {
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = Math.min(Number(req.query.limit) || 10, 50);
        const skip = (page - 1) * limit;
        const {
            propertyType,
            commercialType,
            city,
            bedrooms,
            minPrice,
            maxPrice,
            search
        } = req.query; // Future filters can be extracted here
        const query: any = {};

        // ✅ Property Type filter
        if (propertyType) {
            query.propertyType = propertyType;
        }

        // ✅ Commercial / Residential filter
        if (commercialType) {
            query.commercialType = commercialType;
        }

        // ✅ Bedrooms only for Residential
        if (commercialType === "Residential" && bedrooms) {
            query.bedrooms = Number(bedrooms);
        }

        // ✅ City filter
        if (city) {
            query.city = { $regex: city, $options: "i" }; // case-insensitive match
        }

        // ✅ Price range filter
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // ✅ Text search
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { city: { $regex: search, $options: "i" } }
            ];
        }

        const [properties, total] = await Promise.all([
            Property.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),

            Property.countDocuments(query)
        ]);

        res.json({
            data: properties,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page * limit < total,
                hasPrevPage: page > 1
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error while fetching properties" });
    }
};

/**
 * Get property details by ID
 */
export const getPropertyById = async (req: Request, res: Response) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            res.status(404).json({ message: "Property not found" });
            return;
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: "Internal server error while fetching property details" });
    }
};