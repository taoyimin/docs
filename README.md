## 本地开发

该项目仓库采用monorepo架构，包管理工具推荐使用pnpm。

```bash
npm i -g pnpm           // 全局安装pnpm
```

运行以下脚本，可以统一给各个应用安装依赖包。

```bash
pnpm i                  // 在项目根目录下执行，安装所有包依赖
pnpm add vue --filter <appliction-name>      // 在项目根目录下执行，单独给appliction-name安装vue依赖包
pnpm add vue            // 在应用根目录下执行，单独给当前应用安装vue依赖包
```

运行以下脚本，可以本地并行运行各个应用。

```bash
npm run start           // 在项目根目录下执行，启动所有应用
npm run start:7001      // 在项目根目录下执行，运行端口号为7001的子应用
npm run start:8001      // 在项目根目录下执行，运行端口号为8001的主应用
npm run starts:8001     // 在项目根目录下执行，运行端口号为8001的主应用，同时运行所有关联的子应用
npm run start           // 在应用根目录下执行，运行当前目录的应用
```

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