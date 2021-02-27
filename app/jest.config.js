module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  setupFiles: ['cross-fetch/polyfill'],
  preset: 'ts-jest/presets/js-with-babel',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  // testPathIgnorePatterns: ['**/__tests__/mocks/*.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
};
