# Data Card 数据卡片

该组件用于统一表单页面的样式和布局风格，使用该组件包裹[DataFrom](data-form.html)、[DataTable](data-table.html)、[DataPagination](data-pagination.html)无需编写任何代码即可获得统一的样式和布局风格，并且可以自动实现自适应宽高。

## 基础用法
:::demo
```vue
<template>
  <el-input v-model="height">
    <template #prepend>卡片高度：</template>
  </el-input>
  <liv-data-card header="事件列表" :style="{ height: height + 'px' }">
    <liv-data-table :fields="fields" :data="pageData.records" />
    <liv-data-pagination v-model="pageParam" :data="pageData" />
  </liv-data-card>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Event } from '@szxc/apis'

const height = ref<string>('500')

const fields = [
  {
    prop: 'no',
    label: '编号'
  },
  {
    prop: 'title',
    label: '标题'
  }
]

const pageParam = ref<PageParam>({ size: 30 })

const pageData = ref<Page<Event>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>

<style scoped>
.el-input {
  margin-bottom: 20px;
}
</style>
```
:::

## 属性透传

Data Card基于[ElCard](https://element-plus.org/zh-CN/component/card.html#attributes)封装，所以你可以传入[ElCard](https://element-plus.org/zh-CN/component/card.html#attributes)的所有属性和事件。

:::demo
```vue
<template>
  <liv-data-card
    header="事件列表"
    style="height: 500px"
    shadow="hover"
    body-style="background: #eee"
  >
    <liv-data-table :fields="fields" :data="pageData.records" />
    <liv-data-pagination v-model="pageParam" :data="pageData" />
  </liv-data-card>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Event } from '@szxc/apis'

const fields = [
  {
    prop: 'no',
    label: '编号'
  },
  {
    prop: 'title',
    label: '标题'
  }
]

const pageParam = ref<PageParam>({ size: 30 })

const pageData = ref<Page<Event>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>
```
:::

## 插槽透传

Data Card支持插槽透传，你可以传入[ElCard](https://element-plus.org/zh-CN/component/card.html#slots)的任意插槽。

:::demo
```vue
<template>
  <liv-data-card style="height: 500px">
    <template #header> 
      我是插槽 <el-button type="primary">按钮</el-button> 
    </template>
    <liv-data-table :fields="fields" :data="pageData.records" />
    <liv-data-pagination v-model="pageParam" :data="pageData" />
  </liv-data-card>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Event } from '@szxc/apis'

const fields = [
  {
    prop: 'no',
    label: '编号'
  },
  {
    prop: 'title',
    label: '标题'
  }
]

const pageParam = ref<PageParam>({ size: 30 })

const pageData = ref<Page<Event>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>
```
:::