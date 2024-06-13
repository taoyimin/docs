# 网格选择器

该组件基于[UpPopup](https://uiadmin.net/uview-plus/components/popup.html)组件进行二次封装，通常用于表单项选择网格数据，内部封装了网格数据加载与级联选择逻辑。

## 基础用法

通过双向绑定获取选中值及控制网格选择器的展示及隐藏。

```vue
<template>
  <liv-grid-picker v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## v-model参数

`v-model`支持多个参数的双向绑定。

```vue
<template>
  <liv-grid-picker
    v-model="value"
    v-model:grid-id="dictId"
    v-model:grid-name="dictName"
    v-model:grid="grid"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const gridId = ref()

const gridName = ref('')

const grid = ref()
</script>
```

## 网格范围

组件默认从用户所属网格开始加载数据，通过设置`root`属性，可以从根网格开始加载数据。并且通过`needLevel`和`showLevel`属性，可以控制需要选中的网格级别和展示的网格级别。

```vue
<template>
  <liv-grid-picker v-model="value" root :need-level="5" :show-level="6" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 插槽

通过传入`prefix`或`suffix`插槽可以指定回显区域的前后内容。

```vue
<template>
  <liv-grid-picker v-model="value">
    <template #prefix> 当前选中： </template>
    <template #suffix>
      <up-icon name="arrow-down-fill" style="margin-left: 20rpx"
    /></template>
  </liv-grid-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 选择器模式

选择器默认会渲染一个节点用于用户点击打开弹窗及选中数据后的回显，通过设置`showMode`属性为`popup`可以将选择器设置为纯弹窗模式，纯弹窗模式下不会渲染任何内容，需要自己实现选择器的打开/关闭及数据回显逻辑。

```vue
<template>
  <button @click="show = true">打开弹窗</button>
  <view>选中值： {{ value }}</view>
  <liv-grid-picker v-model="value" v-model:show="show" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const value = ref('')
</script>
```

## 属性

| 属性名            | 说明                                                                                    | 类型             | 可选值 | 默认值               |
| ----------------- | --------------------------------------------------------------------------------------- | ---------------- | ------ | -------------------- |
| v-model           | 选中的网格code                                                                          | `string`         | —      | —                    |
| v-model:grid-id   | 选中的网格id                                                                            | `string`         | —      | —                    |
| v-model:grid-name | 选中的网格名称                                                                          | `string`         | —      | —                    |
| v-model:grid      | 选中的网格对象                                                                          | `Grid`           | —      | —                    |
| v-model:show      | 是否显示                                                                                | `boolean`        | —      | false                |
| root              | 是否从根网格开始加载数据                                                                | `boolean`        | —      | false                |
| need-level        | 需要选择到的网格级别                                                                    | `number`         | —      | 0                    |
| show-level        | 需要展示到的网格级别                                                                    | `number`         | —      | 100                  |
| empty-text        | 空白页提示语                                                                            | `string`         | —      | 当前网格没有下级网格 |
| showMode          | 选择器模式，[详见](#选择器模式)                                                         | `picker` `popup` | —      | picker               |
| placeholder       | 未选择时的占位符                                                                        | `string`         | —      | 请选择               |
| placeholder-style | 指定placeholder的样式                                                                   | `StyleValue`     | —      | —                    |
| placeholder-class | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要使用深度选择器:deep() | `string`         | —      | —                    |

除了上述属性，你还可以透传[UpPopup](https://uiadmin.net/uview-plus/components/popup.html#props)组件的所有属性。

## 插槽

| 插槽名 | 说明             | 作用域 |
| ------ | ---------------- | ------ |
| prefix | 回显区域前置内容 | —      |
| suffix | 回显区域后置内容 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface GridPickerProps {
  /**
   * 是否从根网格开始加载数据
   */
  root?: boolean
  /**
   * 需要选择到的网格级别
   */
  needLevel?: number
  /**
   * 需要展示到的网格级别
   */
  showLevel?: number
  /**
   * 空白页提示语
   */
  emptyText?: string
  /**
   * 显示模式，popup为纯弹窗，需要自己实现打开/关闭、回显等逻辑
   */
  showMode?: 'picker' | 'popup'
  /**
   * 未选择时的占位符
   */
  placeholder?: string
  /**
   * 指定placeholder的样式
   */
  placeholderStyle?: StyleValue
  /**
   * 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要使用深度选择器:deep()
   */
  placeholderClass?: string
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
