import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { mockProperties, Property } from "@/lib/mockData";
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
import { useState, useMemo } from "react";

export default function Listings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([100]); // Max price in Cr (100 Cr)
  const [minArea, setMinArea] = useState<string>("");
  const [maxArea, setMaxArea] = useState<string>("");
  const [sortBy, setSortBy] = useState("relevant");

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(p => {
      const matchesSearch = p.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(p.propertyType);
      
      // Rough price comparison for mockup
      const priceInCr = p.type === "Buy" ? p.priceValue / 10000000 : 0;
      const matchesPrice = p.type === "Rent" || priceInCr <= priceRange[0];

      // Area filtering
      const propertyArea = parseInt(p.area.replace(/\D/g, ""));
      const matchesMinArea = !minArea || propertyArea >= parseInt(minArea);
      const matchesMaxArea = !maxArea || propertyArea <= parseInt(maxArea);
      
      return matchesSearch && matchesType && matchesPrice && matchesMinArea && matchesMaxArea;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.priceValue - b.priceValue;
      if (sortBy === "price-high") return b.priceValue - a.priceValue;
      return 0;
    });
  }, [searchQuery, selectedTypes, priceRange, sortBy]);

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 pt-24 pb-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">Mumbai Properties</h1>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input 
                placeholder="Search localities (Worli, Bandra, Andheri...)" 
                className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-primary rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 rounded-xl glow-primary">
              <Search className="h-5 w-5 mr-2" />
              Find Home
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2 font-display">
                  <SlidersHorizontal className="h-5 w-5" /> Filters
                </h3>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto font-bold text-xs uppercase tracking-wider"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTypes([]);
                    setPriceRange([100]);
                  }}
                >
                  Reset
                </Button>
              </div>

              {/* Property Type */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Property Type</h4>
                <div className="space-y-3">
                  {["Apartment", "House", "Villa", "Plot"].map((type) => (
                    <div key={type} className="flex items-center space-x-3">
                      <Checkbox 
                        id={type} 
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => toggleType(type)}
                        className="rounded-md border-slate-300"
                      />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 cursor-pointer"
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
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Max Price (Buy)</h4>
                  <span className="text-sm text-primary font-bold">₹{priceRange[0]} Cr</span>
                </div>
                <Slider
                  value={priceRange}
                  max={100}
                  step={1}
                  className="w-full"
                  onValueChange={setPriceRange}
                />
              </div>

              <div className="h-px bg-slate-100 my-6" />

              {/* Area Range */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Area (sqft)</h4>
                <div className="flex gap-2">
                  <Input 
                    type="number" 
                    placeholder="Min Area" 
                    className="h-10 rounded-xl bg-slate-50 border-none text-xs"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                  />
                  <Input 
                    type="number" 
                    placeholder="Max Area" 
                    className="h-10 rounded-xl bg-slate-50 border-none text-xs"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                  />
                </div>
              </div>

              <div className="h-px bg-slate-100 my-6" />

              {/* BHK */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">BHK Type</h4>
                <div className="flex flex-wrap gap-2">
                  {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"].map((bhk) => (
                    <button
                      key={bhk}
                      className="px-4 py-2 text-xs font-bold border border-slate-100 rounded-xl hover:border-primary hover:text-primary transition-all bg-slate-50 active:scale-95"
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-slate-500 font-medium">Found <span className="font-bold text-slate-900">{filteredProperties.length}</span> luxury properties</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline">Sort:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px] bg-slate-50 border-none rounded-xl font-bold text-xs uppercase tracking-wider h-10">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-100">
                    <SelectItem value="relevant">Relevant</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center space-y-4 bg-white rounded-[2rem] border border-dashed border-slate-300">
                  <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <Search className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No properties found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search area</p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery("");
                    setSelectedTypes([]);
                    setPriceRange([100]);
                  }}>Clear all filters</Button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
