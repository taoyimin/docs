# Grid Cascader 网格选择器

用于选择网格，内部封装了网格相关请求接口，只需传入gridCode即可。

:::tip 提示
由于接口调用限制，演示数据只展示到区县数据。
:::

## 基础用法

:::demo
```vue
<template>
  <liv-grid-cascader v-model="gridCode"/>
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
    <li>gridCode:<span>{{ gridCode }}</span></li>
    <li>gridId:{{ gridId }}</li>
    <li>gridName:{{ gridName }}</li>
  </ul>
  <liv-grid-cascader 
    v-model="gridCode" 
    v-model:grid-id="gridId" 
    v-model:grid-name="gridName"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')
const gridId = ref('')
const gridName = ref('')
</script>
```
:::

## 设置默认值

通过`v-model`和`v-model:grid-id`可以设置默认选中的网格。

:::demo
```vue
<template>
  <liv-grid-cascader v-model="gridCode"/>
  <liv-grid-cascader v-model:grid-id="gridId"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('3601')
const gridId = ref('423642')
</script>
```
:::

## 控制网格级别

通过`show-level`可以控制网格数据展示到哪一个级别。

:::demo
```vue
<template>
  <liv-grid-cascader v-model="gridCode" :show-level="2"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')
</script>
```
:::

## 属性&事件&插槽透传

Grid Cascader基于[ElCascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes)封装，所以你可以传入[ElCascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes)的所有属性、事件和插槽。

:::demo
```vue
<template>
  <liv-grid-cascader 
    v-model="gridCode"
    placeholder="自定义提示"
    size="large"
    clearable
    :show-all-levels="false"
    :props="{ multiple: true }"
    @change="handleChange">
    <template #default="{ data }">
      <span>{{ data.gridName }}({{ data.gridCode }})</span>
    </template>
  </liv-grid-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')

const handleChange = (e) => {
  ElMessage.success(`网格选中的值改变了:${e}`)
}
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 选中项绑定值，默认绑定`gridCode` | `string` `string[]` | — | — |
| grid-id / v-model:grid-id | 选中项绑定值，绑定`gridId` | `string` `string[]` | — | — |
| grid-name / v-model:grid-name | 选中项绑定值，绑定`gridName` | `string` `string[]` | — | — |
| root | true：从根节点开始查询，false：从用户所属网格开始查询 | `boolean` | — | `false` |
| show-level | 展示到哪个网格级别，-1表示展示到最后一级 | `number` | — | `-1` |
| togglePopperVisible | 选中后是否自动关闭下拉面板 | `boolean` | — | `false` |

::: details 类型声明
```ts
export interface Grid {
  /** 网格id */
  gridId: string;
  /** 网格code */
  gridCode: string;
  /** 网格名称 */
  gridName: string;
  /** 网格级别 */
  level: string;
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