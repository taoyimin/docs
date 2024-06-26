# 字典多选框

基于[DataCheckbox](./data-checkbox.md)组件进行二次封装，支持展示一级、二级、三级字典，并且支持更多参数的双向绑定。

## 基础用法

传入`dictType`或`parentId`属性即可完成数据列表的渲染。

```vue
<template>
  <liv-dict-checkbox v-model="value" dict-type="eventType" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
</script>
```

## v-model参数

`v-model`支持多个参数的双向绑定。

```vue
<template>
  <liv-dict-checkbox
    v-model="value"
    v-model:dict-id="dictId"
    v-model:dict-name="dictName"
    v-model:dict="dict"
    dict-type="eventType"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])

const dictId = ref([])

const dictName = ref([])

const dict = ref([])
</script>
```

## 属性

| 属性名            | 说明           | 类型       | 可选值 | 默认值 |
| ----------------- | -------------- | ---------- | ------ | ------ |
| v-model           | 选中的字典code | `string[]` | —      | []     |
| v-model:dict-id   | 选中的字典id   | `number[]` | —      | []     |
| v-model:dict-name | 选中的字典名称 | `string[]` | —      | []     |
| v-model:dict      | 选中的字典对象 | `Dict[]`   | —      | []     |
| dict-type         | 字典类型       | `string`   | —      | —      |
| parent-id         | 父级ID         | `number`   | —      | —      |

除了上述属性，你还可以透传[LivDataCheckbox](./data-checkbox.md)组件的所有属性。

## 事件

| 事件名 | 说明       | 类型       | 可选值            | 默认值 |
| ------ | ---------- | ---------- | ----------------- | ------ |
| change | 选中值改变 | `Function` | `(value) => void` | —      |

## Exposes

| 名称 | 说明     | 类型     | 可选值 | 默认值 |
| ---- | -------- | -------- | ------ | ------ |
| data | 组件数据 | `Dict[]` | —      | []     |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'
import DictCheckbox from './dict-checkbox.vue'

export interface DictCheckboxProps {
  /**
   * 字典类型
   */
  dictType?: string
  /**
   * 父级ID
   */
  parentId?: number
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export type DictCheckboxInstance = InstanceType<typeof DictCheckbox>
```

:::
