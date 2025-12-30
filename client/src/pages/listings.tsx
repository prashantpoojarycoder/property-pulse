import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { mockProperties } from "@/lib/mockData";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import { useState } from "react";

export default function Listings() {
  const [priceRange, setPriceRange] = useState([50]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-24 pb-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Property</h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Search by location, landmark..." 
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-primary"
              />
            </div>
            <Button className="h-12 px-8 text-lg bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" /> Filters
                </h3>
                <Button variant="link" className="text-primary p-0 h-auto">Clear All</Button>
              </div>

              {/* Property Type */}
              <div className="space-y-4">
                <h4 className="font-medium text-slate-900">Property Type</h4>
                <div className="space-y-2">
                  {["Apartment", "House", "Villa", "Plot", "Commercial"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 my-6" />

              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-slate-900">Price Range</h4>
                  <span className="text-sm text-primary font-bold">Max: ${priceRange[0] * 10}k</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-full"
                  onValueChange={setPriceRange}
                />
              </div>

              <div className="h-px bg-slate-100 my-6" />

              {/* BHK */}
              <div className="space-y-4">
                <h4 className="font-medium text-slate-900">Bedrooms (BHK)</h4>
                <div className="flex flex-wrap gap-2">
                  {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"].map((bhk) => (
                    <button
                      key={bhk}
                      className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:border-primary hover:text-primary transition-colors bg-white"
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 my-6" />
              
              <Button className="w-full">Apply Filters</Button>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-500">Showing <span className="font-bold text-slate-900">{mockProperties.length}</span> properties</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 hidden sm:inline">Sort by:</span>
                <Select defaultValue="relevant">
                  <SelectTrigger className="w-[180px] bg-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevant">Relevant</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            {/* Pagination Mock */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default" className="bg-primary">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
