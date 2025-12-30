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
  CheckCircle2
} from "lucide-react";
import { useRoute } from "wouter";
import { mockProperties } from "@/lib/mockData";
import { useState } from "react";

export default function PropertyDetails() {
  const [, params] = useRoute("/property/:id");
  const id = params?.id ? parseInt(params.id) : 1;
  const property = mockProperties.find(p => p.id === id) || mockProperties[0];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Breadcrumb / Title Bar */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{property.title}</h1>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="h-4 w-4" />
              {property.location}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-primary mr-4">{property.price}</p>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                <img 
                  src={property.images[activeImage] || property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {(property.images.length ? property.images : [property.image]).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <Card className="bg-white border-slate-100 shadow-sm">
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                   <Bed className="h-6 w-6 text-primary mb-2" />
                   <p className="text-sm text-slate-500">Bedrooms</p>
                   <p className="font-bold text-slate-900">{property.bhk}</p>
                 </CardContent>
               </Card>
               <Card className="bg-white border-slate-100 shadow-sm">
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                   <Bath className="h-6 w-6 text-primary mb-2" />
                   <p className="text-sm text-slate-500">Bathrooms</p>
                   <p className="font-bold text-slate-900">2</p>
                 </CardContent>
               </Card>
               <Card className="bg-white border-slate-100 shadow-sm">
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                   <Square className="h-6 w-6 text-primary mb-2" />
                   <p className="text-sm text-slate-500">Area</p>
                   <p className="font-bold text-slate-900">{property.area}</p>
                 </CardContent>
               </Card>
               <Card className="bg-white border-slate-100 shadow-sm">
                 <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                   <CheckCircle2 className="h-6 w-6 text-primary mb-2" />
                   <p className="text-sm text-slate-500">Status</p>
                   <p className="font-bold text-slate-900">Ready to Move</p>
                 </CardContent>
               </Card>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-4">About this property</h2>
              <p className="text-slate-600 leading-relaxed">
                {property.description}
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-32">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="h-14 w-14 bg-slate-200 rounded-full overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${property.owner}`} alt="Owner" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Listed by</p>
                  <p className="font-bold text-lg">{property.owner}</p>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4">Contact Owner</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Phone Number" />
                </div>
                <div>
                  <Input placeholder="Email Address" />
                </div>
                <div>
                  <Textarea placeholder="I'm interested in this property..." className="h-32" />
                </div>
                <Button className="w-full text-lg h-12">
                  Send Enquiry
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
