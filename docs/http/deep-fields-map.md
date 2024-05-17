# deepFieldsMap 字段映射

用于对接口返回的结果进行字段映射，该映射方法为深层映射，返回数据中所有深层嵌套对象的字段都会被映射。

## 基础用法
假设有一个网格查询接口：
```ts
import { get } from '@szxc/http'

const data = await get('/grid', { gridCode: 36 })

// 返回的结果如下
data = [
  {
    gridCode: 36,
    gridName: '江西省',
    childList: [
      {
        gridCode: 3601,
        gridName: '南昌市',
        childList: [
          {
            gridCode: 360102,
            gridName: '东湖区'
          },
          {
            gridCode: 360103,
            gridName: '西湖区'
          }
        ]
      },
      {
        gridCode: 3602,
        gridName: '景德镇市',
        childList: [
          {
            gridCode: 360202,
            gridName: '昌江区'
          },
          {
            gridCode: 360203,
            gridName: '珠山区'
          }
        ]
      }
    ]
  }
]
```

通过`deepFieldsMap`字段，可以方便的将接口返回的所有字段映射为指定的字段。
```ts
import { get } from '@szxc/http'

const data = await get(
  '/grid',
  { gridCode: 36 },
  { deepFieldsMap: { 
      gridCode: 'value', 
      gridName: 'label', 
      childList: 'children'
    } 
  }
)

// 返回的结果如下
data = [
  {
    value: 36,
    label: '江西省',
    children: [
      {
        value: 3601,
        label: '南昌市',
        children: [
          {
            value: 360102,
            label: '东湖区'
          },
          {
            value: 360103,
            label: '西湖区'
          }
        ]
      },
      {
        value: 3602,
        label: '景德镇市',
        children: [
          {
            value: 360202,
            label: '昌江区'
          },
          {
            value: 360203,
            label: '珠山区'
          }
        ]
      }
    ]
  }
]
```