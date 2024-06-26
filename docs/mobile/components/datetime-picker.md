# 日期选择器

该组件基于[UpDatetimePicker](https://uview-plus.jiangruyi.com/components/datetimePicker.html)组件进行二次封装，通常用于表单项选择日期。

## 基础用法

```vue
<template>
  <liv-datetime-picker v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 时间范围

通过`startDate`和`endDate`属性可以控制日期的选择范围。

```vue
<template>
  <liv-datetime-picker
    v-model="startDate"
    placeholder="请选择开始日期"
    :end-date="endDate"
  />
  <liv-datetime-picker
    v-model="endDate"
    placeholder="请选择结束日期"
    :start-date="startDate"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const startDate = ref('')

const endDate = ref('')
</script>
```

## 插槽

通过传入`prefix`或`suffix`插槽可以指定回显区域的前后内容。

```vue
<template>
  <liv-datetime-picker v-model="value">
    <template #prefix> 当前选中： </template>
    <template #suffix>
      <up-icon name="arrow-down-fill" style="margin-left: 20rpx"
    /></template>
  </liv-datetime-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 选择器模式

日期选择器默认会渲染一个节点用于用户点击打开弹窗及选中数据后的回显，通过设置`showMode`属性为`popup`可以将日期选择器设置为纯弹窗模式，纯弹窗模式下不会渲染任何内容，需要自己实现日期选择器的打开/关闭及数据回显逻辑。

```vue
<template>
  <button @click="show = true">打开弹窗</button>
  <view>选中值： {{ value }}</view>
  <liv-datetime-picker v-model="value" v-model:show="show" showMode="popup" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const value = ref('')
</script>
```

## 属性

| 属性名            | 说明                                                                                    | 类型                                  | 可选值 | 默认值             |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------- | ------ | ------------------ |
| v-model           | 选中的日期                                                                              | `string`                              | —      | —                  |
| v-model:show      | 是否显示                                                                                | `boolean`                             | —      | false              |
| mode              | 选择日期模式                                                                            | `date` `time` `datetime` `year-month` | —      | date               |
| default-date      | 默认选中的日期                                                                          | `string` `number`                     | —      | Date.now()         |
| start-date        | 最小可选的日期                                                                          | `string` `number`                     | —      | 当前时间往前推10年 |
| end-date          | 最大可选的日期                                                                          | `string` `number`                     | —      | 当前时间往后推10年 |
| format            | 日期回显的格式，不会影响v-model绑定的日期格式                                           | `string`                              | —      | YYYY-MM-DD         |
| formatValue       | v-model绑定日期的格式，不会影响日期的回显                                               | `string`                              | —      | YYYY-MM-DD         |
| showMode          | 选择器模式，[详见](#选择器模式)                                                         | `picker` `popup`                      | —      | picker             |
| disabled          | 是否禁用                                                                                | `boolean`                             | —      | false              |
| value-style       | 指定回显文字的样式                                                                      | `StyleValue`                          | —      | —                  |
| placeholder       | 未选择时的占位符                                                                        | `string`                              | —      | 请选择             |
| placeholder-style | 指定placeholder的样式                                                                   | `StyleValue`                          | —      | —                  |
| placeholder-class | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要使用深度选择器:deep() | `string`                              | —      | —                  |

除了上述属性，你还可以透传[UpDatetimePicker](https://uview-plus.jiangruyi.com/components/datetimePicker.html#props)组件的所有属性。

## 事件

| 事件名 | 说明       | 类型       | 可选值            | 默认值 |
| ------ | ---------- | ---------- | ----------------- | ------ |
| change | 选中值改变 | `Function` | `(value) => void` | —      |

## 插槽

| 插槽名 | 说明             | 作用域 |
| ------ | ---------------- | ------ |
| prefix | 回显区域前置内容 | —      |
| suffix | 回显区域后置内容 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface DatetimePickerProps {
  /**
   * 选择日期模式
   */
  mode?: 'date' | 'time' | 'datetime' | 'year-month'
  /**
   * 默认选中的日期
   */
  defaultDate?: string | number
  /**
   * 最小可选的日期
   */
  startDate?: string | number
  /**
   * 最大可选的日期
   */
  endDate?: string | number
  /**
   * 日期回显的格式，不会影响v-model绑定的日期格式
   */
  format?: string
  /**
   * v-model绑定日期的格式，不会影响日期的回显
   */
  formatValue?: string
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

export type DatetimePickerEmits = {
  change: [value: string]
}
```

:::
