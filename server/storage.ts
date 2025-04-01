import { 
  users, 
  contactSubmissions, 
  type User, 
  type InsertUser, 
  type ContactFormData,
  type ContactSubmission
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  submitContactForm(formData: ContactFormData): Promise<ContactSubmission>;
  getAllSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactSubmission>;
  userCurrentId: number;
  contactFormCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.userCurrentId = 1;
    this.contactFormCurrentId = 1;
  }

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

  async submitContactForm(formData: ContactFormData): Promise<ContactSubmission> {
    const id = this.contactFormCurrentId++;
    const createdAt = new Date();
    const submission: ContactSubmission = {
      id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone ?? null,
      dogName: formData.dogName,
      dogBreed: formData.dogBreed ?? null,
      service: formData.service,
      message: formData.message ?? null,
      createdAt
    };
    this.contactForms.set(id, submission);
    return submission;
  }

  async getAllSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactForms.values());
  }
}

export const storage = new MemStorage();
