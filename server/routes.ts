import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated, isAdmin } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware - from blueprint:javascript_log_in_with_replit
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Admin routes - restricted to @4geeks.com and @learnpack.co domains
  app.get('/api/admin/check', isAdmin, async (req: any, res) => {
    res.json({ 
      isAdmin: true,
      email: req.user.claims.email 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
