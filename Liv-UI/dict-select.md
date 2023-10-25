# Dict Select 字典选择器

用于选择字典值，内部封装了字典请求接口，只需传入字典类型即可。

## 基础用法

:::demo
```vue
<template>
  <liv-dict-select v-model="value" dict-type="status"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 设置默认值

通过value可以设置默认选中的字典值

:::demo
```vue
<template>
  <liv-dict-select v-model="value" dict-type="status"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('1')
</script>
```
:::

## 属性透传

Dict Select基于[ElSelect](https://element-plus.org/zh-CN/component/input.html#attributes)封装，所以你可以传入[ElSelect](https://element-plus.org/zh-CN/component/input.html#attributes)的所有属性和事件

:::demo
```vue
<template>
  <liv-dict-select 
    v-model="value" 
    dict-type="status" 
    clearable
    size="large"
    placeholder="自定义提示"
    @change='handleChange'/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
const handleChange = e => {
    console.log('字典选中的值改变了:', e)
}
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 选中项绑定值 | `string` | — | — |
| dict-type | 字典类型 | `string` | — | — |

## 事件

| 事件名 | 说明 | 类型 |
| ------ | ------ | ------ |
| change | 当 modelValue 改变时触发 | `Function` |