import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Square, Heart, Share2 } from "lucide-react";
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
    toast({
      title: "Login Required",
      description: "Please sign in to save properties.",
      action: (
        <Link href="/auth">
          <Button size="sm">Login</Button>
        </Link>
      ),
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + `/property/${property.id}`);
    toast({ title: "Link Copied!" });
  };

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 250 }}>
      <Link href={`/property/${property._id}`}>
        <Card className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all hover:shadow-xl hover:-translate-y-1">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={property.gallery?.photos[0]}
              alt={property.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-800 backdrop-blur">
                {property.iWantTo}
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                {property.propertyType}
              </span>
            </div>

            {/* Actions */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full" onClick={handleLike}>
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
              <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex gap-4 text-white text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <Bed className="h-4 w-4" /> {property.bedrooms} BHK
                </span>
                <span className="flex items-center gap-1">
                  <Square className="h-4 w-4" /> {property.builtUpArea} sqft
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-5">
            <h3 className="mb-1 line-clamp-1 text-lg font-bold text-slate-900 group-hover:text-primary">
              {property.title}
            </h3>

            <p className="mb-4 flex items-center gap-1 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-primary" />
              {property.city}
            </p>

            <div className="flex items-center justify-between ">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Price</p>
                <p className="text-xl font-bold text-primary">{property.price}</p>
              </div>

              <Button className="rounded-xl px-5">View</Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
