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
import { Upload, Home, Image } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { createProperty } from "@/lib/api";

export default function PostProperty() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);


  const [form, setForm] = useState({
    title: "",
    price: "",
    iWantTo: "Sell",
    propertyType: "Apartment",
    commercialType: "Residential",
    city: "",
    locality: "",
    contact: "",
    email: "",
    fullAddress: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
    photos
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setForm({ ...form, photos: Array.from(e.target.files) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fd = new FormData();

      fd.append("title", form.title);
      fd.append("price", String(form.price));
      fd.append("iWantTo", form.iWantTo);
      fd.append("propertyType", form.propertyType);
      fd.append("commercialType", form.commercialType);

      fd.append("city", form.city);
      fd.append("area", form.locality);
      fd.append("contactNumber", form.contact);
      fd.append("email", form.email);
      fd.append("fullAddress", form.fullAddress);

      fd.append("bedrooms", String(form.bedrooms));
      fd.append("bathrooms", String(form.bathrooms));
      fd.append("builtUpArea", String(form.area));
      fd.append("description", form.description);

      // ✅ append images
      for (const file of form.photos) {
        fd.append("photos", file);
      }

      await createProperty(fd);

      toast({
        title: "Property Posted Successfully!",
        description: "Your property is now live and visible to buyers.",
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
            <p className="text-slate-500 mt-2">
              Fill in the details to list your property
            </p>
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
                    Provide accurate information
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
                    <div>
                      <Label htmlFor="title">Property Title</Label>
                      <Input id="title" required onChange={handleChange} />
                    </div>

                    <div>
                      <Label htmlFor="price">Expected Price (₹)</Label>
                      <Input id="price" type="number" required onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>I want to</Label>
                      <Select defaultValue="Sell" onValueChange={(v) => setForm({ ...form, iWantTo: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sell">Sell</SelectItem>
                          <SelectItem value="Rent">Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Property Type</Label>
                      <Select defaultValue="Apartment" onValueChange={(v) => setForm({ ...form, propertyType: v })}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Independent House">Independent House</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
                          <SelectItem value="Plot/Land">Plot / Land</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Commercial Type</Label>
                      <Select defaultValue="Residential" onValueChange={(v) => setForm({ ...form, commercialType: v })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Commercial Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Residential">Residential</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Location</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input id="city" placeholder="City" required onChange={handleChange} />
                    <Input id="locality" placeholder="Locality" required onChange={handleChange} />
                    <Input id="contact" placeholder="Contact Number" required onChange={handleChange} />
                    <Input id="email" placeholder="Email" required onChange={handleChange} />
                  </div>
                  <Textarea id="fullAddress" placeholder="Full Address" required onChange={handleChange} />
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Features</h3>
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

                    <Input id="area" placeholder="Built-up Area (sq ft)" onChange={handleChange} />
                  </div>

                  <Textarea id="description" placeholder="Describe your property..." required onChange={handleChange} />
                </div>

                {/* Upload Images */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Upload Photos</h3>

                  <Label htmlFor="photos" className="cursor-pointer flex items-center gap-2 border border-dashed p-4 rounded-lg justify-center">
                    <Upload className="h-5 w-5" />
                    Upload Property Images
                  </Label>

                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) =>
                      setForm({ ...form, photos: Array.from(e.target.files || []) })
                    } />

                  {form.photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-3">
                      {form.photos.map((file, i) => (
                        <div key={i} className="text-sm text-slate-600 flex items-center gap-2">
                          <Image className="h-4 w-4" />
                          {file.name}
                        </div>
                      ))}
                    </div>
                  )}
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
