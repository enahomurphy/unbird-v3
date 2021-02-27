module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components',
          lib: './src/lib',
          domain: './src/domain',
          'test-utils': ['./src/lib/testUtils/index.ts'],
          'react-virtualized/List': 'react-virtualized/dist/es/List',
        },
      },
    ],
  ],
};
