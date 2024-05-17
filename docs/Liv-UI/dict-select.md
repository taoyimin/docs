# Dict Select 字典选择器

用于选择字典值，支持一级、二级、三级字典的选取，内部封装了字典请求接口，只需传入`dictType`或`parentId`即可生成字典数据。

## 基础用法

:::demo
```vue
<template>
  <liv-dict-select v-model="value1" dict-type="eventStatus"/>
  <liv-dict-select v-model="value2" :parent-id="147"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref(null)
</script>

<style scoped>
.el-select + .el-select {
  margin-top: 20px;
}
</style>
```
:::

:::tip 提示
`dictType`和`parentId`只能传入其中一个，不能同时传入。
:::

## v-model参数

`v-model`支持多个参数的双向绑定。

:::demo
```vue
<template>
  <ul>
    <li>dictCode:<span>{{ dictCode }}</span></li>
    <li>dictId:{{ dictId }}</li>
    <li>dictName:{{ dictName }}</li>
    <li>dict:{{ dict }}</li>
  </ul>
  <liv-dict-select 
    v-model="dictCode" 
    v-model:dict-id="dictId" 
    v-model:dict-name="dictName" 
    v-model:dict="dict" 
    dict-type="eventStatus"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dictCode = ref('')
const dictId = ref('')
const dictName = ref('')
const dict = ref()
</script>
```
:::

## 设置默认值

通过`v-model`和`v-model:dict-id`可以设置默认选中的字典值

:::demo
```vue
<template>
  <liv-dict-select v-model="dictCode" dict-type="eventStatus"/>
  <liv-dict-select v-model:dict-id="dictId" dict-type="eventStatus"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dictCode = ref('1')
const dictId = ref(293)
</script>

<style scoped>
.el-select + .el-select {
  margin-top: 20px;
}
</style>
```
:::

## 属性&事件&插槽透传

Dict Select基于[ElSelect](https://element-plus.org/zh-CN/component/input.html#attributes)封装，所以你可以传入[ElSelect](https://element-plus.org/zh-CN/component/input.html#attributes)的所有属性、事件和插槽。

:::demo
```vue
<template>
  <liv-dict-select 
    v-model="dictCode" 
    dict-type="eventStatus" 
    clearable
    size="large"
    placeholder="自定义提示"
    @change='handleChange'>
    <template #header>
      <el-checkbox>全选</el-checkbox>
    </template>
    <template #footer>
      <el-button>确定</el-button>
    </template>
  </liv-dict-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dictCode = ref('')

const handleChange = (e) => {
  ElMessage.success(`字典选中的值改变了:${e}`)
}
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 选中项绑定值，默认绑定`dictCode` | `string` `Array<string>` | — | — |
| dict-id / v-model:dict-id | 选中项绑定值，绑定`dictId` | `number` `Array<number>` | — | — |
| dict-name / v-model:dict-name | 选中项绑定值，绑定`dictName` | `string` `Array<string>` | — | — |
| dict / v-model:dict | 选中项绑定值，绑定`dict`对象 | `Dict` `Array<Dict>` | — | — |
| dict-type | 字典类型 | `string` | — | — |
| parent-id | 父级id | `number` | — | — |

::: details 类型声明
```ts
export interface Dict {
  /** 一级字典Id */
  dicId: number;
  /** 一级字典值 */
  dicCode: string;
  /** 一级字典名称 */
  dicName: string;
  /** 二级字典Id */
  dicSubId: number;
  /** 二级字典值 */
  dicSubCode: string;
  /** 二级字典名称 */
  dicSubName: string;
  /** 三级字典Id */
  dicThrId: number;
  /** 三级字典值 */
  dicThrCode: string;
  /** 三级字典名称 */
  dicThrName: string;
}
```
:::