import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";
import RedirectHandler from "@/components/RedirectHandler";
import ProtectedRoute from "@/components/ProtectedRoute";

// Lazy load legal and pricing pages
const Pricing = lazy(() => import("@/pages/Pricing"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const OurMission = lazy(() => import("@/pages/OurMission"));
const ThumbnailPage = lazy(() => import("@/pages/ThumbnailPage"));

// Lazy load admin pages
const AdminLayout = lazy(() => import("@/pages/admin/AdminLayout"));
const Dashboard = lazy(() => import("@/pages/admin/Dashboard"));
const Content = lazy(() => import("@/pages/admin/Content"));
const Settings = lazy(() => import("@/pages/admin/Settings"));

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
      <Route path="/thumbnail">
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <ThumbnailPage />
        </Suspense>
      </Route>
      
      {/* Login */}
      <Route path="/login" component={Login} />
      
      {/* Admin Routes - Protected */}
      <Route path="/admin">
        <ProtectedRoute>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </Suspense>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/content">
        <ProtectedRoute>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
            <AdminLayout>
              <Content />
            </AdminLayout>
          </Suspense>
        </ProtectedRoute>
      </Route>
      <Route path="/admin/settings">
        <ProtectedRoute>
          <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
            <AdminLayout>
              <Settings />
            </AdminLayout>
          </Suspense>
        </ProtectedRoute>
      </Route>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <RedirectHandler>
              <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
                <Toaster />
                <Router />
              </Suspense>
            </RedirectHandler>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
