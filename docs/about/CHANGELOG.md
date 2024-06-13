---
outline: 2
---

# 更新日志

## 2024-3-19

### Features

- **components** `GridCascader`网格选择器组件新增[控制网格级别](/Liv-UI/grid-cascader#控制网格级别)属性 

## 2024-3-12

### Features

- **components** `MonitorTree`监控树组件新增[在线状态](/Liv-UI/monitor-tree#属性)属性
- **components** `MonitorWall`监控墙组件新增[在线状态](/Liv-UI/monitor-wall#属性)属性

### Bug Fixes

- **components** `MonitorPlayer`修复了集成在微前端框架中，西瓜播放器图标丢失的问题

## 2024-3-11

### Features

- **components** `MonitorTree`监控树组件新增[数据回显](/Liv-UI/monitor-tree#设置默认值)功能

## 2024-3-7

### Features

- **components** 新增了`AMap`[高德地图](/Liv-UI/a-map)组件

### Bug Fixes

- **components** `MonitorPlayer`修复了传了id为空，没有销毁播放器的问题
- **components** `MonitorWall`修复了参数修改后，没有重置页数的问题
- **components** `MonitorTree`修复了查询下级时，没有传递查询参数的问题

## 2024-3-5

### Features

- **components** 新增了`MonitorTree`[监控树](/Liv-UI/monitor-tree)组件
- **apis** `grid`模块新增了[getRootGrid](/apis/grid-apis.md#getrootgrid)查询根网格方法
- **apis** `user`模块新增了[loginByPhone](/apis/user-apis.md#loginbyphone)手机号登录方法
- **apis** `user`模块新增了[getSmsCaptcha](/apis/user-apis.md#getsmscaptcha)获取手机验证码方法
- **apis** `monitor`模块新增[getMonitorGridList](/apis/monitor-apis#getmonitorgridlist)查询监控网格列表方法

### Bug Fixes

- **components** `LoginForm`修复了账号密码登录失败没有刷新验证码的问题
- **components** `FormItem`修复了绑定值为`0`和`false`时触发表单校验不通过的问题

## 2024-3-4

### Features

- **components** 新增了`GridTree`[网格树](/Liv-UI/grid-tree)组件
- **components** `MonitorWall`新增`previous`、`next`和`refresh`方法
- **stores** [userStore](/stores/user-store.md#userstore)用户存储新增了`modifyPassword`修改密码方法
- **stores** [userStore](/stores/user-store.md#userstore)用户存储新增了`loginOut`退出登录方法

### Bug Fixes

- **components** `MonitorWall`修复了修改列数后导致数组越界的问题
- **components** `FormItem`组件上传文件时，修复了无法透传插槽的问题

## 2024-3-1

### Features

- **components** 新增了`MonitorWall`[监控墙](/Liv-UI/monitor-wall)组件
- **components** `FormItem`组件`fieldType`为`image`时，新增图片预览功能
- **components** `FormItem`组件上传文件时，支持传入提示信息

## 2024-2-29

### Features

- **components** `LoginForm`登录表单组件新增了回车登录功能

## 2024-2-28

### Bug Fixes

- **components** `FormItem`修复了`fieldType`为`personnel`时，设置默认值回显失败的问题
- **components** `FormItem`修复了透传插槽导致响应式数据丢失的问题

## 2024-2-27

### Features

- **components** `FormData`数据表单组件的`fieldType`属性新增`location`类型
- **components** `FormItem`表单项组件新增[动态表单](/Liv-UI/form-item.html#动态表单)、[插槽透传](/Liv-UI/form-item.html#属性-插槽透传)章节
- **apis** `user`模块新增了[getImageCaptcha](/apis/user-apis.md#getimagecaptcha)获取登录验证码方法

## 2024-2-26

### Features

- **apis** `statistics`模块新增了[statManagerCount](/apis/statistics-user.md#statmanagercount)管护员统计方法
- **apis** `statistics`模块新增了[statGriderCount](/apis/statistics-user.md#statgridercount)网格员统计方法
- **utils** `statistics`模块新增了[mergeStatistics](/utils/statistics-method.md#mergestatistics)统计合并方法

## 2024-2-23

### Features

- **components** `FormData`数据表单组件的`fieldType`属性新增`dictId`类型
- **components** `GridCascader`网格选择器组件新增[v-model参数](/Liv-UI/grid-cascader.html#v-model参数)功能
- **components** `GridCascader`网格选择器组件新增[插槽透传功能](/Liv-UI/grid-cascader.html#属性-事件-插槽透传)功能

### Bug Fixes

- **components** `FormItem`修复了`fieldType`为`image`、`video`、`audio`和`file`时，开启多选功能后，绑定值不正确的问题

## 2024-2-22

### Features

- **components** `DictSelect`字典选择器组件新增[parentId属性](/Liv-UI/dict-select.html#属性)功能
- **components** `DictSelect`字典选择器组件新增[多参数绑定](/Liv-UI/dict-select.html#v-model参数)功能
- **components** `DictSelect`字典选择器组件新增[插槽透传](/Liv-UI/dict-select.html#属性-事件-插槽透传)功能

## 2024-2-21

### Features

- **components** `GridCascader`网格选择器组件新增多选功能
- **components** `FormData`表单项组件新增[插槽透传](/Liv-UI/form-item.html#属性-插槽透传)功能

## 2024-2-20

### Features

- **components** 新增了`FormItem`[表单项](/Liv-UI/form-item.md)组件
- **components** `FormData`和`SearchForm`组件基于`FormItem`表单项组件重构
- **components** `GridCascader`网格选择器组件新增多选功能
- **components** `AsideMenu`侧边栏菜单组件自动跟随路由高亮

## 2024-2-19

### Features

- **components** `GridCascader`网格选择器组件新增[togglePopperVisible](/Liv-UI/grid-cascader.html#属性)属性
- **utils** `common`模块新增[公共打印方法](/utils/common-method.html#打印方法)

## 2024-2-7

### Features

- **components** `DataTable`新增[动态表格](/Liv-UI/data-table.md#动态表格)用法
- **components** `DataTable`组件的`fieldType`属性新增[tag](/Liv-UI/data-table.md#基础用法)类型
- **utils** `regex`模块优化了[matchIdCard](/utils/regex-match.md#matchidcard)身份证匹配方法

## 2024-2-6

### Features

- **components** `DataForm`的`fieldType`为`textarea`且传入了`maxlength`时，默认开启`showWordLimit`属性
- **components** `DataTable`组件的`fieldType`属性新增[button](/Liv-UI/data-table.md#基础用法)、[switch](/Liv-UI/data-table.md#基础用法)类型
- **components** `GridCascader`支持通过`v-model:grid-id`绑定gridId后回显数据
- **apis** `grid`模块新增了[getGridById](/apis/grid-apis.md#getgridbyid)和[getExpandedTreeById](/apis/grid-apis.md#getexpandedtreebyid)方法

## 2024-2-5

### Features

- **components** 新增[QrCode](/Liv-UI/qr-code.md)二维码生成器
- **components** `DataDescriptions`的`fieldType`属性新增了`qrcode`类型
- **components** `DataTable`组件的`fieldType`属性新增`qrcode`类型
- **utils** `regex`模块新增了[matchEmail](/utils/regex-match.md#matchemail)方法
- **utils** `validate`模块新增了[validateEmail](/utils/form-validate.md#validateemail)方法

## 2024-2-4

### Features

- **components** 新增`MonitorPlayer`[监控播放器](/Liv-UI/monitor-player.md)组件
- **components** `DataTable`组件添加[expandButton](/Liv-UI/data-table.md#属性)属性，用于控制是否展开操作按钮

## 2024-2-3

### Features

- **components** 新增`XgPlayer`[西瓜播放器](/Liv-UI/xg-player.md)组件
- **components** 新增`MetaPlayer`[天翼视联播放器](/Liv-UI/meta-player.md)组件
- **components** 新增`NpPlayer`[天翼云眼播放器](/Liv-UI/np-player.md)组件
- **components** 新增`JsPlayer`[JsMpeg播放器](/Liv-UI/jm-player.md)组件

## 2024-2-2

### Features

- **apis** `monitor`模块新增[getMonitorPage](/apis/monitor-apis#getmonitorpage)查询监控分页列表方法
- **apis** `monitor`模块新增[getMonitorDetail](/apis/monitor-apis#getmonitordetail)查询监控详情方法
- **apis** `monitor`模块新增[getMonitorUrl](/apis/monitor-apis#getmonitorurl)查询监控详情及播放地址方法

## 2024-2-1

### Features

- **docs** 顶部栏`测试环境`服务器导航更新

### Bug Fixes

- **components** `DataForm`修复了`fieldType`为`image`、`video`、`audio`和`file`时，文件无法回显的问题

## 2024-1-31

### Features

- **docs** 引入了[Algolia](https://www.algolia.com/)离线搜索引擎
- **components** `DataForm`组件新增`batchDelete`批量删除事件

### Bug Fixes

- **components** `DataForm`修复了`fieldType`为`select`和`dict`时，多选无法回显的问题

## 2024-1-27

### Features

- **components** `DataForm`组件的[fieldType](/Liv-UI/data-form.md#fieldtype)新增了`personnel`人员选择器类型

## 2024-1-26

### Features

- **docs** 新增了[权限菜单配置](/guide/authority/authority.md)章节
- **components** `DataForm`的`fieldType`为`input`且传入了`maxlength`时，默认开启`showWordLimit`属性
- **stores** [authorityStore](/stores/authority-store.md#authoritystore)权限存储新增了`dynamicRoutes`动态路由树

### Bug Fixes

- **components** `DataDescriptions`修复了预览图片顺序异常的问题

## 2024-1-25

### Features

- **components** 新增了`AsideMenu`[侧边栏菜单](/Liv-UI/aside-menu.md)组件
- **stores** [authorityStore](/stores/authority-store.md#authoritystore)权限存储新增了`menus`状态
- **guide** [环境变量](/guide/env.md)章节更新了[环境变量对照表](/guide/env.md#local文件)

## 2024-1-24

### Bug Fixes

- **components** `DataTable`修复了点击事件回调数据对象被修改后导致表单源数据被修改的问题
- **utils** `validate`模块中的校验规则修复了`required`为`false`仍然校验的问题

## 2024-1-23

### Features

- **components** `DataForm`新增了[上传音频](/Liv-UI/data-form.md#fieldtype可选值)、[上传文件](/Liv-UI/data-form.md#fieldtype可选值)功能
- **components** `DataDescriptions`的`fieldType`属性新增了`audio`类型
- **components** `GridCascader`新增了[root](/Liv-UI/grid-cascader.md#属性)属性
- **apis** `grid`模块更新了[getExpandedTree](/apis/grid-apis.md#getexpandedtree)方法

### Bug Fixes

- **components** `DataForm`修复了生产环境显示英文的问题

## 2024-1-22

### Features

- **components** 新增了[LoginView](/Liv-UI/login-view.md)通用登录页组件
- **utils** `hooks`模块新增了[useCountUp](/utils/hooks/use-count-up.md)计时器和[useCountDown](/utils/hooks/use-count-down.md)倒计时器方法

## 2024-1-19

### Features

- **components** 新增了[LoginForm](/Liv-UI/login-form.md)登录表单组件
- **utils** `regex`模块新增了[matchPassword](/utils/regex-match.md#matchpassword)方法
- **utils** `validate`模块新增了[validateNonEmpty](/utils/form-validate.md#validatenonempty)、[validatePassword](/utils/form-validate.md#validatepassword)方法

### Bug Fixes

- **components** `DataTable`修复了操作按钮换行显示的问题

## 2024-1-16

### Features

- **components** `DataTable`新增[操作按钮](/Liv-UI/data-table.md#自定义按钮)超过三个自动折叠功能
- **stores** `user`模块新增了[userStore](/stores/user-store.md#userstore)、[authorityStore](/stores/authority-store.md#authoritystore)状态存储
- **apis** `user`模块新增了[loginByAccount](/apis/user-apis.md#loginbyaccount)、[getUserAuthorities](/apis/user-apis.md#getuserauthorities)方法
- **apis** `event`模块新增了[getEventDetail](/apis/event-apis.md#geteventdetail)、[getEventProcess](/apis/event-apis.md#geteventprocess)方法

## 2024-1-15

### Features

- **components** `DataForm`[操作按钮](/Liv-UI/data-form.md#操作按钮)和[自定义按钮](/Liv-UI/data-form.md#自定义按钮)新增了权限控制功能
- **components** `DataTable`[操作按钮](/Liv-UI/data-table.md#操作按钮)和[自定义按钮](/Liv-UI/data-table.md#自定义按钮)新增了权限控制功能
- **http** `AxiosRequestConfig`新增了深层字段映射[deepFieldsMap](/http/deep-fields-map.md)参数
- **docs** `header`更新了测试环境应用服务器导航

## 2024-1-12

### Features

- **components** `DataForm`新增[双向绑定](/Liv-UI/data-form.md#设置默认值)、[动态表单](/Liv-UI/data-form.md#动态表单)用法
- **components** `DataForm`表单项新增了[级联选择器](/Liv-UI/data-form.md#基础用法)类型

## 2024-1-5

### Features

- **components** `DataTable`新增[图片懒加载](/Liv-UI/data-table.md#基础用法)、[图片缩略图](/Liv-UI/data-table.md#基础用法)和[悬停预览](/Liv-UI/data-table.md#基础用法)功能
- **utils** `file`模块新增了[getThumbUrl](/utils/file-method.md#getthumburl)、[getThumbUrlList](/utils/file-method.md#getthumburllist)方法

## 2024-1-4

### Features

- **components** `DataForm`[表单项数据](/Liv-UI/data-form.md#表单项数据)支持传入`getter`方法
- **components** `DataForm`中的表单项数据[fieldData](/Liv-UI/data-form.md#field)支持响应式加载

## 2024-1-3

### Features

- **components** `DataForm`新增了[上传视频](/Liv-UI/data-form.md#fieldtype可选值)功能
- **components** `DataForm`中的表单项默认填满整个宽度

### Bug Fixes

- **components** `DataPagination`修复了打包部署后中文配置失效的问题

## 2024-1-2

### Features

- **components** `DataDescriptions`新增了[格式化内容](/Liv-UI/data-descriptions.md#格式化内容)功能
- **components** `DataTable`新增了[格式化内容](/Liv-UI/data-table.md#格式化内容)功能
- **components** `DataTable`默认开启[show-overflow-tooltip](/Liv-UI/data-table.md#基础用法)属性
- **utils** `directives`模块更新了[v-remove](/utils/custom-directives.md#v-remove)指令

## 2023-12-8

### Bug Fixes

- **utils** `coordinate`修复了[toTargetCoordinate](/utils/coordinate-method.md#totargetcoordinate)方法转换错误的问题

## 2023-11-24

### Features

- **docs** 更新了[坐标系相关](/guide/coordinate.md)章节
- **http** `AxiosRequestConfig`新增了坐标系转换[transformCoordinate](/http/transform-coordinate.md)参数
- **utils** `common`模块新增了[flattenArray](/utils/common-method.md#flattenarray)方法
- **utils** `file`模块新增了[getFileName](/utils/file-method.md#getfilename)、[getFileUrl](/utils/file-method.md#getfileurl)、[getFileUrlList](/utils/file-method.md#getfileurllist)方法
- **utils** `coordinate`模块新增了[toOriginCoordinate](/utils/coordinate-method.md#toorigincoordinate)、[toTargetCoordinate](/utils/coordinate-method.md#totargetcoordinate)方法
- **utils** `regex`模块新增了[matchLongitude](/utils/regex-match.md#matchlongitude)、[matchLatitude](/utils/regex-match.md#matchlatitude)方法
- **utils** `validate`模块新增了[validateLongitude](/utils/form-validate.md#validatelongitude)、[validateLatitude](/utils/form-validate.md#validatelatitude)方法

### Bug Fixes

- **components** `DataFrom`修复使用网格布局后，表单字段丢失的问题

## 2023-11-23

### Features

- **components** `DataFrom`新增了[网格布局](/Liv-UI/data-form.md#网格布局)

## 2023-11-22

### Features

- **components** `DataFrom`新增了[自定义校验规则](/Liv-UI/data-form.md#自定义校验规则)功能
- **http** `AxiosRequestConfig`新增了[returnResult](/http/return-result.md)参数
- **apis** `dict`模块新增了[getDictList](/apis/dict-apis.md#getdictlist)方法
- **apis** `grid`模块新增了[getGrid](/apis/grid-apis.md#getgrid)、[getGridChildren](/apis/grid-apis.md#getgridchildren)、[getExpandedTree](/apis/grid-apis.md#getexpandedtree)方法
- **utils** `regex`模块新增了[matchNumber](/utils/regex-match.md#matchnumber)、[matchPhone](/utils/regex-match.md#matchphone)、[matchIdCard](/utils/regex-match.md#matchidcard)方法
- **utils** `validate`模块新增了[validateNumber](/utils/form-validate.md#validatenumber)、[validatePhone](/utils/form-validate.md#validatephone)、[validateIdCard](/utils/form-validate.md#validateidcard)方法

### Bug Fixes

- **docs** `VitePress`修复了白天模式组件代码块高亮异常的问题
- **docs** `VitePress`修复了内置样式导致组件样式异常的问题

## 2023-11-21

### Features

- **components** `DataFrom`新增了[表单校验](/Liv-UI/data-form.md#表单校验)功能

### Bug Fixes

- **components** `GridCascader`修复了用户手动修改v-model绑定值后，没有重新加载网格数据的问题
