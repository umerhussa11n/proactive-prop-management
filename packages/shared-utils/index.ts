// Constants
export const API_ENDPOINTS = {
  PROPERTIES: '/api/properties',
  TENANTS: '/api/tenants',
  TICKETS: '/api/maintenance-tickets',
  AI_SUGGESTIONS: '/api/ai/suggestions',
  DOCUMENTS: '/api/documents',
} as const;

export const MAINTENANCE_CATEGORIES = [
  'plumbing',
  'electrical', 
  'heating',
  'general',
  'security',
  'cleaning'
] as const;

export const PRIORITY_LEVELS = [
  'low',
  'medium', 
  'high',
  'urgent'
] as const;

// Utility Functions
export const formatCurrency = (amount: number, currency = 'GBP'): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date: Date | string, format = 'PPP'): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-GB').format(d);
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Validation Helpers
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+44|0)[1-9]\d{8,9}$/; // UK phone numbers
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Array/Object Utilities
export const groupBy = <T, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> => {
  return array.reduce((groups, item) => {
    const groupKey = String(item[key]);
    groups[groupKey] = groups[groupKey] || [];
    groups[groupKey].push(item);
    return groups;
  }, {} as Record<string, T[]>);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }) as T;
};

// Environment helpers
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
