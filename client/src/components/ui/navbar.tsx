import { Link, useLocation } from "wouter";
import { Building2, Menu, X, User, LogIn, PlusCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Properties" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <span className={`text-xl font-bold font-display tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            PropertyWorld<span className="text-primary">.io</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === link.href
                  ? "text-primary"
                  : isScrolled
                  ? "text-muted-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/post-property">
            <Button
              variant={isScrolled ? "outline" : "secondary"}
              className={`gap-2 cursor-pointer ${!isScrolled && "bg-white/10 text-white hover:bg-white/20 border-white/20"}`}
            >
              <PlusCircle className="h-4 w-4" />
              Post Property
            </Button>
          </Link>
          <Link href="/auth">
            <Button className={`cursor-pointer ${!isScrolled && "bg-white text-primary hover:bg-white/90"}`}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`text-lg font-medium cursor-pointer ${
                        location === link.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <Link href="/post-property">
                    <Button className="w-full gap-2" variant="outline">
                      <PlusCircle className="h-4 w-4" />
                      Post Property
                    </Button>
                  </Link>
                  <Link href="/auth">
                    <Button className="w-full gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
