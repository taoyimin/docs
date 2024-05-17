/** 高德地图key */
export const AMAP_KEY = '5baaa83642d47c0c8f609bb62df44276'

/** 高德地图jscode密钥 */
export const AMAP_SAFETY_KEY = 'ab09f7a19c9b441c7591e9dc83a1c309'

/** 天地图key */
export const TDT_KEY = '9c7c3630169928880b0b8c76696f1604'

// 事件状态
export enum eventStatusMap {
  chuli = '1', // 处理
  pingjia = '2', // 评价
  banjie = '3' // 办结
}

// 事件流程状态
export enum eventProcessTypeMap {
  zancun = '0', // 暂存
  shangbao = '1', // 上报
  chuli = '2', // 处理
  zhipai = '3', //指派
  duban = '4', // 督办
  cuiban = '5', // 催办
  pingjia = '6', // 评价
  guidan = '7', // 归档
  liuzhuan = '8', // 流转
  banjie = '9' // 办结
}

// * 默认主题颜色
// export const DEFAULT_PRIMARY = "#01B2A8";
export const DEFAULT_PRIMARY = '#0E69D4'

// 主题bus emit名称
export const THEME_CHANGE_COLOR = 'theme-change-color'
export const THEME_CHANGE_DRAK = 'theme-change-drak'

// 默认引导页面路由名称
export const DEFAULT_GUIDE_PAGE_NAME = 'GuidePage'

// 网格员管理职务枚举
export enum jobTypeMap {
  gridMember = 3, // 网格员
  caretaker = 6 // 管护员
}

// 主应用和子应用通信bus emit 名称
export const WUJIE_BUS_CXGH_BACKGROUND_NAME = 'wujie-bus-cxgh-name'
export const WUJIE_BUS_LARGE_SCREEN_NAME = 'wujie-bus-large-name'
export const WUJIE_BUS_EXCREMENT_RESOURCE_NAME = 'wujie-bus-excrement-name'
export const WUJIE_BUS_SEWAGE_VISUALIZATION_NAME = 'wujie-bus-sewage-name'
export const WUJIE_BUS_SYSTEM_BACKGROUND_NAME = 'wujie-bus-system-name'
export const WUJIE_BUS_STANDARD_FARMLAND_NAME = 'wujie-bus-farmland-name'
export const WUJIE_BUS_SITUATION_PERCEPTION_NAME = 'wujie-bus-situation-name'
export const WUJIE_BUS_VILLAGE_ARCHIVE_NAME = 'wujie-bus-archive-name'
export const WUJIE_BUS_PROVINCE_PLATFORM_NAME = 'wujie-bus-province-name'
export const WUJIE_BUS_OPEN_PLATFORM_NAME = 'wujie-bus-open-name'

// router 最大缓存数量
export const MAX_ROUTER_CACHE_NUMBER = 8
