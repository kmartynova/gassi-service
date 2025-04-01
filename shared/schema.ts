import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  dogName: text("dog_name").notNull(),
  dogBreed: text("dog_breed"),
  service: text("service").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactFormSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Extended validation schema
export const contactFormValidationSchema = contactFormSchema.extend({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  dogName: z.string().min(1, "Bitte geben Sie den Namen Ihres Hundes an."),
  service: z.string().min(1, "Bitte wählen Sie einen Service aus."),
});
