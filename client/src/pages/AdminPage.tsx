import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, LogOut, AlertCircle } from "lucide-react";

export default function AdminPage() {
  const { toast } = useToast();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { isAdmin, email, isLoading: adminLoading, error } = useAdmin();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please log in with your 4Geeks or LearnPack Google account",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, authLoading, toast]);

  // Show error if forbidden (not admin)
  useEffect(() => {
    if (error && !adminLoading) {
      toast({
        title: "Access Denied",
        description: "Admin access restricted to @4geeks.com and @learnpack.co email addresses",
        variant: "destructive",
      });
    }
  }, [error, adminLoading, toast]);

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  if (authLoading || adminLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex items-center gap-2 text-destructive mb-2">
              <AlertCircle className="h-6 w-6" />
              <CardTitle>Access Denied</CardTitle>
            </div>
            <CardDescription>
              Admin access is restricted to team members with @4geeks.com or @learnpack.co email addresses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                You are currently logged in as: <span className="font-medium text-foreground">{email || user?.email}</span>
              </p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleLogout} className="flex-1">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
                <Button onClick={() => window.location.href = "/"} className="flex-1">
                  Go Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <Button variant="outline" onClick={handleLogout} data-testid="button-logout">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, Admin</CardTitle>
              <CardDescription>
                You are logged in as {email}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">User Information</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Email:</span> {user?.email}</p>
                    <p><span className="text-muted-foreground">Name:</span> {user?.firstName} {user?.lastName}</p>
                    <p><span className="text-muted-foreground">User ID:</span> {user?.id}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    This admin panel is accessible only to team members with @4geeks.com or @learnpack.co email addresses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Admin Features</CardTitle>
              <CardDescription>
                Manage your LearnPack website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Admin features will be added here. This is a protected area that requires team authentication.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
