# authorityStore

用于本地持久化存储用户权限及菜单信息。

## 基础用法

```ts
import { useAuthorityStore } from '@szxc/stores'

const authorityStore = useAuthorityStore()

// 初始化用户权限及菜单信息
const { authorities, menus } = await authorityStore.initAuthority()

// 获取用户权限信息
const authorities = authorityStore.authorities

// 获取用户菜单信息
const menus = authorityStore.menus

// 校验用户权限
const isAuthority = authorityStore.checkAuthority("demoAuthority")
```

## State

|名称|说明|类型|
| ----|---- |---- |
|authorities|用户权限信息| `string[]` |
|menus|用户菜单树| `Menu[]` |

## Getters

|名称|说明|类型|
| ----|---- |---- |
|dynamicRoutes|动态路由树| `string[]` |

## Action
|名称|说明|类型|
| ----|---- |---- |
|initAuthority|初始化用户权限及菜单信息| `() => Promise<{ authorities: string[]; menus: Menu[]; }>` |
|checkAuthority|校验用户权限信息| `(authority: string) => boolean` |