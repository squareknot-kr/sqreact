import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isBuild = process.env.STORYBOOK_BUILD === 'true' || process.env.NODE_ENV === 'production';
const basePath = isBuild ? '/sqreact/' : '/';

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
  managerHead: (head) => {
    if (isBuild) {
      return `
        ${head}
        <base href="/sqreact/">
      `;
    }
    return head;
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      base: basePath,
      build: {
        assetsDir: 'assets',
      },
      resolve: {
        alias: {
          '@storybook/addon-docs/mdx-react-shim': '@storybook/addon-docs/dist/mdx-react-shim.js',
          '@': resolve(__dirname, '../src'),
        },
      },
    });
  },
};
export default config;