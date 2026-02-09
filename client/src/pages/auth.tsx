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
import { login, register } from "@/lib/api";

export default function Auth() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await login(email, password);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      toast({ title: "Login Successful", description: "Welcome back!" });
      setLocation("/dashboard");
    } catch (err: any) {
      toast({ title: "Login Failed", description: err.message || "Invalid credentials", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const res = await register({
        firstName,
        lastName,
        email: signupEmail,
        password: signupPassword,
      });

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      toast({ title: "Account Created", description: "Welcome aboard!" });
      setLocation("/dashboard");
    } catch (err: any) {
      toast({ title: "Signup Failed", description: err.message || "Something went wrong", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 flex items-center justify-center py-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-md shadow-2xl border-none rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="space-y-1 text-center pb-8 pt-10 px-10">
              <div className="mx-auto bg-primary/10 p-4 rounded-2xl w-fit mb-6 animate-pulse">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-display">Unlock Premium Properties</CardTitle>
              <CardDescription>Mumbai's elite real estate network awaits you.</CardDescription>
            </CardHeader>

            <CardContent className="px-10 pb-10">
              <Tabs defaultValue="login">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Authenticating..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                      <Input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <Input placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
                    <Input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
                    <Button type="submit" className="w-full">
                      Join the Network <ArrowRight className="ml-2 h-4 w-4" />
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
