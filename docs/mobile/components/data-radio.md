# 单选框

该组件基于[UpRadioGroup](https://uiadmin.net/uview-plus/components/radio.html)组件进行二次封装，通常用于表单项单选数据，只需传入对应的数据即可渲染出单选列表。

## 基础用法

传入数据集合，通过双向绑定获取选中值。

```vue
<template>
  <liv-data-radio v-model="value" :data="statusData" />
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
  <liv-data-radio
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

## 属性

| 属性名    | 说明                               | 类型                  | 可选值 | 默认值 |
| --------- | ---------------------------------- | --------------------- | ------ | ------ |
| v-model   | 选中的value                        | `T[keyof T]`          | —      | —      |
| data      | 单选框数据                         | `T[] \| Promise<T[]>` | —      | —      |
| label-key | 指定选项标签为选项对象的某个属性值 | `keyof T`             | —      | label  |
| value-key | 指定选项的值为选项对象的某个属性值 | `keyof T`             | —      | value  |

除了上述属性，你还可以透传[UpRadioGroup](https://uiadmin.net/uview-plus/components/radio.html#radiogroup-props)组件的所有属性。

## Exposes

| 名称 | 说明     | 类型  | 可选值 | 默认值 |
| ---- | -------- | ----- | ------ | ------ |
| data | 组件数据 | `T[]` | —      | []     |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'
import { ComponentExposed } from 'vue-component-type-helpers'
import DataRadio from './data-radio.vue'

export interface DataRadioProps<T> {
  /**
   * 单选框数据
   */
  data: T[] | Promise<T[]>
  /**
   * 列表中展示的字段名
   */
  labelKey?: keyof T
  /**
   * 选中后绑定的字段名
   */
  valueKey?: keyof T
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export type DataRadioInstance = ComponentExposed<typeof DataRadio>
```

:::
