const path = require('path');

// // Export a function. Accept the base config as the only param.
module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  stories: ['../stories/**/*.stories.(js|mdx)'],
};
