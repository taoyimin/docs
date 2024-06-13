# 使用须知

## 组件库引入

组件库遵循[easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)规范，在`pages.json`文件中配置相应规则即可实现组件的自动导入、按需打包等。

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "^liv-([^-].*)": "liv-uni/components/$1/src/$1.vue"
  }
}
```

## 提供通用性的customStyle参数

由于微信小程序端存在[组件样式隔离](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)机制，为了方便在外部修改组件的样式，每个组件都提供了一个`customStyle`属性，一般作用于组件内部的根节点，可以方便设置一些基础样式。

```html
<liv-list :custom-style="{backgroundColor: 'red'}"></liv-list>
```

## 优化在微信小程序上的差异

微信小程序中，默认情况下，自定义组件本身的那个节点是一个“普通”的节点，使用时可以在这个节点上设置class、style 、动画、 flex布局等，但是在复杂的布局下，这可能会导致无法控制组件的整体布局，所以组件库统一将所有组件设置为“虚拟的”，让其能更好的按照预期进行工作。

```ts
// #ifdef MP-WEIXIN
// 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
options: {
  virtualHost: true
}
// #endif
```

## 图表开发使用uCharts库

图表开发统一使用[uCharts](https://www.ucharts.cn/v2/#/guide/index)跨平台图表库，所有项目已经通过`uni_modules`方式集成了该库，推荐使用官方提供的组件方式进行开发。
