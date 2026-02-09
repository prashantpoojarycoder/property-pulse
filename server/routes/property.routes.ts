import { Router } from "express";
import { createProperty,getProperties,getPropertyById } from "../controllers/property.controller.ts";
import { authGuard } from "../middlewares/auth.middleware.ts";
import { adminGuard } from "../middlewares/admin.middleware.ts";

const router = Router();
// Admin can create a new property listing
// router.post("/", authGuard, adminGuard, createProperty);
// For Loged in users to create property listing
router.post("/", authGuard, createProperty);

// List all properties with pagination
router.get("/", getProperties);
// Get property details by ID
router.get("/:id", getPropertyById);

/**
 * 
 /api/properties?city=Bangalore&minPrice=50000&maxPrice=200000

/api/properties?propertyType=Apartment&commercialType=Residential&bedrooms=2

/api/properties?search=whitefield&page=2&limit=12

 */

export default router;