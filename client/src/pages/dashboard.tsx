import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PropertyCard } from "@/components/property-card";
import { mockProperties } from "@/lib/mockData";
import { LayoutDashboard, Home, Eye, MessageSquare, Settings, PlusCircle, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const myProperties = mockProperties.slice(0, 2);
  const isLoggedIn = false; // Mock state

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 space-y-2">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 text-center">
               <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mx-auto mb-4">
                 <User className="h-8 w-8" />
               </div>
               <p className="font-bold text-slate-900">Guest Account</p>
               <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">ID: PWG-{Math.floor(Math.random() * 90000) + 10000}</p>
               <Link href="/auth">
                 <Button className="w-full mt-4 h-9 text-xs rounded-lg" variant="default">Login to PropertyWorld</Button>
               </Link>
             </div>

             <nav className="space-y-1">
               <Button variant="secondary" className="w-full justify-start gap-3 bg-white hover:bg-slate-100 shadow-sm border border-slate-200">
                 <LayoutDashboard className="h-4 w-4" /> My Activity
               </Button>
               <Button variant="ghost" className="w-full justify-start gap-3">
                 <Search className="h-4 w-4" /> Recently Searched
               </Button>
               <Button variant="ghost" className="w-full justify-start gap-3">
                 <Eye className="h-4 w-4" /> Recently Viewed
               </Button>
               <Button variant="ghost" className="w-full justify-start gap-3">
                 <Heart className="h-4 w-4" /> Shortlisted
               </Button>
               <Button variant="ghost" className="w-full justify-start gap-3">
                 <MessageSquare className="h-4 w-4" /> Contacted <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full">0</span>
               </Button>
               
               <div className="pt-4 border-t border-slate-100 mt-4">
                 <Button 
                   variant="ghost" 
                   className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 font-bold" 
                   onClick={() => setLocation(isLoggedIn ? "/auth" : "/")}
                 >
                   <LogOut className="h-4 w-4" /> Logout
                 </Button>
               </div>
             </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              <Link href="/post-property">
                <Button className="gap-2 cursor-pointer">
                  <PlusCircle className="h-4 w-4" /> Post New Property
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-none shadow-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-blue-100 text-sm font-medium mb-1">Total Views</p>
                      <h3 className="text-3xl font-bold">1,234</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-blue-100">
                    <span className="text-white font-bold mr-1">+12%</span> from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                   <div className="flex justify-between items-start">
                    <div>
                      <p className="text-purple-100 text-sm font-medium mb-1">Total Enquiries</p>
                      <h3 className="text-3xl font-bold">45</h3>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                  </div>
                   <div className="mt-4 flex items-center text-xs text-purple-100">
                    <span className="text-white font-bold mr-1">+5</span> new today
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm bg-white">
                <CardContent className="p-6">
                   <div className="flex justify-between items-start">
                    <div>
                      <p className="text-slate-500 text-sm font-medium mb-1">Active Listings</p>
                      <h3 className="text-3xl font-bold text-slate-900">2</h3>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Home className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                   <div className="mt-4 flex items-center text-xs text-slate-500">
                    <Link href="/post-property" className="text-primary hover:underline cursor-pointer">Post another</Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Properties */}
            <div>
              <h2 className="text-xl font-bold mb-4">My Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myProperties.map((property) => (
                   <div key={property.id} className="relative group">
                     <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary" className="h-8 text-xs">Edit</Button>
                        <Button size="sm" variant="destructive" className="h-8 text-xs">Delete</Button>
                     </div>
                     <PropertyCard property={property} />
                   </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
