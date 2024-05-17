import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import utils from '@szxc/utils'
import LivAsideMenu from '../../Liv-UI/components/demo-aside-menu.vue'
import './styles/vars.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { createProdMockServer } from 'vite-plugin-mock/client'
import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp: async (ctx) => {
    // if (!import.meta.env.SSR && process.env.NODE_ENV === 'production') {
    //   const modules = import.meta.glob('/mock/*.ts', { eager: true })
    //   const mockModules: any[] = []
    //   Object.keys(modules).forEach((key) => {
    //     if (key.includes('/_')) {
    //       return
    //     }
    //     mockModules.push(...modules[key].default)
    //   })
    //   await createProdMockServer(mockModules)
    // }
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('Demo', Demo)
    ctx.app.component('DemoBlock', DemoBlock)
    ctx.app.component('LivAsideMenu', LivAsideMenu)
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    ctx.app.use(pinia)
    ctx.app.use(utils)
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
