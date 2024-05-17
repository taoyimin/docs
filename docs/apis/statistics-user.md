# 用户统计接口

## statManagerCount

查询本级及下一级管护员数。

|参数|说明|类型|
| ----|---- |---- |
|gridId|网格id| `number` |

```ts
import { statManagerCount } from '@szxc/apis'

const results = await statManagerCount({ gridId: 423615 })
```

## statGriderCount

查询本级及下一级网格员数。

|参数|说明|类型|
| ----|---- |---- |
|gridId|网格id| `number` |

```ts
import { statGriderCount } from '@szxc/apis'

const results = await statGriderCount({ gridId: 423615 })
```