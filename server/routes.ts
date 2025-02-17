import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { websiteSchema } from "@shared/schema";
import { summarizeWebsite } from "./api/openai";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for website summarization
  app.post("/api/summarize", async (req, res) => {
    try {
      const validation = websiteSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid input",
          errors: validation.error.format() 
        });
      }
      
      const { url, model } = validation.data;
      
      // Check if we need to prepend https:// if not present
      const fullUrl = url.startsWith("http") ? url : `https://${url}`;
      
      // Generate summary using OpenAI
      const summary = await summarizeWebsite(fullUrl, model);
      
      // Store the summary
      const timestamp = new Date().toISOString();
      const savedSummary = await storage.createSummary({
        url: fullUrl,
        model,
        content: summary,
        timestamp
      });
      
      res.status(200).json({ 
        id: savedSummary.id,
        url: savedSummary.url,
        model: savedSummary.model, 
        content: savedSummary.content,
        timestamp: savedSummary.timestamp
      });
    } catch (error) {
      console.error("Error summarizing website:", error);
      res.status(500).json({ 
        message: "Failed to summarize website", 
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // API route for newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email, consent } = req.body;
      
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.status(409).json({ message: "You're already subscribed!" });
      }

      // Store the subscriber
      const timestamp = new Date().toISOString();
      const subscriber = await storage.createSubscriber({
        email,
        consent: !!consent,
        timestamp
      });
      
      res.status(200).json({ 
        id: subscriber.id,
        email: subscriber.email,
        message: "Successfully subscribed to the newsletter!" 
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      res.status(500).json({ 
        message: "Failed to subscribe", 
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // API route to get summary by ID
  app.get("/api/summary/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid summary ID" });
      }

      const summary = await storage.getSummary(id);
      if (!summary) {
        return res.status(404).json({ message: "Summary not found" });
      }

      res.status(200).json(summary);
    } catch (error) {
      console.error("Error getting summary:", error);
      res.status(500).json({ 
        message: "Failed to fetch summary", 
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
