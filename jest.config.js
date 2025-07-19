module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Coverage settings
  collectCoverageFrom: [
    'apps/**/*.{ts,tsx,js,jsx}',
    'packages/**/*.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/.next/**',
  ],
  
  // Module resolution
  moduleNameMapping: {
    '^@repo/(.*)$': '<rootDir>/packages/$1',
    '^@/(.*)$': '<rootDir>/$1',
  },
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Transform files
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  
  // File extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  
  // Test patterns
  testMatch: [
    '<rootDir>/apps/**/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/apps/**/*.(test|spec).(ts|tsx|js)',
    '<rootDir>/packages/**/__tests__/**/*.(ts|tsx|js)',
    '<rootDir>/packages/**/*.(test|spec).(ts|tsx|js)',
  ],
  
  // Ignore patterns
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  
  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
