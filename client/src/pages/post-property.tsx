import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, Home, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function PostProperty() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Property Posted Successfully!",
        description: "Your property is now live and visible to thousands of buyers.",
      });
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900">Post a Property</h1>
            <p className="text-slate-500 mt-2">Fill in the details to list your property on PropertyWorld</p>
          </div>

          <Card className="border-none shadow-xl">
            <CardHeader className="bg-slate-900 text-white rounded-t-xl p-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Property Details</CardTitle>
                  <CardDescription className="text-slate-400 mt-1">
                    Provide accurate information for better visibility
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Property Title</Label>
                      <Input id="title" placeholder="e.g. Luxury 3BHK in Worli" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Expected Price (₹)</Label>
                      <Input id="price" placeholder="e.g. 5.5 Cr" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                      <Label htmlFor="type">I want to</Label>
                      <Select defaultValue="sell">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Action" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sell">Sell</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select defaultValue="apartment">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">Independent House</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="plot">Plot / Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Location Details</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="e.g. Mumbai" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="locality">Locality / Area</Label>
                      <Input id="locality" placeholder="e.g. Andheri East" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="address">Full Address</Label>
                      <Textarea id="address" placeholder="Enter full address" />
                  </div>
                </div>

                {/* Features */}
                 <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Property Features</h3>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bhk">Bedrooms (BHK)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select BHK" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 BHK</SelectItem>
                          <SelectItem value="2">2 BHK</SelectItem>
                          <SelectItem value="3">3 BHK</SelectItem>
                          <SelectItem value="4">4+ BHK</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bathrooms">Bathrooms</Label>
                       <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Bathrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Built-up Area (sqft)</Label>
                      <Input id="area" placeholder="e.g. 1500" type="number" />
                    </div>
                  </div>
                   <div className="space-y-2">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea id="desc" placeholder="Describe your property..." className="h-32" required />
                  </div>
                </div>

                {/* Images */}
                 <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Photos</h3>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                       <Upload className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium text-slate-900">Click to upload photos</p>
                    <p className="text-sm text-slate-500 mt-1">or drag and drop here (Max 5MB)</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        Posting...
                      </span>
                    ) : (
                      "Post Property"
                    )}
                  </Button>
                </div>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
