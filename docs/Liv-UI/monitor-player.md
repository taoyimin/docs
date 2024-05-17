# Monitor Player 监控播放器

组件封装了监控视频相关接口，并对多种播放器进行了二次封装，组件内部会根据[视频流协议](#视频流协议对照表)自动切换对应的播放器，使用组件时只需传入监控视频id即可播放各种类型的监控视频。

## 基础用法

:::demo
```vue
<template>
  <liv-monitor-player 
    id="8a070791ccff403ba034d4dd465ca12f" 
    class="player" 
  />
</template>

<style scoped>
.player {
  height: 400px;
}
</style>
```
:::

## 网络配置

你可以通过`networkOptions`属性来配置播放器的网络请求行为，该参数只对[XgPlayer]有效。
:::demo
```vue
<template>
  <liv-monitor-player
    id="41aa66fe68a7492b946c97615ad89c23"
    :network-options="networkOptions"
    class="player"
  />
</template>

<script lang="ts" setup>
const networkOptions = {
  retryCount: 3, // 重试次数
  retryDelay: 1000, // 每次重试间隔
  loadTimeout: 15000, // 请求超时时间
  keepAliveInterval: 0, // 保活间隔时间
  tyyy: {
    // 单独给天翼云眼配置重连次数及超时时间
    retryCount: 2,
    loadTimeout: 10000
  },
  slefarmer: {
    // 单独给亿发姆配置重连次数、重连间隔、保活间隔
    retryCount: 3,
    retryDelay: 5000,
    keepAliveInterval: 45000
  }
}
</script>

<style scoped>
.player {
  height: 400px;
}
</style>
```
:::

## 视频流协议对照表
| 视频流协议 | 对应播放器 | 说明 |
| ------ | ------ | ------ |
| `hls` `hlss` | XgPlayer | 使用西瓜播放器内置的[hls](https://v3.h5player.bytedance.com/plugins/extension/xgplayer-hls.html)解析库进行播放 |
| `flv` | XgPlayer | 使用西瓜播放器内置的[flv](https://v3.h5player.bytedance.com/plugins/extension/xgplayer-flv.html)解析库进行播放 |
| `hlsjs` | XgPlayer | 使用西瓜播放器加原生[hls.js](https://github.com/video-dev/hls.js)解析库进行播放 |
| `tyyyhls` `tyyyrtsp` | MetaPlayer | 使用Iframe接入天翼视联自研[MetaPlayer](https://docs.qq.com/doc/DYXN6cXF3ZmRXTHNx)播放器进行播放 |
| `httpFlv` | NpPlayer | 使用天翼云眼NpPlayer播放器进行播放 |
| `rtsp` | JmPlayer | 使用第三方[jsmpeg](https://github.com/phoboslab/jsmpeg)解析库进行播放 |

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| id | 监控视频id | `string` | — | — |
| networkOptions | 网络配置 | `Record<string, any>` | — | — |

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
| refresh | 当点击重新加载按钮时触发，如果未监听该事件，则默认重新加载当前监控视频 | `Function` | `(id) => void` | — |

