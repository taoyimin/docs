# 字典选择器

基于[LivDataPicker](./data-picker.md)组件进行二次封装，支持展示一级、二级、三级字典，并且支持更多参数的双向绑定。

## 基础用法

传入`dictType`或`parentId`属性即可完成数据列表的渲染。

```vue
<template>
  <liv-dict-picker v-model="value" dict-type="eventType" />
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
  <liv-dict-picker
    v-model="value"
    v-model:dict-id="dictId"
    v-model:dict-name="dictName"
    v-model:dict="dict"
    dict-type="eventType"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const dictId = ref()

const dictName = ref('')

const dict = ref()
</script>
```

## 多级字典联动

在实现动态表单功能时，通常需要根据父级字典选中的值去初始化子级字典的数据。通过带参数的双向绑定，可以轻松实现多级字典之间的联动。

```vue
<template>
  <liv-dict-picker
    v-model="parentValue"
    v-model:dict-id="parentId"
    dict-type="eventType"
    title="请选择问题类型"
  />
  <liv-dict-picker
    v-model="childValue"
    :parent-id="parentId"
    title="请选择问题描述"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const parentValue = ref('')

const childValue = ref('')

const parentId = ref()
</script>
```

## 插槽

通过传入`prefix`或`suffix`插槽可以指定回显区域的前后内容。

```vue
<template>
  <liv-dict-picker v-model="value">
    <template #prefix> 当前选中： </template>
    <template #suffix>
      <up-icon name="arrow-down-fill" style="margin-left: 20rpx"
    /></template>
  </liv-dict-picker>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 属性

| 属性名            | 说明           | 类型      | 可选值 | 默认值 |
| ----------------- | -------------- | --------- | ------ | ------ |
| v-model           | 选中的字典code | `string`  | —      | —      |
| v-model:dict-id   | 选中的字典id   | `number`  | —      | —      |
| v-model:dict-name | 选中的字典名称 | `string`  | —      | —      |
| v-model:dict      | 选中的字典对象 | `Dict`    | —      | —      |
| v-model:show      | 是否显示       | `boolean` | —      | false  |
| dict-type         | 字典类型       | `string`  | —      | —      |
| parent-id         | 父级ID         | `number`  | —      | —      |

除了上述属性，你还可以透传[LivDataPicker](./data-picker.md)组件的所有属性。

## 插槽

| 插槽名 | 说明             | 作用域 |
| ------ | ---------------- | ------ |
| prefix | 回显区域前置内容 | —      |
| suffix | 回显区域后置内容 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface DictPickerProps {
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
```

:::
