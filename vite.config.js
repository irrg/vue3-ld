import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'Vue3Ld',
      fileName: 'vue3-ld',
      formats: ['es'], 
    },
    rollupOptions: {
      external: ['vue', 'launchdarkly-js-client-sdk'],
    },
  },
});
