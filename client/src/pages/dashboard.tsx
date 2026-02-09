import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyCard } from "@/components/property-card";
import { LayoutDashboard, PlusCircle, LogOut, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getProperties } from "@/lib/api";

type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [properties, setProperties] = useState<any[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async (pageNo: number) => {
    try {
      setLoading(true);

      const res = await getProperties({
        page: pageNo,
        limit: 10,
      });

      setProperties(res.data);
      setPagination(res.pagination);
    } catch (err: any) {
      toast({
        title: "Failed to load properties",
        description: err?.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(page);
  }, [page]);

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
              <p className="font-bold text-slate-900">My Account</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">
                Dashboard
              </p>
            </div>

            <nav className="space-y-1">
              <Button
                variant="secondary"
                className="w-full justify-start gap-3 bg-white hover:bg-slate-100 shadow-sm border border-slate-200"
              >
                <LayoutDashboard className="h-4 w-4" /> My Properties
              </Button>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 font-bold"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setLocation("/auth");
                  }}
                >
                  <LogOut className="h-4 w-4" /> Logout
                </Button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Properties</h1>
              <Link href="/post-property">
                <Button className="gap-2 cursor-pointer">
                  <PlusCircle className="h-4 w-4" /> Post New Property
                </Button>
              </Link>
            </div>

            {/* Loading */}
            {loading && (
              <div className="text-center py-12 text-slate-500">
                Loading properties...
              </div>
            )}

            {/* Empty */}
            {!loading && properties.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No properties found.
              </div>
            )}

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            {pagination && (
              <div className="flex justify-between items-center pt-6">
                <Button
                  variant="outline"
                  disabled={!pagination.hasPrevPage}
                  onClick={() => setPage((p) => p - 1)}
                >
                  Previous
                </Button>

                <span className="text-sm text-slate-500">
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                <Button
                  variant="outline"
                  disabled={!pagination.hasNextPage}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
