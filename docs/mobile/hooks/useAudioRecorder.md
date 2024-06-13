# 语音录制

内部封装了麦克风权限申请、语音录制等逻辑，用于快速实现录音相关业务，Web端基于[recorder-core](https://github.com/xiangyuecn/Recorder)库实现，小程序端基于[RecorderManager](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html)API实现。

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

## Params

| 参数名     | 说明                 | 类型      | 默认值 |
| ---------- | -------------------- | --------- | ------ |
| autoUpload | 是否自动上传录音文件 | `boolean` | false  |

## Result

| 参数名         | 说明             | 类型                     | 默认值 |
| -------------- | ---------------- | ------------------------ | ------ |
| isRecording    | 是否正在录制     | `boolean`                | false  |
| audioPath      | 录音文件本地路径 | `string`                 | —      |
| url            | 录音文件网络路径 | `string`                 | —      |
| duration       | 录音时长         | `number`                 | 0      |
| startRecord    | 开始录音         | `() => void`             | —      |
| stopRecord     | 结束录音         | `() => void`             | —      |
| reset          | 重置录音         | `() => void`             | —      |
| getRecordScope | 申请录音权限     | `() => Promise<boolean>` | —      |
