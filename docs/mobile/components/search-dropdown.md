# 下拉搜索

内部封装了下拉搜索弹窗的样式及搜索、重置等逻辑。通常配合[LivSticky](./sticky.md)和[LivForm](./form.md)组件用于列表页面实现顶部的搜索功能。

## 基础用法

直接传入搜索表单的内容即可。

```vue
<template>
  <liv-search-dropdown @search="searchClick">
    <liv-form :model="form">
      <liv-form-item label="事件编号" item-type="input" v-model="form.no" />
      <liv-form-item
        label="事件类型"
        item-type="dict"
        v-model="form.type"
        dict-type="eventType"
      />
      <liv-form-item
        label="上报时间"
        item-type="dateRange"
        v-model:range-start="form.startTime"
        v-model:range-end="form.endTime"
      />
    </liv-form>
  </liv-search-dropdown>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  no: '',
  type: '',
  startTime: '',
  endTime: ''
})

function searchClick() {
  uni.showToast({ title: '点击了搜索按钮', icon: 'none' })
}
</script>
```

## 自定义触发弹窗内容

传入`reference`插槽可以自定义触发搜索弹窗的内容。

```vue
<template>
  <liv-search-dropdown @search="searchClick">
    <template #reference>
      <view>打开搜索</view>
    </template>
    <liv-form :model="form">
      <liv-form-item label="事件编号" item-type="input" v-model="form.no" />
      <liv-form-item
        label="事件类型"
        item-type="dict"
        v-model="form.type"
        dict-type="eventType"
      />
      <liv-form-item
        label="上报时间"
        item-type="dateRange"
        v-model:range-start="form.startTime"
        v-model:range-end="form.endTime"
      />
    </liv-form>
  </liv-search-dropdown>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  no: '',
  type: '',
  startTime: '',
  endTime: ''
})

function searchClick() {
  uni.showToast({ title: '点击了搜索按钮', icon: 'none' })
}
</script>
```

## 挂载在指定元素下方

通过`selector`属性可以指定需要挂载的元素。

```vue
<template>
  <view class="page-container">
    <view id="button" @click="show = true">打开下拉菜单</view>
  </view>
  <liv-search-dropdown
    v-model:show="show"
    selector="#button"
    @search="searchClick"
  >
    <liv-form :model="form">
      <liv-form-item label="事件编号" item-type="input" v-model="form.no" />
      <liv-form-item
        label="事件类型"
        item-type="dict"
        v-model="form.type"
        dict-type="eventType"
      />
      <liv-form-item
        label="上报时间"
        item-type="dateRange"
        v-model:range-start="form.startTime"
        v-model:range-end="form.endTime"
      />
    </liv-form>
  </liv-search-dropdown>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const show = ref(false)

const form = reactive({
  no: '',
  type: '',
  startTime: '',
  endTime: ''
})

function searchClick() {
  uni.showToast({ title: '点击了搜索按钮', icon: 'none' })
}
</script>

<style lang="scss">
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

## 阻止默认的搜索/重置行为

组件内部封装了默认的搜索/重置行为，点击搜索按钮会自动关闭弹窗，点击重置按钮会触发表单重置，可以通过事件回调参数的`preventDefault`方法来阻止组件默认的逻辑。

```vue
<template>
  <liv-search-dropdown @search="searchClick" @reset="resetClick">
    <liv-form :model="form">
      <liv-form-item label="事件编号" item-type="input" v-model="form.no" />
      <liv-form-item
        label="事件类型"
        item-type="dict"
        v-model="form.type"
        dict-type="eventType"
      />
      <liv-form-item
        label="上报时间"
        item-type="dateRange"
        v-model:range-start="form.startTime"
        v-model:range-end="form.endTime"
      />
    </liv-form>
  </liv-search-dropdown>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import type { EventHandler } from 'liv-uni'

const form = reactive({
  no: '',
  type: '',
  startTime: '',
  endTime: ''
})

function searchClick(e: EventHandler) {
  if ((form.startTime && !form.endTime) || (!form.startTime && form.endTime)) {
    uni.showToast({ title: '必须同时选择开始时间和结束时间！', icon: 'none' })
    // 阻止搜索按钮默认的关闭弹窗行为
    e.preventDefault()
  } else {
    uni.showToast({ title: '点击了搜索', icon: 'none' })
  }
}

function resetClick(e: EventHandler) {
  // 阻止重置按钮默认的表单重置行为
  e.preventDefault()
}
</script>
```

## 属性

| 属性名       | 说明              | 类型         | 可选值 | 默认值 |
| ------------ | ----------------- | ------------ | ------ | ------ |
| v-model:show | 是否显示          | `boolean`    | —      | false  |
| show-reset   | 是否展示重置按钮  | `boolean`    | —      | true   |
| button-style | 搜索/重置按钮样式 | `StyleValue` | —      | —      |
| selector     | 挂载元素的选择器  | `string`     | —      | —      |

**selector说明**

`selector` 类似于 CSS 的选择器，但仅支持下列语法。

- ID 选择器：`#the-id`
- class 选择器（可以连续指定多个）：`.a-class.another-class`
- 子元素选择器：`.the-parent > .the-child`
- 后代选择器：`.the-ancestor .the-descendant`
- 跨自定义组件的后代选择器：`.the-ancestor >>> .the-descendant` (H5 暂不支持)
- 多选择器的并集：`#a-node, .some-other-nodes`

除了上述属性，你还可以透传[LivDropdown](./dropdown.md)组件的所有属性。

## 事件

| 事件名 | 说明             | 类型       | 可选值        | 默认值 |
| ------ | ---------------- | ---------- | ------------- | ------ |
| search | 搜索按钮点击事件 | `Function` | `(e) => void` | —      |
| reset  | 重置按钮点击事件 | `Function` | `(e) => void` | —      |

## 插槽

| 插槽名    | 说明                           | 作用域 |
| --------- | ------------------------------ | ------ |
| default   | 下拉菜单内容                   | —      |
| reference | 触发 SearchDropdown 显示的元素 | —      |

::: details 类型声明

```ts
import type { StyleValue } from 'vue'
import type { EventHandler } from '../../../types'

export interface SearchDropdownProps {
  /**
   * 是否展示重置按钮
   */
  showReset?: boolean
  /**
   * 按钮样式
   */
  buttonStyle?: StyleValue
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export interface SearchDropdownEmits {
  (e: 'search', eventHandler: EventHandler): void
  (e: 'reset', eventHandler: EventHandler): void
}
```

:::
