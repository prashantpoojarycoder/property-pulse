import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Search, MapPin, ArrowRight, Sparkles, Home as HomeIcon, Shield, Zap, Award, BadgeCheck } from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_home_exterior_twilight.png";
import { mockProperties } from "@/lib/mockData";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState } from "react";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const [activeCity, setActiveCity] = useState("mum");

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const localitiesByCity: Record<string, string[]> = {
    mum: ["Worli", "Bandra West", "Juhu", "Powai", "Andheri East", "Colaba", "Lower Parel"],
    del: ["Vasant Vihar", "Golf Links", "Greater Kailash", "DLF Phase 5", "Chanakyapuri"],
    blr: ["Indiranagar", "Koramangala", "Whitefield", "Jayanagar", "HSR Layout"],
    pun: ["Koregaon Park", "Baner", "Kalyani Nagar", "Hinjewadi"],
    hyd: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "HITEC City"],
    che: ["Adyar", "Besant Nagar", "Anna Nagar", "Mylapore"],
    goa: ["Anjuna", "Panjim", "Calangute", "Assagao"]
  };

  const suggestedProperties = [
    { title: "1 BHK - Pune", price: "₹45 Lakh", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400" },
    { title: "Office - Bengaluru", price: "₹1.2 Cr", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" },
    { title: "Villa - Goa", price: "₹2.5 Cr", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400" },
    { title: "Penthouse - Mumbai", price: "₹12 Cr", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400" },
    { title: "Studio - Hyderabad", price: "₹85 Lakh", image: "https://images.unsplash.com/photo-1536376074432-834fa5725800?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src={heroImage} 
            alt="Modern Luxury Home" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6 uppercase tracking-widest">
              <Sparkles className="h-3 w-3 text-accent" />
              India's Most Trusted Network
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
              The Gold Standard <br />
              <span className="text-gradient">Real Estate.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Elevating the Indian property experience through innovation, 
              transparency, and bespoke luxury services.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-5xl mx-auto glass p-2 rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <Tabs defaultValue="buy" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
                <div className="flex gap-2">
                  <TabsList className="bg-slate-100/80 rounded-full h-10 p-1">
                    <TabsTrigger value="buy" className="rounded-full px-6 text-[10px] uppercase font-bold tracking-wider">Buy</TabsTrigger>
                    <TabsTrigger value="rent" className="rounded-full px-6 text-[10px] uppercase font-bold tracking-wider">Rent</TabsTrigger>
                  </TabsList>
                  
                  <Tabs defaultValue="residential" className="w-auto">
                    <TabsList className="bg-slate-100/80 rounded-full h-10 p-1">
                      <TabsTrigger value="residential" className="rounded-full px-4 text-[10px] uppercase font-bold tracking-wider">Residential</TabsTrigger>
                      <TabsTrigger value="commercial" className="rounded-full px-4 text-[10px] uppercase font-bold tracking-wider">Commercial</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <div className="hidden md:flex gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  <span>Mumbai</span>
                  <span>Delhi</span>
                  <span>Bangalore</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
                <div className="md:col-span-1">
                  <Select onValueChange={(val) => setActiveCity(val)} defaultValue="mum">
                    <SelectTrigger className="w-full h-14 bg-white/50 border-none rounded-2xl focus:ring-2 ring-primary/20">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <SelectValue placeholder="City" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mum">Mumbai</SelectItem>
                      <SelectItem value="del">Delhi NCR</SelectItem>
                      <SelectItem value="blr">Bangalore</SelectItem>
                      <SelectItem value="pun">Pune</SelectItem>
                      <SelectItem value="hyd">Hyderabad</SelectItem>
                      <SelectItem value="che">Chennai</SelectItem>
                      <SelectItem value="goa">Goa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-1">
                  <Select>
                    <SelectTrigger className="w-full h-14 bg-white border-none rounded-2xl focus:ring-2 ring-primary/20">
                      <SelectValue placeholder="Locality" />
                    </SelectTrigger>
                    <SelectContent>
                      {localitiesByCity[activeCity]?.map(loc => (
                        <SelectItem key={loc} value={loc.toLowerCase()}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1">
                   <Select>
                    <SelectTrigger className="w-full h-14 bg-white/50 border-none rounded-2xl focus:ring-2 ring-primary/20">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50l">Under ₹50 Lakh</SelectItem>
                      <SelectItem value="50-75l">₹50L - ₹75L</SelectItem>
                      <SelectItem value="75l-1c">₹75L - ₹1 Cr</SelectItem>
                      <SelectItem value="1-2c">₹1 Cr - ₹2 Cr</SelectItem>
                      <SelectItem value="2-5c">₹2 Cr - ₹5 Cr</SelectItem>
                      <SelectItem value="5-10c">₹5 Cr - ₹10 Cr</SelectItem>
                      <SelectItem value="above-10c">Above ₹10 Cr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1">
                  <Link 
                    href="/listings" 
                    className={cn(buttonVariants({ variant: "default" }), "w-full h-14 text-lg rounded-2xl glow-primary bg-primary hover:bg-primary/90 transition-all active:scale-95")}
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Link>
                </div>
              </div>
            </Tabs>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Us / Value Props */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">About PropertyWorld</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                  Redefining Indian Real Estate with <span className="text-gradient">Visionary Technology.</span>
                </h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Born from a passion for simplifying the complex Indian property market, PropertyWorld.io isn't just a portal—it's your strategic partner. We leverage advanced analytics and immersive visual technologies to bring you a curated selection of India's finest addresses. From the heritage bungalows of Pondicherry to the soaring skyscrapers of Worli, we bridge the gap between your aspirations and your next home.
              </p>
              
              {/* Certificates Section */}
              <div className="pt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" /> Our Accreditations
                </h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-bold text-slate-700">RERA Registered</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-bold text-slate-700">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-bold text-slate-700">NAR-INDIA Member</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-slate-900">Verified Listings</h4>
                  <p className="text-sm text-slate-500">Every property undergoes a rigorous 24-point check.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-slate-900">Instant Access</h4>
                  <p className="text-sm text-slate-500">Connect with owners and agents in real-time.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2">
                 <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000" alt="Indian Luxury Property" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl hidden md:block max-w-[280px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">99%</div>
                  <p className="font-bold text-slate-900 leading-tight">Customer Satisfaction Rate</p>
                </div>
                <p className="text-xs text-slate-500">Trusted by over 50,000 families across 12 major Indian cities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Section Integration */}
      <section id="privacy" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
           <h2 className="text-3xl font-bold font-display">Your Privacy, Our Priority</h2>
           <p className="text-slate-600 leading-relaxed italic">
             "PropertyWorld.io respects your privacy. We collect user information such as name, contact details, and property preferences only to provide better services. Data is not sold to third parties. This platform complies with Indian IT laws and data protection guidelines."
           </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Curated Selections</h2>
              <h3 className="text-4xl font-bold text-slate-900">Premium <span className="text-gradient">Properties.</span></h3>
            </motion.div>
            <Link 
              href="/listings" 
              className={cn(buttonVariants({ variant: "ghost" }), "text-primary hover:text-primary/80 gap-2 group font-bold tracking-wider")}
            >
              EXPLORE COLLECTION
              <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mockProperties.slice(0, 3).map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/property/${property.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2rem] bg-white">
                    <div className="relative h-72 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6 flex gap-2">
                        <span className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                          {property.type}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                        {property.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-6 flex items-center gap-1 font-medium">
                        <MapPin className="h-4 w-4 text-primary" />
                        {property.location}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <p className="text-2xl font-bold text-primary">{property.price}</p>
                        <div className="flex items-center gap-2">
                           <div className="h-10 w-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-colors">
                              <ArrowRight className="h-5 w-5" />
                           </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Properties Slider (Embla) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold font-display">Suggested Properties</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={scrollPrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {suggestedProperties.map((p, i) => (
                <div key={i} className="embla__slide min-w-[300px] md:min-w-[350px] bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer group flex-shrink-0">
                  <div className="h-48 rounded-2xl overflow-hidden mb-6 bg-slate-200">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 font-display">{p.title}</h4>
                  <p className="text-primary font-bold text-xl mt-2">{p.price}</p>
                  <Button variant="ghost" className="mt-6 w-full rounded-xl border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-slate-950 rounded-[3rem] p-10 md:p-20 relative overflow-hidden"
          >
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                List your property on India's <span className="text-gradient">finest network.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light">
                Join thousands of premium sellers and experience a 3x higher conversion rate with our AI-driven discovery engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/post-property" className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 text-lg rounded-2xl glow-primary shadow-2xl")}>
                  Get Started Today
                </Link>
                <Link href="/auth" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-16 px-10 text-lg rounded-2xl border-white/10 text-white hover:bg-white/5")}>
                  Talk to an Expert
                </Link>
              </div>
            </div>
            
            {/* Background Animations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const ChevronLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);
