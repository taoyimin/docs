---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Liv Web"
  text: 人居环境前端文档
  tagline: 基于Vite4、Vue3、Vue-Router4、Pinia构建的微前端应用
  image:
    src: /logo.png
    width: 1000
    height: 1000
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 研发云上查看
      link: https://www.srdcloud.cn/code/3166/repoView/107408?activeType=list&activeTab=codeFile&key=master

features:
  - icon: 💡
    title: 采用monorepo管理仓库
    details: 单仓库管理多项目，无需打包发布，即可实现跨项目调用
  - icon: ⚡️
    title: 基于Vite4进行构建
    details: 无论应用程序大小如何，都始终极快的模块热替换（HMR）
  - icon: 🤞
    title: 封装Liv-UI组件库
    details: 基于Element-Plus结合业务进行二次封装，支持全局和按需引入
  - icon: 🚀
    title: 使用微前端框架开发
    details: 支持独立打包部署，支持跨技术、跨框架集成
  - icon: 📦
    title: 公共接口和通用模块
    details: 开箱即用，减少重复代码编写，快速实现业务功能
  - icon: 🔑
    title: 完全类型化的API
    details: 灵活的 API 和完整的 TypeScript 类型
---

