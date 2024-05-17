# 自定义指令

## v-remove
用于移除某一个dom元素，同时保留该dom元素所有的子元素。

```html
<div class="container" v-remove>
  <div class="content">内容1</div>
  <div class="content">内容2</div>
  <div class="content">内容3</div>
</div>
```

最终将渲染：
```html
<div class="content">内容1</div>
<div class="content">内容2</div>
<div class="content">内容3</div>
```

::: warning 注意
由于该指令会将dom元素从dom树中移除，所以该指令只在首次渲染时生效，后续改变`v-remove`的值将不会生效。
:::