import { getCurrentInstance, ref, onMounted } from 'vue'
import { getAttributeFromParents } from '@szxc/utils'

// 为了处理异步组件获取时dom还没渲染bug
export function useThemeChalk(isRoot: boolean = false) {
  const theme = ref<string>('')
  onMounted(() => {
    if (isRoot) {
      theme.value = getAttributeFromParents(document.documentElement, 'theme-chalk')
    } else {
      theme.value = getAttributeFromParents(getCurrentInstance()!.vnode?.el, 'theme-chalk')
    }
  })
  return theme
}
