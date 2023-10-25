# Data Table 数据表格

该组件用于快速生成数据表格，内部封装了表格渲染、文件处理等逻辑，只需传入[data](#attributes)和[fields](#attributes)属性即可。

## 基础用法
:::demo
```vue
<template>
  <liv-data-table :data="data" :fields="fields"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getList } from './apis/eventApi'

const data = ref([])

const fields = [{
  prop: 'no',
  label: '事件编号',
},{
  prop: 'typeStr',
  label: '事件状态',
},{
  prop: 'typeStr',
  label: '事件类型',
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

onMounted(async () => {
    // 请求列表数据
    data.value = await getList()
})
</script>
```
:::

## 操作按钮

表格内部封装了详情、编辑、删除三个常用按钮，监听相应事件后自动渲染，默认不渲染。

:::demo
```vue
<template>
  <liv-data-table 
    :data="data" 
    :fields="fields"
    @detail="handleDetail"
    @edit="handleEdit"
    @delete="handleDelete"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getList } from './apis/eventApi'
import { ElMessage } from 'element-plus';

const data = ref([])

const fields = [{
  prop: 'no',
  label: '事件编号',
},{
  prop: 'typeStr',
  label: '事件状态',
},{
  prop: 'typeStr',
  label: '事件类型',
}]

onMounted(async () => {
    // 请求列表数据
    data.value = await getList()
})

const handleDetail = data => {
    ElMessage({
        message: `查看编号：${data.no}的事件`,
        type: 'success'
    })
}

const handleEdit = data => {
    ElMessage({
        message: `编辑编号：${data.no}的事件`,
        type: 'warning'
    })
}

const handleDelete = data => {
    ElMessage({
        message: `删除编号：${data.no}的事件`,
        type: 'error'
    })
}
</script>
```
:::

## 自定义按钮

除了使用组件内部封装好的按钮，你还可以使用`buttons`属性根据业务需要传入自定义按钮。

:::demo
```vue
<template>
  <liv-data-table
    :data="data"
    :fields="fields" 
    @detail="handleDetail"
    :buttons="buttons"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getList } from './apis/eventApi'
import { ElMessage } from 'element-plus';

const data = ref([])

const fields = [{
  prop: 'no',
  label: '事件编号',
},{
  prop: 'typeStr',
  label: '事件状态',
},{
  prop: 'typeStr',
  label: '事件类型',
}]

const buttons = [{
    name: '点赞',
    type: 'success',
    onClick: data => {
      ElMessage({
        message: `点赞编号：${data.no}的事件`,
        type: 'success'
      })
    }
},{
    name: '收藏',
    type: 'danger',
    onClick: data => {
      ElMessage({
        message: `收藏编号：${data.no}的事件`,
        type: 'success'
      })
    }
}]

onMounted(async () => {
    // 请求列表数据
    data.value = await getList()
})

const handleDetail = data => {
    ElMessage({
        message: `查看编号：${data.no}的事件`,
        type: 'success'
    })
}
</script>
```
:::

## 属性<a id="attributes"></a>

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| data | 表格数据 | `Array<Object>` | — | [] |
| fields | 字段配置信息 | [`Array<Field>`](#field) | — | [] |
| buttons | 自定义按钮 | [`Array<Elbutton>`](https://element-plus.org/zh-CN/component/button.html#button-attributes) | — | [] |

### Field
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| fieldType | 字段类型，不传则默认显示文本 | `enum` | — / 'image' | — |

## 事件

| 事件名 | 说明 | 类型 |
| ------ | ------ | ------ |
| detail | 点击详情按钮时触发 | `Function` |
| edit | 点击编辑按钮时触发 | `Function` |
| delete | 点击删除按钮时触发 | `Function` |