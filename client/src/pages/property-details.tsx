import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Share2, 
  Heart, 
  Phone, 
  Mail, 
  ChevronLeft
} from "lucide-react";
import { useRoute, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { getPropertyById } from "@/lib/api";

export default function PropertyDetails() {
  const [, params] = useRoute("/property/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!params?.id) return;

    (async () => {
      try {
        const res = await getPropertyById(params.id);
        setProperty(res);
      } catch (err) {
        toast({ title: "Failed to load property" });
      } finally {
        setLoading(false);
      }
    })();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading property...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Property not found
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link Copied" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Sticky Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b pt-20 pb-4 sticky top-0 z-40">
        <div className="container mx-auto px-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/listings")}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{property.title}</h1>
              <p className="text-slate-500 text-xs flex items-center gap-1">
                <MapPin className="h-3 w-3 text-primary" /> {property.city}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="icon" variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className={isLiked ? "text-red-500 border-red-200 bg-red-50" : ""}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Gallery */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                src={property.gallery?.photos?.[activeImage]}
                className="w-full h-[500px] object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {property.gallery?.photos?.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(i)}
                className={`h-24 w-full object-cover rounded-xl cursor-pointer ${
                  activeImage === i ? "ring-2 ring-primary" : ""
                }`}
              />
            ))}
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold">Overview</h2>
              <p className="text-slate-600">{property.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Enquiry */}
        <div className="sticky top-32 bg-slate-950 p-6 rounded-3xl text-white space-y-4 h-fit">
          <h3 className="text-xl font-bold">Contact Owner</h3>
          <Input placeholder="Name" className="bg-white/10 border-white/10 text-white" />
          <Input placeholder="Phone" className="bg-white/10 border-white/10 text-white" />
          <Textarea placeholder="Message" className="bg-white/10 border-white/10 text-white" />
          <Button className="w-full">Send Enquiry</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
