# useCountUp 计时器

内部封装了计时逻辑，用于快速实现计时相关业务。

## 基础用法

:::demo
```vue
<template>
  <p>已打卡{{ count }}秒</p>
  <el-button type="primary" @click="start">开始打卡</el-button>
</template>

<script lang="ts" setup>
import { useCountUp } from '@szxc/utils'

const { count, start } = useCountUp()
</script>
```
:::

## 其他用法

通过传入`second`参数可以设置最大计时时间，默认`Infinity`，使用`pause`方法可以暂停计时，使用`reset`方法可以重置计时。

:::demo
```vue
<template>
  <p>已打卡{{ count }}秒</p>
  <el-button type="primary" @click="start">开始打卡</el-button>
  <el-button type="primary" @click="pause">暂停打卡</el-button>
  <el-button type="primary" @click="reset">重置打卡</el-button>
</template>

<script lang="ts" setup>
import { useCountUp } from '@szxc/utils'

const { count, start, pause, reset } = useCountUp(10)
</script>
```
:::

## Params

| 参数名 | 说明 | 类型  | 默认值 |
| ------ | ------ | ------ | ------ |
| second | 最大计时秒数 | `number` | `Infinity` |

## Result

| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| count | 已计时秒数 | `number` | 0 |
| timer | 计时器id | `number` | — |
| start | 开始计时 | `() => void` | — |
| pause | 暂停计时 | `() => void` | — |
| reset | 重置计时 | `() => void` | — |