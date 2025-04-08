import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema, insertPhotoSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all photos
  app.get("/api/photos", async (_req, res) => {
    try {
      const photos = await storage.getAllPhotos();
      res.json(photos);
    } catch (error) {
      console.error("Error getting photos:", error);
      res.status(500).json({ message: "Error retrieving photos" });
    }
  });

  // Get photos by category
  app.get("/api/photos/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const photos = await storage.getPhotosByCategory(category);
      res.json(photos);
    } catch (error) {
      console.error("Error getting photos by category:", error);
      res.status(500).json({ message: "Error retrieving photos by category" });
    }
  });

  // Get photo by id
  app.get("/api/photos/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid photo ID" });
      }

      const photo = await storage.getPhoto(id);
      if (!photo) {
        return res.status(404).json({ message: "Photo not found" });
      }

      res.json(photo);
    } catch (error) {
      console.error("Error getting photo:", error);
      res.status(500).json({ message: "Error retrieving photo" });
    }
  });

  // Create a new contact message
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      console.error("Error creating message:", error);
      res.status(500).json({ message: "Error creating message" });
    }
  });

  // Add a new photo (this would typically be protected by authentication)
  app.post("/api/photos", async (req, res) => {
    try {
      const validatedData = insertPhotoSchema.parse(req.body);
      const photo = await storage.createPhoto(validatedData);
      res.status(201).json(photo);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      console.error("Error creating photo:", error);
      res.status(500).json({ message: "Error creating photo" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
