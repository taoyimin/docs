# Login Form 登录表单

内部封装了用户登录逻辑，在需要实现登录功能的页面引入该组件即可快速实现用户登录业务。

## 基础用法

:::demo
```vue
<template>
  <liv-login-form />
</template>
```
:::

## 样式设置

通过`title`、`color`和`width`等属性设置组件的样式。

:::demo
```vue
<template>
  <liv-login-form title="Liv Web文档" color="red" width="450px" />
</template>
```
:::

:::tip 提示
如果不设置`title`属性，则默认取[环境变量](/guide/env.html)中的`VITE_APP_NAME`变量。
:::

## 路由跳转

你可以通过`path`属性设置登录成功后跳转的路由地址。

:::demo
```vue
<template>
  <liv-login-form path="/index" />
</template>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| title | 表单标题 | `string` | — | [环境变量](/guide/env.html)中的`VITE_APP_NAME`变量 |
| width | 表单宽度 | `string` | — | 360px |
| color | 表单主题色 | `string` | — | #1890ff |
| path | 登录成功后跳转的路由地址 | `string` | — | — |