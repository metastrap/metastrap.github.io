/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^types(.*)$': '<rootDir>/types$1',
    '^utils(.*)$': '<rootDir>/utils$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/fixtures/',
    '<rootDir>/dist/',
  ],
};
