# 字典单选框

基于[DataRadio](./data-radio.md)组件进行二次封装，支持展示一级、二级、三级字典，并且支持更多参数的双向绑定。

## 基础用法

传入`dictType`或`parentId`属性即可完成数据列表的渲染。

```vue
<template>
  <liv-data-radio v-model="value" dict-type="eventType" />
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
  <liv-data-radio
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
  <liv-data-radio
    v-model="parentValue"
    v-model:dict-id="parentId"
    dict-type="eventType"
  />
  <liv-data-radio v-model="childValue" :parent-id="parentId" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const parentValue = ref('')

const childValue = ref('')

const parentId = ref()
</script>
```

## 属性

| 属性名            | 说明           | 类型     | 可选值 | 默认值 |
| ----------------- | -------------- | -------- | ------ | ------ |
| v-model           | 选中的字典code | `string` | —      | —      |
| v-model:dict-id   | 选中的字典id   | `number` | —      | —      |
| v-model:dict-name | 选中的字典名称 | `string` | —      | —      |
| v-model:dict      | 选中的字典对象 | `Dict`   | —      | —      |
| dict-type         | 字典类型       | `string` | —      | —      |
| parent-id         | 父级ID         | `number` | —      | —      |

除了上述属性，你还可以透传[LivDataRadio](./data-radio.md)组件的所有属性。

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface DictRadioProps {
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
