import { defineStore } from 'pinia'
import { type Menu, getUserAuthorities } from '@szxc/apis'
import { ref, computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {} from 'pinia-plugin-persistedstate'

/**
 * 用户权限Store
 */
export const useAuthorityStore = defineStore(
  'authorityStore',
  () => {
    const routesModule = import.meta.glob('/src/views/**/*.vue')
    /** 权限标识 */
    const appAuthority = import.meta.env.VITE_APP_AUTHORITY
    /** 用户权限集合 */
    const authorities = ref<string[]>([])
    /** 用户菜单树 */
    const menus = ref<Menu[]>([])
    /** 用户动态路由树 */
    const dynamicRoutes = computed<RouteRecordRaw[]>(() => {
      return menus.value.map((menu) => menu2Route(menu))
    })

    /**
     * 初始化用户权限和菜单
     * @returns 用户权限和菜单
     */
    async function initAuthority() {
      if (appAuthority) {
        const { authorities: authoritiesData, menus: menusData } = await getUserAuthorities()
        // authorities.value = authoritiesData[appAuthority] ?? [];
        authorities.value = Object.keys(authoritiesData).reduce((pre, cur) => {
          return pre.concat(authoritiesData[cur] ?? [])
        }, [] as string[])
        menus.value = menusData[appAuthority] ?? []
        return { authorities, menus }
      } else {
        console.warn(
          `[Liv-UI]当前项目没有配置VITE_APP_AUTHORITY环境变量。详情请看：https://k8s.nccxgh.com:9096/docs/guide/env.html#环境变量对照表`
        )
      }
    }

    /**
     * 校验用户权限
     * @param authority 需要校验的权限标识
     * @returns 是否拥有权限
     */
    function checkAuthority(authority: string) {
      // demoAuthority为vitepress文档示例权限
      return (
        authority === undefined ||
        authority === null ||
        authority === '' ||
        authority === 'demoAuthority' ||
        authorities.value.includes(authority)
      )
    }

    /**
     * 菜单转动态路由
     * @param parent 父菜单
     * @param menu 需要转换的菜单
     * @returns 动态路由对象
     */
    function menu2Route(menu: Menu): RouteRecordRaw {
      const dynamicRoute: RouteRecordRaw = {
        path: menu.path ?? '',
        name: String(menu.id),
        icon: menu.icon ?? '',
        meta: {
          title: menu.name,
          hasActionConfig: menu.hasActionConfig,
          hasChild: menu.hasChild
        },
        component: routesModule[`/src/views${menu.component}`],
        children: []
      }
      if (menu.children) {
        // hasActionConfig等于1的是按钮
        dynamicRoute.children =
          menu.children
            ?.filter((item) => item.hasActionConfig !== '1')
            .map((item) => menu2Route(item)) ?? []
      }
      return dynamicRoute
    }

    return { authorities, menus, dynamicRoutes, initAuthority, checkAuthority }
  },
  {
    persist: true
  }
)
