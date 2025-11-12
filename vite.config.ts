import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    dts({
      insertTypesEntry: true,
      exclude: ['App.tsx', 'main.tsx', 'index.html', 'vite.config.dev.ts'],
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.ts'),
      name: 'SqReact',
      formats: ['es', 'umd'],
      fileName: (format) => `sqreact.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      external: (id) => {
        if (id === 'react' || id === 'react-dom') return true;
        if (id === 'framer-motion' || id.startsWith('framer-motion/')) return true;
        if (id === 'lucide-react' || id.startsWith('lucide-react/')) return true;
        return false;
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion',
          'lucide-react': 'LucideReact',
        },
        entryFileNames: 'sqreact.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css';
          return assetInfo.name || 'assets/[name][extname]';
        },
      },
    },
    cssCodeSplit: false,
    cssMinify: true,
  },
});