const path = require('path');

module.exports = ({ config, mode }) => {
  config.resolve.alias['lib'] = path.resolve(__dirname, '../src/lib');
  config.resolve.alias['components'] = path.resolve(
    __dirname,
    '../src/components'
  );
  config.resolve.alias['assets'] = path.resolve(__dirname, '../src/assets');

  return config;
};
