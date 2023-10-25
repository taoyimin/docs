import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './utils/rem'
import ElementPlus from 'element-plus'
import { usePopperContainerId } from 'element-plus'
import 'element-plus/dist/index.css'

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
if (window.__POWERED_BY_WUJIE__) {
  let instance;
  let dispose
  window.__WUJIE_MOUNT = () => {
    dispose = fixElementPlusTeleportCrash()
    instance = createApp(App)
    instance.use(buildRouter())
    instance.use(ElementPlus)
    instance.use(pinia)
    instance.use(http)
    instance.mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
    dispose()
  };
} else {
  createApp(App).use(router).use(ElementPlus).use(pinia).use(http).mount("#app");
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
  return () => { }
}

const createContainer = id => {
  const container = document.createElement('div')
  container.id = id
  document.body.appendChild(container)
  return container
}