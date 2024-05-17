# 网格接口

## getGrid

根据gridCode查询本级网格信息。

|参数|说明|类型|
| ----|---- |---- |
|gridCode|网格编码| `string` |

```ts
import { getGrid } from '@szxc/apis'

// 查询东湖区的网格信息
const grid = await getGrid({ gridCode: '360102' })
```

## getGridById

根据gridId查询本级网格信息。

|参数|说明|类型|
| ----|---- |---- |
|id|网格id| `string` |

```ts
import { getGridById } from '@szxc/apis'

// 查询东湖区的网格信息
const { gridCode } = await getGridById({ id: '423715' })
```

## getGridChildren

根据gridCode查询子网格信息。

|参数|说明|类型|
| ----|---- |---- |
|gridCode|网格编码| `string` |

```ts
import { getGridChildren } from '@szxc/apis'

// 查询南昌市子级网格信息
const grids = await getGridChildren({ gridCode: '3601' })
```

## getExpandedTree

根据rootCode和targetCode查询展开后的网格树。

|参数|说明|类型|
| ----|---- |---- |
|rootCode|起始网格编码，不传默认从根网格开始展开| `string` |
|targetCode|目标网格编码| `string` |

```ts
import { useUserStore } from "@szxc/stores"
import { getExpandedTree } from '@szxc/apis'

// 用户信息
const userStore = useUserStore()

// 查询从根网格到东湖区网格展开后的网格树
const { areaTree, codePath } = await getExpandedTree({ targetCode: '360102' })

// 查询从用户所属网格到东湖区网格展开后的网格树
const { areaTree, codePath } = await getExpandedTree({ 
  rootCode: userStore.userInfo.globalCode, 
  targetCode: '360102' 
})
```

## getExpandedTreeById

根据rootId和targetId查询展开后的网格树。

|参数|说明|类型|
| ----|---- |---- |
|rootId|起始网格id，不传默认从根网格开始展开| `string` |
|targetId|目标网格id| `string` |

```ts
import { useUserStore } from "@szxc/stores"
import { getExpandedTreeById } from '@szxc/apis'

// 用户信息
const userStore = useUserStore()

// 查询从根网格到东湖区网格展开后的网格树
const { areaTree, codePath } = await getExpandedTreeById({ targetId: '423715' })

// 查询从用户所属网格到东湖区网格展开后的网格树
const { areaTree, codePath } = await getExpandedTreeById({ 
  rootId: userStore.userInfo.gridId, 
  targetId: '423715' 
})
```

## getRootGrid

查询根网格信息。

```ts
import { getRootGrid } from '@szxc/apis'

// 查询根网格信息
const grid = await getRootGrid()
```