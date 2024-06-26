# 选择器

该组件基于[UpPopup](https://uiadmin.net/uview-plus/components/popup.html)组件进行二次封装，通常用于表单项选择数据，只需传入对应的数据即可渲染出数据列表。

## 基础用法

传入数据集合即可。

```vue
<template>
  <liv-data-picker v-model="value" :data="statusData" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const statusData = [
  { label: '待处理', value: '1' },
  { label: '待评价', value: '2' },
  { label: '已办结', value: '3' }
]

const value = ref('')
</script>
```

## 异步加载数据

传入返回数据的`Promise`并设置对应的`label-key`和`value-key`属性，可以实现数据的异步加载。

```vue
<template>
  <liv-data-picker
    v-model="value"
    :data="getDictList({ dicCode: 'eventType' })"
    label-key="dicSubName"
    value-key="dicSubCode"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getDictList } from '@szxc/apis'

const value = ref('')
</script>
```

## 懒加载数据

传入`lazy`属性和数据的加载方法，可以实现数据的懒加载。

```vue
<template>
  <liv-data-picker
    v-model="value"
    :data="loadData"
    lazy
    label-key="dicSubName"
    value-key="dicSubCode"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Dict, getDictList } from '@szxc/apis'

const value = ref('')

function loadData(
  reslove: (dicts: Dict[]) => void,
  reject: (reason: any) => void
) {
  getDictList({ dicCode: 'eventType' }).then(reslove).catch(reject)
}
</script>
```

## 插槽

通过传入`prefix`或`suffix`插槽可以指定回显区域的前后内容。通过传入`item`、`title`、`empty`等具名插槽，你可以自定义列表项、顶部栏、空白页的样式。

```vue
<template>
  <liv-data-picker
    v-model="value"
    :data="getDictList({ dicCode: 'eventType' })"
    label-key="dicSubName"
    value-key="dicSubCode"
  >
    <template #prefix> 当前选中： </template>
    <template #suffix>
      <up-icon name="arrow-down-fill" style="margin-left: 20rpx"
    /></template>
    <template #title>
      <view>自定义顶部栏</view>
    </template>
    <template #item="{ data }">
      <view>{{ data.dicSubName }}({{ data.dicSubCode }})</view>
    </template>
    <template #empty>
      <view>数据为空</view>
    </template>
  </liv-data-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getDictList } from '@szxc/apis'

const value = ref('')
</script>
```

## 选择器模式

选择器默认会渲染一个节点用于用户点击打开弹窗及选中数据后的回显，通过设置`showMode`属性为`popup`可以将选择器设置为纯弹窗模式，纯弹窗模式下不会渲染任何内容，需要自己实现选择器的打开/关闭及数据回显逻辑。

```vue
<template>
  <button @click="show = true">打开弹窗</button>
  <view>选中值： {{ value }}</view>
  <liv-data-picker
    v-model="value"
    v-model:show="show"
    :data="statusData"
    showMode="popup"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const statusData = [
  { label: '待处理', value: '1' },
  { label: '待评价', value: '2' },
  { label: '已办结', value: '3' }
]

const show = ref(false)

const value = ref('')
</script>
```

## 属性

| 属性名            | 说明                                                                                    | 类型                                 | 可选值 | 默认值   |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------ | ------ | -------- |
| v-model           | 选中的value                                                                             | `string`                             | —      | —        |
| v-model:show      | 是否显示                                                                                | `boolean`                            | —      | false    |
| data              | 选择器数据                                                                              | `T[] \| Promise<T[]> \| LoadData<T>` | —      | —        |
| lazy              | 是否懒加载数据，弹窗打开后再加载数据                                                    | `boolean`                            | —      | false    |
| title             | 选择器标题                                                                              | `string`                             | —      | 请选择   |
| empty-text        | 空白页提示语                                                                            | `string`                             | —      | 没有数据 |
| label-key         | 指定选项标签为选项对象的某个属性值                                                      | `keyof T`                            | —      | label    |
| value-key         | 指定选项的值为选项对象的某个属性值                                                      | `keyof T`                            | —      | value    |
| showMode          | 选择器模式，[详见](#选择器模式)                                                         | `picker` `popup`                     | —      | picker   |
| disabled          | 是否禁用                                                                                | `boolean`                            | —      | false    |
| value-style       | 指定回显文字的样式                                                                      | `StyleValue`                         | —      | —        |
| placeholder       | 未选择时的占位符                                                                        | `string`                             | —      | 请选择   |
| placeholder-style | 指定placeholder的样式                                                                   | `StyleValue`                         | —      | —        |
| placeholder-class | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要使用深度选择器:deep() | `string`                             | —      | —        |

除了上述属性，你还可以透传[UpPopup](https://uiadmin.net/uview-plus/components/popup.html#props)组件的所有属性。

## 事件

| 事件名 | 说明       | 类型       | 可选值            | 默认值 |
| ------ | ---------- | ---------- | ----------------- | ------ |
| change | 选中值改变 | `Function` | `(value) => void` | —      |

## 插槽

| 插槽名  | 说明             | 作用域                      |
| ------- | ---------------- | --------------------------- |
| prefix  | 回显区域前置内容 | —                           |
| suffix  | 回显区域后置内容 | —                           |
| item    | 自定义列表项内容 | `{ data: T, index: number}` |
| title   | 自定义标题栏内容 | —                           |
| loading | 自定义加载页内容 | —                           |
| empty   | 自定义空白页内容 | —                           |

## Exposes

| 名称 | 说明     | 类型  | 可选值 | 默认值 |
| ---- | -------- | ----- | ------ | ------ |
| data | 组件数据 | `T[]` | —      | []     |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'
import { ComponentExposed } from 'vue-component-type-helpers'
import DataPicker from './data-picker.vue'

interface LoadData<T> {
  (resolve: (data: T[]) => void, reject: (reason: any) => void): void
}

export interface DataPickerProps<T> {
  /**
   * 选择器数据
   */
  data: T[] | Promise<T[]> | LoadData<T>
  /**
   * 是否懒加载数据，弹窗打开后再加载数据
   */
  lazy?: boolean
  /**
   * 选择器标题
   */
  title?: string
  /**
   * 空白页提示语
   */
  emptyText?: string
  /**
   * 列表中展示的字段名
   */
  labelKey?: keyof T
  /**
   * 选中后绑定的字段名
   */
  valueKey?: keyof T
  /**
   * 显示模式，popup为纯弹窗，需要自己实现打开/关闭、回显等逻辑
   */
  showMode?: 'picker' | 'popup'
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 指定回显文字的样式
   */
  valueStyle?: StyleValue
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

export type DataPickerEmits<T> = {
  change: [value: T[keyof T] | undefined]
}

export type DataPickerInstance = ComponentExposed<typeof DataPicker>
```

:::
