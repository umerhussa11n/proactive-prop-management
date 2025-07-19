const baseConfig = require('../../jest.config.js');

module.exports = {
  ...baseConfig,
  displayName: 'frontend',
  testEnvironment: 'jsdom',
  rootDir: '.',
  setupFilesAfterEnv: [
    '<rootDir>/../../jest.setup.js',
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapping: {
    ...baseConfig.moduleNameMapping,
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    ...baseConfig.transform,
    '^.+\\.(css|sass|scss)$': 'jest-transform-css',
  },
};
