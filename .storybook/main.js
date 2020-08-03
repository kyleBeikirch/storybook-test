module.exports = {
  "stories": [
    "../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ]
}