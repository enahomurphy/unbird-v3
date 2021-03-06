module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:cypress/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest', 'cypress'],
  rules: {
    quotes: ['error', 'single'],
    'linebreak-style': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        parser: 'typescript',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'cy'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'import/no-named-as-default': 'off',
        'import/namespace': [2, { allowComputed: true }],
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
