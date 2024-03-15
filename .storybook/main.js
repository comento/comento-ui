const path = require('path');

// // Export a function. Accept the base config as the only param.
module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-viewport'],
  stories: ['../stories/**/*.stories.(js|mdx)'],
  core: {
    builder: 'storybook-builder-vite-vue2',
  },
};
