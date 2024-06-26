# Data Form 数据表单

该组件用于快速生成数据表单，内部封装了表单渲染、表单验证、文件处理等逻辑，只需传入[fields](#属性)和[model](#属性)属性即可。

## 基础用法

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" @submit="handleSubmit" />
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
  time: '',
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
  latitude: '',
  richText: ''
})

const fields = [
  {
    prop: 'input',
    label: '输入框',
    fieldType: 'input'
  },
  {
    prop: 'textarea',
    label: '文本域',
    fieldType: 'textarea'
  },
  {
    prop: 'select',
    label: '选择器',
    fieldType: 'select',
    fieldData: [
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
  },
  {
    prop: 'cascader',
    label: '级联选择器',
    fieldType: 'cascader',
    fieldData: [
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
  },
  {
    prop: 'radio',
    label: '单选框',
    fieldType: 'radio',
    fieldData: [
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
  },
  {
    prop: 'checkbox',
    label: '多选框',
    fieldType: 'checkbox',
    fieldData: [
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
  },
  {
    prop: 'date',
    label: '日期选择器',
    fieldType: 'date'
  },
  {
    prop: 'time',
    label: '时间选择器',
    fieldType: 'time'
  },
  {
    prop: 'switch',
    label: '开关',
    fieldType: 'switch'
  },
  {
    prop: 'number',
    label: '数字输入框',
    fieldType: 'number'
  },
  {
    prop: 'rate',
    label: '评分',
    fieldType: 'rate'
  },
  {
    prop: 'color',
    label: '颜色',
    fieldType: 'color'
  },
  {
    prop: 'image',
    label: '图片上传',
    fieldType: 'image'
  },
  {
    prop: 'audio',
    label: '音频上传',
    fieldType: 'audio'
  },
  {
    prop: 'video',
    label: '视频上传',
    fieldType: 'video'
  },
  {
    prop: 'file',
    label: '文件上传',
    fieldType: 'file'
  },
  {
    prop: 'dict',
    label: '字典选择器',
    fieldType: 'dict',
    dictType: 'eventStatus'
  },
  {
    prop: 'grid',
    label: '网格选择器',
    fieldType: 'grid'
  },
  {
    prop: ['longitude', 'latitude'],
    label: '地图选点',
    fieldType: 'location'
  },
  {
    prop: 'richText',
    label: '富文本',
    fieldType: 'richText'
  }
]

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```

:::
:::warning 注意
如果表单组件中使用了富文本编辑器，在不使用的时候需要及时销毁表单组件，例如在ElDialog组件中使用，推荐设置`destroy-on-close`属性为`true`。
:::

## 表单项数据

[fieldData](#field)属性除了传入`Array`，还支持传入`getter`方法和`Promise`对象，[ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)、[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)、[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)等需要手动设置数据源的组件可以通过传入`getter`方法和`Promise`对象实现动态加载数据。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getDictList } from '@szxc/apis'

const form = ref({
  statusSync: '',
  statusAsync: '',
  typePromise: ''
})

const fields = [
  {
    prop: 'statusSync',
    label: '事件状态',
    fieldType: 'select',
    // 传入同步getter方法
    fieldData: () => [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1'
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  },
  {
    prop: 'statusAsync',
    label: '事件状态',
    fieldType: 'radio',
    // 传入异步getter方法
    fieldData: async () => {
      // 耗时操作
      const data = await getDictList(
        { dicCode: 'eventStatus' },
        {
          fieldsMap: {
            dicSubCode: 'value',
            dicSubName: 'label'
          }
        }
      )
      return data
    }
  },
  {
    prop: 'typePromise',
    label: '事件类型',
    fieldType: 'checkbox',
    // 直接传入get/post方法返回的Promise对象
    fieldData: getDictList(
      { dicCode: 'eventType' },
      {
        fieldsMap: {
          dicSubCode: 'value',
          dicSubName: 'label'
        }
      }
    )
  }
]
</script>
```

:::

::: tip 提示
由于get/post请求返回结果的数据字段多种多样，可以配合`fieldsMap`参数进行<u>[字段映射](/http/fields-map)</u>，将需要的字段映射为`value`和`label`。
:::

::: warning 注意
传入Promise时，请确保Promise返回结果的数据类型为`Array`，暂不持支`Object`类型。
:::

## 操作按钮

表单内部封装了提交、重置、返回、查询、新增、批量删除六个常用按钮，监听相应事件后自动渲染，默认不渲染。你可以通过`()`设置权限标识，如果当前登录用户没有该按钮权限，则按钮不会被渲染。

:::demo

```vue
<template>
  <liv-data-form
    :fields="fields"
    :model="form"
    @submit(demoAuthority)="handleSubmit"
    @reset="handleReset"
    @back(demoAuthority|delete)="handleBack"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  no: '',
  status: ''
})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input'
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    fieldData: [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1'
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  }
]

const handleSubmit = (form) => {
  ElMessage.success(`点击了带demoAuthority权限标识的提交按钮`)
}

const handleReset = (_form, formEl) => {
  formEl?.resetFields()
}

const handleBack = () => {
  ElMessage.success(`点击了带demoAuthority和back权限标识的返回按钮`)
}
</script>
```

:::

## 自定义按钮

除了使用组件内部封装好的按钮，你还可以使用[`buttons`](#属性)属性根据业务需要传入自定义按钮。你可以通过`authority`属性给按钮添加权限标识，如果当前登录用户没有该权限标识，则按钮不会被渲染。

:::demo

```vue
<template>
  <liv-data-form
    :fields="fields"
    :model="form"
    :buttons="buttons"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  no: '',
  status: '',
  typePromise: ''
})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input'
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    fieldData: [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1'
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  }
]

const buttons = [
  {
    name: '暂存',
    type: 'warning',
    authority: 'demoAuthority',
    onClick: () => {
      ElMessage.warning('点击了带demoAuthority权限标识的暂存按钮')
    }
  },
  {
    name: '清空',
    type: 'danger',
    authority: ['demoAuthority', 'clear'],
    onClick: () => {
      ElMessage.error('点击了带demoAuthority和clear权限标识的清空按钮')
    }
  }
]

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
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
    :model="form"
    @search="handleSearch"
    @add="handleAdd"
    @batchDelete="handleBatchDelete"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  no: ''
})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input'
  }
]

const handleSearch = (form) => {
  ElMessage.success(`搜索的表单内容：${JSON.stringify(form)}`)
}

const handleAdd = () => {
  ElMessage.success('点击了新增按钮')
}

const handleBatchDelete = () => {
  ElMessage.success('点击了批量删除按钮')
}
</script>
```

:::

## 网格布局

传入二维数组形式的`fields`可以生成网格布局的表单，默认平分宽度，可以通过`span`属性控制每个表单项的宽度，`span`为24表示占满整行。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" />
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

const fields = [
  // 表单第一行，默认平分
  [
    {
      prop: 'name',
      label: '姓名',
      fieldType: 'input'
    },
    {
      prop: 'age',
      label: '年龄',
      fieldType: 'input'
    },
    {
      prop: 'gender',
      label: '性别',
      fieldType: 'input'
    }
  ],
  // 表单第二行，手动分配宽度
  [
    {
      prop: 'address',
      label: '家庭地址',
      fieldType: 'input',
      span: 16
    },
    {
      prop: 'phone',
      label: '电话',
      fieldType: 'input',
      span: 8
    }
  ],
  // 表单第三行，默认整行
  {
    prop: 'remark',
    label: '详细描述',
    fieldType: 'textarea'
  }
]
</script>
```

:::

::: warning 注意
如果是[行内表单](#行内表单)，则网格布局不会生效。
:::

## 设置默认值

在某些业务场景，例如修改详情功能，表单可能需要设置默认值，并且某些字段仅作为修改接口的参数，并不需要渲染在页面上。你可以通过`model`属性来实现表单数据的双向绑定，并且不设置`fieldType`字段实现把相关字段放在表单数据中，但是不进行渲染。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const form = ref({
  id: '',
  no: '',
  status: '',
  time: '',
  imageUrl: ''
})

const fields = [
  {
    prop: 'id',
    label: '事件ID'
  },
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input'
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    fieldData: [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1'
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  },
  {
    prop: 'time',
    label: '上报时间',
    fieldType: 'date'
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  }
]

onMounted(async () => {
  // 模拟加载详情数据
  setTimeout(() => {
    form.value = {
      id: '111',
      no: '123456789',
      status: '1',
      time: '2023-11-21',
      imageUrl:
        '/ruralLivingEn/202310/d5ca2af7-dad1-4bb4-919a-6767da06eb0e.jpg,/ruralLivingEn/202310/62516435-5d3d-4bba-9310-1f3e9bde357c.jpg'
    }
  }, 1000)
})

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```

:::

## 动态表单

通过传入响应式的`field`配置，可以实现表单内容的动态切换。如果需要在`.vue`文件中动态修改`field`配置，可以在`.ts`文件中定义响应式数据并导出，然后在`.vue`文件中导入使用。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { getDictList } from '@szxc/apis'
import { fields, dynamicFields } from './FormTestFields'

const form = ref({
  formType: 'eventType'
})

// 每次formType改变后重新给dynamicFields赋值
watchEffect(() => {
  if (form.value.formType === 'eventType') {
    dynamicFields.value = {
      prop: 'eventType',
      label: '事件类型',
      fieldType: 'radio',
      fieldData: getDictList(
        { dicCode: 'eventType' },
        {
          fieldsMap: {
            dicSubCode: 'value',
            dicSubName: 'label'
          }
        }
      )
    }
  } else if (form.value.formType === 'eventSource') {
    dynamicFields.value = {
      prop: 'eventSource',
      label: '事件来源',
      fieldType: 'checkbox',
      fieldData: getDictList(
        { dicCode: 'info_source' },
        {
          fieldsMap: {
            dicSubCode: 'value',
            dicSubName: 'label'
          }
        }
      )
    }
  }
})

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```

:::

::: details FormTestFields.ts

```ts
import { ref } from 'vue'

// 动态表单项
export const dynamicFields = ref({})

export const fields = [
  {
    prop: 'no',
    label: '编号',
    fieldType: 'input'
  },
  {
    prop: 'formType',
    label: '表单类型',
    fieldType: 'radio',
    fieldData: [
      {
        label: '事件类型',
        value: 'eventType'
      },
      {
        label: '事件来源',
        value: 'eventSource'
      }
    ]
  },
  dynamicFields,
  {
    prop: 'time',
    label: '上报时间',
    fieldType: 'date'
  }
]
```

:::

:::tip
推荐使用[FormItem](/Liv-UI/form-item.html#动态表单)表单项组件实现动态表单，该组件拥有更高的灵活性和可扩展性，可以轻松实现复杂的动态表单。
:::

## 表单校验

表单内部封装了校验逻辑，只有`required`属性为true的表单项才会自动生成校验规则。你可以通过给`buttons`属性中的按钮设置`validate`属性来开启表单校验，表单内置的提交和查询按钮`validate`属性默认为true。
:::demo

```vue
<template>
  <liv-data-form
    :fields="fields"
    :model="form"
    :buttons="buttons"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  no: '',
  status: '',
  time: ''
})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    required: true,
    fieldType: 'input'
  },
  {
    prop: 'status',
    label: '事件状态',
    required: true,
    fieldType: 'select',
    fieldData: [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1'
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  },
  {
    prop: 'time',
    label: '上报时间',
    required: true,
    fieldType: 'date'
  }
]

const buttons = [
  {
    name: '自定义校验按钮',
    type: 'success',
    // 手动开启校验
    validate: true,
    onClick: () => {
      ElMessage.success('校验通过！')
    }
  },
  {
    name: '只校验事件状态',
    type: 'success',
    onClick: (_form, formEl) => {
      formEl?.validateField('status', (isValid) => {
        if (isValid) {
          ElMessage.success('校验通过！')
        }
      })
    }
  },
  {
    name: '清空校验结果',
    type: 'warning',
    onClick: (_form, formEl) => {
      formEl?.clearValidate()
    }
  }
]

const handleSubmit = () => {
  // 内置的提交按钮validate属性默认为true
  ElMessage.success('校验通过！')
}
</script>
```

:::

## 自定义校验规则

你可以通过`rules`属性给每个表单项传入自定义校验规则，`rules`支持传入数组，并按顺序同时校验多个自定义规则。在`utils`包中封装了一些常用[校验规则](/utils/form-validate)可以直接使用。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { validateNumber, validatePhone, validateIdCard } from '@szxc/utils'

const form = ref({
  name: '',
  age: '',
  phone: '',
  idcard: ''
})

const fields = [
  {
    prop: 'name',
    label: '姓名',
    required: true,
    fieldType: 'input',
    rules: {
      validator: (_rule: any, value: any, callback: any) => {
        if (!value) {
          callback(new Error('请输入姓名'))
        } else if (value.length < 2) {
          callback(new Error('姓名必须大于等于2个字符'))
        } else if (value.length > 4) {
          callback(new Error('姓名必须小于等于4个字符'))
        } else {
          callback()
        }
      },
      trigger: ['blur', 'change']
    }
  },
  {
    prop: 'age',
    label: '年龄',
    fieldType: 'input',
    rules: [
      {
        required: true,
        message: '自定义提示',
        trigger: 'blur'
      },
      {
        validator: validateNumber,
        trigger: 'change'
      }
    ]
  },
  {
    prop: 'phone',
    label: '手机号',
    required: true,
    fieldType: 'input',
    rules: [
      {
        validator: validatePhone,
        trigger: 'blur'
      },
      {
        validator: validateNumber,
        trigger: 'change'
      }
    ]
  },
  {
    prop: 'idcard',
    label: '身份证',
    required: true,
    fieldType: 'input',
    rules: {
      validator: validateIdCard,
      trigger: 'blur'
    }
  }
]

const handleSubmit = () => {
  ElMessage.success('校验通过！')
}
</script>
```

:::

## 属性透传

Data Form基于[ElForm](https://element-plus.org/zh-CN/component/form.html#form-attributes)封装，所以你可以传入[ElForm](https://element-plus.org/zh-CN/component/form.html#form-attributes)的所有属性和事件，并且在字段配置属性`fields`中，根据`fieldType`的不同，你可以透传属性和事件给对应的渲染组件，具体`fieldType`对应的渲染组件请查看[fieldType可选值](#fieldtype可选值)。

:::demo

```vue
<template>
  <liv-data-form :fields="fields" :model="form" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  no: '',
  status: '',
  location: '',
  imageUrl: '',
  article: ''
})

const fields = [
  {
    prop: 'no',
    label: '事件编号',
    fieldType: 'input',
    placeholder: '自定义提示',
    maxlength: 5
  },
  {
    prop: 'status',
    label: '事件状态',
    fieldType: 'select',
    fieldData: [
      {
        label: '待处理',
        value: '0'
      },
      {
        label: '待评价',
        value: '1',
        disabled: true
      },
      {
        label: '已办结',
        value: '2'
      }
    ]
  },
  {
    prop: 'date',
    label: '日期选择器',
    fieldType: 'date',
    type: 'datetime'
  },
  {
    prop: 'location',
    label: '开启定位',
    fieldType: 'switch',
    inlinePrompt: true,
    activeText: '完整展示多个内容',
    inactiveText: '多个内容'
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image',
    listType: 'picture',
    limit: 1,
    tip: '最多上传一张图片'
  },
  {
    prop: 'article',
    label: '文章内容',
    fieldType: 'richText',
    editor: {
      editorConfig: {
        placeholder: '自定义提示语',
        MENU_CONF: {
          uploadImage: {
            // 只允许上传1M以内的文件
            maxFileSize: 1 * 1024 * 1024,
            onError(file: File, err: any, res: any) {
              ElMessage.error(`${file.name} 上传出错：${err.message}`)
            }
          }
        }
      }
    }
  }
]

const handleSubmit = (form) => {
  ElMessage.success(`提交的表单内容：${JSON.stringify(form)}`)
}
</script>
```

:::

## 属性

| 属性名  | 说明         | 类型                                                                                        | 可选值 | 默认值 |
| ------- | ------------ | ------------------------------------------------------------------------------------------- | ------ | ------ |
| model   | 表单数据     | `Record<string, any>`                                                                       | —      | —      |
| fields  | 字段配置信息 | [`Array<Field>`](#field)                                                                    | —      | []     |
| buttons | 自定义按钮   | [`Array<Elbutton>`](https://element-plus.org/zh-CN/component/button.html#button-attributes) | —      | []     |

### Field

| 属性名    | 说明                                                                                                                                                                                                                                                                                                                                | 类型                           | 可选值                                                                                                                                                          | 默认值 |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| fieldType | 字段类型，不传则不渲染该字段的表单项                                                                                                                                                                                                                                                                                                | `enum`                         | `input` `textarea` `select` `dict` `dictId` `grid` `gridId` `date` `time` `radio` `checkbox` `number` `rate` `switch` `image` `audio` `video` `file` `location` | —      |
| fieldData | 当渲染的组件为[ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)、[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)、[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)等需要手动设置数据源的组件时，可以用过该字段传入数据源， | `Array` / `getter` / `Promise` | —                                                                                                                                                               | —      |

### fieldType可选值

| 字段类型                       | 说明                    | 对应的渲染组件                                                                                                                                                                                 |
| ------------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input` `textarea`             | 输入框                  | [ElInput](https://element-plus.org/zh-CN/component/input.html#attributes)                                                                                                                      |
| `select`                       | 选择器                  | [ElSelect](https://element-plus.org/zh-CN/component/select.html#select-attributes)<[ElOption](https://element-plus.org/zh-CN/component/select.html#option-attributes)[]>                       |
| `date`                         | 日期选择器              | [ElDatePicker](https://element-plus.org/zh-CN/component/date-picker.html#attributes)                                                                                                           |
| `time`                         | 时间选择器              | [ElTimePicker](https://element-plus.org/zh-CN/component/time-picker.html#attributes)                                                                                                           |
| `radio`                        | 单选框                  | [ElRadioGroup](https://element-plus.org/zh-CN/component/radio.html#radiogroup-attributes)<[ElRadio](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)[]>                   |
| `checkbox`                     | 多选框                  | [ElCheckboxGroup](https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-attributes)<[ElCheckbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)[]> |
| `number`                       | 数字输入框              | [ElInputNumber](https://element-plus.org/zh-CN/component/input-number.html#attributes)                                                                                                         |
| `rate`                         | 评分                    | [ElRate](https://element-plus.org/zh-CN/component/rate.html#attributes)                                                                                                                        |
| `switch`                       | 开关                    | [ElSwitch](https://element-plus.org/zh-CN/component/switch.html#attributes)                                                                                                                    |
| `image` `audio` `video` `file` | 图片/音频/视频/文件上传 | [ElUpload](https://element-plus.org/zh-CN/component/upload.html#%E5%B1%9E%E6%80%A7)                                                                                                            |
| `dict` `dictId`                | 字典选择器              | [DictSelect](/Liv-UI/dict-select)                                                                                                                                                              |
| `grid` `gridId`                | 网格选择器              | [GridCascader](/Liv-UI/grid-cascader)                                                                                                                                                          |
| `personnel`                    | 人员选择器              | [PersonnelSelect](/Liv-UI/personnel-select)                                                                                                                                                    |
| `location`                     | 地图选点                | [LocationPicker](/Liv-UI/location-picker)                                                                                                                                                      |
| `richText`                     | 富文本编辑器            | [WangEditor](https://www.wangeditor.com)                                                                                                                                                       |

## 事件

| 事件名      | 说明                                                     | 类型       | 可选值                   | 默认值 |
| ----------- | -------------------------------------------------------- | ---------- | ------------------------ | ------ |
| submit      | 点击提交按钮时，内部会对表单进行校验，校验通过后才会触发 | `Function` | `(form, formEl) => void` | —      |
| rest        | 点击重置按钮时触发                                       | `Function` | `(form, formEl) => void` | —      |
| back        | 点击返回按钮时触发                                       | `Function` | `(form, formEl) => void` | —      |
| search      | 点击查询按钮时，内部会对表单进行校验，校验通过后才会触发 | `Function` | `(form, formEl) => void` | —      |
| add         | 点击新增按钮时触发                                       | `Function` | `(form, formEl) => void` | —      |
| batchDelete | 点击批量删除按钮时触发                                   | `Function` | `(form, formEl) => void` | —      |
