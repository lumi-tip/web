import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import RedirectHandler from "@/components/RedirectHandler";

// Lazy load legal and pricing pages
const Pricing = lazy(() => import("@/pages/Pricing"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const OurMission = lazy(() => import("@/pages/OurMission"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing">
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <Pricing />
        </Suspense>
      </Route>
      <Route path="/terms-and-conditions">
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <TermsAndConditions />
        </Suspense>
      </Route>
      <Route path="/privacy-policy">
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <PrivacyPolicy />
        </Suspense>
      </Route>
      <Route path="/our-mission">
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <OurMission />
        </Suspense>
      </Route>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RedirectHandler>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
            <Toaster />
            <Router />
          </Suspense>
        </RedirectHandler>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
