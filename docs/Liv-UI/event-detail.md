# Event Detail 事件详情弹框

用于展示事件详情和处理流程，内部封装了事件详情和事件进度接口，通常配合[ElDialog](https://element-plus.org/zh-CN/component/dialog.html)一起使用。

## 基础用法
:::demo
```vue
<template>
  <el-button type="primary" @click="handleDetail">事件详情</el-button>
  <el-dialog title="事件详情" v-model="visible" @closed="eventId = null">
      <liv-event-detail :eventId="eventId" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const eventId = ref('')

const visible = ref(false)

const handleDetail = () => {
  eventId.value = 'e9bd0252d89f49c9b211a8eb6031c877'
  visible.value = true
}
</script>
```
:::


## 事件评价
:::demo
```vue
<template>
<el-button type="primary" @click="handleDetail">事件评价</el-button>
<el-dialog title="事件评价" v-model="visible" @closed="eventId = null">
  <liv-event-detail :eventId="eventId">
    <template #editForm>
      <liv-data-form
        :fields="fields"
        :model="form"
        @submit="handleSubmit"
      ></liv-data-form>
    </template>
  </liv-event-detail>
</el-dialog>

</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)

const eventId = ref('')

const form = ref<any>({
   evaluateType: '1'
});

const fields = [
  {
    prop: 'evaluateType',
    label: '评价类型',
    fieldType: 'radio',
    fieldData: [
      {
        label: '满意/办结',
        value: '1'
      },
      {
        label: '不满意/办结',
        value: '2'
      },
      {
        label: '不满意/不办结',
        value: '3'
      }
    ],
    required: true
  },
  {
    prop: 'desc',
    label: '评价建议',
    fieldType: 'textarea',
    maxlength: 200,
    required: true
  }
]

const handleDetail = () => {
  eventId.value = 'e9bd0252d89f49c9b211a8eb6031c877'
  visible.value = true
}

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>

```
:::

## 属性

| 属性名 | 说明 | 类型 | 是否必填 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ | ------ |
| eventId | 事件id | `string` | 必填  |  - | - |


## Slots

| 插槽名 | 说明 |
| ------ | ------ |
| editForm | 用于编辑事件（评价、处理）等，需设置#editForm插槽才会生效(参考事件评价demo) |