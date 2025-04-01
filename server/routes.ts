import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormValidationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // Contact form submission endpoint
  apiRouter.post("/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormValidationSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.submitContactForm(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Formular erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen melden!",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Format validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validierungsfehler",
          errors: validationError.details
        });
      }
      
      // Handle other errors
      console.error("Contact form submission error:", error);
      return res.status(500).json({
        success: false,
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal."
      });
    }
  });

  // Get all submissions (for admin purposes)
  apiRouter.get("/contact/submissions", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllSubmissions();
      return res.status(200).json({
        success: true,
        submissions
      });
    } catch (error) {
      console.error("Error retrieving submissions:", error);
      return res.status(500).json({
        success: false,
        message: "Fehler beim Abrufen der Einreichungen"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
