import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './utils/rem'
//import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { usePopperContainerId } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import { buildRouter } from './router'
import http from '@szxc/http'
//import http from '@/utils/http'
import { useUserStore } from './stores/userStore'
import globalComponent from '@/components/index'
import LivUI from '@szxc/components'

const pinia = createPinia()
pinia.use(piniaPersist)

watch(
  pinia.state,
  (state) => {
    console.log(state)
  },
  { deep: true }
)

let instance: any = createApp(App)
const usePlugins = () => {
  instance.use(LivUI)
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    instance.component(key, component)
  }
  // 注册全局的组件 （对所有需要注册的组件进行遍历并注册）
  for (const componentItme in globalComponent) {
    instance.component(componentItme, globalComponent[componentItme])
  }
  instance
    .use(ElementPlus, {
      locale: zhCn,
      size: 'large'
    })
    .use(ElementPlus)
    .use(pinia)
    .use(http, { useUserStore })
    .mount('#app')
}
// 微前端子应用单例模式生命周期改造
if ((window as any).__POWERED_BY_WUJIE__) {
  let dispose: any
  ;(window as any).__WUJIE_MOUNT = () => {
    dispose = fixElementPlusTeleportCrash()
    instance = createApp(App).use(buildRouter())
    usePlugins()
  }
  ;(window as any).__WUJIE_UNMOUNT = () => {
    instance.unmount()
    dispose()
  }
} else {
  instance.use(router)
  usePlugins()
}

// 解决Vite + Element Plus子应用切换崩溃问题（https://github.com/Tencent/wujie/issues/325）
const fixElementPlusTeleportCrash = () => {
  const { id, selector } = usePopperContainerId()
  if (!document.body.querySelector(selector.value)) {
    const container = createContainer(id.value)
    return () => {
      container.remove()
    }
  }
  return () => {}
}

const createContainer = (id: any) => {
  const container = document.createElement('div')
  container.id = id
  document.body.appendChild(container)
  return container
}
