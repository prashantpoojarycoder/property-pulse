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
import { Upload, Home } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { createProperty } from "@/lib/api";

export default function PostProperty() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    title: "",
    price: "",
    iWantTo: "sell",
    propertyType: "apartment",
    city: "",
    locality: "",
    contact: "",
    email: "",
    fullAddress: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    photos: [] as string[],
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createProperty({
        title: form.title,
        price: form.price,
        iWantTo: form.iWantTo,
        propertyType: form.propertyType,
        city: form.city,
        locality: form.locality,
        contact: form.contact,
        email: form.email,
        fullAddress: form.fullAddress,
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        area: Number(form.area),
        description: form.description,
        photos: form.photos, // later you can connect image upload
      });

      toast({
        title: "Property Posted Successfully!",
        description: "Your property is now live and visible to thousands of buyers.",
      });

      setLocation("/dashboard");
    } catch (err: any) {
      toast({
        title: "Failed to post property",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                      <Input id="title" required onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Expected Price (₹)</Label>
                      <Input id="price" required onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>I want to</Label>
                      <Select defaultValue="sell" onValueChange={(v) => setForm({ ...form, iWantTo: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sell">Sell</SelectItem>
                          <SelectItem value="rent">Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Property Type</Label>
                      <Select defaultValue="apartment" onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
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
                    <Input id="city" placeholder="City" required onChange={handleChange} />
                    <Input id="locality" placeholder="Locality" required onChange={handleChange} />
                    <Input id="contact" placeholder="Contact No" required onChange={handleChange} />
                    <Input id="email" placeholder="Email" required onChange={handleChange} />
                  </div>
                  <Textarea id="fullAddress" placeholder="Full Address" required onChange={handleChange} />
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Property Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Select onValueChange={(v) => setForm({ ...form, bedrooms: v })}>
                      <SelectTrigger><SelectValue placeholder="Bedrooms" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 BHK</SelectItem>
                        <SelectItem value="2">2 BHK</SelectItem>
                        <SelectItem value="3">3 BHK</SelectItem>
                        <SelectItem value="4">4+ BHK</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select onValueChange={(v) => setForm({ ...form, bathrooms: v })}>
                      <SelectTrigger><SelectValue placeholder="Bathrooms" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input id="area" placeholder="Built-up Area" onChange={handleChange} />
                  </div>

                  <Textarea id="description" placeholder="Describe your property..." required onChange={handleChange} />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Posting..." : "Post Property"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
