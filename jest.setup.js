// Global test setup
require('@testing-library/jest-dom');

// Mock environment variables
process.env.NODE_ENV = 'test';

// Mock console methods in tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Setup test database or other global mocks here
beforeAll(() => {
  // Global setup
});

afterAll(() => {
  // Global cleanup
});
