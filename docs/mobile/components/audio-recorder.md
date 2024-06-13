# 语音录制

该组件基于[LivAudioBubble](./audio-bubble.md)组件、[LivRecorderTip](./recorder-tip.md)组件与[useAudioRecorder](../hooks/useAudioRecorder.md)进行二次封装，内部实现了语音录制、提示、上传等逻辑，可用于快速实现语音录制功能。

## 基础用法

```vue
<template>
  <liv-audio-recorder v-model="url" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref('')
</script>
```

## 属性

| 属性名  | 说明                 | 类型     | 可选值 | 默认值 |
| ------- | -------------------- | -------- | ------ | ------ |
| v-model | 语音上传成功后的地址 | `string` | —      | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface AudioRecorderProps {
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
