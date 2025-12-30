import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_luxury_home_exterior_twilight.png";
import { mockProperties } from "@/lib/mockData";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern Luxury Home" 
            className="w-full h-full object-cover animate-scale-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            Find Your <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Dream Home</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            The most seamless way to buy, sell, or rent luxury properties. 
            Experience the future of real estate today.
          </p>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl animate-fade-in-up delay-200">
            <Tabs defaultValue="buy" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-slate-100/50">
                  <TabsTrigger value="buy" className="px-8">Buy</TabsTrigger>
                  <TabsTrigger value="rent" className="px-8">Rent</TabsTrigger>
                  <TabsTrigger value="commercial" className="px-8">Commercial</TabsTrigger>
                </TabsList>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
                <div className="md:col-span-1">
                  <Select>
                    <SelectTrigger className="w-full h-12 border-slate-200">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <SelectValue placeholder="Location" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="la">Los Angeles</SelectItem>
                      <SelectItem value="ch">Chicago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-1">
                  <Select>
                    <SelectTrigger className="w-full h-12 border-slate-200">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apt">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1">
                   <Select>
                    <SelectTrigger className="w-full h-12 border-slate-200">
                      <SelectValue placeholder="Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-500">$100k - $500k</SelectItem>
                      <SelectItem value="500-1m">$500k - $1M</SelectItem>
                      <SelectItem value="1m+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-1">
                  <Link 
                    href="/listings" 
                    className={cn(buttonVariants({ variant: "default" }), "w-full h-12 text-lg shadow-lg shadow-primary/20")}
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Link>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
              <p className="text-slate-500">Handpicked exclusive properties just for you</p>
            </div>
            <Link 
              href="/listings" 
              className={cn(buttonVariants({ variant: "ghost" }), "text-primary hover:text-primary/80 gap-2 group")}
            >
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProperties.slice(0, 3).map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <Card className="group cursor-pointer overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-900">
                        {property.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                       <span className={cn(buttonVariants({ size: "sm" }), "w-full bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm")}>
                         View Details
                       </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {property.location}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <p className="text-xl font-bold text-primary">{property.price}</p>
                      <div className="text-sm text-slate-500">
                        {property.bhk} BHK • {property.area}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Post your property for <span className="text-primary">free</span> today
                </h2>
                <p className="text-slate-400 mb-8 text-lg">
                  List your property on PropertyWorld and reach millions of genuine buyers and tenants. 
                  Zero brokerage, instant connection.
                </p>
                <Link 
                  href="/post-property" 
                  className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg")}
                >
                  Post Property Now
                </Link>
              </div>
              <div className="relative h-[300px] bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-10 -right-10 bg-primary/20 w-40 h-40 rounded-full blur-3xl"></div>
                <div className="flex flex-col h-full justify-center items-center text-center">
                   <h3 className="text-5xl font-bold text-white mb-2">10k+</h3>
                   <p className="text-slate-400 mb-8">Properties Listed</p>
                   <h3 className="text-5xl font-bold text-white mb-2">5M+</h3>
                   <p className="text-slate-400">Monthly Visitors</p>
                </div>
              </div>
            </div>
            
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
