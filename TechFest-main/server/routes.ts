import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.errors 
        });
      }
      
      const contactMessage = await storage.createContactMessage(result.data);
      return res.status(201).json(contactMessage);
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to save contact message" });
    }
  });

  // API endpoint for AI chat functionality
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== "string") {
        return res.status(400).json({ message: "Message is required" });
      }
      
      // Here we would typically call OpenAI API, but for simplicity, let's respond with predefined answers
      let response = "I'm sorry, I don't have information about that. Please contact our event organizers for more details.";
      
      // Simple keyword matching for demo purposes
      if (message.toLowerCase().includes("workshop")) {
        response = "We have several workshops including VR/AR Development, Blockchain Development, and AI for Good. You can find the details on our website under the Workshops section.";
      } else if (message.toLowerCase().includes("speaker")) {
        response = "Our event features 50+ industry experts including Dr. Maya Patel (CTO of TechVision), Alexander Chen (Founder of Quantum Labs), and Dr. Sofia Rodriguez (Director of Ethics in Tech).";
      } else if (message.toLowerCase().includes("ticket") || message.toLowerCase().includes("register")) {
        response = "You can register for the event by clicking on the 'Register Now' button on the homepage. Early bird tickets are available until July 15th.";
      } else if (message.toLowerCase().includes("location") || message.toLowerCase().includes("venue")) {
        response = "The Tech Fest will be held at the Tech Innovation Center, 123 Future Avenue, San Francisco, CA 94105.";
      } else if (message.toLowerCase().includes("date") || message.toLowerCase().includes("when")) {
        response = "The Future Tech Fest will be held from August 15-18, 2023.";
      } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        response = "Hello! Welcome to Tech Fest 2023. How can I assist you today?";
      }
      
      // Save the chat message and response
      const chatData = {
        message,
        response
      };
      
      const validatedData = insertChatMessageSchema.parse(chatData);
      const chatMessage = await storage.createChatMessage(validatedData);
      
      return res.status(200).json({ response, id: chatMessage.id });
    } catch (error) {
      console.error("Error processing chat message:", error);
      return res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  // Get all contact messages for admin purposes
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Failed to fetch contact messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
