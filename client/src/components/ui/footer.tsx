import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                PropertyWorld<span className="text-primary">.io</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's most innovative marketplace for premium real estate. We combine cutting-edge technology with deep market expertise to find your perfect space.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {["Home", "Properties", "Post Property", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Post Property" ? "/post-property" : "#"} className="text-slate-400 hover:text-primary transition-colors text-sm cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Top Indian Cities</h3>
            <ul className="space-y-2">
              {["Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad", "Chennai"].map((item) => (
                <li key={item}>
                  <Link href="/listings" className="text-slate-400 hover:text-primary transition-colors text-sm cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>G-15, Nilkanth Udyog Bhavan,<br />Andheri(E), Mumbai.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 9076166660</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="break-all">wowbrosoftware@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PropertyWorld.io by WowBro Software. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <Link key={i} href="/dashboard" className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
