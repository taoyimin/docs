# 导出excel
基于exceljs库封装的导出excel方法
（目前仅支持文本，不支持导出图片等其它格式）


## 导出表格
:::demo
```vue
<template>
<el-button type="primary" :loading="exportLoading" @click="handleExport">导出</el-button>
  <liv-data-table :data="tableData" :fields="tableFields"/>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { excelJsExport } from '@szxc/utils'

const exportLoading =  ref<boolean>(false);
  const tableData = ref([
  {
    gridName: '网格1',
    statusStr: '正常',
    updateTime: '2022-01-01 12:00:00'
  },
  {
    gridName: '网格3',
    statusStr: '正常',
    updateTime: '2022-01-02 12:00:00'
  }
])

const tableFields = [
  {
    prop: 'gridName',
    label: '网格名称'
  },
  {
    prop: 'statusStr',
    label: '状态'
  },
  {
    prop: 'updateTime',
    label: '更新时间'
  }
]

const handleExport = () => {
  exportLoading.value = true;
  excelJsExport({
    sheetName: '事件列表.xlsx',
    headerColumns: tableFields,
    tableData: tableData.value
  })
  exportLoading.value = false;
}
</script>

```
:::

|参数|说明|类型|是否必填|
| ----|---- |---- |---- |
|sheetName|导出文件名|string|非必填|
|headerColumns|表格字段配置|Array|必填|
|tableData|表格数据|Array|必填|

更多参数请参考[exceljs](https://github.com/exceljs/exceljs/blob/master/README_zh.md#%E6%B5%8F%E8%A7%88%E5%99%A8)