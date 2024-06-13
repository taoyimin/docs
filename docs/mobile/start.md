# 快速开始

## 本地开发

开发环境配置：

- **[Node.js](https://nodejs.org/en/)** 版本 >= 18.0.0，推荐使用大版本号18的稳定版本。
- **[pnpm](https://pnpm.io/zh)** 版本 >= 9.0.0，推荐使用大版本号9的稳定版本。

拉取代码后，执行以下命令运行项目：

```bash
npm i -g pnpm           // 全局安装pnpm
pnpm i                  // 安装所有依赖包
pnpm dev:h5             // 启动h5平台的应用
```

:::tip 提示
如遇安装依赖包异常或缓慢，可以使用`npm config set registry https://registry.npmmirror.com`命令切换到国内镜像源。
:::

## 常用命令

运行以下脚本，可以本地行运各平台应用。

```bash
pnpm dev:h5           // 在应用根目录下执行，启动h5平台的应用
pnpm dev:mp-weixin    // 在应用根目录下执行，启动微信小程序平台的应用
pnpm dev:app          // 在应用根目录下执行，启动原生app应用
```

运行以下脚本，可以本地打包各平台应用。

```bash
pnpm build:h5           // 在应用根目录下执行，打包h5平台的应用
pnpm build:mp-weixin    // 在应用根目录下执行，打包微信小程序平台的应用
pnpm build:app          // 在应用根目录下执行，打包原生app应用
```

运行以下脚本，可以本地打包小程序并上传代码。

```bash
pnpm upload:mp-weixin    // 在应用根目录下执行，打包微信小程序平台的应用并上传代码
```

:::tip 提示
项目在`miniprogram-ci`文件夹下集成了微信小程序的自动化构建及部署，只需配置相应的`appId`及`key`，即可使用`upload:mp-weixin`命令自动构建并上传代码至微信公众平台。更多命令请查看项目的`package.json`文件。
:::

## 各应用对应端口

| 项目名                 | 系统名         | 端口号 |
| ---------------------- | -------------- | ------ |
| uniapp-framework       | 移动端应用框架 | 6100   |
| living-environment     | 万村码上通     | 6001   |
| synthetical-evaluation | 综合评价       | 6002   |
| excrement-resource     | 粪污资源化     | 6003   |
| sewage-visualization   | 污水可视化     | 6004   |
| standard-farmland      | 高标农田       | 6005   |
| situation-perception   | 态势感知       | 6006   |
| village-archive        | 乡村档案库     | 6007   |
