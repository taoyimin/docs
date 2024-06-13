# 日历选择器

该组件基于[UpCalendar](https://uiadmin.net/uview-plus/components/calendar.html)组件进行二次封装，通常用于表单项选择单个或多个日期。

## 基础用法

```vue
<template>
  <liv-calendar v-model="value" />
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
  <liv-calendar v-model="value">
    <template #prefix> 当前选中： </template>
    <template #suffix>
      <up-icon name="arrow-down-fill" style="margin-left: 20rpx"
    /></template>
  </liv-calendar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 选择器模式

日历选择器默认会渲染一个节点用于用户点击打开弹窗及选中数据后的回显，通过设置`showMode`属性为`popup`可以将日历选择器设置为纯弹窗模式，纯弹窗模式下不会渲染任何内容，需要自己实现日历选择器的打开/关闭及数据回显逻辑。

```vue
<template>
  <button @click="show = true">打开弹窗</button>
  <view>选中值： {{ value }}</view>
  <liv-calendar v-model="value" v-model:show="show" showMode="popup" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)

const value = ref('')
</script>
```

## 属性

| 属性名            | 说明                                                                                                          | 类型                        | 可选值 | 默认值     |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------- | ------ | ---------- |
| v-model           | 选中的日期                                                                                                    | `string`                    | —      | —          |
| v-model:show      | 是否显示                                                                                                      | `boolean`                   | —      | false      |
| mode              | 选择日期模式                                                                                                  | `single` `multiple` `range` | —      | single     |
| format            | 日期回显的格式，不会影响v-model绑定的日期格式                                                                 | `string`                    | —      | YYYY-MM-DD |
| suffix            | v-model绑定日期的后缀，不会影响日期的回显。例如v-model绑定的日期格式需要带时分秒，可以设置该属性为' 00:00:00' | `string`                    | —      | —          |
| showMode          | 选择器模式，[详见](#选择器模式)                                                                               | `picker` `popup`            | —      | picker     |
| placeholder       | 未选择时的占位符                                                                                              | `string`                    | —      | 请选择     |
| placeholder-style | 指定placeholder的样式                                                                                         | `StyleValue`                | —      | —          |
| placeholder-class | 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要使用深度选择器:deep()                       | `string`                    | —      | —          |

除了上述属性，你还可以透传[UpCalendar](https://uiadmin.net/uview-plus/components/calendar.html#props)组件的所有属性。

## 插槽

| 插槽名 | 说明             | 作用域 |
| ------ | ---------------- | ------ |
| prefix | 回显区域前置内容 | —      |
| suffix | 回显区域后置内容 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface CalendarProps {
  /**
   * 选择日期模式
   */
  mode?: 'single' | 'multiple' | 'range'
  /**
   * 日期回显的格式，不会影响v-model绑定的日期格式
   */
  format?: string
  /**
   * v-model绑定日期的后缀，不会影响日期的回显。例如v-model绑定的日期格式需要带时分秒，可以设置该属性为' 00:00:00'
   */
  suffix?: string
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