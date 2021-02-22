module.exports = {
  apps: [
    {
      name: 'Unbird booth Api',
      script: './dist/main.js',
      ignore_watch: ['node_modules'],
      exec_mode: 'cluster',
      instances: 'max',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
