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

:::tip 提示
组件库中的示例代码默认开启了[自动导入](https://element-plus.org/zh-CN/guide/quickstart.html#%E8%87%AA%E5%8A%A8%E5%AF%BC%E5%85%A5-%E6%8E%A8%E8%8D%90)功能，所以没有手动import相应的组件，请根据实际项目情况自行调整。
:::