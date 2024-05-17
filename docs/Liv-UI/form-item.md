# Form Item 表单项

该组件基于[ElFormItem](https://element-plus.org/zh-CN/component/form.html#formitem-attributes)封装，通过传入`fieldType`属性可以快速生成对应的表单内容。

## 基础用法

:::demo
```vue
<template>
  <liv-data-form :model="form" @submit="handleSubmit">
    <liv-form-item
      label="输入框"
      v-model="form.input"
      field-type="input"
    ></liv-form-item>
    <liv-form-item
      label="文本域"
      v-model="form.textarea"
      field-type="textarea"
    ></liv-form-item>
    <liv-form-item 
      label="选择器" 
      v-model="form.select" 
      field-type="select">
        <el-option label="选项1" value="1"></el-option>
        <el-option label="选项2" value="2"></el-option>
        <el-option label="选项3" value="3"></el-option>
    </liv-form-item>
    <liv-form-item
      label="级联选择器"
      v-model="form.cascader"
      field-type="cascader"
      :options="options"
    ></liv-form-item>
    <liv-form-item 
      label="单选框" 
      v-model="form.radio" 
      field-type="radio">
        <el-radio label="1">选项1</el-radio>
        <el-radio label="2">选项2</el-radio>
        <el-radio label="3">选项3</el-radio>
    </liv-form-item>
    <liv-form-item 
      label="复选框" 
      v-model="form.checkbox" 
      field-type="checkbox">
        <el-checkbox label="1">选项1</el-checkbox>
        <el-checkbox label="2">选项2</el-checkbox>
        <el-checkbox label="3">选项3</el-checkbox>
    </liv-form-item>
    <liv-form-item
      label="日期选择器"
      v-model="form.date"
      field-type="date"
    ></liv-form-item>
    <liv-form-item
      label="开关"
      v-model="form.switch"
      field-type="switch"
    ></liv-form-item>
    <liv-form-item
      label="数字输入框"
      v-model="form.number"
      field-type="number"
    ></liv-form-item>
    <liv-form-item 
      label="评分" 
      v-model="form.rate" 
      field-type="rate">
    </liv-form-item>
    <liv-form-item 
      label="颜色" 
      v-model="form.color" 
      field-type="color">
    </liv-form-item>
    <liv-form-item
      label="图片上传"
      v-model="form.image"
      field-type="image"
    ></liv-form-item>
    <liv-form-item
      label="音频上传"
      v-model="form.audio"
      field-type="audio"
    ></liv-form-item>
    <liv-form-item
      label="视频上传"
      v-model="form.video"
      field-type="video"
    ></liv-form-item>
    <liv-form-item
      label="文件上传"
      v-model="form.file"
      field-type="file"
    ></liv-form-item>
    <liv-form-item
      label="字典选择器"
      v-model="form.dict"
      field-type="dict"
      dict-type="eventStatus"
    ></liv-form-item>
    <liv-form-item
      label="网格选择器"
      v-model="form.grid"
      field-type="grid"
    ></liv-form-item>
    <liv-form-item
      label="地图选点"
      v-model:longitude="form.longitude"
      v-model:latitude="form.latitude"
      field-type="location"
    ></liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  input: '',
  textarea: '',
  select: '',
  cascader: '',
  radio: '',
  checkbox: '',
  date: '',
  switch: true,
  number: null,
  rate: null,
  color: '',
  image: '',
  audio: '',
  video: '',
  file: '',
  dict: '',
  grid: '',
  longitude: '',
  latitude: ''
})

const options = [
  {
    label: '选项1',
    value: '1',
    children: [
      {
        label: '子选项1-1',
        value: '1-1'
      },
      {
        label: '子选项1-2',
        value: '1-2'
      }
    ]
  },
  {
    label: '选项2',
    value: '2',
    children: [
      {
        label: '子选项2-1',
        value: '2-1'
      },
      {
        label: '子选项2-2',
        value: '2-2'
      },
      {
        label: '子选项2-3',
        value: '2-3'
      }
    ]
  },
  {
    label: '选项3',
    value: '3',
    children: [
      {
        label: '子选项3-1',
        value: '3-1'
      },
      {
        label: '子选项3-2',
        value: '3-2'
      }
    ]
  }
]

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```
:::

## 兼容fields

表单项组件支持与`fields`属性一起使用，默认显示在`fields`生成的表单项之后，你可以通过`fieldIndex`属性指定表单项组件显示在第几行。

:::demo
```vue
<template>
  <liv-data-form :model="form" :fields="fields" @submit="handleSubmit">
    <liv-form-item
      label="事件状态"
      v-model="form.status"
      field-type="dict"
      dict-type="eventStatus"
      field-index="1"
    ></liv-form-item>
    <liv-form-item
      label="事件状态"
      v-model="form.status"
      field-type="input"
      field-index="2"
    ></liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  status: ''
})

const fields = ref([
  { label: '输入框', prop: 'input', fieldType: 'input' },
  { label: '图片上传', prop: 'image', fieldType: 'image' }
])

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>

```
:::

## 绑定原始值

表单项组件内部对绑定数据进行了处理，会自动将数据转换为后端需要的格式，如果需要绑定原始值，可以通过`.raw`修饰符来实现。

:::demo
```vue
<template>
  <liv-data-form :model="form" @submit="handleSubmit">
    <liv-form-item 
      label="复选框" 
      v-model.raw="form.checkbox" 
      field-type="checkbox">
        <el-checkbox label="1">选项1</el-checkbox>
        <el-checkbox label="2">选项2</el-checkbox>
        <el-checkbox label="3">选项3</el-checkbox>
    </liv-form-item>
    <liv-form-item
      label="图片上传"
      v-model.raw="form.image"
      field-type="image"
    ></liv-form-item>
    <liv-form-item
      label="字典选择器"
      v-model.raw="form.dict"
      field-type="dict"
      dict-type="eventStatus"
      multiple
    ></liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  checkbox: [],
  image: [],
  dict: []
})

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```
:::

## 属性&插槽透传

你可以透传[ElFormItem](https://element-plus.org/zh-CN/component/form.html#formitem-attributes)的所有属性，并且可以透传`fieldType`[对应渲染组件](#fieldtype可选值)的所有属性及插槽，同时你也可以透传任何自定义内容。

:::demo
```vue
<template>
  <liv-data-form :model="form" @submit="handleSubmit">
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="步骤1描述" />
      <el-step title="步骤2" description="步骤2描述" />
      <el-step title="步骤3" description="步骤3描述" />
    </el-steps>
    <liv-form-item label="单选按钮">
      <el-radio-group v-model="form.radioButton">
        <el-radio-button label="选项1" />
        <el-radio-button label="选项2" />
        <el-radio-button label="选项3" />
      </el-radio-group>
    </liv-form-item>
    <liv-form-item
      label="事件编号"
      v-model="form.no"
      field-type="input"
      maxlength="10"
      placeholder="自定义提示"
    >
      <template #prepend>
        <liv-dict-select v-model="form.eventStatus" dict-type="eventStatus" />
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </liv-form-item>
    <liv-form-item
      label="多选网格"
      v-model="form.grid"
      field-type="grid"
      :props="{ multiple: true }"
    >
      <template #default="{ data }">
        <span>{{ data.gridName }}({{ data.gridCode }})</span>
      </template>
    </liv-form-item>
    <liv-form-item label="文件上传" v-model="form.file" field-type="file">
      <template #tip>
        <div class="tip-text">最多上传三张图片</div>
      </template>
    </liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const form = ref({
  no: '',
  eventStatus: '',
  grid: '',
  radioButton: '',
  file: ''
})

const handleSubmit = () => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form.value)}`)
}
</script>

<style scoped>
.tip-text {
  font-size: 12px;
  color: red;
}
</style>
```
:::

## 网格布局

通过`fieldIndex`属性，你可以控制表单项显示在第几行，`fieldIndex`相同表示显示在同一行。

:::demo
```vue
<template>
  <liv-data-form :model="form">
    <liv-form-item
      label="姓名"
      v-model="form.name"
      field-type="input"
      field-index="0"
    ></liv-form-item>
    <liv-form-item
      label="年龄"
      v-model="form.age"
      field-type="input"
      field-index="0"
    ></liv-form-item>
    <liv-form-item
      label="性别"
      v-model="form.gender"
      field-type="input"
      field-index="0"
    ></liv-form-item>
    <liv-form-item
      label="家庭地址"
      v-model="form.address"
      field-type="input"
      field-index="1"
    ></liv-form-item>
    <liv-form-item
      label="电话"
      v-model="form.phone"
      field-type="input"
      field-index="1"
    ></liv-form-item>
    <liv-form-item
      label="详细描述"
      v-model="form.remark"
      field-type="input"
      field-index="2"
    ></liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  age: '',
  gender: '',
  address: '',
  phone: '',
  remark: ''
})
</script>
```
:::

## 动态表单

相比直接使用`fields`属性生成表单，使用表单项组件拥有更高的灵活性和扩展性，可以轻松实现复杂的动态表单。下面是一个表单项数据联动示例，根据选中的事件类型去初始化事件描述的数据。

:::demo
```vue
<template>
  <liv-data-form :model="form" @submit="handleSubmit">
    <liv-form-item
      label="事件类型"
      v-model:dict-id="form.typeId"
      field-type="dict"
      dict-type="eventType"
    ></liv-form-item>
    <liv-form-item
      label="事件描述"
      v-model="form.remarkCode"
      field-type="dict"
      :parent-id="form.typeId"
    ></liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  typeId: null,
  remarkCode: ''
})

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```
:::

## 表单校验

表单项内部封装了默认的校验逻辑，只需传入`required`属性即可自动生成校验规则。如果传入了`rules`自定义校验规则或者不设置`fieldType`属性传入自定义的表单项内容，则需要设置`prop`属性指定需要校验的`model`键名。
:::demo
```vue
<template>
  <liv-data-form :model="form" @submit="handleSubmit">
    <liv-form-item
      required
      label="事件类型"
      v-model="form.type"
      field-type="dict"
      dict-type="eventType"
    ></liv-form-item>
    <liv-form-item
      required
      :rules="phoneRules"
      label="手机号"
      prop="phone"
      v-model="form.phone"
      field-type="input"
    ></liv-form-item>
    <liv-form-item required label="时间" prop="time">
      <el-time-select
        v-model="form.time"
        start="08:30"
        step="00:15"
        end="18:30"
        placeholder="请选择时间"
      />
    </liv-form-item>
  </liv-data-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { validatePhone } from '@szxc/utils'

const phoneRules = [
  {
    required: true,
    validator: validatePhone,
    trigger: ['blur']
  }
]

const form = ref({
  type: '',
  phone: '',
  time: ''
})

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| fieldType | 表单项类型 | `enum` | `input` `textarea`  `select`  `dict` `dictId`  `grid`  `gridId`  `date`  `radio`  `checkbox`  `number`  `rate`  `switch`  `image`  `audio` `video`  `file` `location` | — |
| fieldIndex | 表单项下标，用于控制显示在第几行 | `string` `number` | — | — |

### fieldType可选值
| 字段类型 | 说明 | 对应的渲染组件 |
| ------ | ------ | ------ |
| `input` `textarea` | 输入框 | [ElInput](https://element-plus.org/zh-CN/component/input.html#attributes) |
| `select` | 选择器 | [ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)<[ElOption](https://element-plus.org/zh-CN/component/select.html#option-attributes)[]> |
| `date` | 日期选择器 | [ElDatePicker](https://element-plus.org/zh-CN/component/date-picker.html#attributes) |
| `radio` | 单选框 | [ElRadioGroup](https://element-plus.org/zh-CN/component/radio.html#radiogroup-attributes)<[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)[]> |
| `checkbox` | 多选框 | [ElCheckboxGroup](https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-attributes)<[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)[]> |
| `number` | 数字输入框 | [ElInputNumber](https://element-plus.org/zh-CN/component/input-number.html#attributes) |
| `rate` | 评分 | [ElRate](https://element-plus.org/zh-CN/component/rate.html#attributes) |
| `switch` | 开关 | [ElSwitch](https://element-plus.org/zh-CN/component/switch.html#attributes) |
| `image` `audio` `video` `file` | 图片/音频/视频/文件上传 | [ElUpload](https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7) |
| `dict` `dictId` | 字典选择器 | [DictSelect](/Liv-UI/dict-select) |
| `grid` `gridId` | 网格选择器 | [GridCascader](/Liv-UI/grid-cascader) |
| `personnel` | 人员选择器 | [PersonnelSelect](/Liv-UI/personnel-select) |
| `location` | 地图选点 | [LocationPicker](/Liv-UI/location-picker) |