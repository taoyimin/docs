/**
 * 根据环境获取对应的logo
 * @returns logo图片地址
 */
export function envLogo() {
  switch (import.meta.env.MODE) {
    case 'dayuntest':
    case 'dayunprod':
      return new URL('../assets/logo/logo_dayun.png', import.meta.url).href
    case 'nxtest':
    case 'nxprod':
      return new URL('../assets/logo/logo_ningxia.png', import.meta.url).href
    default:
      return new URL('../assets/logo/logo.png', import.meta.url).href
  }
}

/**
 * 根据环境获取对应的小程序logo
 * 小程序不支持new URL语法
 * @returns logo图片地址
 */
export function envMpLogo() {
  switch (import.meta.env.MODE) {
    case 'dayuntest':
    case 'dayunprod':
      return '/static/logo_dayun.png'
    case 'nxtest':
    case 'nxprod':
      return '/static/logo_ningxia.png'
    default:
      return '/static/logo.png'
  }
}

/**
 * 退出登录是否清空token
 * @description 龘云环境点击退出登录，返回龘云九宫格页面，不需要清除token
 * @returns 是否清空token
 */
export function envClearToken() {
  return import.meta.env.MODE !== 'dayuntest' && import.meta.env.MODE !== 'dayunprod'
}

/**
 * 判断是否龘云环境
 * @returns 是否龘云环境
 */
export function checkDayunEnv() {
  return import.meta.env.MODE === 'dayuntest' || import.meta.env.MODE === 'dayunprod'
}
