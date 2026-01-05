import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";
import { Link } from "wouter";
import { Property } from "@/lib/mockData";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: property.title,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + `/property/${property.id}`);
    toast({
      title: "Link Copied!",
      description: "Property link copied to clipboard.",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/property/${property.id}`}>
        <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <div className="relative h-72 overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm border border-white/20">
                {property.type}
              </span>
               <span className="bg-primary/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-sm border border-primary/20">
                {property.propertyType}
              </span>
            </div>
            
            <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <Button 
                variant="secondary" 
                size="icon" 
                className={`rounded-full shadow-lg ${isLiked ? 'text-red-500 bg-white' : 'text-slate-600 bg-white/90'}`}
                onClick={handleLike}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full bg-white/90 text-slate-600 shadow-lg"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Bed className="h-4 w-4" />
                  <span className="text-xs font-bold">{property.bhk} BHK</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Square className="h-4 w-4" />
                  <span className="text-xs font-bold">{property.area}</span>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors leading-tight font-display">
                {property.title}
              </h3>
            </div>
            <p className="text-slate-500 text-sm mb-6 flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              {property.location}
            </p>
            
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mb-1">Exclusive Price</p>
                <p className="text-2xl font-bold text-primary tracking-tight">{property.price}</p>
              </div>
              <Button size="lg" className="rounded-2xl px-6 bg-slate-900 hover:bg-primary transition-all active:scale-95 shadow-lg shadow-slate-200 group-hover:shadow-primary/20">
                Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
