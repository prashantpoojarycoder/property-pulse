import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Shortlisted() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24">
        <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors cursor-pointer w-fit">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <div className="max-w-4xl mx-auto text-center py-20 space-y-6 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
            <Heart className="h-10 w-10 text-slate-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 font-display">Your Wishlist is Empty</h1>
          <p className="text-slate-500 max-w-md mx-auto">Shortlist properties you love to compare them easily and stay updated on price drops.</p>
          <Link href="/listings">
            <Button className="rounded-xl px-8 h-12 glow-primary">Find Your Favorites</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
