# fieldsMap 字段映射

用于对接口返回的结果进行字段映射，只会映射返回数据第一层的字段。

## 基础用法
假设有一个字典查询接口：
```ts
import { get } from '@szxc/http'

const data = await get('/dict', { dictType: 'eventType' })

// 返回的结果如下
data = [
  {
    id: 0,
    dicSubCode: 'todo',
    dicSubName: '待处理'
  },
  {
    id: 1,
    dicSubCode: 'done',
    dicSubName: '已处理'
  }
]
```

通过`fieldsMap`字段，可以方便的将接口返回的字段映射为指定的字段。
```ts
import { get } from '@szxc/http'

const data = await get(
  '/dict',
  { dictType: 'eventType' },
  { fieldsMap: { dicSubCode: 'value', dicSubName: 'label' } }
)

// 返回的结果如下
data = [
  {
    id: 0,
    value: 'todo',
    label: '待处理'
  },
  {
    id: 1,
    value: 'done',
    label: '已处理'
  }
]
```