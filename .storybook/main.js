const path = require('path');
const {mergeConfig} = require("vite");

// // Export a function. Accept the base config as the only param.
module.exports = {
  // addons: ['@storybook/addon-docs', '@storybook/addon-viewport'],
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  framework: '@storybook/vue',
  core: {
    builder: 'storybook-builder-vite-vue2',
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "@/assets/style/base/main";`,
          },
        },
      },
    });
  },
};
