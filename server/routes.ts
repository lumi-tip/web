import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { randomUUID } from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication endpoints
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      // TODO: Implement actual BreathCode API authentication
      // For now, we'll use a mock implementation
      const user = await storage.getUserByUsername(email);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate a mock token (in production, this would come from BreathCode API)
      const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

      res.json({ 
        success: true, 
        token,
        user: { 
          id: user.id, 
          email: user.username 
        } 
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/auth/signup", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByUsername(email);
      if (existingUser) {
        return res.status(409).json({ error: "User already exists" });
      }

      // Create new user
      const user = await storage.createUser({
        username: email,
        password, // In production, password should be hashed
      });

      // Generate a mock token (in production, this would come from BreathCode API)
      const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64');

      res.json({ 
        success: true, 
        token,
        user: { 
          id: user.id, 
          email: user.username 
        } 
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
