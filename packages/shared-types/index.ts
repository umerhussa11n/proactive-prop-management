// Property Management Domain Types
export interface Property {
  id: string;
  address: string;
  type: 'apartment' | 'house' | 'commercial';
  landlordId: string;
  tenantIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyId: string;
  leaseStart: Date;
  leaseEnd: Date;
  status: 'active' | 'inactive' | 'pending';
}

export interface MaintenanceTicket {
  id: string;
  propertyId: string;
  tenantId: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'completed' | 'closed';
  category: 'plumbing' | 'electrical' | 'heating' | 'general';
  attachments: string[];
  createdAt: Date;
  assignedTo?: string;
  completedAt?: Date;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNextPage: boolean;
}

// Authentication Types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'landlord' | 'tenant' | 'admin' | 'contractor';
  properties: string[];
  createdAt: Date;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// AI Service Types
export interface AIMaintenanceSuggestion {
  ticketId: string;
  suggestedActions: string[];
  estimatedCost: number;
  urgencyScore: number;
  recommendedContractors: string[];
}

export interface DocumentAnalysis {
  documentType: 'epc' | 'tenancy-agreement' | 'invoice';
  extractedData: Record<string, any>;
  confidence: number;
  issues?: string[];
}
