# useCountDown 倒计时器

内部封装了倒计时逻辑，用于快速实现倒计时相关业务。

## 基础用法

:::demo
```vue
<template>
  <el-button type="primary" :disabled="timer !== null" @click="start">
    {{ timer ? `${count}s后重新发送` : '发送验证码' }}
  </el-button>
</template>

<script lang="ts" setup>
import { useCountDown } from '@szxc/utils'

const { count, timer, start } = useCountDown()
</script>
```
:::
:::tip 提示
可以通过`timer`是否为`null`来判断倒计时器是否正在运行。
:::

## 其他用法

通过传入`second`参数可以设置倒计时时间，默认60秒，使用`pause`方法可以暂停倒计时，使用`reset`方法可以重置倒计时。

:::demo
```vue
<template>
  <el-button v-if="count" type="primary" :disabled="timer !== null" @click="start">
    {{ timer ? `正在阅读隐私协议(${count}s)` : '阅读用户隐私协议' }}
  </el-button>
  <el-button type="success" v-else>我已阅读隐私协议</el-button>
  <el-button type="warning" @click="pause">暂停</el-button>
  <el-button type="danger" @click="reset">重置</el-button>
</template>

<script lang="ts" setup>
import { useCountDown } from '@szxc/utils'

const { count, timer, start, pause, reset } = useCountDown(10)
</script>
```
:::

## Params

| 参数名 | 说明 | 类型  | 默认值 |
| ------ | ------ | ------ | ------ |
| second | 倒计时初始秒数 | `number` | 60 |

## Result

| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| count | 倒计时剩余秒数 | `number` | 60 |
| timer | 计时器id | `number` | — |
| start | 开始倒计时 | `() => void` | — |
| pause | 暂停倒计时 | `() => void` | — |
| reset | 重置倒计时 | `() => void` | — |