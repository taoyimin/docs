# Data Table 数据表格

该组件用于快速生成数据表格，内部封装了表格渲染、文件处理等逻辑，只需传入[data](#属性)和[fields](#field)属性即可。

## 基础用法

:::demo

```vue
<template>
  <liv-data-table :data="data.records" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { qrCode } from '@szxc/utils'
import { getDemoList } from '@szxc/apis'

const data = ref([])

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusName',
    label: '事件状态'
  },
  {
    prop: 'desc',
    label: '事件描述'
  },
  {
    prop: 'id',
    label: '二维码',
    fieldType: 'qrcode'
  },
  {
    prop: 'id',
    label: '操作',
    fieldType: 'button',
    name: '下载',
    type: 'success',
    onClick: (row, column, cellValue, index) => {
      qrCode.downLoadQRCode(cellValue, `${cellValue}.png`)
    }
  },
  {
    prop: 'dealFlag',
    label: '开关',
    fieldType: 'switch',
    onChange: (value, row, column, cellValue, index) => {
      row.dealFlag = value
    }
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  }
]

onMounted(async () => {
  // 请求列表数据
  data.value = await getDemoList()
})
</script>
```

:::

::: tip 提示
组件内部默认开启了[show-overflow-tooltip](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)属性，当分配的宽度不足以单行显示时，会自动省略多余内容，并在鼠标悬停时显示[tooltip](https://element-plus.org/zh-CN/component/tooltip.html)。表格内图片默认开启了[懒加载](https://element-plus.org/zh-CN/component/image.html#%E6%87%92%E5%8A%A0%E8%BD%BD)功能，只有滚动到对应位置才会加载图片。表格内图片和悬停预览默认展示缩略图，点击全屏预览会加载原图进行展示。
:::

## 操作按钮

表格内部封装了详情、编辑、删除三个常用按钮，默认`fixed`在表单最右侧，监听相应事件后自动渲染，默认不渲染。你可以通过`()`设置权限标识，如果当前登录用户没有该权限标识，则按钮不会被渲染。

:::demo

```vue
<template>
  <liv-data-table
    :data="data.records"
    :fields="fields"
    @detail="handleDetail"
    @edit(demoAuthority)="handleEdit"
    @delete(demoAuthority|delete)="handleDelete"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoList } from '@szxc/apis'

const data = ref([])

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusName',
    label: '事件状态'
  },
  {
    prop: 'typeName',
    label: '事件类型'
  }
]

onMounted(async () => {
  // 请求列表数据
  data.value = await getDemoList()
})

const handleDetail = (data, index) => {
  ElMessage.success(`查看第${index + 1}行编号：${data.no}的事件`)
}

const handleEdit = (data) => {
  ElMessage.error(
    `点击了带demoAuthority权限标识的编辑按钮，编辑编号：${data.no}的事件`
  )
}

const handleDelete = (data) => {
  ElMessage.error(
    `点击了带demoAuthority和delete权限标识的删除按钮，删除编号：${data.no}的事件`
  )
}
</script>
```

:::

## 自定义按钮

除了使用组件内部封装好的按钮，你还可以使用`buttons`属性根据业务需要传入自定义按钮。你可以通过`authority`属性给按钮添加权限标识，如果当前登录用户没有该权限标识，则按钮不会被渲染。

:::demo

```vue
<template>
  <liv-data-table
    :data="data.records"
    :fields="fields"
    @detail="handleDetail"
    :buttons="buttons"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoList } from '@szxc/apis'
import { ElMessage } from 'element-plus'

const data = ref([])

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusName',
    label: '事件状态'
  },
  {
    prop: 'typeName',
    label: '事件类型'
  }
]

const buttons = [
  {
    name: '点赞',
    type: 'success',
    authority: 'demoAuthority',
    onClick: (data) => {
      ElMessage.success(
        `点击了带demoAuthority权限标识的按钮，点赞编号：${data.no}的事件`
      )
    }
  },
  {
    name: '收藏',
    type: 'danger',
    // 传入多个权限标识
    authority: ['demoAuthority', 'collection'],
    onClick: (data) => {
      ElMessage.success(`收藏编号：${data.no}的事件`)
    }
  },
  {
    name: '取消点赞',
    type: 'success',
    onClick: (data) => {
      ElMessage.success(`取消点赞编号：${data.no}的事件`)
    }
  },
  {
    name: '取消收藏',
    type: 'danger',
    onClick: (data) => {
      ElMessage.success(`取消收藏编号：${data.no}的事件`)
    }
  }
]

onMounted(async () => {
  // 请求列表数据
  data.value = await getDemoList()
})

const handleDetail = (data) => {
  ElMessage.success(`查看编号：${data.no}的事件`)
}
</script>
```

:::

## 格式化内容

传入`fieldFormat`函数可以对表格项的内容进行格式化处理。

:::demo

```vue
<template>
  <liv-data-table :data="data.records" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoList } from '@szxc/apis'

const data = ref([])

const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'typeName',
    label: '事件类型',
    fieldFormat: (value) => `${value}事件`
  },
  {
    prop: 'contactName',
    label: '联系人',
    fieldFormat: (value, data) => {
      return `${value}（${data.contactTelephone}）`
    }
  }
]

onMounted(async () => {
  // 请求列表数据
  data.value = await getDemoList()
})
</script>
```

:::

## 动态表格

通过传入响应式的`field`配置，可以实现表格内容的动态切换。如果需要在`.vue`文件中动态修改`field`配置，可以在`.ts`文件中定义响应式数据并导出，然后在`.vue`文件中导入使用。

:::demo

```vue
<template>
  <liv-data-table :data="pageData.records" :fields="fields" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getDemoList } from '@szxc/apis'
import { fields, buttonClick, switchChange } from './TableTestFields'

const pageData = ref<Page>({
  records: []
})

onMounted(async () => {
  pageData.value = await getDemoList({
    current: 1,
    size: 10
  })
})

buttonClick.value = (row, column, cellValue, index) => {
  pageData.value.records.splice(index, 1)
  ElMessage.success(`删除了id为${cellValue}的事件`)
}

switchChange.value = (value, row, column, cellValue, index) => {
  row.archiveFlag = value
}
</script>
```

:::

::: details TableTestFields.ts

```ts
import { ref } from 'vue'

export const buttonClick = ref()

export const switchChange = ref()

export const fields = [
  {
    prop: 'no',
    label: '事件编号'
  },
  {
    prop: 'statusName',
    label: '事件状态'
  },
  {
    prop: 'desc',
    label: '事件描述'
  },
  {
    prop: 'archiveFlag',
    label: '归档状态',
    fieldType: 'tag',
    tagType: (row, column, cellValue, index) => {
      return cellValue === '0' ? 'warning' : 'success'
    },
    fieldFormat: (value, data) => {
      return value === '0' ? '未归档' : '已归档'
    }
  },
  {
    prop: 'id',
    label: '操作',
    fieldType: 'button',
    name: '删除',
    type: 'danger',
    onClick: buttonClick
  },
  {
    prop: 'archiveFlag',
    label: '是否归档',
    fieldType: 'switch',
    inactiveValue: '0',
    activeValue: '1',
    onChange: switchChange
  },
  {
    prop: 'imageUrl',
    label: '事件图片',
    fieldType: 'image'
  }
]
```

:::

## 属性透传

Data Table基于[ElTable](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)封装，所以你可以传入[ElTable](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)的所有属性和事件，并且在字段配置属性`fields`中，你可以透传属性和事件给对应的[ElTableColumn](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)。

:::demo

```vue
<template>
  <liv-data-table
    :data="data"
    :fields="fields"
    row-key="dictCode"
    stripe
    default-expand-all
  />
</template>

<script lang="ts" setup>
const data = [
  {
    dictCode: '1',
    dictName: '字典1',
    dictRemark: '字典1描述'
  },
  {
    dictCode: '2',
    dictName: '字典2',
    dictRemark: '字典2描述',
    children: [
      {
        dictCode: '2-1',
        dictName: '字典2-1',
        dictRemark: '字典2-1描述'
      },
      {
        dictCode: '2-2',
        dictName: '字典2-2',
        dictRemark: '字典2-2描述'
      }
    ]
  },
  {
    dictCode: '3',
    dictName: '字典3',
    dictRemark: '字典3描述'
  }
]

const fields = [
  {
    type: 'selection'
  },
  {
    prop: 'dictCode',
    label: '字典值',
    sortable: true
  },
  {
    prop: 'dictName',
    label: '字典名称',
    formatter: (_row, _column, cellValue, _index) => {
      return `[${cellValue}]`
    }
  },
  {
    prop: 'dictRemark',
    label: '字典描述'
  }
]
</script>
```

:::

## 属性

| 属性名       | 说明                 | 类型                                                                                        | 可选值 | 默认值 |
| ------------ | -------------------- | ------------------------------------------------------------------------------------------- | ------ | ------ |
| data         | 表格数据             | `Array<Object>`                                                                             | —      | []     |
| fields       | 字段配置信息         | [`Array<Field>`](#field)                                                                    | —      | []     |
| buttons      | 自定义按钮           | [`Array<Elbutton>`](https://element-plus.org/zh-CN/component/button.html#button-attributes) | —      | []     |
| expandButton | 是否展开全部操作按钮 | `Boolean`                                                                                   | —      | false  |

### Field

| 属性名      | 说明                         | 类型       | 可选值                                   | 默认值 |
| ----------- | ---------------------------- | ---------- | ---------------------------------------- | ------ |
| fieldType   | 字段类型，不传则默认显示文本 | `enum`     | `image` `button` `switch` `qrcode` `tag` | —      |
| fieldFormat | 格式化字段内容               | `Function` | `(value ,data) => void`                  | —      |

## 事件

| 事件名 | 说明               | 类型       | 可选值                  | 默认值 |
| ------ | ------------------ | ---------- | ----------------------- | ------ |
| detail | 点击详情按钮时触发 | `Function` | `(data, index) => void` | —      |
| edit   | 点击编辑按钮时触发 | `Function` | `(data, index) => void` | —      |
| delete | 点击删除按钮时触发 | `Function` | `(data, index) => void` | —      |
