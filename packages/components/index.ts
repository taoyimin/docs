import Components from './component'
import '@amap/amap-jsapi-types'

const LivUI = {
  install(app) {
    Components.forEach((component) => {
      app.use(component)
    })
  }
}

export default LivUI

export * from './dict-select'
export * from './grid-cascader'
export * from './data-table'
export * from './data-form'
export * from './form'
export * from './form-item'
export * from './data-descriptions'
export * from './data-pagination'
export * from './data-card'
export * from './location-picker'
export * from './event-detail'
export * from './grid-tree'
export * from './monitor-tree'
export * from './facility-devices'
export * from './login-form'
export * from './login-view'
export * from './page-select'
export * from './personnel-select'
export * from './setting-theme'
export * from './aside-menu'
export * from './icon-font'
export * from './tabs-bar'
export * from './not-found'
export * from './page-header'
export * from './guide-page'
export * from './monitor-player'
export * from './monitor-wall'
export * from './xg-player'
export * from './meta-player'
export * from './search-form'
export * from './qr-code'
export * from './a-map'
export * from './facility-selection'
