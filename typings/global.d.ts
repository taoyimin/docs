export {}

declare global {
  interface Window {
    _AMapSecurityConfig: any
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean
    // 子应用公共加载路径
    __WUJIE_PUBLIC_PATH__: string
    // 原生的querySelector
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector
    // 原生的querySelectorAll
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll
    // 原生的window对象
    __WUJIE_RAW_WINDOW__: Window
    // 子应用沙盒实例
    __WUJIE: WuJie
    // 子应用mount函数
    __WUJIE_MOUNT: () => void
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void
    // 注入对象
    $wujie: {
      bus: EventBus
      shadowRoot?: ShadowRoot
      props?: { [key: string]: any }
      location?: Object
    }
  }

  interface Result<T = any> {
    success: boolean
    code: number
    msg: string
    data: T
  }

  interface Page<T = any> {
    records?: T[]
    total?: number
    size?: number
    current?: number
    orders?: string[]
    optimizeCountSql?: boolean
    searchCount?: boolean
    maxLimit?: number
    countId?: string
    pages?: number
  }

  interface PageParam {
    current?: number
    size?: number
    ascs?: string
    descs?: string
  }
}
