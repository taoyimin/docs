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

## v-authority
如果当前登录用户拥有指令传入的权限标识，则渲染元素。

```html
<button v-authority="'query'">查询</button>
```

## v-env
如果当前环境和传入的指令一致，则渲染元素。

```html
<!-- 可以指定某一个环境 -->
<div v-env="'development'">只有江西测试环境显示</div>
<div v-env="'dayunprod'">只有龘云生产环境显示</div>

<!-- 可以同时指定多个环境 -->
<div v-env="['nxtest', 'dayuntest']">只有宁夏测试、龘云测试环境显示</div>

<!-- 可以指定某一套环境" -->
<!-- 等价于v-env="['development', 'production'] -->
<div v-env="'jiangxi'">只有江西测试、江西生产环境显示</div>
<!-- 等价于v-env="['dayuntest', 'dayunprod'] -->
<div v-env="'dayun'">只有龘云测试、龘云生产环境显示</div>
<!-- 等价于v-env="['nxtest', 'nxprod'] -->
<div v-env="'ningxia'">只有宁夏测试、宁夏生产环境显示</div>

<!-- 可以同时指定某个环境和某套环境 -->
<!-- 等价于v-env="['development', 'production', 'dayunprod', 'nxprod'] -->
<div v-env="['jiangxi', 'dayunprod', 'nxprod']">只有江西测试、江西生产、龘云生产、宁夏生产环境显示</div>
```

## v-not-env
如果当前环境和传入的指令不一致，则渲染元素，用法与`v-env`指令相同，功能相反。

```html
<!-- 可以指定某一个环境 -->
<div v-not-env="'development'">只有江西测试环境不显示</div>
<div v-not-env="'dayunprod'">只有龘云生产环境不显示</div>

<!-- 可以同时指定多个环境 -->
<div v-not-env="['nxtest', 'dayuntest']">只有宁夏测试、龘云测试环境不显示</div>

<!-- 可以指定某一套环境" -->
<!-- 等价于v-not-env="['development', 'production'] -->
<div v-not-env="'jiangxi'">只有江西测试、江西生产环境不显示</div>
<!-- 等价于v-not-env="['dayuntest', 'dayunprod'] -->
<div v-not-env="'dayun'">只有龘云测试、龘云生产环境不显示</div>
<!-- 等价于v-not-env="['nxtest', 'nxprod'] -->
<div v-not-env="'ningxia'">只有宁夏测试、宁夏生产环境不显示</div>

<!-- 可以同时指定某个环境和某套环境 -->
<!-- 等价于v-not-env="['development', 'production', 'dayunprod', 'nxprod'] -->
<div v-not-env="['jiangxi', 'dayunprod', 'nxprod']">只有江西测试、江西生产、龘云生产、宁夏生产环境不显示</div>
```