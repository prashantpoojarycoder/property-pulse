import { Link, useLocation } from "wouter";
import { Building2, Menu, LogIn, PlusCircle, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect auth
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setLocation("/auth");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Properties" },
    ...(isLoggedIn ? [{ href: "/dashboard", label: "Dashboard" }] : []),
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Building2 className="h-6 w-6 text-primary" />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
          >
            PropertyWorld<span className="text-primary">.io</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-primary"
                  : isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Link href="/post-property">
            <Button
              variant={isScrolled ? "outline" : "secondary"}
              className={!isScrolled ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : ""}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Post Property
            </Button>
          </Link> */}

          {!isLoggedIn ? (
            <Link href="/auth">
              <Button className={!isScrolled ? "bg-white text-primary hover:bg-white/90" : ""}>
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          ) : (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-red-500 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isScrolled
                    ? "text-slate-900 hover:bg-slate-100"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link href="/post-property">
                  <Button variant="outline" className="w-full gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Post Property
                  </Button>
                </Link>

                {!isLoggedIn ? (
                  <Link href="/auth">
                    <Button className="w-full gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={handleLogout}
                    className="w-full gap-2 text-red-500"
                    variant="ghost"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
