import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  
  staticDirs: [],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  managerHead: (head) => `
    ${head}
    <base href="/sqreact/">
  `,
  async viteFinal(config) {
    return mergeConfig(config, {
      base: '/sqreact/',
      build: {
        assetsDir: 'assets',
      },
      resolve: {
        alias: {
          '@storybook/addon-docs/mdx-react-shim': '@storybook/addon-docs/dist/mdx-react-shim.js',
        },
      },
    });
  },
};
export default config;