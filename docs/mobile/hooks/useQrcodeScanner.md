# 扫码

内部封装了摄像头权限申请、扫码等逻辑，用于快速实现扫码相关业务，Web端基于[html5-qrcode](https://github.com/mebjas/html5-qrcode)库实现，小程序端基于[scanCode](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)API实现。

## 基础用法

在Web端使用需要先在主包目录下新建一个公共的扫码页面，小程序端使用无此限制。

```vue
<!-- pages/qrcodeScan.vue -->
<template>
  <view id="reader"></view>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useQrcodeScanner } from 'liv-uni'

const { startScan, stopScan } = useQrcodeScanner()

onMounted(() => {
  startScan()
})

onUnmounted(() => {
  stopScan()
})
</script>
```

然后在`pages.json`中注册该页面。

```json
  "pages": [
    {
      "path": "pages/index",
      "style": {
        "navigationBarTitleText": "首页",
        "navigationStyle": "custom",
        "navigationBarTextStyle": "black"
      }
    },
    {// [!code ++]
      "path": "pages/qrcodeScan",// [!code ++]
      "style": {// [!code ++]
        "navigationBarTitleText": "",// [!code ++]
        "navigationStyle": "custom"// [!code ++]
      }// [!code ++]
    }// [!code ++]
  ]
```

然后可以在任意页面调用`openScan`方法打开扫码页面。

```vue
<template>
  <view>扫码结果：{{ result }}</view>
  <up-button @click="openScan">打开扫码</up-button>
</template>

<script lang="ts" setup>
import { useQrcodeScanner } from 'liv-uni'

const { result, openScan } = useQrcodeScanner()
</script>
```

## Params

| 参数名 | 说明                    | 类型     | 默认值 |
| ------ | ----------------------- | -------- | ------ |
| id     | 用于显示扫码UI的DOM元素 | `string` | reader |

## Result

| 参数名    | 说明         | 类型         | 默认值 |
| --------- | ------------ | ------------ | ------ |
| isScaning | 是否正在扫码 | `boolean`    | false  |
| result    | 扫码结果     | `string`     | —      |
| openScan  | 打开扫码页面 | `() => void` | —      |
| startScan | 开始扫码     | `() => void` | —      |
| stopScan  | 结束扫码     | `() => void` | —      |
