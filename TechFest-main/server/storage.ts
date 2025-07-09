import { 
  users, 
  type User, 
  type InsertUser, 
  contactMessages, 
  type ContactMessage,
  type InsertContactMessage,
  chatMessages,
  type ChatMessage,
  type InsertChatMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Chat messages
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, ContactMessage>;
  private chats: Map<number, ChatMessage>;
  private userId: number;
  private messageId: number;
  private chatId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.chats = new Map();
    this.userId = 1;
    this.messageId = 1;
    this.chatId = 1;
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
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageId++;
    const createdAt = new Date();
    const newMessage: ContactMessage = { ...message, id, createdAt };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const id = this.chatId++;
    const createdAt = new Date();
    const newChat: ChatMessage = { ...message, id, createdAt };
    this.chats.set(id, newChat);
    return newChat;
  }

  async getChatMessages(): Promise<ChatMessage[]> {
    return Array.from(this.chats.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
