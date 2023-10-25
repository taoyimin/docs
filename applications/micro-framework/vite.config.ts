import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssPluginPx2rem from 'postcss-plugin-px2rem'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7000,
    proxy: {
      '/api': {
        target: 'http://106.225.129.34:8082',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData: '@import "@/assets/scss/global.scss";'
        // additionalData: '@use "@/assets/scss/global.scss" as *;'
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPluginPx2rem({
          rootValue: 16,
          mediaQuery: false,
          minPixelValue: 3
        })
      ]
    }
  }
})
