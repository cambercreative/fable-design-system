import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fable-design-system/', // For GitHub Pages deployment
  build: {
    outDir: 'dist',
  },
});