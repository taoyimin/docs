# 语音气泡

用于展示并播放语音文件。

## 基础用法

```vue
<template>
  <liv-audio-bubble :src="audioPath" />
</template>

<script setup lang="ts">
const audioPath =
  'https://cxghwx.nccxgh.com:8082/ruralLivingEnv/fileControll/downLoadFile?swfName=/yunyouxc/2023-10/92c417c8-e527-46b1-827b-2ed1ced052a9.mp3'
</script>
```

## 属性

| 属性名     | 说明                             | 类型           | 可选值 | 默认值 |
| ---------- | -------------------------------- | -------------- | ------ | ------ |
| src        | 语音文件地址                     | `string`       | —      | —      |
| duration   | 语音时长，不传会自动获取语音时长 | `number`       | —      | 0      |
| showDelete | 是否显示删除按钮                 | `boolean`      | —      | false  |
| showArrow  | 是否显示气泡箭头                 | `boolean`      | —      | false  |
| mode       | 气泡箭头方向                     | `left` `right` | —      | left   |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface AudioBubbleProps {
  /**
   * 语音文件地址
   */
  src?: string
  /**
   * 语音时长
   */
  duration?: number
  /**
   * 是否显示删除按钮
   */
  showDelete?: boolean
  /**
   * 是否显示气泡箭头
   */
  showArrow?: boolean
  /**
   * 气泡箭头方向
   */
  mode?: 'left' | 'right'
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export interface AudioBubbleEmits {
  (e: 'delete'): void
}
```

:::
