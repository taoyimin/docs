# 数据列表

组件内部封装了下拉刷新、上拉加载、骨架屏展示等逻辑，只需传入分页数据的加载方法即可渲染出数据列表。

## 基础用法

传入数据数组/返回分页数据的Promise/返回数据数组的Promise即可渲染出数据列表，。其中`item-key`为列表项的唯一标识，推荐为每个`list`组件设置`item-key`属性，以便在重新渲染时,能够尽可能地复用已经存在的元素而不是重新创建。

```vue
<template>
  <liv-list :load-data="getPage" item-key="id" gap="2rpx">
    <template #item="{ data }">
      <view>{{ data.name }}</view>
      <view>{{ data.desc }}</view>
    </template>
  </liv-list>
</template>

<script setup lang="ts">
import { getPage } from '@/apis'
</script>
```

:::warning 注意
如果首页数据量不足以撑满整个屏幕高度，那么将无法触发滑动到底部并加载下一页数据，所以尽量设置合适的`pageSize`确保首页数据能够撑满屏幕高度。
:::

## 查询参数

通过`search-params`属性，可以传入加载数据时的查询参数。

```vue
<template>
  <liv-list
    :load-data="getPage"
    :search-params="params"
    item-key="id"
    gap="2rpx"
  >
    <template #item="{ data }">
      <view>{{ data.name }}</view>
      <view>{{ data.desc }}</view>
    </template>
  </liv-list>
</template>

<script setup lang="ts">
import { getPage } from '@/apis'

const params = {
  current: 2,
  size: 20,
  status: '1'
}
</script>
```

## 自定义刷新/加载

通过组件内部暴露的`current`、`total`属性及`refresh`、`loadmore`方法，你可以自己实现列表的刷新/加载逻辑。

```vue
<template>
  <view>当前页：{{ listRef?.current }}数据总数：{{ listRef?.total }}</view>
  <button @click="listRef?.refresh">刷新</button>
  <button @click="listRef?.loadmore">加载更多</button>
  <liv-list ref="listRef" :load-data="getPage" item-key="id">
    <template #item="{ data }">
      <view>{{ data.name }}</view>
      <view>{{ data.desc }}</view>
    </template>
  </liv-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getPage } from '@/apis'
import type { ListInstance } from 'liv-uni'

const listRef = ref<ListInstance | null>(null)
</script>
```

## 网格布局

通过传入`column`属性，可以设置列表的列数。

```vue
<template>
  <liv-list :load-data="getPage" item-key="id" :column="2" gap="10rpx">
    <template #item="{ data }">
      <view>{{ data.name }}</view>
      <view>{{ data.desc }}</view>
    </template>
  </liv-list>
</template>

<script setup lang="ts">
import { getPage } from '@/apis'
</script>
```

## 插槽

通过`item`、`skeleton`、`empty`等具名插槽，你可以自定义列表项、骨架屏、空白页的样式。

```vue
<template>
  <liv-list :load-data="getPage" item-key="id">
    <template #item="{ data }">
      <view>{{ data.name }}</view>
      <view>{{ data.desc }}</view>
    </template>
    <template #empty>
      <view>数据为空</view>
    </template>
    <template #skeleton>
      <view>loading...</view>
    </template>
  </liv-list>
</template>

<script setup lang="ts">
import { getPage } from '@/apis'
</script>
```

:::tip 提示
组件内部实现了默认的骨架屏、空白页样式，如无特殊需求使用默认样式即可，保持页面风格的统一。
:::

## 属性

| 属性名        | 说明           | 类型              | 可选值 | 默认值 |
| ------------- | -------------- | ----------------- | ------ | ------ |
| load-data     | 数据加载方法   | `LoadData<T>`     | —      | —      |
| item-key      | 列表项唯一标识 | `keyof T`         | —      | —      |
| search-params | 查询参数       | `SearchParams`    | —      | —      |
| page-size     | 每页显示数量   | `number`          | —      | 10     |
| column        | 列表列数       | `number`          | —      | 1      |
| gap           | 列表项间隙     | `number` `string` | —      | 0      |

## 插槽

| 插槽名   | 说明             | 作用域                      |
| -------- | ---------------- | --------------------------- |
| item     | 自定义列表项内容 | `{ data: T, index: number}` |
| skeleton | 自定义骨架屏内容 | —                           |
| empty    | 自定义空白页内容 | —                           |

::: details 类型声明

```ts
import type { ComponentExposed } from 'vue-component-type-helpers'
import List from './list.vue'
import type { StyleValue } from 'vue'

interface LoadData<T> {
  (...args: any[]): Promise<Page<T>> | Promise<T[]>
}

interface SearchParams {
  [key: string]: any
}

export interface ListProps<T> {
  /**
   * 数据加载方法
   */
  loadData: LoadData<T> | T[]
  /**
   * 列表项唯一标识
   */
  itemKey: keyof T
  /**
   * 查询参数
   */
  searchParams?: SearchParams
  /**
   * 每页显示数量
   */
  pageSize?: number
  /**
   * 列表列数
   */
  column?: number
  /**
   * 列表项间隙
   */
  gap?: number | string
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export type ListInstance = ComponentExposed<typeof List>
```

:::
