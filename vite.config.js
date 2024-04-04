import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `main.js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    }
  },
  base: '/project-airlines',
  plugins: [vue()],
})
