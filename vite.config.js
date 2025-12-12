import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  base: './',
  plugins: [react(), legacy(), nodePolyfills()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
    target: 'es2022',
    outDir: 'dist',
    sourcemap: false,
  },
});

/**
 * Ensures third-party code is bundled into a dedicated vendor chunk.
 *
 * @param {string} id - Module identifier passed by Rollup.
 * @returns {string | undefined} The chunk name when a module belongs to node_modules.
 */
function manualChunks(id) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
  return undefined;
}
