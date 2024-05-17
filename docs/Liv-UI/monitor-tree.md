# Monitor Tree 监控树

用于选择监控网格，内部封装了监控网格相关请求接口，在[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)的基础上扩展了双向绑定等功能，默认只支持单选。

:::tip 提示
由于接口调用限制，演示数据只展示到市级数据。
:::

## 基础用法

:::demo
```vue
<template>
  <liv-monitor-tree v-model="gridCode"/>
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
  <liv-monitor-tree
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
  <liv-monitor-tree v-model="gridCode"/>
  <liv-monitor-tree v-model:grid-id="gridId"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('3601')
const gridId = ref('423642')
</script>
```
:::

## 属性&事件&插槽透传

Monitor Tree基于[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)封装，所以你可以传入[ElTree](https://element-plus.org/zh-CN/component/tree.html#属性)的所有属性、事件和插槽。

:::demo
```vue
<template>
  <liv-monitor-tree
    v-model="gridCode"
    accordion
    :expand-on-click-node="false"
    @node-click="handleNodeClick"
  >
    <template v-if="!$slots['default']" #default="{ data }">
      <span
        >{{ data.gridName }}({{ data.gridCode }})
        <span v-if="data.monitorCount" class="monitor-count">({{ data.monitorCount }}路)</span>
      </span>
    </template>
  </liv-monitor-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const gridCode = ref('')

const handleNodeClick = (e) => {
  ElMessage.success(`点击了节点:${JSON.stringify(e)}`)
}
</script>

<style lang="scss" scoped>
.monitor-count {
  font-weight: bold;
  color: red;
}
</style>

```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| model-value / v-model | 选中项绑定值，默认绑定`gridCode` | `string` | — | — |
| grid-id / v-model:grid-id | 选中项绑定值，绑定`gridId` | `string` | — | — |
| grid-name / v-model:grid-name | 选中项绑定值，绑定`gridName` | `string` | — | — |
| grid / v-model:grid | 选中项绑定值，绑定`MonitorGrid` | `MonitorGrid` | — | — |
| device-model | 根据监控厂家查询 | `string` | — |  — |
| device-type | 根据监控类型查询 | `string` | — | — |
| status | 根据在线状态查询 1：在线 0：离线 | `string` | — | — |

::: details 类型声明
```ts
/** 监控网格类型 */
export interface MonitorGrid {
  /** 网格编码 */
  gridCode: string;
  /** 网格id */
  gridId: string;
  /** 网格名称 */
  gridName: string;
  /** 网格级别 */
  gridLevel: string;
  /** 是否叶子节点 */
  isLeaf: boolean;
  /** 当前网格监控数量 */
  monitorCount: number;
}
```
:::