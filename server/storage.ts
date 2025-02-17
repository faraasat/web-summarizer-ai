import { 
  users, 
  type User, 
  type InsertUser, 
  summaries, 
  type Summary, 
  type InsertSummary,
  subscribers,
  type Subscriber,
  type InsertSubscriber
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Summary methods
  getSummary(id: number): Promise<Summary | undefined>;
  getSummaryByUrl(url: string): Promise<Summary | undefined>;
  createSummary(summary: InsertSummary & { content: string, timestamp: string }): Promise<Summary>;
  
  // Subscriber methods
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber & { timestamp: string }): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private summaries: Map<number, Summary>;
  private subscribers: Map<number, Subscriber>;
  private userCurrentId: number;
  private summaryCurrentId: number;
  private subscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.summaries = new Map();
    this.subscribers = new Map();
    this.userCurrentId = 1;
    this.summaryCurrentId = 1;
    this.subscriberCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Summary methods
  async getSummary(id: number): Promise<Summary | undefined> {
    return this.summaries.get(id);
  }

  async getSummaryByUrl(url: string): Promise<Summary | undefined> {
    return Array.from(this.summaries.values()).find(
      (summary) => summary.url === url,
    );
  }

  async createSummary(summaryData: InsertSummary & { content: string, timestamp: string }): Promise<Summary> {
    const id = this.summaryCurrentId++;
    const summary: Summary = { ...summaryData, id };
    this.summaries.set(id, summary);
    return summary;
  }

  // Subscriber methods
  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscribers.get(id);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }

  async createSubscriber(subscriberData: InsertSubscriber & { timestamp: string }): Promise<Subscriber> {
    const id = this.subscriberCurrentId++;
    const subscriber: Subscriber = { ...subscriberData, id };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
