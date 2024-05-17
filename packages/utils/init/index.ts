import type { Router } from 'vue-router'
import { useUserStore } from '@szxc/stores'
import { envLogo } from '../env'
import { getRedirectUrl } from '../common'

/**
 * 初始化网站favicon
 */
export function initFavicon() {
  const link = document.createElement('link')
  link.rel = 'icon'
  link.href = envLogo()
  document.head.appendChild(link)
}

/**
 * 初始化统一处理未捕获异常
 * @param router 路由对象
 */
export function initUnhandledRejection(messageFn: Function, router: Router) {
  const userStore = useUserStore()
  window.onunhandledrejection = (e) => {
    if (e.reason?.code === 401) {
      messageFn('登录已失效，请重新登录！')
      userStore.userInfo = null
      if (import.meta.env.MODE === 'nxtest') {
        window.location.href = e.reason.redirectUrl.replace(
          'toReplaceParam',
          `${window.location.origin}/yuanZhouAuth${window.location.pathname}`
        )
      } else if (import.meta.env.MODE === 'dayuntest' || import.meta.env.MODE === 'dayunprod') {
        window.location.href = e.reason.redirectUrl
      } else {
        router.push({
          path: '/login',
          query: { redirect: getRedirectUrl() }
        })
      }
    } else if (e.reason?.message) {
      if (!e.reason?.message.startsWith('Failed to fetch dynamically imported module')) {
        messageFn(e.reason?.message)
      }
    }
  }
}

/**
 * 初始化高德地图
 */
export function initAMap() {
  window._AMapSecurityConfig = {
    securityJsCode: import.meta.env.VITE_AMAP_SECURITY_CODE
  }
}

/**
 * 初始化引入iconfont文件
 */
export function initIconFont() {
  const script = document.createElement('script')
  script.src = 'https://at.alicdn.com/t/c/font_1856667_zhinxphori.js'
  document.head.appendChild(script)
}

/**
 * 初始化Vite动态导入失败处理
 * 解决重新部署时，正在访问当前站点的用户可能会遇到的动态导入错误问题
 * @see https://cn.vitejs.dev/guide/build#load-error-handling
 */
export function initVitePreloadError() {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault()
    window.location.reload()
  })
}
