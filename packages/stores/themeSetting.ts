import { defineStore } from 'pinia'
import { DEFAULT_PRIMARY } from '@szxc/utils'

export interface SettingsState {
  collapse: boolean
  refresh: boolean
  themeConfig: ThemeConfigProps
}

export interface ThemeConfigProps {
  primary: string
  isDark: boolean
}

const themeColorMap = {
  blue: '#0e69d4',
  green: '#008a7b',
  dayun: '#0e69d4'
}

export const useThemeSettingStore = defineStore({
  id: 'theme-settings',
  state: (): SettingsState => ({
    collapse: false,
    refresh: false, // 刷新页面
    themeConfig: {
      primary: themeColorMap[import.meta.env.VITE_THEME_CHALK] || DEFAULT_PRIMARY,
      isDark: false
    }
  }),

  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig
    }
  }
  // persist: true
})
