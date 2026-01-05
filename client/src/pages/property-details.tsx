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
  Calendar,
  CheckCircle2,
  ChevronLeft
} from "lucide-react";
import { useRoute, useLocation } from "wouter";
import { mockProperties } from "@/lib/mockData";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyDetails() {
  const [, params] = useRoute("/property/:id");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const id = params?.id ? parseInt(params.id) : 1;
  const property = mockProperties.find(p => p.id === id) || mockProperties[0];
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent!",
      description: `Your interest in ${property.title} has been shared with the owner.`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Share this property with your friends!",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Sticky Action Bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-100 pt-20 pb-4 sticky top-0 z-40">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setLocation("/listings")}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-950 font-display">{property.title}</h1>
              <p className="text-slate-500 text-xs flex items-center gap-1 font-medium">
                <MapPin className="h-3 w-3 text-primary" /> {property.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="mr-auto md:mr-6">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Asking Price</p>
              <p className="text-2xl font-bold text-primary">{property.price}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-slate-200" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className={`rounded-full h-10 w-10 border-slate-200 transition-colors ${isLiked ? 'text-red-500 bg-red-50 border-red-100' : ''}`}
                onClick={() => {
                  setIsLiked(!isLiked);
                  toast({ title: isLiked ? "Removed from Wishlist" : "Saved to Wishlist" });
                }}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <Button className="rounded-xl px-6 h-10 font-bold hidden md:flex" onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 relative group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={property.images[activeImage] || property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 glass p-2 rounded-full">
                   {(property.images.length ? property.images : [property.image]).map((_, idx) => (
                     <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${activeImage === idx ? 'bg-primary w-8' : 'bg-slate-300'}`}
                     />
                   ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { icon: Bed, label: "Bedrooms", value: property.bhk + " BHK" },
                 { icon: Bath, label: "Bathrooms", value: "3 Baths" },
                 { icon: Square, label: "Total Area", value: property.area },
                 { icon: CheckCircle2, label: "Possession", value: "Ready" }
               ].map((stat, i) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 text-center space-y-2 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                   <stat.icon className="h-6 w-6 text-primary mx-auto" />
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{stat.label}</p>
                   <p className="font-bold text-slate-900">{stat.value}</p>
                 </motion.div>
               ))}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-display">Property Overview</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {property.description}
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Experience a lifestyle beyond ordinary. This property represents the pinnacle of Mumbai real estate, combining world-class architecture with an address that speaks for itself.
                </p>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold font-display">Exclusive Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.amenities.map((amenity, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    key={idx} 
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Enquiry */}
          <div className="lg:col-span-1">
            <div id="enquiry-form" className="bg-slate-950 p-8 rounded-[3rem] shadow-2xl sticky top-40 text-white overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="h-14 w-14 bg-primary/20 rounded-2xl overflow-hidden p-1 border border-white/10">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${property.owner}`} 
                      alt="Owner" 
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Managed by</p>
                    <p className="font-bold text-lg text-white">{property.owner}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-2xl font-display">Schedule a Viewing</h3>
                  <p className="text-slate-400 text-sm">Experience this masterpiece in person. We'll arrange a private tour at your convenience.</p>
                </div>

                <form className="space-y-4" onSubmit={handleEnquiry}>
                  <Input 
                    placeholder="Full Name" 
                    className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-primary text-white placeholder:text-slate-500" 
                    required
                  />
                  <Input 
                    placeholder="Mobile Number (+91)" 
                    className="bg-white/5 border-white/10 h-12 rounded-xl focus:ring-primary text-white placeholder:text-slate-500" 
                    required
                  />
                  <Textarea 
                    placeholder="Personal message (optional)" 
                    className="bg-white/5 border-white/10 rounded-xl focus:ring-primary text-white placeholder:text-slate-500 h-28 resize-none" 
                  />
                  <Button type="submit" className="w-full text-lg h-14 rounded-2xl glow-primary font-bold active:scale-95 transition-all">
                    Request Private Tour
                  </Button>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-white h-12 font-bold">
                      <Phone className="h-4 w-4 mr-2 text-primary" /> Call
                    </Button>
                    <Button variant="outline" className="flex-1 bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-white h-12 font-bold">
                      <Mail className="h-4 w-4 mr-2 text-accent" /> Email
                    </Button>
                  </div>
                </form>
                
                <p className="text-[10px] text-center text-slate-500">
                  By clicking "Request Private Tour", you agree to our <a href="#" className="underline">Terms of Service</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
