import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/viewer/',
  plugins: [react()],
  build: { outDir: '../cloudflare_site/viewer', emptyOutDir: true },
  test: { globals: true, environment: 'node' },
});
