import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'

export const useTabsBarStore = defineStore({
  id: 'useTabsBar',
  // state: 返回对象的函数
  state: (): {
    activeTabsValue: string
    visitedViews: RouteRecordRaw[]
    cachedViews: any[]
  } => ({
    activeTabsValue: '',
    visitedViews: [], // 选中过的路由表
    cachedViews: [] // 使用 keepAlive 时的缓存
  }),
  getters: {},
  // 可以同步 也可以异步
  actions: {
    setTabsMenuValue(val: string) {
      this.activeTabsValue = val
    },
    addView(view: RouteRecordRaw) {
      this.addVisitedView(view)
    },
    removeView(routes: RouteRecordRaw[]) {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((item) => !routes.includes((item as any).path))
        resolve(null)
      })
    },
    addVisitedView(view: RouteRecordRaw) {
      this.setTabsMenuValue(view.path)
      if (this.visitedViews.some((v) => v.path === view.path) || !view.meta) return
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )

      if (view.meta.isKeepAlive && view.name) {
        this.cachedViews.push(view.name)
      }
    },
    delView(activeTabPath: any) {
      return new Promise((resolve) => {
        this.delVisitedView(activeTabPath)
        this.delCachedView(activeTabPath)
        resolve({
          visitedViews: [...this.visitedViews],
          cachedViews: [...this.cachedViews]
        })
      })
    },
    delVisitedView(path: string) {
      return new Promise((resolve) => {
        this.visitedViews = this.visitedViews.filter((v) => {
          if (!v.meta) return
          return v.path !== path || v.meta.affix
        })
        this.cachedViews = this.cachedViews.filter((v) => {
          return v.path !== path || v.meta.affix
        })
        resolve([...this.visitedViews])
      })
    },
    delCachedView(view: RouteRecordRaw) {
      return new Promise((resolve) => {
        const index = this.cachedViews.indexOf(view.name)
        index > -1 && this.cachedViews.splice(index, 1)
        resolve([...this.cachedViews])
      })
    },
    clearVisitedView() {
      this.delAllViews()
    },
    delAllViews() {
      this.visitedViews = this.visitedViews.filter((v) => v.meta && v.meta.affix)
      this.cachedViews = this.visitedViews.filter((v) => v.meta && v.meta.affix)
    },
    delOtherViews(path: string) {
      this.visitedViews = this.visitedViews.filter((item) => {
        return item.path === path || (item.meta && item.meta.affix)
      })
      this.cachedViews = this.visitedViews.filter((item) => {
        return item.path === path || (item.meta && item.meta.affix)
      })
    },
    delLeftView(activeTabPath: string) {
      const index = this.visitedViews.findIndex((item) => item.path === activeTabPath)
      this.visitedViews = this.visitedViews.filter((item, i) => {
        return i >= index || (item.meta && item.meta.affix)
      })
      this.cachedViews = this.visitedViews.filter((item, i) => {
        return i >= index || (item.meta && item.meta.affix)
      })
    },
    delRightView(activeTabPath: string) {
      const index = this.visitedViews.findIndex((item) => item.path === activeTabPath)
      this.visitedViews = this.visitedViews.filter((item, i) => {
        return i <= index || (item.meta && item.meta.affix)
      })
      this.cachedViews = this.visitedViews.filter((item, i) => {
        return i <= index || (item.meta && item.meta.affix)
      })
    },
    updateVisitedView(view: RouteRecordRaw) {
      for (let v of this.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  persist: {
    storage: import.meta.env.SSR ? true : sessionStorage
  }
})

export default useTabsBarStore
