# 图片上传

基于[UpUpload](https://uiadmin.net/uview-plus/components/upload.html)组件进行二次封装，内部实现了文件上传相关逻辑，可用于快速实现图片上传功能。

## 基础用法

```vue
<template>
  <liv-upload v-model="url" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref([])
</script>
```

## 设置已上传文件

通过给`v-model`初始值可以设置默认已上传文件列表。

```vue
<template>
  <liv-upload v-model="url" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref([
  '/ruralLivingEnv/2024-6/d1b145d2-746e-4328-873f-5afdd7b487c5.png'
])
</script>
```

## 限制上传文件格式

通过`extension`可以限制上传文件的格式。

```vue
<template>
  <liv-upload v-model="url" accept="file" :extension="['docx', 'pdf']" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref([])
</script>
```

## 自定义上传按钮

通过传入默认插槽可以自定义上传按钮的样式。

```vue
<template>
  <liv-upload v-model="url" accept="file" :extension="['docx', 'pdf']">
    <view>自定义上传按钮</view>
  </liv-upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const url = ref([])
</script>
```

## 属性

| 属性名            | 说明                 | 类型           | 可选值                         | 默认值 |
| ----------------- | -------------------- | -------------- | ------------------------------ | ------ |
| v-model           | 已上传的图片地址     | `string[]`     | —                              | []     |
| v-model:file-list | 已上传的文件列表     | `UploadFile[]` | —                              | []     |
| accept            | 接受的文件类型       | `Accept`       | `image` `video` `media` `file` | image  |
| extension         | 允许上传文件的扩展名 | `string[]`     | —                              | []     |

除了上述属性，你还可以透传[UpUpload](https://uiadmin.net/uview-plus/components/upload.html#props)组件的所有属性。

## 插槽

| 插槽名  | 说明     | 作用域 |
| ------- | -------- | ------ |
| default | 上传按钮 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

type Accept = 'image' | 'video' | 'media' | 'file'

export interface UploadProps {
  /**
   * 接受的文件类型
   */
  accept?: Accept
  /**
   * 允许上传文件的扩展名
   */
  extension?: string[]
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
