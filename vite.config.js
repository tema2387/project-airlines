import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    base: '/project-airlines',
    rollupOptions: {
      output: {
        entryFileNames: `main.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    }
  },
  plugins: [vue()],
})
