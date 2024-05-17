import type { RendererNode, DirectiveBinding } from 'vue'
import { getAttributeFromParents } from '../common'
import { useAuthorityStore } from '@szxc/stores'

/**
 * 自定义remove指令
 * 用于移除某一个dom元素，同时保留该dom元素所有的子元素
 * @example
 * ```html
 * <div class="container" v-remove>
 *   <div class="content">内容1</div>
 *   <div class="content">内容2</div>
 *   <div class="content">内容3</div>
 * </div>
 * ```
 * 最终将渲染：
 * ```html
 * <div class="content">内容1</div>
 * <div class="content">内容2</div>
 * <div class="content">内容3</div>
 * ```
 */
export const remove = {
  name: 'remove',
  mounted: (el: RendererNode, binding: DirectiveBinding) => {
    if (binding.value) {
      while (el.firstChild) {
        el.parentNode.insertBefore(el.firstChild, el)
      }
      el.parentNode.removeChild(el)
    }
  }
}

export const theme = {
  name: 'theme',
  mounted: (el: RendererNode, binding: DirectiveBinding) => {
    if (binding.value) {
      el.setAttribute('theme-chalk', binding.value)
    } else {
      el.setAttribute('theme-chalk', getAttributeFromParents(el, 'theme-chalk'))
    }
  },
  updated: (el: RendererNode, binding: DirectiveBinding) => {
    if (binding.value) {
      el.setAttribute('theme-chalk', binding.value)
    } else {
      el.setAttribute('theme-chalk', getAttributeFromParents(el, 'theme-chalk'))
    }
  }
}

export const authority = {
  name: 'authority',
  mounted: (el: RendererNode, binding: DirectiveBinding) => {
    if (binding.value) {
      const authority = useAuthorityStore()
      if (!authority.checkAuthority(binding.value)) {
        el.parentNode?.removeChild(el)
      }
    }
  }
}

export default [remove, theme, authority]
