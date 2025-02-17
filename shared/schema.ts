import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const summaries = pgTable("summaries", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  model: text("model").notNull(),
  content: text("content").notNull(),
  timestamp: text("timestamp").notNull(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  timestamp: text("timestamp").notNull(),
  consent: boolean("consent").notNull().default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSummarySchema = createInsertSchema(summaries).pick({
  url: true,
  model: true,
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  consent: true,
});

export const websiteSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  model: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSummary = z.infer<typeof insertSummarySchema>;
export type Summary = typeof summaries.$inferSelect;

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type Subscriber = typeof subscribers.$inferSelect;

export type WebsiteInput = z.infer<typeof websiteSchema>;
