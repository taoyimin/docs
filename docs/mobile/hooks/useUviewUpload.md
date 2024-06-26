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

## 限制上传文件格式

```vue
<template>
  <view>网络路径：{{ urls }}</view>
  <up-upload
    :fileList="files"
    @afterRead="afterRead"
    @delete="deleteFile"
    multiple
    accept="file"
    :maxCount="3"
  >
    <up-button>文件上传</up-button>
  </up-upload>
</template>

<script lang="ts" setup>
import { useUviewUpload } from 'liv-uni'

const { files, urls, afterRead, deleteFile } = useUviewUpload({
  extension: ['docx', 'pdf']
})
</script>
```

## 参数

| 参数名    | 说明                 | 类型       | 默认值 |
| --------- | -------------------- | ---------- | ------ | --- |
| extension | 允许上传文件的扩展名 | `string[]` | —      | []  |

## Result

| 参数名     | 说明                   | 类型                       | 默认值 |
| ---------- | ---------------------- | -------------------------- | ------ | --- |
| urls       | 上传后的文件地址       | `string[]`                 | —      | []  |
| files      | 选中的文件列表         | `UploadFile[]`             | —      | []  |
| afterRead  | 读取后的处理函数       | `(e: UploadEvent) => void` | —      | —   |
| deleteFile | 点击删除按钮的处理函数 | `(e: UploadEvent) => void` | —      | —   |

::: details 类型声明

```ts
interface UploadEvent {
  index: number
  name: string
  file: UploadFile | UploadFile[]
}

export interface UploadFile {
  url: string
  relativeUrl: string
  status: 'uploading' | 'success' | 'failed'
  message?: string
  name: string
  size?: number
}

export interface UploadOptions {
  extension?: string[]
}
```

:::
