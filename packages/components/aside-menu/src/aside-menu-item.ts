import type { ExtractPropTypes, PropType } from "vue";
import type AsideMenuItem from "./aside-menu-item.vue";
import type { RouteRecordRaw } from "vue-router";

export const asideMenuItemProps = {
  /**
   * 动态路由对象
   */
  dynamicRoute: {
    type: Object as PropType<RouteRecordRaw>,
    default: {},
  },
};

export const asideMenuItemEmits = {};

export type AsideMenuItemEmits = typeof asideMenuItemEmits;
export type AsideMenuItemProps = ExtractPropTypes<typeof asideMenuItemProps>;
export type AsideMenuItemInstance = InstanceType<typeof AsideMenuItem>;
