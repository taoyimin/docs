import { computed } from 'vue'
import { useThemeSettingStore } from '@szxc/stores'
import { DEFAULT_PRIMARY, THEME_CHANGE_COLOR, THEME_CHANGE_DRAK } from '../constant'
import { ElMessage } from 'element-plus'
import { getLightColor, getDarkColor } from '../common'

export const useTheme = () => {
  const settingsStore = useThemeSettingStore()
  const themeConfig = computed(() => settingsStore.themeConfig)

  // 切换暗黑模式
  const switchDark = () => {
    const body = document.documentElement as HTMLElement
    if (themeConfig.value.isDark) body.setAttribute('class', 'dark')
    else body.setAttribute('class', '')
    changePrimary(themeConfig.value.primary)
  }

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({
        type: 'success',
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`
      })
    }
    settingsStore.setThemeConfig({ ...themeConfig.value, primary: val })
    document.documentElement.style.setProperty('--el-color-primary', themeConfig.value.primary)

    // 颜色加深或变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        themeConfig.value.isDark
          ? `${getDarkColor(themeConfig.value.primary, i / 10)}`
          : `${getLightColor(themeConfig.value.primary, i / 10)}`
      )
    }
  }

  // 初始化主题
  const initTheme = () => {
    switchDark()
    // 子应用监听主题变化
    window.$wujie?.bus.$on(THEME_CHANGE_COLOR, (val) => {
      changePrimary(val)
    })
    window.$wujie?.bus.$on(THEME_CHANGE_DRAK, (isDark) => {
      settingsStore.setThemeConfig({ ...themeConfig.value, isDark })
      switchDark()
    })
  }
  return {
    initTheme,
    switchDark,
    changePrimary
  }
}
