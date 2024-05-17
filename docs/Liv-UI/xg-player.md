# Xg Player 西瓜播放器

该组件对西瓜播放器进行了二次封装，支持播放视频流协议为`hls` `hlss` `flv` `hlsjs`的监控视频。

## 基础用法

:::demo
```vue
<template>
  <div style="height: 400px">
    <liv-xg-player :monitor="info" :urls="urls" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getMonitorUrl } from '@szxc/apis'

// 监控详情
const info = ref()
// 播放地址列表
const urls = ref([])

onMounted(() => {
  getMonitorUrl({ id: '8a070791ccff403ba034d4dd465ca12f' }).then((res) => {
    info.value = res.info
    urls.value = res.urls
  })
})
</script>
```
:::

## 网络配置

你可以通过`networkOptions`属性来配置播放器的网络请求行为。

:::demo
```vue
<template>
  <div style="height: 400px">
    <liv-xg-player :monitor="info" :urls="urls" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getMonitorUrl } from '@szxc/apis'

// 监控详情
const info = ref()
// 播放地址列表
const urls = ref([])

onMounted(() => {
  getMonitorUrl({ id: '41aa66fe68a7492b946c97615ad89c23' }).then((res) => {
    info.value = res.info
    urls.value = res.urls
  })
})
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| monitor | 监控视频详情 | `Monitor` | — | — |
| urls | 播放地址列表 | `Record<string, any>` | — | — |

## networkOptions

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| retryCount | 重连次数 | `number` | — | 3 |
| retryDelay | 重连延迟 | `number` | — | 1000 |
| loadTimeout | 连接超时时间 | `number` | — | 15000 |
| keepAliveInterval | 保活间隔，每隔一段时间重新请求一次流地址，传0表示不保活 | `number` | — | 0 |
| `{deviceModel}` | 为某个视频厂家单独进行网络配置 | `number` | — | 1000 |

## 事件

| 事件名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| error | 播放失败时触发的回调 | `Function` | `(errorMessage) => void` | — |

