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
    title: "Luxury 3BHK Apartment in Downtown",
    price: "$450,000",
    location: "Downtown, Metropolis",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 3,
    area: "1850 sqft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1512918580421-aca2bc6fd288?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1513584685908-7827635577f5?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Experience luxury living in the heart of the city. This fully furnished 3BHK apartment features breathtaking views, modern amenities, and proximity to all major business hubs.",
    amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security", "Club House"],
    owner: "John Doe"
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    price: "$3,500/mo",
    location: "Beverly Hills, Sunnyville",
    type: "Rent",
    propertyType: "Villa",
    bhk: 4,
    area: "3200 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "A stunning modern villa perfect for families. Includes a private pool, landscaped garden, and spacious interiors.",
    amenities: ["Private Pool", "Garden", "Garage", "Smart Home System"],
    owner: "Jane Smith"
  },
  {
    id: 3,
    title: "Cozy Studio near University",
    price: "$1,200/mo",
    location: "University District, Knowledge City",
    type: "Rent",
    propertyType: "Apartment",
    bhk: 1,
    area: "500 sqft",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Perfect for students or young professionals. Fully furnished studio apartment walking distance from the university campus.",
    amenities: ["Wi-Fi", "Laundry", "Study Area"],
    owner: "Campus Housing"
  },
  {
    id: 4,
    title: "Spacious 4BHK Penthouse",
    price: "$850,000",
    location: "Skyline Towers, Metropolis",
    type: "Buy",
    propertyType: "Apartment",
    bhk: 4,
    area: "2800 sqft",
    image: "https://images.unsplash.com/photo-1502005229766-939cb9342704?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1502005229766-939cb9342704?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Top of the world living. This penthouse offers panoramic city views, a private terrace, and premium finishes throughout.",
    amenities: ["Private Terrace", "Concierge", "Valet Parking", "Spa"],
    owner: "Elite Estates"
  },
  {
    id: 5,
    title: "Commercial Office Space",
    price: "$5,000/mo",
    location: "Tech Park, Innovation Hub",
    type: "Rent",
    propertyType: "Plot", 
    bhk: 0,
    area: "1500 sqft",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Modern office space ready for move-in. Includes conference rooms, open work areas, and high-speed internet infrastructure.",
    amenities: ["Conference Room", "Cafeteria", "Power Backup"],
    owner: "BizSpaces"
  },
   {
    id: 6,
    title: "Seaside Cottage",
    price: "$650,000",
    location: "Coastal Road, Seaside",
    type: "Buy",
    propertyType: "House",
    bhk: 2,
    area: "1200 sqft",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
    images: [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Charming cottage with direct beach access. Perfect vacation home or rental investment.",
    amenities: ["Beach Access", "Deck", "Fireplace"],
    owner: "Sarah Jenkins"
  }
];
