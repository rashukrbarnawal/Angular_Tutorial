module.exports = {
  // Test environment (jsdom for DOM testing, node for backend)
  testEnvironment: 'node',

  // File patterns to run as tests
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],

  // Coverage configuration
  collectCoverageFrom: [
    '*.js',
    '!node_modules/**',
    '!.github/**',
    '!jest.config.js',
    '!coverage/**'
  ],

  // Display coverage reports
  coverageReporters: ['text', 'text-summary', 'lcov'],

  // Verbose output
  verbose: true,

  // Test timeout
  testTimeout: 10000
};
