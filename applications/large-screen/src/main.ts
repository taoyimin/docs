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
import http from './utils/http'

const pinia = createPinia()
pinia.use(piniaPersist)

watch(
  pinia.state,
  (state) => {
    console.log(state)
  },
  { deep: true }
)

// 微前端子应用单例模式生命周期改造
if ((window as any).__POWERED_BY_WUJIE__) {
  let instance: any
  let dispose: any
  ;(window as any).__WUJIE_MOUNT = () => {
    dispose = fixElementPlusTeleportCrash()
    instance = createApp(App)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      instance.component(key, component)
    }
    instance.use(buildRouter())
    instance.use(ElementPlus, {
      locale: zhCn,
      size: 'large'
    })
    instance.use(pinia)
    instance.use(http)
    instance.mount('#app')
  }
  ;(window as any).__WUJIE_UNMOUNT = () => {
    instance.unmount()
    dispose()
  }
} else {
  createApp(App)
    .use(router)
    .use(ElementPlus, {
      locale: zhCn,
      size: 'large'
    })
    .use(pinia)
    .use(http)
    .mount('#app')
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
