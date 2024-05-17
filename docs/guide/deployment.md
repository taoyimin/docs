# 打包部署

## 本地打包

运行以下脚本，可以本地并行打包各个应用。

```bash
npm run build           // 在项目根目录下执行，打包所有应用
npm run build:7001      // 在项目根目录下执行，打包端口号为7001的子应用
npm run build           // 在应用根目录下执行，打包当前目录的应用
```

## 各应用对应端口

| 项目名                | 系统名            | 端口号 |
| --------              | -------------    | ---- |
| micro-framework       | 子应用框架        | 7000 |
| large-screen          | 前端大屏          | 7001 |
| excrement-resource    | 粪污资源化        | 7002 |
| sewage-visualization  | 污水可视化        | 7003 |
| system-background     | 系统后台          | 7004 |
| standard-farmland     | 高标农田          | 7005 |
| situation-perception  | 态势感知          | 7006 |
| village-archive       | 乡村档案库        | 7007 |
| province-platform     | 省级平台          | 7008 |
| open-platform         | 开放平台          | 7009 |
| main-framework        | 主应用框架        | 8000 |
| cxgh-background       | 长效管护          | 8001 |

## 服务器部署
🚧建设中