module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es|sinon)/)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue',
  },  
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/tests/'],
  coverageReporters: ['json', 'lcov', 'clover', 'html'],
};
