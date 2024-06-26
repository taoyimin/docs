import path from 'path'
import { defineConfig, postcssIsolateStyles } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import postcssPluginPx2rem from 'postcss-plugin-px2rem'
import autoprefixer from 'autoprefixer'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, './')

const uniComponents = ['LivList']

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [
      demoblockVitePlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' }),
          (componentName) => {
            if (componentName.startsWith('Liv') && !uniComponents.includes(componentName)) {
              return { name: componentName, from: '@szxc/components' }
            }
          }
        ],
        dts: path.resolve(pathSrc, 'components.d.ts')
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true
      })
    ],
    resolve: {
      // https://github.com/vuejs/pinia/discussions/1741
      dedupe: ['pinia']
    },
    ssr: {
      noExternal: [
        '@dcloudio/uni-app',
        'element-plus',
        'jsencrypt',
        'uview-plus',
        'vue',
        'xgplayer'
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./../assets/scss/global.scss" as *;'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          postcssPluginPx2rem({
            rootValue: 16,
            mediaQuery: false,
            minPixelValue: 3
          }),
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/]
          })
        ]
      }
    }
  },
  base: '/docs',
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.ico' }],
    ['script', { src: 'https://at.alicdn.com/t/c/font_1856667_jvba3vb09ds.js' }]
  ],
  lang: 'zh',
  title: '人居环境前端文档',
  description: '人居环境微前端项目文档',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    search: {
      provider: 'algolia',
      options: {
        appId: 'JMLTI8BUN7',
        apiKey: '690571f6920a5850000e05f31e75e76d',
        indexName: 'taoyiminio',
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern:
        'https://www.srdcloud.cn/code/3166/repoView/107408?activeType=view&activeTab=codeFile&key=dev&directory=docs/:path',
      text: '在研发云上编辑此页'
    },
    lastUpdatedText: '最后更新时间',
    outline: {
      label: '本页目录',
      level: 'deep'
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1715567366770" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11440" width="200" height="200"><path d="M640 160c-162.7 0-299.6 110.4-340 260.3-14.2-2.8-29-4.3-44-4.3-123.7 0-224 100.3-224 224s100.3 224 224 224h384c194.4 0 352-157.6 352-352S834.4 160 640 160z m203.7 555.6c-26.5 26.5-57.3 47.2-91.6 61.7-35.5 15-73.2 22.6-112.1 22.6H256c-42.7 0-82.9-16.6-113.1-46.9C112.6 722.9 96 682.7 96 640s16.6-82.9 46.9-113.1C173.1 496.6 213.3 480 256 480c11.3 0 22.4 1.2 33.2 3.4 22.8 4.8 44.2 14.5 62.8 28.5 6 4.5 11.7 9.5 17.1 14.9 10.2 10.2 18.8 21.5 25.8 33.7l55.6-31.7c-21.1-36.8-52.3-67.1-89.9-87 3.6-14.3 8.2-28.3 14-41.9 14.5-34.3 35.3-65.1 61.7-91.6 26.5-26.5 57.3-47.2 91.6-61.7 35.5-15 73.2-22.6 112.1-22.6s76.6 7.6 112.1 22.6c34.3 14.5 65.1 35.3 91.6 61.7 26.5 26.5 47.2 57.3 61.7 91.6 15 35.5 22.6 73.2 22.6 112.1 0 38.9-7.6 76.6-22.6 112.1-14.5 34.3-35.3 65.1-61.7 91.5z" p-id="11441"></path></svg>'
        },
        link: 'https://www.srdcloud.cn/code/3166/repoView/107408?activeType=list&activeTab=codeFile&key=dev'
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    nav: [
      { text: '指南', link: '/guide/introduce', activeMatch: '/guide/' },
      { text: 'Liv-UI', link: '/Liv-UI/introduce', activeMatch: '/Liv-UI/' },
      { text: '网络请求', link: '/http/introduce', activeMatch: '/http/' },
      { text: '状态存储', link: '/stores/introduce', activeMatch: '/stores/' },
      { text: 'APIs', link: '/apis/introduce', activeMatch: '/apis/' },
      { text: '工具库', link: '/utils/introduce', activeMatch: '/utils/' },
      { text: '移动端', link: '/mobile/introduce', activeMatch: '/mobile/' },
      {
        text: '服务器导航',
        items: [
          {
            text: '微前端应用',
            items: [
              { text: '江西生产环境', link: '/navigation/navigation#江西生产环境' },
              { text: '江西测试环境', link: '/navigation/navigation#江西测试环境' },
              { text: '龘云生产环境', link: '/navigation/navigation#龘云生产环境' },
              { text: '龘云测试环境', link: '/navigation/navigation#龘云测试环境' },
              { text: '宁夏测试环境', link: '/navigation/navigation#宁夏测试环境' }
            ]
          },
          {
            text: '常用工具',
            items: [
              { text: 'Jenkins', link: 'http://106.225.129.34:9999/' },
              { text: '蓝湖', link: 'https://lanhuapp.com/dashboard/#/' },
              { text: '阿里图标库', link: 'https://www.iconfont.cn/' },
              { text: '图片压缩', link: 'https://tinypng.com/' }
            ]
          },
          {
            text: '官方文档',
            items: [
              { text: 'Vue', link: 'https://cn.vuejs.org/' },
              { text: 'Element Plus', link: 'https://element-plus.org/zh-CN/' },
              { text: 'Vue Router', link: 'https://router.vuejs.org/zh/' },
              { text: 'Vue Use', link: 'https://vueuse.org/' },
              { text: 'Pinia', link: 'https://pinia.vuejs.org/zh/' },
              { text: 'Vite', link: 'https://cn.vitejs.dev/' },
              { text: 'VitePress', link: 'https://vitepress.dev/zh/' },
              { text: 'WuJie', link: 'https://wujie-micro.github.io/doc/' },
              { text: 'UniApp', link: 'https://uniapp.dcloud.net.cn/' },
              { text: 'UView Plus', link: 'https://uiadmin.net/uview-plus/' }
            ]
          }
        ]
      },
      { text: '更新日志', link: '/about/CHANGELOG', activeMatch: '/about/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/guide/introduce'
            },
            {
              text: '快速开始',
              link: '/guide/start'
            },
            {
              text: '打包部署',
              link: '/guide/deployment'
            },
            {
              text: '环境变量',
              link: '/guide/env'
            },
            {
              text: '坐标系相关',
              link: '/guide/coordinate'
            },
            {
              text: '权限菜单配置',
              link: '/guide/authority/authority'
            },
            {
              text: '新老平台跳转',
              link: '/guide/oldAndNew/oldAndNew'
            }
          ]
        }
      ],
      '/Liv-UI/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/Liv-UI/introduce'
            },
            {
              text: '安装',
              link: '/Liv-UI/install'
            },
            {
              text: '快速开始',
              link: '/Liv-UI/start'
            }
          ]
        },
        {
          text: '基础组件',
          items: [
            {
              text: 'A Map 高德地图',
              link: '/Liv-UI/a-map'
            },
            {
              text: 'Dict Select 字典选择器',
              link: '/Liv-UI/dict-select'
            },
            {
              text: 'Grid Cascader 网格选择器',
              link: '/Liv-UI/grid-cascader'
            },
            {
              text: 'Grid Tree 网格树',
              link: '/Liv-UI/grid-tree'
            },
            {
              text: 'Location Picker 地图选点',
              link: '/Liv-UI/location-picker'
            },
            {
              text: 'Monitor Tree 监控树',
              link: '/Liv-UI/monitor-tree'
            },
            {
              text: 'Personnel Select 人员选择器',
              link: '/Liv-UI/personnel-select'
            },
            {
              text: 'Qr Code 二维码',
              link: '/Liv-UI/qr-code'
            }
          ]
        },
        {
          text: '数据组件',
          items: [
            {
              text: 'Data Card 数据卡片',
              link: '/Liv-UI/data-card'
            },
            {
              text: 'Data Descriptions 数据描述列表',
              link: '/Liv-UI/data-descriptions'
            },
            {
              text: 'Data Form 数据表单',
              link: '/Liv-UI/data-form'
            },
            {
              text: 'Data Pagination 数据分页',
              link: '/Liv-UI/data-pagination'
            },
            {
              text: 'Data Table 数据表格',
              link: '/Liv-UI/data-table'
            },
            {
              text: 'Form Item 表单项',
              link: '/Liv-UI/form-item'
            }
          ]
        },
        {
          text: '业务组件',
          items: [
            {
              text: 'Aside Menu 侧边栏菜单',
              link: '/Liv-UI/aside-menu'
            },
            {
              text: 'Event Detail 事件详情',
              link: '/Liv-UI/event-detail'
            },
            {
              text: 'Facility Devices 设备绑定',
              link: '/Liv-UI/facility-devices'
            },
            {
              text: 'Login Form 登录表单',
              link: '/Liv-UI/login-form'
            },
            {
              text: 'Monitor Player 监控播放器',
              link: '/Liv-UI/monitor-player'
            },
            {
              text: 'Monitor Wall 监控墙',
              link: '/Liv-UI/monitor-wall'
            },
            {
              text: 'Xg Player 西瓜播放器',
              link: '/Liv-UI/xg-player'
            },
            {
              text: 'Meta Player 天翼视联播放器',
              link: '/Liv-UI/meta-player'
            },
            {
              text: 'Np Player 天翼云眼播放器',
              link: '/Liv-UI/np-player'
            },
            {
              text: 'Jm Player JsMpeg播放器',
              link: '/Liv-UI/jm-player'
            }
          ]
        },
        {
          text: '页面组件',
          items: [
            {
              text: 'Login View 登录页面',
              link: '/Liv-UI/login-view'
            }
          ]
        }
      ],
      '/http/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/http/introduce'
            },
            {
              text: '安装',
              link: '/http/install'
            },
            {
              text: '快速开始',
              link: '/http/start'
            }
          ]
        },
        {
          text: '基础方法',
          items: [
            {
              text: 'get / post 方法',
              link: '/http/getpost'
            }
          ]
        },
        {
          text: 'AxiosRequestConfig扩展',
          items: [
            {
              text: 'returnResult 返回消息体',
              link: '/http/return-result'
            },
            {
              text: 'fieldsMap 字段映射',
              link: '/http/fields-map'
            },
            {
              text: 'deepFieldsMap 深层字段映射',
              link: '/http/deep-fields-map'
            },
            {
              text: 'transformCoordinate 坐标系转换',
              link: '/http/transform-coordinate'
            },
            {
              text: 'encryptParams 报文加解密',
              link: '/http/encrypt-params'
            }
          ]
        }
      ],
      '/stores/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/stores/introduce'
            },
            {
              text: '安装',
              link: '/stores/install'
            }
          ]
        },
        {
          text: '状态存储',
          items: [
            {
              text: 'userStore 用户信息',
              link: '/stores/user-store'
            },
            {
              text: 'authorityStore 用户权限',
              link: '/stores/authority-store'
            }
          ]
        }
      ],
      '/apis/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/apis/introduce'
            },
            {
              text: '安装',
              link: '/apis/install'
            }
          ]
        },
        {
          text: '通用接口',
          items: [
            {
              text: 'user 用户接口',
              link: '/apis/user-apis'
            },
            {
              text: 'event 事件接口',
              link: '/apis/event-apis'
            },
            {
              text: 'dict 字典接口',
              link: '/apis/dict-apis'
            },
            {
              text: 'grid 网格接口',
              link: '/apis/grid-apis'
            },
            {
              text: 'monitor 监控接口',
              link: '/apis/monitor-apis'
            }
          ]
        },
        {
          text: '统计接口',
          items: [
            {
              text: 'user 用户统计接口',
              link: '/apis/statistics-user'
            },
            {
              text: 'event 事件统计接口',
              link: '/apis/statistics-event'
            },
            {
              text: 'grid 网格统计接口',
              link: '/apis/statistics-grid'
            }
          ]
        }
      ],
      '/utils/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/utils/introduce'
            },
            {
              text: '安装',
              link: '/utils/install'
            }
          ]
        },
        {
          text: '基础用法',
          items: [
            {
              text: '通用方法',
              link: '/utils/common-method'
            },
            {
              text: '正则匹配',
              link: '/utils/regex-match'
            },
            {
              text: '表单验证',
              link: '/utils/form-validate'
            },
            {
              text: '文件方法',
              link: '/utils/file-method'
            },
            {
              text: '统计方法',
              link: '/utils/statistics-method'
            },
            {
              text: '坐标系方法',
              link: '/utils/coordinate-method'
            },
            {
              text: '自定义指令',
              link: '/utils/custom-directives'
            },
            {
              text: '打印方法',
              link: '/utils/print-js'
            },
            {
              text: '导出excel',
              link: '/utils/excel-export'
            }
          ]
        },
        {
          text: 'Hooks',
          items: [
            {
              text: 'useCountUp 计时器',
              link: '/utils/hooks/use-count-up'
            },
            {
              text: 'useCountDown 倒计时器',
              link: '/utils/hooks/use-count-down'
            }
          ]
        }
      ],
      '/mobile/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/mobile/introduce'
            },
            {
              text: '安装',
              link: '/mobile/install'
            },
            {
              text: '快速开始',
              link: '/mobile/start'
            },
            {
              text: '注意事项',
              link: '/mobile/attention'
            },
            {
              text: '最佳实践',
              link: '/mobile/practices'
            },
            {
              text: '菜单配置',
              link: '/mobile/menu'
            }
          ]
        },
        {
          text: '公共组件',
          items: [
            {
              text: '使用须知',
              link: '/mobile/components/use'
            },
            {
              text: 'audio-bubble 语音气泡',
              link: '/mobile/components/audio-bubble'
            },
            {
              text: 'audio-recorder 语音录制',
              link: '/mobile/components/audio-recorder'
            },
            {
              text: 'calendar 日历选择器',
              link: '/mobile/components/calendar'
            },
            {
              text: 'data-checkbox 多选框',
              link: '/mobile/components/data-checkbox'
            },
            {
              text: 'data-picker 选择器',
              link: '/mobile/components/data-picker'
            },
            {
              text: 'data-radio 单选框',
              link: '/mobile/components/data-radio'
            },
            {
              text: 'datetime-picker 日期选择器',
              link: '/mobile/components/datetime-picker'
            },
            {
              text: 'dict-checkbox 字典多选框',
              link: '/mobile/components/dict-checkbox'
            },
            {
              text: 'dict-picker 字典选择器',
              link: '/mobile/components/dict-picker'
            },
            {
              text: 'dict-radio 字典单选框',
              link: '/mobile/components/dict-radio'
            },
            {
              text: 'dropdown 下拉菜单',
              link: '/mobile/components/dropdown'
            },
            {
              text: 'form 数据表单',
              link: '/mobile/components/form'
            },
            {
              text: 'grid-picker 网格选择器',
              link: '/mobile/components/grid-picker'
            },
            {
              text: 'list 数据列表',
              link: '/mobile/components/list'
            },
            {
              text: 'recorder-tip 录音提示',
              link: '/mobile/components/recorder-tip'
            },
            {
              text: 'search-dropdown 下拉搜索',
              link: '/mobile/components/search-dropdown'
            },
            {
              text: 'sticky 吸顶',
              link: '/mobile/components/sticky'
            },
            {
              text: 'upload 图片上传',
              link: '/mobile/components/upload'
            }
          ]
        },
        {
          text: 'Hooks',
          items: [
            {
              text: 'useAudioRecorder 语音录制',
              link: '/mobile/hooks/useAudioRecorder'
            },
            {
              text: 'useGeoLocation 位置获取',
              link: '/mobile/hooks/useGeoLocation'
            },
            {
              text: 'useQrcodeScanner 扫码',
              link: '/mobile/hooks/useQrcodeScanner'
            },
            {
              text: 'useUviewUpload 文件上传',
              link: '/mobile/hooks/useUviewUpload'
            }
          ]
        },
        {
          text: '工具库',
          items: [
            {
              text: '登录相关',
              link: '/mobile/utils/login'
            },
            {
              text: '图片相关',
              link: '/mobile/utils/image'
            },
            {
              text: '文件相关',
              link: '/mobile/utils/file'
            }
          ]
        }
      ]
    }
  }
})
