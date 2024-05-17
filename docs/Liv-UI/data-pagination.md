# Data Pagination 数据分页

该组件用于快速实现数据分页功能，内部封装了统一样式、分页信息、页码页数切换等逻辑，只需传入[v-model](#attributes)和[data](#attributes)属性即可。

## 基础用法
:::demo
```vue
<template>
  <liv-data-table height="300" :fields="fields" :data="pageData.records" />
  <liv-data-pagination v-model="pageParam" :data="pageData" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Demo } from '@szxc/apis'

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

const pageParam = ref<PageParam>({})

const pageData = ref<Page<Demo>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: height(26);
}
</style>
```
:::

## 设置默认值

通过v-model可以设置默认选中的页码和页数。

:::demo
```vue
<template>
  <liv-data-table height="300" :fields="fields" :data="pageData.records" />
  <liv-data-pagination v-model="pageParam" :data="pageData" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Demo } from '@szxc/apis'

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

const pageParam = ref<PageParam>({
  current: 2,
  size: 20
})

const pageData = ref<Page<Demo>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>

<style>
.el-pagination {
  margin-top: 26px;
}
</style>
```
:::

## 属性透传

Data Pagination基于[ElPagination](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)封装，所以你可以传入[ElPagination](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)的所有属性和事件。

:::demo
```vue
<template>
  <liv-data-table height="300" :fields="fields" :data="pageData.records" />
  <liv-data-pagination
    v-model="pageParam"
    layout="total, pager, jumper"
    :background="false"
    :data="pageData"
  />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDemoPage, type Demo } from '@szxc/apis'

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

const pageParam = ref<PageParam>({})

const pageData = ref<Page<Demo>>({})

watchEffect(async () => {
  pageData.value = await getDemoPage({
    ...pageParam.value
  })
})
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 26px;
}
</style>
```
:::

## 属性<a id="attributes"></a>

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 分页参数绑定值 | `PageParam` | — | `{current: 1, size: 10}` |
| data | 分页数据信息 | `Page<T>` | — | `{total: 0, records: []}` |