import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssPluginPx2rem from 'postcss-plugin-px2rem'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7001
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url))
      '@': resolve(__dirname, './src'),
      extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    } as any
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 两种方式都可以
        additionalData:
          '@use "@/styles/element/index.scss" as *;@use "@/assets/scss/global.scss" as *;'
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
