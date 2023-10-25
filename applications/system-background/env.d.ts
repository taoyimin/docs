/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/** 图片 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module 'postcss-plugin-px2rem'
declare module 'pinia-plugin-persist'
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module '@vueuse/core'
