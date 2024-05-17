# 快速开始

## 本地开发

该项目仓库采用monorepo架构，包管理工具推荐使用pnpm。

开发环境配置：
* **[Node.js](https://nodejs.org/en/)** 版本 >= 16.0.0，推荐使用大版本号16的稳定版本。

拉取代码后，执行以下命令运行项目：

```bash
npm i -g pnpm           // 全局安装pnpm
pnpm i                  // 安装所有依赖包
pnpm start              // 运行所有项目
```
:::tip 提示
如遇安装依赖包异常或缓慢，可以使用`npm config set registry https://registry.npmmirror.com`命令切换到国内镜像源。
:::

## 常用命令

运行以下脚本，可以给各个应用安装依赖包。

```bash
pnpm i                  // 在项目根目录下执行，安装所有包依赖
pnpm add vue --filter <appliction-name>   // 在项目根目录下执行，单独给appliction-name安装vue依赖包
pnpm add vue            // 在应用根目录下执行，单独给当前应用安装vue依赖包
```

运行以下脚本，可以本地并行运行各个应用。

```bash
pnpm start           // 在项目根目录下执行，启动所有应用
pnpm start:7001      // 在项目根目录下执行，运行端口号为7001的子应用
pnpm start:8001      // 在项目根目录下执行，运行端口号为8001的主应用
pnpm starts:8001     // 在项目根目录下执行，运行端口号为8001的主应用，同时运行所有关联的子应用
pnpm start           // 在应用根目录下执行，运行当前目录的应用
```

运行以下脚本，可以本地并行打包各个应用。

```bash
pnpm build           // 在项目根目录下执行，打包所有应用
pnpm build:7001      // 在项目根目录下执行，打包端口号为7001的子应用
pnpm build           // 在应用根目录下执行，打包当前目录的应用
```

运行以下脚本，可以启动文档服务。

```bash
pnpm docs:dev        // 在项目根目录或docs目录下执行，启动文档服务
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
| main-framework        | 主应用框架        | 8000 |
| cxgh-background       | 长效管护          | 8001 |