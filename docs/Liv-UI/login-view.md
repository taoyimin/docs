# Login View 通用登录页

对[LoginForm](login-form.md)组件进行了二次封装，封装了统一的登录页的样式，用于快速生成通用登录页面。

## 基础用法

:::demo
```vue
<template>
    <liv-login-view style="{ width: 100%; height: 540px; }" />
</template>
```
:::

## 属性透传

你可以透传[LoginForm](login-form.md#属性)组件支持的所有属性。

:::demo
```vue
<template>
  <liv-login-view
    style="{ width: 100%; height: 540px; }"
    title="Liv Web文档"
    color="red"
    width="420px"
    path="/index"
  />
</template>
```
:::

## 添加路由

你可以通过添加路由的方式直接引用该组件快速生成登录页，无需创建`.vue`文件。

```ts
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@szxc/components/login-view'),
    props: { path: '/index' }
  },
  {
    path: '/index',
    component: () => import('../views/IndexView.vue')
  }
]

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes 
})
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 表单标题 | `string` | — | [环境变量](/guide/env.html)中的`VITE_APP_NAME`变量 |
| width | 表单宽度 | `string` | — | 360px |
| color | 表单主题色 | `string` | — | #1890ff |
| route | 路由地址 | `string` | — | — |