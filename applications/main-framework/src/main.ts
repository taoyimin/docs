import './assets/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './utils/rem'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import http from './utils/http'

import WujieVue from "wujie-vue3";
import hostMap from "./hostMap";
import lifecycles from "./lifecycle";
import plugins from "./plugin";

import LivUI from '@szxc/components'

const { setupApp } = WujieVue;

const props = {
  jump: (name: string) => {
    router.push({ name });
  },
};

setupApp({
  name: "micro-framework",
  url: hostMap("//localhost:7000/"),
  props,
  exec: true,
  ...lifecycles,
  plugins: plugins
});

setupApp({
  name: "excrement-resource",
  url: hostMap("//localhost:7002/"),
  props,
  exec: true,
  ...lifecycles,
  plugins: plugins
});

const app = createApp(App),
  pinia = createPinia()

pinia.use(piniaPersist)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(http)
app.use(WujieVue)
app.use(LivUI)

watch(
  pinia.state,
  (state) => {
    console.log(state)
  },
  { deep: true }
)

app.mount('#app')
