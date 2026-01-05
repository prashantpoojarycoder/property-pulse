import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, Send } from "lucide-react";

export default function CustomerCare() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919076166660", "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 font-display">Customer Care</h1>
              <p className="text-slate-500 mt-4 font-medium">We're here to help you find your dream space. Talk to our specialists live.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="md:col-span-1 space-y-6">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Call Us</h3>
                      <p className="text-sm text-slate-500">+91 9076166660</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email Us</h3>
                      <p className="text-sm text-slate-500">support@propertyworld.io</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat / WhatsApp Box */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                  <div className="bg-primary p-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold">Live Support</h3>
                        <p className="text-xs text-white/70">Typical response: 5 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider">Online</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-slate-100">
                        <p className="text-sm text-slate-700">Namaste! How can we assist you with your property search today?</p>
                      </div>
                    </div>

                    <div className="pt-4 space-y-4">
                      <Input placeholder="Your Name" className="h-12 rounded-xl border-slate-100" />
                      <Textarea placeholder="How can we help?" className="h-32 rounded-xl border-slate-100 resize-none" />
                      <Button 
                        onClick={handleWhatsApp}
                        className="w-full h-14 rounded-2xl glow-primary font-bold text-lg gap-3"
                      >
                        <Send className="h-5 w-5" />
                        Chat on WhatsApp
                      </Button>
                      <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
                        Direct connection to our Mumbai Support Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
