# 统计方法

## 统计合并

根据指定字段对多个统计接口的结果进行合并。

### 基础用法

```ts
import { mergeStatistics } from '@szxc/utils'
import { statGriderCount, statManagerCount } from '@szxc/apis'

const results = await mergeStatistics(
  'gridCode',
  statGriderCount({ gridId: 423615 }),
  statManagerCount({ gridId: 423615 })
)
```

### 对结果排序

```ts
import { mergeStatistics } from '@szxc/utils'
import { statGriderCount, statManagerCount } from '@szxc/apis'

const results1 = await mergeStatistics(
  // 根据griderCount字段降序排序
  {
    key: 'gridCode',
    orderKey: 'griderCount',
    orderType: 'desc'
  },
  statGriderCount({ gridId: 423615 }),
  statManagerCount({ gridId: 423615 })
)

const results2 = await mergeStatistics(
  // 先根据griderCount字段降序排序，再根据managerCount字段升序排序
  {
    key: 'gridCode',
    orderKey: ['griderCount', 'managerCount'],
    orderType: ['desc', 'asc']
  },
  statGriderCount({ gridId: 423615 }),
  statManagerCount({ gridId: 423615 })
)
```

:::tip 提示
如果不指定排序规则，则默认根据`key`对应的值进行升序排序。
:::

### 参数

|参数名|说明|类型|
| ----|---- |---- |
|key|合并字段或合并参数|`string` `MergeStatisticsParams`|
|...args|任意多个Promise对象|`Promise`|

### MergeStatisticsParams
|参数名|说明|类型|
| ----|---- |---- |
|key|需要根据哪个字段进行统计结果合并|`string`|
|orderKey|需要排序的字段|`string` `Array<string>`|
|orderType|对应字段需要排序的类型|`OrderType` `Array<OrderType>`|

::: details 类型声明
```ts
type OrderType = "asc" | "desc";

export interface MergeStatisticsParams {
  key: string;
  orderKey?: string | string[];
  orderType?: OrderType | OrderType[];
}
```
:::