# 文件上传

内部封装了文件选取、删除、上传等逻辑，配合UView-Plus的[Uplpad](https://uiadmin.net/uview-plus/components/upload.html)组件用于快速实现文件上传相关业务。

## 基础用法

```vue
<template>
  <view>网络路径：{{ urls }}</view>
  <up-upload
    :fileList="files"
    @afterRead="afterRead"
    @delete="deleteFile"
    multiple
    :maxCount="3"
  ></up-upload>
</template>

<script lang="ts" setup>
import { useUviewUpload } from 'liv-uni'

const { files, urls, afterRead, deleteFile } = useUviewUpload()
</script>
```

## Result

| 参数名     | 说明                       | 类型                       | 默认值 |
| ---------- | -------------------------- | -------------------------- | ------ |
| files      | 选中的文件列表             | `UploadFile[]`             | []     |
| urls       | 上传后的文件地址，逗号拼接 | `string`                   | —      |
| afterRead  | 读取后的处理函数           | `(e: UploadEvent) => void` | —      |
| deleteFile | 点击删除按钮的处理函数     | `(e: UploadEvent) => void` | —      |

::: details 类型声明

```ts
interface UploadEvent {
  index: number
  name: string
  file: UploadFile | UploadFile[]
}

interface UploadFile {
  url: string
  relativeUrl: string
  status: 'uploading' | 'success' | 'failed'
  message: string
}
```

:::
