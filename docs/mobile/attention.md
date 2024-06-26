# 注意事项

## 单应用开发

目前小程序集成单应用的方式主要为内嵌H5页面，为方便后期可以快速实现小程序原生集成。单应用开发尽量不在主包里面做开发，每个模块都新建一个分包，并且分包名不和其他单应用分包名重复。例如，高标农田小程序需要开发巡田事件模块，则新建一个`farmlandEvent`分包（码上通小程序已存在`event`分包，不能同名），所有图片资源及页面都放在对应的分包里面，如果后期码上通小程序需要原生集成巡田事件模块，直接把高标农田小程序的`farmlandEvent`分包复制过去即可。同理，如果高标农田小程序需要原生集成人居事件模块，直接把码上通小程序的`event`分包复制过来即可。

### 目前已存在的分包名

<table>
	<tr>
	    <td >项目名</td>
	    <td>分包名</td>
	    <td>备注</td>  
	</tr>
	<tr>
	    <td rowspan="7">living-environment</td>
	    <td>event</td>
	    <td>人居事件</td>
	</tr>
    <tr>
        <td>manage</td>
	    <td>平台管理</td>
	</tr>
	<tr>
        <td>point</td>
	    <td>积分商城</td>
	</tr>
	<tr>
        <td>ljfl</td>
	    <td>垃圾分类</td>
	</tr>
    <tr>
        <td>extend</td>
	    <td>用户推广</td>
	</tr>
    <tr>
        <td>guide</td>
	    <td>操作指南</td>
	</tr>
	  <tr>
        <td>ghgk</td>
	    <td>管护公开</td>
	</tr>
	<tr>
	    <td>excrement-resource</td>
	    <td></td>
		<td></td>
	</tr>
	<tr>
    	<td>sewage-visualization</td>
        <td></td>
	    <td></td>
	</tr>
	<tr>
	    <td>standard-farmland</td>
	    <td></td>
		<td></td>
	</tr>
    	<tr>
	    <td>situation-perception</td>
	    <td>dailyInspect</td>
			<td>日常巡检</td>
	</tr>
    <tr>
	    <td>village-archive</td>
	    <td></td>
		<td></td>
    </tr>
</table>

## 关于分包优化

小程序端主包不能超过2M，所以需要严格控制`src`目录下`pages`、`static`、`components`等文件夹大小。其中`pages`文件夹只放主页及其他子包会复用到的页面（例如扫码页），`static`只放主页以及其他子包会复用的公共图片，且需要进行[图片压缩](https://tinypng.com/)。`components`文件夹只放主包及其他子包会复用到的公共组件。

## 引入静态资源无法显示

子包目录中`static`文件夹下的静态资源，不能通过相对路径引入，需要使用`@/subPackage/static/a.png`或通过`import`的方式引入。[详见](https://uniapp.dcloud.net.cn/tutorial/page-static-assets.html#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E5%BC%95%E5%85%A5%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

## 没有触发全局的异常处理

小程序在`APP.vue`中对全局未捕获的异常做了统一处理，实测使用`async/await`的方式调用`Promise`，即便抛出异常有时也无法触发全局的异常处理（原因不详），推荐使用`.then()`方法调用`Promise`。

## 全局样式未生效

在`html`标签或`:root`中设置了全局样式，在小程序端未生效。必须将全局样式写在`APP.vue`文件中的`style`标签中，才能同时在WEB端和小程序端生效。

## 全局修改UView-Plus样式

项目中`src/styles/uview-plus.scss`文件用于全局修改UView-Plus样式，如无特殊情况，请勿随意修改。

## 移动端主题色

全局已定义`primary`、`success`、`warning`、`danger`、`error`、`info`主题色，并且生成了对应的深色、浅色变量，开发过程中尽量使用css变量设置颜色，例如禁用状态的按钮可以设置背景色为`var(--uni-color-primary-light-5)`。

## 矢量图标

目前矢量图标统一从UView-Plus[图标库](https://uiadmin.net/uview-plus/components/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86)中取，暂无添加其他图标库计划。

## 原生组件v-bind无效

小程序端原生组件不支持`v-bind="data"`语法，请使用`v-bind:data="data"`，自定义组件无此限制。[详见](https://github.com/dcloudio/uni-app/issues/3330)

## ID选择器、属性选择器和标签名选择器无效

自定义组件在小程序端不支持ID选择器、属性选择器和标签名选择器，编写页面无此限制。[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/#%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6)

## 小程序端不支持操作$slots

小程序端不支持操作$slots，仅支持判断该slot是否存在。[详见](https://ask.dcloud.net.cn/question/181248)

## 使用$attrs进行属性透传获取不到事件方法

小程序组件传递属性只能是纯数据类型。[详见](https://github.com/dcloudio/uni-app/issues/4099)

## v-if与v-slot同时使用，小程序端展示异常

小程序端只能采用静态编译slot插槽的方案，无法在运行时动态的根据变量判断。[详见](https://github.com/dcloudio/uni-app/issues/4847)

## 插槽传入内容样式H5和小程序平台不一致

小程序端使用插槽会额外生成一个`view`节点，可能导致插槽内容无法响应外部的布局样式。[详见](https://github.com/dcloudio/uni-app/issues/4629)

## v-key指令在编译成小程序时报错

请使用`:key`代替`v-key`。
