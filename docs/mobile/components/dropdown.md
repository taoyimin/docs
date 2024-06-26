# 下拉菜单

在组件下方到屏幕底部之间弹出一个菜单。

## 基础用法

通过`reference`插槽来指定触发`dropdown`显示的元素。

```vue
<template>
  <liv-dropdown>
    <template #reference>
      <view>打开下拉菜单</view>
    </template>
    <view class="content">菜单内容</view>
  </liv-dropdown>
</template>
<script setup lang="ts"></script>

<style lang="scss">
.content {
  height: 600rpx;
  background-color: white;
}
</style>
```

## 挂载在指定元素下方

通过`selector`属性可以指定需要挂载的元素。

```vue
<template>
  <view class="page-container">
    <view id="button" @click="show = true">打开下拉菜单</view>
  </view>
  <liv-dropdown v-model:show="show" selector="#button">
    <view class="content">菜单内容</view>
  </liv-dropdown>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<style lang="scss">
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: 600rpx;
  background-color: white;
}
</style>
```

## 属性

| 属性名              | 说明                                 | 类型      | 可选值 | 默认值 |
| ------------------- | ------------------------------------ | --------- | ------ | ------ |
| v-model:show        | 是否显示                             | `boolean` | —      | false  |
| duration            | 遮罩打开或收起的动画过渡时间，单位ms | `number`  | —      | 300    |
| close-on-click-mask | 点击遮罩是否关闭弹窗                 | `boolean` | —      | true   |
| selector            | 挂载元素的选择器                     | `string`  | —      | —      |

**selector说明**

`selector` 类似于 CSS 的选择器，但仅支持下列语法。

- ID 选择器：`#the-id`
- class 选择器（可以连续指定多个）：`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant` (H5 暂不支持)
- 多选择器的并集：`#a-node, .some-other-nodes`

## 插槽

| 插槽名    | 说明                     | 作用域 |
| --------- | ------------------------ | ------ |
| default   | 下拉菜单内容             | —      |
| reference | 触发 Dropdown 显示的元素 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'

export interface DropdownProps {
  /**
   * 遮罩打开或收起的动画过渡时间，单位ms
   */
  duration?: number
  /**
   * 点击遮罩是否关闭弹窗
   */
  closeOnClickMask?: boolean
  /**
   * 挂载元素的选择器
   */
  selector?: string
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
