# 侧边栏菜单

该组件封装了菜单权限相关逻辑，内部会根据当前应用的权限标识及登录用户的菜单权限自动生成侧边栏菜单。

## 基础用法
:::demo
```vue
<template>
  <el-aside width="200px">
    <liv-aside-menu></liv-aside-menu>
  </el-aside>
</template>
```
:::
:::tip 提示
组件内部通过`VITE_APP_AUTHORITY`应用权限标识变量区分不同系统的权限，所以在使用该组件前必须配置对应的[环境变量](/guide/env.md#环境变量对照表)。
:::