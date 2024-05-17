# Grid Tree 网格树

用于选择网格，内部封装了网格相关请求接口，在[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)的基础上扩展了双向绑定等功能，默认只支持单选。

:::tip 提示
由于接口调用限制，演示数据只展示到区县数据。
:::

## 基础用法

:::demo
```vue
<template>
  <liv-grid-tree v-model="gridCode"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')
</script>
```
:::

## v-model参数

`v-model`支持多个参数的双向绑定。

:::demo
```vue
<template>
  <ul>
    <li>gridCode:{{ gridCode }}</li>
    <li>gridId:{{ gridId }}</li>
    <li>gridName:{{ gridName }}</li>
    <li>grid:{{ grid }}</li>
  </ul>
  <liv-grid-tree
    v-model="gridCode"
    v-model:grid-id="gridId"
    v-model:grid-name="gridName"
    v-model:grid="grid" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')
const gridId = ref('')
const gridName = ref('')
const grid = ref(null)
</script>
```
:::

## 设置默认值

通过`v-model`和`v-model:grid-id`可以设置默认选中的网格。

:::demo
```vue
<template>
  <liv-grid-tree v-model="gridCode"/>
  <liv-grid-tree v-model:grid-id="gridId"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('3601')
const gridId = ref('423642')
</script>
```
:::

## 属性&事件&插槽透传

Grid Tree基于[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)封装，所以你可以传入[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)的所有属性、事件和插槽。

:::demo
```vue
<template>
  <liv-grid-tree 
    v-model="gridCode"
    accordion
    :expand-on-click-node="false"
    @node-click="handleNodeClick">
    <template #default="{ data }">
      <span>{{ data.gridName }}({{ data.gridCode }})</span>
    </template>
  </liv-grid-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')

const handleNodeClick = (e) => {
  ElMessage.success(`点击了节点:${JSON.stringify(e)}`)
}
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 选中项绑定值，默认绑定`gridCode` | `string` | — | — |
| grid-id / v-model:grid-id | 选中项绑定值，绑定`gridId` | `string` | — | — |
| grid-name / v-model:grid-name | 选中项绑定值，绑定`gridName` | `string` | — | — |
| grid / v-model:grid | 选中项绑定值，绑定`grid` | `Grid` | — | — |
| root | true：从根节点开始查询，false：从用户所属网格开始查询 | `boolean` | — | `false` |

::: details 类型声明
```ts
export interface Grid {
  /** 网格id */
  gridId: string;
  /** 网格code */
  gridCode: string;
  /** 网格名称 */
  gridName: string;
  /** 详细网格id */
  detailGridId: string;
  /** 详细网格名称 */
  detailGridName: string;
  /** 是否有子级网格 */
  hasChildren: boolean;
  /** 子级网格 */
  children: Grid[];
  /** 是否是叶子节点 */
  leaf: boolean;
}
```
:::