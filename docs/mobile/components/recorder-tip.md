# 录音提示

提示当前正在录音以及录音时长，通常配合[useAudioRecorder](../hooks/useAudioRecorder.md)一起使用。

## 基础用法

```vue
<template>
  <view>正在录制：{{ isRecording }}</view>
  <view>本地路径：{{ audioPath }}</view>
  <view>网络路径：{{ url }}</view>
  <view>录音时长：{{ duration }}</view>
  <up-button @touchstart="startRecord" @touchend="stopRecord">
    {{ isRecording ? '正在录音' : '按住说话' }}
  </up-button>
  <up-button @click="reset">重置</up-button>
  <liv-recorder-tip v-model:show="isRecording" />
</template>

<script lang="ts" setup>
import { useAudioRecorder } from 'liv-uni'

const {
  isRecording,
  audioPath,
  url,
  duration,
  startRecord,
  stopRecord,
  reset
} = useAudioRecorder({
  autoUpload: true
})
</script>
```

## 属性

| 属性名       | 说明     | 类型      | 可选值 | 默认值 |
| ------------ | -------- | --------- | ------ | ------ |
| v-model:show | 是否显示 | `boolean` | —      | false  |
| format       | 时间格式 | `string`  | —      | mm:ss  |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface RecorderTipProps {
  /**
   * 时间格式
   */
  format?: string
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
