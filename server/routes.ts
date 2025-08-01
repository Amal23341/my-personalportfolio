import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        company,
        service,
        budget,
        message,
        privacy
      } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !message || !privacy) {
        return res.status(400).json({
          message: "Missing required fields"
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Invalid email format"
        });
      }

      // In a real application, you would:
      // 1. Save the contact form data to a database
      // 2. Send an email notification
      // 3. Send an auto-reply to the user
      
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        company,
        service,
        budget,
        message,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
