# 打包部署

## 本地打包

运行以下脚本，可以本地并行打包各个应用。

```bash
npm run build           // 在项目根目录下执行，打包所有应用
npm run build:7001      // 在项目根目录下执行，打包端口号为7001的子应用
npm run build           // 在应用根目录下执行，打包当前目录的应用
```

各应用对应端口：

| 项目名                | 系统名            | 端口号 |
| --------              | -------------    | ---- |
| micro-framework       | 子应用基础框架    | 7000 |
| large-screen          | 前端大屏项目      | 7001 |
| excrement-resource    | 粪污资源化平台    | 7002 |
| system-background     | 系统后台          | 7004 |
| main-framework        | 主应用基础框架    | 8000 |
| cxgh-background       | 长效管护后台管理   | 8001 |

## 服务器部署
🚧建设中