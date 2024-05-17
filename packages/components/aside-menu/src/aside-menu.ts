import type { ExtractPropTypes } from 'vue'
import type AsideMenu from './aside-menu.vue'

export const asideMenuProps = {
  isCollapse: {
    type: Boolean,
    default: false
  }
}

export const asideMenuEmits = {}

export type AsideMenuEmits = typeof asideMenuEmits
export type AsideMenuProps = ExtractPropTypes<typeof asideMenuProps>
export type AsideMenuInstance = InstanceType<typeof AsideMenu>
