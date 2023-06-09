import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@comp": resolve(__dirname, "src/components"),
      "@img": resolve(__dirname, "public/img"),
      "@p": resolve(__dirname, "src/pages"),
      "@src": resolve(__dirname,"src/")
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  }
})
