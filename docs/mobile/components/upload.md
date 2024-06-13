# 图片上传

基于[UpUpload](https://uiadmin.net/uview-plus/components/upload.html)组件进行二次封装，内部实现了文件上传相关逻辑，可用于快速实现图片上传功能。

## 基础用法

```vue
<template>
  <liv-upload v-model="url" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref('')
</script>
```

## 属性

| 属性名  | 说明                           | 类型     | 可选值 | 默认值 |
| ------- | ------------------------------ | -------- | ------ | ------ |
| v-model | 图片上传成功后的地址，逗号拼接 | `string` | —      | —      |

除了上述属性，你还可以透传[UpUpload](https://uiadmin.net/uview-plus/components/upload.html#props)组件的所有属性。

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface UploadProps {
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
