import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import MarkdownIt from "markdown-it";

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  }
});