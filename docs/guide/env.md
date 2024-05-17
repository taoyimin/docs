# 环境变量
项目使用`.env`，`.env.[mode]`存放环境变量，在代码中通过`import.meta.env.VITE_XXXX`的方式进行引用。环境变量文件存放在每个系统的根目录下，每个系统都有自己独立的环境变量。

::: tip 提示
为了防止意外地将一些环境变量泄漏到客户端，只有以 [VITE](#.local文件) 为前缀的变量才会暴露给经过 vite 处理的代码。
:::

## .env文件
该文件用于存放公共的环境变量。 

`.env`
```yml
# 应用名称
VITE_APP_NAME = "粪污资源化利用"
# 公钥
VITE_PUBLIC_KEY = "123456"
# 私钥，不会暴露给客户端源码
PRIVATE_KEY = "654321"
# 源坐标系（数据库统一存储的坐标系）
VITE_ORIGIN_COORDINATE = "WGS84"
# 目标坐标系（前端项目使用地图的坐标系）
VITE_TARGET_COORDINATE = "GCJ02"
```

## .env.[mode]文件
该文件用于存放对应环境的环境变量，例如`.env.production`用于存放生产环境的环境变量，`.env.development`用于存放开发环境的环境变量，并且会覆盖`.env`文件中的同名变量。

`.env.development`
```yml
# 开发环境服务器地址
VITE_BASE_URL = "https://www.dev.com"
```

`.env.production`
```yml
# 生产环境服务器地址
VITE_BASE_URL = "https://www.prod.com"
```

## .local文件
在本地开发的时候，可能需要修改一些环境变量。不建议直接修改`.env`和`.env.[mode]`中的变量，避免出现意外提交到线上环境的情况。推荐在本地新建一个.local文件，用于存放本地开发时需要修改的环境变量，该文件中的变量将会覆盖对应的`.env`和`.env.[mode]`中的同名变量，并且不会被 git 检入。

`.env.development.local`
```yml
# 本地开发服务器地址
VITE_BASE_URL = "https://localhost"
# 本地开发测试账号
VITE_USER_NAME = 'admin'
# 本地开发测试密码
VITE_PASS_WORD = 'admin@123'

# 微前端子应用地址，正常情况下所有应用都部署在同一域名同一端口，主应用集成子应用页面时无需指定子应用URL。
# 如果子应用域名或端口与主应用不一致时，例如本地开发时，子应用启动的开发服务器端口不一致，所以需要指定子应用URL。
# 前端大屏子应用地址
VITE_LARGE_SCREEN_URL="http://localhost:7001"
# 粪污资源化子应用地址
VITE_EXCREMENT_RESOURCE_URL="http://localhost:7002"
# 污水可视化子应用地址
VITE_SEWAGE_VISUALIZATION_URL="http://localhost:7003"
# 系统后台子应用地址
VITE_SYSTEM_BACKGROUND_URL="http://localhost:7004"
# 高标农田子应用地址
VITE_STANDARD_FARMLAND_URL="http://localhost:7005"
# 态势感知子应用地址
VITE_SITUATION_PERCEPTION_URL="http://localhost:7006"
# 乡村档案库子应用地址
VITE_VILLAGE_ARCHIVE_URL="http://localhost:7007"
# 省级平台子应用地址
VITE_PROVINCE_PLATFORM_URL="http://localhost:7008"
# 开放平台子应用地址
VITE_OPEN_PLATFORM_URL="http://localhost:7009"
```

::: warning 注意
为了方便本地开发，避免重复输入账号密码，登录页面会读取`VITE_USER_NAME`和`VITE_PASS_WORD`两个环境变量的值，自动填充到输入框中。请不要在.local文件之外定义`VITE_USER_NAME`和`VITE_PASS_WORD`两个环境变量，避免线上环境出现自动填充账号密码的情况。
:::

## 环境变量对照表
| 变量名 | 说明 |
| -------- | ------- |
| `VITE_APP_NAME` | 应用名称，通常用于显示在[登录页](/Liv-UI/login-form.md#属性)或系统标题栏 |
| `VITE_APP_AUTHORITY` | 应用权限标识，对应[创建系统](./authority/authority.md#创建系统)时填入的系统标识 |
| `VITE_PUBLIC_KEY` | [用户登录接口](/apis/user-apis.md#loginbyaccount)加密密码使用的公钥 |
| `VITE_AES_KEY` | [报文加解密](/http/encrypt-params.html)使用的AES密钥 |
| `VITE_ORIGIN_COORDINATE` | 源坐标系（数据库统一存储的坐标系），详见[坐标系相关](coordinate.md)|
| `VITE_TARGET_COORDINATE` | 目标坐标系（前端项目使用地图的坐标系），详见[坐标系相关](coordinate.md) |
| `VITE_BASE_URL` | 接口地址 |
| `VITE_FILE_URL` | 文件上传地址 |
| `VITE_USE_MINIO` | 是否使用MinIO，如果为true则无需配置VITE_FILE_URL |
| `VITE_OLD_BASE_URL` | 旧平台地址 |
| `VITE_OLD_PLATFORM_SSO` | [新平台跳转老平台](./oldAndNew/oldAndNew#新平台跳转老平台)时，老平台的地址 |
| `VITE_THEME_CHALK` | 应用主题 |
| `VITE_MAP_CENTER_LONGITUDE` | 地图中心点默认经度 |
| `VITE_MAP_CENTER_LATITUDE` | 地图中心点默认纬度 |
| `VITE_MAP_ZOOM` | 地图默认缩放等级 |
| `VITE_MP_TRIAL_BASE_URL` | 小程序体验版接口地址 |
| `VITE_MP_DEVELOP_BASE_URL` | 小程序开发版接口地址 |
| `VITE_MP_THEME_CHALK` | 小程序主题色 |
| `VITE_MP_EVENT_UPLOAD_PHONE` | 小程序事件上报电话，为空则不显示电话上报按钮 |
| `VITE_USER_NAME` | 本地开发测试账号，详见[.local文件](#local文件) |
| `VITE_PASS_WORD` | 本地开发测试密码，详见[.local文件](#local文件) |
| `VITE_LARGE_SCREEN_URL` | 前端大屏子应用地址 |
| `VITE_EXCREMENT_RESOURCE_URL` | 粪污资源化子应用地址 |
| `VITE_SEWAGE_VISUALIZATION_URL` | 污水可视化子应用地址 |
| `VITE_SYSTEM_BACKGROUND_URL` | 系统后台子应用地址 |
| `VITE_STANDARD_FARMLAND_URL` | 高标农田子应用地址 |
| `VITE_SITUATION_PERCEPTION_URL` | 态势感知子应用地址 |
| `VITE_VILLAGE_ARCHIVE_URL` | 乡村档案库子应用地址 |
| `VITE_PROVINCE_PLATFORM_URL` | 省级平台子应用地址 |
| `VITE_OPEN_PLATFORM_URL` | 开放平台子应用地址 |