import { Home, Search, Building2, User, LayoutDashboard, PlusCircle, LogIn, Menu, X, Heart, MapPin, Bed, Bath, Square, ChevronRight, Phone } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  type: "Rent" | "Buy";
  propertyType: "Apartment" | "House" | "Villa" | "Plot";
  bhk: number;
  area: string;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  owner: string;
  coordinates?: { lat: number; lng: number };
}

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Sea Facing Luxury 3BHK",
    price: "₹8.50 Cr",
    priceValue: 85000000,
    location: "Worli, Mumbai",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 3,
    area: "2450 sqft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512918580421-aca2bc6fd288?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Experience sky-high luxury in Mumbai's most iconic residential tower. Featuring Italian marble flooring, walk-in closets, and panoramic Arabian Sea views.",
    amenities: ["Concierge", "Infinity Pool", "Private Theatre", "Sky Lounge"],
    owner: "Aryan Malhotra"
  },
  {
    id: 2,
    title: "Premium 2BHK with Balcony",
    price: "₹65,000/mo",
    priceValue: 65000,
    location: "Andheri West, Mumbai",
    type: "Rent",
    propertyType: "Apartment",
    bhk: 2,
    area: "1100 sqft",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Centrally located apartment perfect for corporate professionals. Walking distance from major metro stations and office hubs.",
    amenities: ["Power Backup", "High-speed Lift", "Yoga Deck"],
    owner: "Sandeep Gupta"
  },
  {
    id: 3,
    title: "Spacious 4BHK Penthouse",
    price: "₹15.00 Cr",
    priceValue: 150000000,
    location: "Bandra West, Mumbai",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 4,
    area: "3500 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Ultra-luxury penthouse with a private terrace garden in the heart of Bandra. Unmatched privacy and exclusivity.",
    amenities: ["Private Terrace", "Gym", "Parking", "Security"],
    owner: "Karan Johar"
  },
  {
    id: 4,
    title: "Modern 1BHK Studio",
    price: "₹35,000/mo",
    priceValue: 35000,
    location: "Powai, Mumbai",
    type: "Rent",
    propertyType: "Apartment",
    bhk: 1,
    area: "550 sqft",
    image: "https://images.unsplash.com/photo-1536376074432-834fa5725800?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1536376074432-834fa5725800?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Cozy studio apartment with lake views. Fully furnished and ready to move in. Ideal for single professionals.",
    amenities: ["Lake View", "WiFi", "Housekeeping"],
    owner: "Rahul Sharma"
  },
  {
    id: 5,
    title: "Independent Villa with Garden",
    price: "₹25.00 Cr",
    priceValue: 250000000,
    location: "Juhu, Mumbai",
    type: "Buy",
    propertyType: "Villa",
    bhk: 5,
    area: "6000 sqft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Stunning independent villa just steps away from Juhu Beach. Features a private swimming pool and landscaped gardens.",
    amenities: ["Private Pool", "Garden", "Garage", "Staff Quarters"],
    owner: "Shah Rukh Khan"
  },
  {
    id: 6,
    title: "Compact 1BHK near Station",
    price: "₹1.20 Cr",
    priceValue: 12000000,
    location: "Borivali East, Mumbai",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 1,
    area: "450 sqft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Well-maintained 1BHK in a peaceful society. Excellent connectivity to the railway station and western express highway.",
    amenities: ["Gated Community", "CCTV", "Elevator"],
    owner: "Mehul Choksi"
  }
];
