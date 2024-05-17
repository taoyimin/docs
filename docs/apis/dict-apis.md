# 数据字典接口

## getDictList

获取数据字典集合。

|参数|说明|类型|
| ----|---- |---- |
|dicCode|数据字典类型| `string` |

```ts
import { getDictList } from '@szxc/apis'

const dicts = await getDictList({ dicCode: 'eventType' })
```