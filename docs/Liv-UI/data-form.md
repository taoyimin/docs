# Data Form 数据表单

该组件用于快速生成数据表单，内部封装了表单渲染、表单验证、文件处理等逻辑，只需传入[fields](#attributes)属性即可。

## 基础用法

:::demo
```vue
<template>
  <liv-data-form :fields="fields"/>
</template>

<script lang="ts" setup>
const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]
</script>
```
:::

## 操作按钮

表单内部封装了提交、重置、返回、查询、新增五个常用按钮，监听相应事件后自动渲染，默认不渲染。

:::demo
```vue
<template>
  <liv-data-form 
    :fields="fields" 
    @submit="handleSubmit" 
    @reset="(form, formEl) => formEl.resetFields()"
    @back="handleBack"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}

const handleBack = () => {
    ElMessage({
        message: '点击了返回按钮',
        type: 'success'
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
  <liv-data-form 
    :fields="fields" 
    @submit="handleSubmit"
    :buttons="buttons"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

const buttons = [{
    name: '暂存',
    type: 'warning',
    onClick: () => {
      ElMessage({
        message: '点击了暂存按钮',
        type: 'warning'
      })
    }
},{
    name: '清空',
    type: 'danger',
    onClick: () => {
      ElMessage({
        message: '点击了清空按钮',
        type: 'error'
      })
    }
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
</script>
```
:::

## 行内表单

通过`inline`属性，你可以用该组件来生成搜索栏，因为搜索栏本质上也是一个表单。

:::demo
```vue
<template>
  <liv-data-form
    inline
    :fields="fields" 
    @search="handleSubmit"
    @add="handleAdd"/>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '搜索的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}

const handleAdd = () => {
      ElMessage({
        message: '点击了新增按钮',
        type: 'success'
      })
}
</script>
```
:::

## 设置默认值

在某些业务场景，例如修改详情功能，表单可能需要设置默认值，并且某些字段仅作为修改接口的参数，并不需要渲染在页面上。你可以通过`defaultValue`属性来设置表单的默认值，并且不设置`fieldType`字段实现把相关字段放在表单数据中，但是不进行渲染。

:::demo
```vue
<template>
  <liv-data-form 
    :fields="fields"
    :default-value="defaultValue"
    @submit="handleSubmit"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';

const defaultValue = ref({})

const fields = [{
  prop: 'id',
  label: '事件ID',
},{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input'
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1'
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch'
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image'
}]

onMounted(async () => {
    // 模拟加载详情数据
    setTimeout(() => {
        defaultValue.value = {
            id: '111',
            no: '123456789',
            status: '1',
            location: true,
            imageUrl: '/ruralLivingEn/202310/d5ca2af7-dad1-4bb4-919a-6767da06eb0e.jpg,/ruralLivingEn/202310/62516435-5d3d-4bba-9310-1f3e9bde357c.jpg'
        }
    }, 1000)
})

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
</script>
```
:::

## 属性透传

Data Form基于[ElForm](https://element-plus.org/zh-CN/component/form.html#form-attributes)封装，所以你可以传入[ElForm](https://element-plus.org/zh-CN/component/form.html#form-attributes)的所有属性和事件，并且在字段配置属性`fields`中，根据`fieldType`的不同，你可以透传属性和事件给对应的渲染组件，具体`fieldType`对应的渲染组件请查看[fieldType可选值](#fieldType)。

:::demo
```vue
<template>
  <liv-data-form 
    :fields="fields"
    @submit="handleSubmit"/>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus';

const fields = [{
  prop: 'no',
  label: '事件编号',
  fieldType: 'input',
  placeholder: '自定义提示',
  maxlength: 5
},{
  prop: 'status',
  label: '事件状态',
  fieldType: 'select',
  fieldData: [{
    label: '待处理',
    value: '0'
  },{
    label: '待评价',
    value: '1',
    disabled: true
  },{
    label: '已办结',
    value: '2'
  }]
},{
  prop: 'location',
  label: '开启定位',
  fieldType: 'switch',
  inlinePrompt: true,
  activeText: "完整展示多个内容",
  inactiveText: "多个内容"
},{
  prop: 'imageUrl',
  label: '事件图片',
  fieldType: 'image',
  listType: 'picture',
  limit: 1
}]

const handleSubmit = (form, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(form),
        type: 'success',
        duration: 3500
    })
}
</script>
```
:::

## 属性<a id="attributes"></a>

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| default-value | 表单默认值 | `Object` | — | — |
| fields | 字段配置信息 | [`Array<Field>`](#field) | — | [] |
| buttons | 自定义按钮 | [`Array<Elbutton>`](https://element-plus.org/zh-CN/component/button.html#button-attributes) | — | [] |

### Field<a id="field"></a>
| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| fieldType | 字段类型，不传则不渲染该字段的表单 | `enum` | 'input' / 'select' / 'dict' / 'grid' / 'date' / 'radio' / 'checkbox' / 'number' / 'rate' / 'switch' / 'image' | — |
| fieldData | 当渲染的组件为[ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)、[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)、[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)等需要手动设置数据源的组件时，可以用过该字段传入数据源， | `Array<Object>` | — | [] |

### fieldType可选值<a id="fieldType"></a>
| 字段类型 | 说明 | 对应的渲染组件 |
| ------ | ------ | ------ |
| 'input' | 输入框 | [ElInput](https://element-plus.org/zh-CN/component/input.html#attributes) |
| 'select' | 选择器 | [ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)<[ElOption](https://element-plus.org/zh-CN/component/select.html#option-attributes)[]> |
| 'dict' | 字典选择器 | [LivDictSelect](/Liv-UI/dict-select) |
| 'grid' | 网格选择器 | [LivGridCascader](/Liv-UI/grid-cascader) |
| 'date' | 日期选择器 | [ElDatePicker](https://element-plus.org/zh-CN/component/date-picker.html#attributes) |
| 'radio' | 单选框 | [ElRadioGroup](https://element-plus.org/zh-CN/component/radio.html#radiogroup-attributes)<[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)[]> |
| 'checkbox' | 多选框 | [ElCheckboxGroup](https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-attributes)<[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)[]> |
| 'number' | 日期选择器 | [ElInputNumber](https://element-plus.org/zh-CN/component/input-number.html#attributes) |
| 'rate' | 日期选择器 | [ElRate](https://element-plus.org/zh-CN/component/rate.html#attributes) |
| 'switch' | 日期选择器 | [ElSwitch](https://element-plus.org/zh-CN/component/switch.html#attributes) |
| 'image' | 日期选择器 | [ElUpload](https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7) |

## 事件

| 事件名 | 说明 | 类型 |
| ------ | ------ | ------ |
| submit | 点击提交按钮时触发 | `Function` |
| rest | 点击重置按钮时触发 | `Function` |
| back | 点击返回按钮时触发 | `Function` |
| search | 点击查询按钮时触发 | `Function` |
| add | 点击新增按钮时触发 | `Function` |