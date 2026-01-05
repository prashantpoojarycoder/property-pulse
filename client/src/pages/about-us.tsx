import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";
import { Shield, Target, Users, Award, Building2, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-display mb-6"
            >
              India's Premier <span className="text-primary">Real Estate Marketplace</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
            >
              PropertyWorld.io is redefining how India searches for homes and commercial spaces through technology, trust, and transparency.
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 font-display">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To become the most trusted and efficient real estate platform in India, enabling every citizen to find their perfect space with zero friction. Inspired by the legacy of platforms like 99acres, we aim to elevate the experience through modern UI and AI-driven insights.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-slate-700">Verified Listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-bold text-slate-700">Expert Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Office" 
                className="rounded-[2.5rem] shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Active Listings", value: "50,000+" },
                { label: "Cities Covered", value: "12+" },
                { label: "Happy Clients", value: "100k+" },
                { label: "Trust Score", value: "4.9/5" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Powered by Innovation</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
              We are a team of tech visionaries and real estate veterans committed to making the Indian property market more accessible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Our AI helps you find properties that match your lifestyle, not just your budget." },
              { icon: Users, title: "Community", desc: "Join a network of thousands of premium sellers and buyers across Mumbai and beyond." },
              { icon: Shield, title: "Security", desc: "Every transaction and listing is monitored for quality and authenticity." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
