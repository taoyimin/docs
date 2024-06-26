# 吸顶

该组件与CSS中`position: sticky`属性实现的效果一致，当组件达到预设的到顶部距离时，就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。

## 基础用法

```vue
<template>
  <view class="container">
    <!-- 建议放在外层 -->
    <liv-sticky>......</liv-sticky>
    <view class="container__inner">
      <!-- 不建议放在层层嵌套的view中，除非你清楚知道自己为什么需要这么做 -->
      <liv-sticky>......</liv-sticky>
    </view>
  </view>
</template>
```

## 属性

你可以透传[UpSticky](https://uiadmin.net/uview-plus/components/sticky.html#props)组件的所有属性。

## 插槽

| 插槽名  | 说明           | 作用域 |
| ------- | -------------- | ------ |
| default | 需要吸顶的内容 | —      |
