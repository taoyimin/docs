# Qr Code 二维码生成器

用于通过文本链接等内容来生成二维码及下载二维码。

## 基本用法

:::demo
```vue
<template>
  <liv-qr-code :content="content" :size="200" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const content = ref('https://www.baidu.com')
</script>
```
:::

## 表格中使用

:::demo
```vue
<template>
  <liv-data-table :data="data" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    gridName: '网格1',
    code: 'https://www.baidu.com',
    statusStr: '正常',
    updateTime: '2022-01-01 12:00:00'
  },
  {
    gridName: '网格3',
    code: 'https://www.baidu.com',
    statusStr: '正常',
    updateTime: '2022-01-02 12:00:00'
  }
])

const fields = [
  {
    prop: 'gridName',
    label: '网格名称'
  },
  {
    prop: 'code',
    label: '二维码',
    fieldType: 'qrcode'
  },
  {
    prop: 'statusStr',
    label: '状态'
  },
  {
    prop: 'updateTime',
    label: '更新时间'
  }
]
</script>
```
:::

## 下载二维码

:::demo
```vue
<template>
  <el-button type="primary" @click="downloadFile">点击下载</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { qrCode } from '@szxc/utils'

const content = ref('https://www.baidu.com')

const downloadFile = () => {
  qrCode.downLoadQRCode(content.value, '网格二维码.png')
}
</script>
```
:::

## 批量下载二维码

:::demo
```vue
<template>
  <el-button type="primary" @click="batchDownloadFile" :loading="loading">批量下载</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { qrCode } from '@szxc/utils'

const loading = ref(false)

const qrList = [
  {
    qrContent: '二维码内容1',
    title: '二维码下方展示的标题1',
  },
   {
    qrContent: '二维码内容2',
    title: '二维码下方展示的标题2',
  },
   {
    qrContent: '二维码内容3',
    title: '二维码下方展示的标题3',
  }
]

const batchDownloadFile = async () => {
  try {
    loading.value = true;
    await qrCode.batchDownloadQrCode(qrList, '批量二维码.pdf');
    loading.value = false;
  } catch (err) {
    loading.value = false;
  }
}
</script>
```
:::


## 属性

| 属性名 | 说明 | 类型 | 必填项  |  可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ | ------ |
| content | 二维码内容 | `string` | 必填 | — | — |
| size | 二维码大小 | `number` | - | — | 100 |