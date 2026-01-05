import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Listings from "@/pages/listings";
import PropertyDetails from "@/pages/property-details";
import PostProperty from "@/pages/post-property";
import Auth from "@/pages/auth";
import Dashboard from "@/pages/dashboard";
import AboutUs from "@/pages/about-us";
import CustomerCare from "@/pages/customer-care";
import RecentlySearched from "@/pages/recently-searched";
import RecentlyViewed from "@/pages/recently-viewed";
import Shortlisted from "@/pages/shortlisted";
import Contacted from "@/pages/contacted";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/listings" component={Listings} />
      <Route path="/property/:id" component={PropertyDetails} />
      <Route path="/post-property" component={PostProperty} />
      <Route path="/auth" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/customer-care" component={CustomerCare} />
      <Route path="/recently-searched" component={RecentlySearched} />
      <Route path="/recently-viewed" component={RecentlyViewed} />
      <Route path="/shortlisted" component={Shortlisted} />
      <Route path="/contacted" component={Contacted} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
