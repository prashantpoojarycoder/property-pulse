import { Home, Search, Building2, User, LayoutDashboard, PlusCircle, LogIn, Menu, X, Heart, MapPin, Bed, Bath, Square, ChevronRight, Phone } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  price: string;
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
    title: "Ultra Luxury 3BHK in Lodha World Towers",
    price: "₹8.5 Cr",
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
    title: "Sky Villa with Private Deck",
    price: "₹1.8 Lac/mo",
    location: "HSR Layout, Bangalore",
    type: "Rent",
    propertyType: "Villa",
    bhk: 4,
    area: "3800 sqft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "A tech-enabled smart villa in the heart of Bangalore's startup hub. Includes a private terrace garden and automated climate control.",
    amenities: ["Smart Home", "Private Garden", "EV Charging", "Clubhouse"],
    owner: "Karthik Raja"
  },
  {
    id: 3,
    title: "Modern 2BHK near Cyber City",
    price: "₹65,000/mo",
    location: "DLF Phase 3, Gurgaon",
    type: "Rent",
    propertyType: "Apartment",
    bhk: 2,
    area: "1400 sqft",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Centrally located apartment perfect for corporate professionals. Walking distance from major metro stations and office hubs.",
    amenities: ["Power Backup", "High-speed Lift", "Yoga Deck"],
    owner: "Sandeep Gupta"
  },
  {
    id: 4,
    title: "Penthouse at The Address",
    price: "₹12.5 Cr",
    location: "Banjara Hills, Hyderabad",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 4,
    area: "5200 sqft",
    image: "https://images.unsplash.com/photo-1502005229766-939cb9342704?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1502005229766-939cb9342704?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Palatial penthouse with grand ceilings and a private elevator. Situated in Hyderabad's most elite neighborhood.",
    amenities: ["Private Lift", "Terrace Pool", "Valet Parking"],
    owner: "Venkata Reddy"
  },
  {
    id: 5,
    title: "Eco-Friendly Row House",
    price: "₹2.5 Cr",
    location: "Kothrud, Pune",
    type: "Buy",
    propertyType: "House",
    bhk: 3,
    area: "2100 sqft",
    image: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Sustainable living meets modern design. Solar-powered house with rainwater harvesting and organic composting unit.",
    amenities: ["Solar Power", "Organic Garden", "Community Center"],
    owner: "Priya Deshpande"
  },
  {
    id: 6,
    title: "Heritage Style Bungalow",
    price: "₹15 Cr",
    location: "White Town, Pondicherry",
    type: "Buy",
    propertyType: "House",
    bhk: 5,
    area: "4500 sqft",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Restored French colonial bungalow. A piece of history with modern comfort, steps away from the promenade beach.",
    amenities: ["Courtyard", "High Ceilings", "Wine Cellar"],
    owner: "Jean Pierre"
  }
];
