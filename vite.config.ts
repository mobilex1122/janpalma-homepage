import { defineConfig } from 'vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueI18nPlugin({ /* options */ }),],
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
