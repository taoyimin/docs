import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  },
  title: "人居环境前端文档",
  description: "人居环境微前端项目文档",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/introduce', activeMatch: '/guide/' },
      { text: 'Liv-UI', link: '/Liv-UI/introduce', activeMatch: '/Liv-UI/' },
      { text: '网络请求', link: '/http/introduce', activeMatch: '/http/' },
      { text: 'APIs', link: '/apis/introduce', activeMatch: '/apis/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: "指南",
          items: [
            {
              text: "介绍",
              link: "/guide/introduce",
            },
            {
              text: "快速开始",
              link: "/guide/start",
            },
            {
              text: "打包部署",
              link: "/guide/deployment",
            }
          ],
        },
      ],
      '/Liv-UI/': [
        {
          text: "指南",
          items: [
            {
              text: "介绍",
              link: "/Liv-UI/introduce",
            },
            {
              text: "安装",
              link: "/Liv-UI/install",
            },
            {
              text: "快速开始",
              link: "/Liv-UI/start",
            }
          ]
        },
        {
          text: "基础组件",
          items: [
            {
              text: "Dict Select 字典选择器",
              link: "/Liv-UI/dict-select",
            },
            {
              text: "Grid Cascader 网格选择器",
              link: "/Liv-UI/grid-cascader",
            },
            {
              text: "Location Picker 地图选点",
              link: "/Liv-UI/location-picker",
            }
          ],
        },
        {
          text: "扩展组件",
          items: [
            {
              text: "Data Form 数据表单",
              link: "/Liv-UI/data-form",
            },
            {
              text: "Data Table 数据表格",
              link: "/Liv-UI/data-table",
            },
            {
              text: "Data Descriptions 数据描述列表",
              link: "/Liv-UI/data-descriptions",
            },
          ],
        },
        {
          text: "业务组件",
          items: [
            {
              text: "监控播放器",
              link: "/Liv-UI/minitor-player",
            },
            {
              text: "事件弹窗",
              link: "/Liv-UI/event-detail",
            }
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://www.srdcloud.cn/code/3166/repoView/107408?activeType=list&activeTab=codeFile&key=master' }
    // ]
  }
})
