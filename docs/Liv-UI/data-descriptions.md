# Data Descriptions 数据描述列表

该组件用于快速生成数据描述列表，内部封装了列表项渲染、文件处理等逻辑，只需传入[data](#属性)和[fields](#field)属性即可。

## 基础用法
:::demo
```vue
<template>
  <liv-data-descriptions :data="data" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoDetail } from '@szxc/apis'

const data = ref({})

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusStr',
    label: '事件状态'
  },
  {
    prop: 'typeStr',
    label: '事件类型'
  },
  {
    prop: 'contactName',
    label: '联系人'
  },
  {
    prop: 'id',
    label: '事件二维码',
    fieldType: 'qrcode'
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  },
  {
    prop: 'audioUrl',
    label: '事件录音',
    fieldType: 'audio'
  }
]

onMounted(async () => {
  // 请求详情数据
  data.value = await getDemoDetail()
})
</script>
```
:::

## 格式化内容
传入`fieldFormat`函数可以对描述项的内容进行格式化处理。
:::demo
```vue
<template>
  <liv-data-descriptions :data="data" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoDetail } from '@szxc/apis'

const data = ref({})

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusStr',
    label: '事件状态',
    fieldFormat: (value) => `${value}状态`
  },
  {
    prop: 'typeStr',
    label: '事件类型',
    fieldFormat: (value) => `${value}事件`
  },
  {
    prop: 'contactName',
    label: '联系人',
    fieldFormat: (value, data) => {
      return `${value}（${data.contactTelephone}）`
    }
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  }
]

onMounted(async () => {
  // 请求详情数据
  data.value = await getDemoDetail()
})
</script>
```
:::

## 属性透传

Data Descriptions[ElDescriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes)封装，所以你可以传入[ElDescriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes)的所有属性和事件，并且在字段配置属性`fields`中，你可以透传属性和事件给对应的[ElDescriptionsItem](https://element-plus.org/zh-CN/component/descriptions.html#descriptionsitem-attributes)。

:::demo
```vue
<template>
  <liv-data-descriptions 
    :data="data" 
    :fields="fields" 
    title="自定义标题" 
    direction="vertical" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoDetail } from '@szxc/apis'

const data = ref({})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    labelClassName: 'my-label',
    className: 'my-content'
  },
  {
    prop: 'statusStr',
    label: '事件状态'
  },
  {
    prop: 'typeStr',
    label: '事件类型'
  },
  {
    prop: 'contactName',
    label: '联系人',
    align: 'right'
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  }
]

onMounted(async () => {
  // 请求详情数据
  data.value = await getDemoDetail()
})
</script>

<style scoped>
:deep(.my-label) {
  background: var(--el-color-success-light-9) !important;
}
:deep(.my-content) {
  background: var(--el-color-danger-light-9);
}
</style>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| data | 表格数据 | `Object` | — | [] |
| fields | 字段配置信息 | [`Array<Field>`](#field) | — | [] |

### Field

| 属性名       | 说明             | 类型     | 可选值            | 默认值 |
|-----------|----------------|--------|----------------|-----|
| fieldType | 字段类型，不传则默认显示文本 | `enum` | `image` `audio` `link` `qrcode` `richText` | —   |
| fieldFormat | 格式化字段内容 | `Function` | `(value, data) => {}` | — |