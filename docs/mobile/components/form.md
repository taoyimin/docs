# 表单

该组件基于[UpForm](https://uiadmin.net/uview-plus/components/form.html)、[UpFormItem](https://uiadmin.net/uview-plus/components/form.html)组件进行二次封装，内部封装了表单项的默认样式、校验规则等，配合表单项组件使用可以快速生成业务表单。

## 基础用法

只需传入`item-type`属性即可生成对应的表单项。

```vue
<template>
  <liv-form ref="formRef" :model="form">
    <liv-form-item
      required
      item-type="input"
      label="输入框"
      prop="input"
      v-model="form.input"
    />
    <liv-form-item
      required
      item-type="number"
      label="步进器"
      prop="number"
      v-model="form.number"
    />
    <liv-form-item
      required
      item-type="switch"
      label="开关选择器"
      prop="switch"
      v-model="form.switch"
    />
    <liv-form-item
      required
      item-type="textarea"
      label="文本域"
      prop="textarea"
      v-model="form.textarea"
    />
    <liv-form-item
      required
      item-type="picker"
      label="选择器"
      prop="picker"
      v-model="form.picker"
      :data="data"
    />
    <liv-form-item
      required
      item-type="radio"
      label="单选框"
      prop="radio"
      v-model="form.radio"
      :data="data"
    />
    <liv-form-item
      required
      item-type="checkbox"
      label="多选框"
      prop="checkbox"
      v-model="form.checkbox"
      :data="data"
    />
    <liv-form-item
      required
      item-type="dict"
      label="字典选择器"
      prop="dict"
      v-model="form.dict"
      v-model:dict-id="form.dictId"
      dict-type="eventType"
    />
    <liv-form-item
      v-if="form.dictId"
      required
      item-type="dictRadio"
      label="字典单选框"
      prop="dictRadio"
      v-model="form.dictRadio"
      :parent-id="form.dictId"
      placement="column"
    />
    <liv-form-item
      v-if="form.dictId"
      required
      item-type="dictCheckbox"
      label="字典多选框"
      prop="dictCheckbox"
      v-model="form.dictCheckbox"
      :parent-id="form.dictId"
      placement="column"
    />
    <liv-form-item
      required
      item-type="date"
      label="日期选择器"
      prop="date"
      v-model="form.date"
    />
    <liv-form-item
      required
      item-type="dateRange"
      label="日期范围"
      :prop="['startDate', 'endDate']"
      v-model:range-start="form.startDate"
      v-model:range-end="form.endDate"
    />
    <liv-form-item
      required
      item-type="calendar"
      label="日历选择器"
      prop="calendar"
      v-model="form.calendar"
    />
    <liv-form-item
      required
      item-type="grid"
      label="网格选择器"
      prop="gridCode"
      v-model="form.gridCode"
      v-model:grid-id="form.gridId"
    />
    <liv-form-item
      required
      item-type="audio"
      label="语音上传"
      prop="audioUrl"
      v-model="form.audioUrl"
    />
    <liv-form-item
      required
      item-type="image"
      label="图片上传"
      prop="imageUrl"
      v-model="form.imageUrl"
    />
    <liv-form-item
      required
      item-type="video"
      label="视频上传"
      prop="videoUrl"
      v-model="form.videoUrl"
    />
    <liv-form-item
      required
      item-type="media"
      label="媒体上传"
      prop="mediaUrl"
      v-model="form.mediaUrl"
    />
    <liv-form-item
      required
      item-type="file"
      label="文件上传"
      prop="fileUrl"
      v-model="form.fileUrl"
      :extension="['docx', 'pdf']"
    />
  </liv-form>
  <up-button
    type="primary"
    :custom-style="{ marginTop: '40rpx' }"
    @click="submit"
    >提交</up-button
  >
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance } from 'liv-uni'

const formRef = ref<FormInstance | null>(null)

const form = reactive({
  input: '',
  number: 1,
  switch: true,
  textarea: '',
  gridCode: '',
  picker: '',
  radio: '',
  checkbox: '',
  dict: '',
  dictId: NaN,
  dictRadio: '',
  dictCheckbox: '',
  date: '',
  startDate: '',
  endDate: '',
  calendar: '',
  gridId: '',
  audioUrl: '',
  imageUrl: '',
  videoUrl: '',
  mediaUrl: '',
  fileUrl: ''
})

const data = [
  {
    label: '选项1',
    value: '1'
  },
  {
    label: '选项2',
    value: '2'
  },
  {
    label: '选项3',
    value: '3'
  }
]

function submit() {
  formRef.value?.validate().then((valid: boolean) => {
    if (valid) {
      uni.showToast({
        title: '表单校验通过',
        icon: 'none'
      })
    }
  })
}
</script>
```

:::tip 提示
表单组件内部已经封装了默认的校验规则，需要校验的表单项只需传入`required`和`prop`属性即可。
:::

## 绑定原始值

为了方便表单数据的提交和回显，表单组件内部对一些组件的绑定值做了特殊处理（例如多选框、图片上传等组件会自动使用逗号拼接），使用表单项组件进行双向绑定时拿到的值已经是拼接好的值，如果需要绑定原始的数据类型，可以使用`.raw`修饰符。

```vue
<template>
  <view>imageUrl：{{ form.imageUrl }}</view>
  <view>imageList：{{ form.imageList }}</view>
  <liv-form :model="form">
    <liv-form-item
      item-type="image"
      label="图片上传（逗号拼接）"
      v-model="form.imageUrl"
    />
    <liv-form-item
      item-type="image"
      label="图片上传（数组类型）"
      v-model.raw="form.imageList"
    />
  </liv-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  imageUrl: '',
  imageList: []
})
</script>
```

## 自定义校验规则

表单组件内部会自动根据表单项的`required`和`prop`属性生成默认校验规则，如果需要自定义校验规则，可以通过`rules`属性覆盖默认校验规则。

```vue
<template>
  <liv-form ref="formRef" :model="form" :rules="rules">
    <liv-form-item
      required
      item-type="input"
      label="输入框"
      prop="input"
      v-model="form.input"
    />
    <liv-form-item
      required
      item-type="textarea"
      label="文本域"
      prop="textarea"
      v-model="form.textarea"
    />
  </liv-form>
  <up-button
    type="primary"
    :custom-style="{ marginTop: '40rpx' }"
    @click="submit"
    >提交</up-button
  >
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance } from 'liv-uni'

const formRef = ref<FormInstance | null>(null)

const form = reactive({
  input: '',
  textarea: ''
})

const rules = {
  textarea: {
    required: true,
    message: '自定义校验规则'
  }
}

function submit() {
  formRef.value?.validate().then((valid: boolean) => {
    if (valid) {
      uni.showToast({
        title: '表单校验通过',
        icon: 'none'
      })
    }
  })
}
</script>
```

:::tip 提示
只会覆盖`rules`中存在的校验规则，没有传入的校验规则（示例中的input输入框）依然会根据表单项的`required`和`prop`属性自动生成。
:::

## 属性/插槽透传

在表单项组件上传入的属性和插槽会被透传给对应的实现组件，对应的实现组件可查看[itemType可选值](#itemtype可选值)。

```vue
<template>
  <liv-form :model="form">
    <liv-form-item
      required
      item-type="input"
      label="输入框"
      prop="input"
      v-model="form.input"
      clearable
      maxlength="5"
      placeholder="自定义提示"
      type="password"
    >
      <template #suffix>
        <up-icon name="eye-off" />
      </template>
    </liv-form-item>
    <liv-form-item
      required
      item-type="grid"
      label="网格选择器"
      prop="gridCode"
      v-model="form.gridCode"
      root
      :need-level="3"
      :show-level="5"
    >
      <template #prefix> 当前网格： </template>
    </liv-form-item>
    <liv-form-item
      required
      item-type="dateRange"
      label="上报问题"
      :prop="['startDate', 'endDate']"
      v-model:range-start="form.startDate"
      v-model:range-end="form.endDate"
      mode="year-month"
      format="YYYY年MM月"
      :format-value="['YYYY-MM-01 00:00:00', 'YYYY-MM-01 23:59:59']"
      :title="['请选择开始日期', '请选择结束日期']"
      :closeOnClickOverlay="[true, false]"
    />
    <liv-form-item
      required
      item-type="image"
      label="图片上传"
      prop="imageUrl"
      v-model="form.imageUrl"
      :deletable="false"
      :maxCount="1"
    />
  </liv-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  input: '',
  gridCode: '',
  startDate: '',
  endDate: '',
  imageUrl: ''
})
</script>
```

:::tip 提示
`itemType`等于`dateRange`时，表单项由两个日期选择器组件渲染而成，当透传的属性不是数组时，会将该属性同时透传给两个日期选择器。当透传的属性是数组时，会将数组的第一个值透传给开始日期选择器，将数组的第二个值透传给结束日期选择器。
:::

## Form属性

你可以透传[UpForm](https://uiadmin.net/uview-plus/components/form.html#form-props)组件的所有属性。

## Form插槽

| 插槽名  | 说明       | 作用域 |
| ------- | ---------- | ------ |
| default | 表单项列表 | —      |

## FormItem属性

| 属性名    | 说明       | 类型                                                                                                                                                                              | 可选值                                                                                    | 默认值 |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| item-type | 表单项类型 | `input`、`number`、`switch`、`textarea`、`picker`、`dict` 、`radio` 、`checkbox` 、`dictRadio`、 `dictCheckbox` 、 `date` 、 `dateRange` 、`calendar` 、 `grid`、`image`、`audio` | —                                                                                         | —      |
| icon      | 表单项图标 | `string`                                                                                                                                                                          | [图标集](https://uiadmin.net/uview-plus/components/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86) | —      |

除了上述属性，你还可以透传[UpFormItem](https://uiadmin.net/uview-plus/components/form.html#form-item-props)组件的所有属性。

## FormItem插槽

| 插槽名  | 说明           | 作用域 |
| ------- | -------------- | ------ |
| default | 表单项内容     | —      |
| right   | 表单项右侧内容 | —      |

### itemType可选值

| 字段类型       | 说明           | 对应的渲染组件                                                                   |
| -------------- | -------------- | -------------------------------------------------------------------------------- |
| `input`        | 输入框         | [UpInput](https://uiadmin.net/uview-plus/components/input.html#props)            |
| `number`       | 步进器         | [UpNumberBox](https://uiadmin.net/uview-plus/components/numberBox.html#props)    |
| `switch`       | 开关选择器     | [UpSwitch](https://uiadmin.net/uview-plus/components/switch.html#switch-props)   |
| `textarea`     | 文本域         | [UpTextarea](https://uiadmin.net/uview-plus/components/textarea.html#list-props) |
| `picker`       | 选择器         | [LivDataPicker](./data-picker.md)                                                |
| `radio`        | 单选框         | [LivDataRadio](./data-radio.md)                                                  |
| `checkbox`     | 多选框         | [LivDataCheckbox](./data-checkbox.md)                                            |
| `dict`         | 字典选择器     | [LivDictPicker](./dict-picker.md)                                                |
| `dictRadio`    | 字典单选框     | [LivDictRadio](./dict-radio.md)                                                  |
| `dictCheckbox` | 字典多选框     | [LivDictCheckbox](./dict-checkbox.md)                                            |
| `date`         | 日期选择器     | [LivDatetimePicker](./datetime-picker.md)                                        |
| `dateRange`    | 两个日期选择器 | [LivDatetimePicker](./datetime-picker.md)                                        |
| `calendar`     | 日历选择器     | [LivCalendar](./calendar.md)                                                     |
| `grid`         | 网格选择器     | [LivGridPicker](./grid-picker.md)                                                |
| `image`        | 图片上传       | [LivUpload](./upload.md)                                                         |
| `audio`        | 语音录制       | [LivAudioRecorder](./audio-recorder.md)                                          |

::: details 类型声明

```ts
import type { ComponentExposed } from 'vue-component-type-helpers'
import Form from './form.vue'
import type { StyleValue } from 'vue'

export interface FormProps {
  /**
   * 表单数据对象
   */
  model?: Record<string, any>
  /**
   * 通过ref设置，如果rules中有自定义方法等，需要使用setRules方法设置规则，详见[文档](https://www.uviewui.com/components/form.html#%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)
   */
  rules?: Record<string, any>
  /**
   * 错误的提示方式
   * @default "message"
   */
  errorType?: 'message' | 'none' | 'toast' | 'border-bottom' | 'none'
  /**
   * 是否显示表单域的下划线边框
   * @default true
   */
  borderBottom?: boolean
  /**
   * 表单域提示文字的位置，left-左侧，top-上方
   * @default "left"
   */
  labelPosition?: 'left' | 'top'
  /**
   * 提示文字的宽度，单位px
   * @default 45
   */
  labelWidth?: string | number
  /**
   * lable字体的对齐方式
   * @default "left"
   */
  labelAlign?: 'left' | 'center' | 'right'
  /**
   * lable的样式
   */
  labelStyle?: unknown
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}

export type FormInstance = ComponentExposed<typeof Form>
```

```ts
import type { StyleValue } from 'vue'

export type ItemType =
  | undefined
  | 'input'
  | 'number'
  | 'switch'
  | 'textarea'
  | 'picker'
  | 'dict'
  | 'radio'
  | 'dictRadio'
  | 'checkbox'
  | 'dictCheckbox'
  | 'date'
  | 'dateRange'
  | 'calendar'
  | 'grid'
  | 'image'
  | 'audio'

export interface FormItemProps {
  /**
   * 表单项类型
   */
  itemType?: ItemType
  /**
   * 表单项图标
   */
  icon?: string
  /**
   * 左侧提示文字
   */
  label?: string
  /**
   * 表单域`model`对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
   */
  prop?: string
  /**
   * 是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false
   * @default true
   */
  borderBottom?: boolean
  /**
   * 提示文字的宽度，单位rpx，如设置，将覆盖`u-form`的同名参数
   */
  labelWidth?: string | number
  /**
   * label的位置
   */
  labelPosition?: 'left' | 'top'
  /**
   * 右侧自定义字体图标(限uView内置图标)或图片地址
   */
  rightIcon?: string
  /**
   * 左侧自定义字体图标(限uView内置图标)或图片地址
   */
  leftIcon?: string
  /**
   * 左侧自定义字体图标的样式
   */
  leftIconStyle?: unknown
  /**
   * 是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则，如需在swiper标签内显示星号，需要给予swiper-item内第一个根节点一定的margin样式
   * @default false
   */
  required?: boolean
  /**
   * 点击时触发
   */
  onClick?: () => any
  /**
   * 自定义根节点样式
   */
  customStyle?: StyleValue
}
```

:::
