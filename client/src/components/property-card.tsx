import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Link } from "wouter";
import { Property } from "@/lib/mockData";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`}>
      <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm">
              {property.type}
            </span>
             <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              {property.propertyType}
            </span>
          </div>
          <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors text-white hover:text-red-500">
            <Heart className="h-5 w-5" />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm font-medium">View Details</p>
          </div>
        </div>
        
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
          </div>
          <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
            <MapPin className="h-3 w-3 text-slate-400" />
            {property.location}
          </p>
          
          <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 mb-4">
             <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
                <Bed className="h-4 w-4 text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-700">{property.bhk} Beds</span>
             </div>
             <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
                <Bath className="h-4 w-4 text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-700">2 Baths</span>
             </div>
             <div className="flex flex-col items-center justify-center p-2 bg-slate-50 rounded-lg">
                <Square className="h-4 w-4 text-slate-400 mb-1" />
                <span className="text-xs font-medium text-slate-700">{property.area}</span>
             </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Price</p>
              <p className="text-xl font-bold text-primary">{property.price}</p>
            </div>
            <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary">
              Contact
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
