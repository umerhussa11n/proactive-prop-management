// Test Data Factories
export const createMockProperty = (overrides = {}) => ({
  id: 'prop-123',
  address: '123 Test Street, London',
  type: 'apartment' as const,
  landlordId: 'user-456',
  tenantIds: ['tenant-789'],
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
  ...overrides,
});

export const createMockTenant = (overrides = {}) => ({
  id: 'tenant-123',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+44 7700 900123',
  propertyId: 'prop-456',
  leaseStart: new Date('2024-01-01'),
  leaseEnd: new Date('2024-12-31'),
  status: 'active' as const,
  ...overrides,
});

export const createMockMaintenanceTicket = (overrides = {}) => ({
  id: 'ticket-123',
  propertyId: 'prop-456',
  tenantId: 'tenant-789',
  title: 'Leaky faucet in kitchen',
  description: 'Water dripping from kitchen sink faucet',
  priority: 'medium' as const,
  status: 'open' as const,
  category: 'plumbing' as const,
  attachments: [],
  createdAt: new Date('2024-01-01'),
  ...overrides,
});

// API Response Helpers
export const createMockApiResponse = <T>(data: T, success = true) => ({
  success,
  data,
  message: success ? 'Success' : 'Error',
});

export const createMockApiError = (message = 'Test error', statusCode = 400) => ({
  success: false,
  error: message,
  statusCode,
});

// Test Environment Helpers
export const setupTestEnv = () => {
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URL = 'mongodb://localhost:27017/test-db';
  process.env.JWT_SECRET = 'test-secret';
};

export const cleanupTestEnv = () => {
  delete process.env.NODE_ENV;
  delete process.env.DATABASE_URL;
  delete process.env.JWT_SECRET;
};

// Async Testing Helpers
export const waitFor = (ms: number) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const flushPromises = () => 
  new Promise(setImmediate);

// Custom Matchers (extend Jest)
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidProperty(): R;
      toBeValidApiResponse(): R;
    }
  }
}

export {};
