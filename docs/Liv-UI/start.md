# 快速开始

本节将介绍如何在项目中使用 Liv UI。

## 全局注册
```ts
// main.ts
import { createApp } from 'vue'
import LivUI from '@szxc/components'
import App from './App.vue'

const app = createApp(App)

app.use(LivUI)
app.mount('#app')
```

## 按需注册
```ts
// main.ts
import { createApp } from 'vue'
import LivDictSelect from '@szxc/components/dict-select'
import App from './App.vue'

const app = createApp(App)

app.use(LivDictSelect)
app.mount('#app')
```

## 手动导入
```vue
<template>
    <liv-dict-select :dict-type="eventType"></liv-dict-select>
</template>
<script lang="ts" setup>
import LivDictSelect from '@szxc/components/dict-select'
</script>
```
