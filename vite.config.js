// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        404: resolve(__dirname, '404/index.html'),
      },
    },
  },
  resolve: {
    alias: {
        '@wall': resolve(__dirname,"test"),
        '@jpmod': resolve(__dirname,"src/jpmod"),
    }
  },
  base: "./"
})
