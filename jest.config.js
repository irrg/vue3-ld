module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es|sinon|@vue|vue|@vue/test-utils)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue', 
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/*.{js,ts,vue}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/tests/'],
  coverageReporters: ['json', 'lcov', 'clover', 'html'],
};
