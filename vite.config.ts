import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pizza/',
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^@microsoft\/fast-element/
    }
  }
});
