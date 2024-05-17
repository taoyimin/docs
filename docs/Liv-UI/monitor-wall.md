# Monitor Wall 监控墙

该组件对[MonitorPlayer](/Liv-UI/monitor-player)组件进行了二次封装，内部实现了数据加载、分屏切换等逻辑，可用于快速实现视频墙功能。

## 基础用法

:::demo
```vue
<template>
  <liv-monitor-wall class="monitor-wall" />
</template>

<style scoped>
.monitor-wall {
  height: 400px;
  width: 100%;
}
</style>
```
:::

## 可选属性

通过传入`row`和`column`属性可以控制分屏数，传入`controls`属性可以控制是否显示控制栏，点击查看[更多属性](#属性)。

:::demo
```vue
<template>
  <liv-monitor-wall 
    class="monitor-wall" 
    grid-code="36"
    device-model="zhyy"
    device-type="1"
    :row="3" 
    :column="3" 
    :gap="2"
    controls 
  />
</template>

<style scoped>
.monitor-wall {
  height: 400px;
  width: 100%;
}
</style>
```
:::

## 分屏按钮

通过传入`split-options`属性可以生成对应的分屏按钮。

:::demo
```vue
<template>
  <liv-monitor-wall 
    class="monitor-wall" 
    :row="2"
    :column="3"
    :split-options="splitOptions" 
    controls 
  />
</template>

<script lang="ts" setup>
const splitOptions = [
  {
    label: '2x3',
    row: 2,
    column: 3
  },
  {
    label: '3x2',
    row: 3,
    column: 2
  }
]
</script>

<style scoped>
.monitor-wall {
  height: 400px;
  width: 100%;
}
</style>
```
:::

## 自定义切换逻辑

组件提供了`previous`、`next`和`refresh`等切换方法，结合双向绑定可以实现自己的切换逻辑。

:::demo
```vue
<template>
  <ul>
    <li>
      行数：
      <el-radio-group v-model="row">
        <el-radio :label="1">一行</el-radio>
        <el-radio :label="2">两行</el-radio>
        <el-radio :label="3">三行</el-radio>
      </el-radio-group>
    </li>
    <li>
      列数：
      <el-radio-group v-model="column">
        <el-radio :label="1">一列</el-radio>
        <el-radio :label="2">两列</el-radio>
        <el-radio :label="3">三列</el-radio>
      </el-radio-group>
    </li>
    <li>轮询：<el-switch v-model="polling"></el-switch></li>
  </ul>
  <liv-monitor-wall
    ref="monitorWallRef"
    class="monitor-wall"
    v-model:row="row"
    v-model:column="column"
  />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const monitorWallRef = ref()
const row = ref(2)
const column = ref(2)
const polling = ref(true)
let timer = null

watchEffect(() => {
  if (polling.value) {
    ElMessage.success('开始轮询')
    timer = setInterval(() => {
      monitorWallRef.value?.next()
    }, 5000)
  } else {
    ElMessage.success('结束轮询')
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }
})
</script>

<style scoped>
.monitor-wall {
  height: 400px;
  width: 100%;
}
</style>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| row / v-model:row | 网格墙行数 | `number` | — | 2 |
| column / v-model:column | 网格墙列数 | `number` | — | 2 |
| gap | 行和列之间的间距 | `number` | — | 10 |
| controls | 是否显示控制器 | `boolean` | — | false |
| grid-code | 根据网格编码查询 | `string` | — | — |
| device-model | 根据监控厂家查询 | `string` | — |  — |
| device-type | 根据监控类型查询 | `string` | — | — |
| status | 根据在线状态查询 1：在线 0：离线 | `string` | — | — |
| split-options | 分屏按钮配置 | `Array<SplitOption>` | — | — |

### SplitOption

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| label | 按钮名称 | `string` | — | — |
| row | 分屏行数 | `number` | — | — |
| column | 分屏列数 | `number` | — | — |

## Exposes

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| previous | 加载上一页 | `Function` |  `() => void` | — |
| next | 加载下一页 | `Function` |  `() => void` | — |
| refresh | 刷新当前页 | `Function` | `() => void` | — |