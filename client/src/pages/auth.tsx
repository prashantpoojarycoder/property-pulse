import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Building2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Auth() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate interactive login
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to PropertyWorld.io",
      });
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="w-full max-w-md shadow-2xl border-none rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="space-y-1 text-center pb-8 pt-10 px-10">
              <div className="mx-auto bg-primary/10 p-4 rounded-2xl w-fit mb-6 animate-pulse">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-display">Unlock Premium Properties</CardTitle>
              <CardDescription className="text-slate-500 font-medium">
                Mumbai's elite real estate network awaits you.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-100/50 p-1.5 rounded-2xl h-14">
                  <TabsTrigger value="login" className="rounded-xl font-bold tracking-wider uppercase text-xs">Login</TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-xl font-bold tracking-wider uppercase text-xs">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold text-slate-700 text-xs uppercase tracking-widest">Business Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="m@wowbro.com" 
                        className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="font-bold text-slate-700 text-xs uppercase tracking-widest">Password</Label>
                        <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        className="h-12 rounded-xl bg-slate-50 border-slate-100 focus:bg-white transition-all" 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg rounded-2xl glow-primary font-bold shadow-xl active:scale-95 transition-all" disabled={isSubmitting}>
                      {isSubmitting ? "Authenticating..." : "Sign In"}
                    </Button>
                    
                    <div className="relative my-8">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-100" />
                      </div>
                      <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        <span className="bg-white px-4">Social Connect</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" type="button" className="rounded-xl h-12 border-slate-100 hover:bg-slate-50 font-bold">Google</Button>
                      <Button variant="outline" type="button" className="rounded-xl h-12 border-slate-100 hover:bg-slate-50 font-bold">LinkedIn</Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                   <form onSubmit={handleLogin} className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" className="h-11 rounded-xl" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" className="h-11 rounded-xl" required />
                        </div>
                     </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-signup">Email</Label>
                      <Input id="email-signup" type="email" className="h-11 rounded-xl" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-signup">Create Password</Label>
                      <Input id="password-signup" type="password" className="h-11 rounded-xl" required />
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg rounded-2xl font-bold glow-primary mt-4">
                      Join the Network <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
