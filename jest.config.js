// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js app directory
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Add any setup files if needed
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases (if any)
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // If using TypeScript
  },
}

module.exports = createJestConfig(customJestConfig)
