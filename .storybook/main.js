const path = require("path");
const svgLoader = require('vite-svg-loader');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    config.css = {
      ...config.css,
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/style/base/main";`,
        }
      }
    }
    config.plugins.push(svgLoader())
    return config
  }
}