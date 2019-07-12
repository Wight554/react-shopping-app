module.exports = {
  testMatch: ['**/*.test.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['src/.+/index.js', 'src/.+/.+Style.js'],
  coverageReporters: ['text-summary', 'json', 'html', 'lcovonly'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleNameMapper: {
    '^.+\\.(eot|otf|svg|ttf|woff|png)$': 'identity-obj-proxy'
  },
  testURL: 'http://localhost/'
};
