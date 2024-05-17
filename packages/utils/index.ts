import directives from './directives'

export * from './common'
export * from './regex'
export * from './validate'
export * from './coordinate'
export * from './file'
export * from './constant'
export * from './typescript'
export * from './vue'
export * from './statistics'
export * from './hooks'
export * from './env'
export * from './init'
export * from './map'
export * from './encrypt'
// #ifdef uniVersion < 0
export * from './install'
export * from './nprogress'
export * from './qrcode'
export * from './excel-export'
// #endif

export default {
  install: (app: any) => {
    directives.forEach((directive) => {
      app.directive(directive.name, directive)
    })
  }
}
