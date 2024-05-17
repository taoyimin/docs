import { get } from '@szxc/http'
import { type AxiosRequestConfig } from 'axios'

/** 权限类型 */
export interface UserAuthority {
  /** 权限标识列表 */
  authorities: Record<string, string[]>
  /** 菜单列表 */
  menus: Record<string, Menu[]>
}

export interface Menu {
  id: number
  name: string
  path: string
  icon: string
  component: string
  hasChild: string
  hasActionConfig: string
  children: Menu[]
}

/**
 * 获取用户权限集合
 * @param config 请求配置
 * @returns 用户权限集合
 * @example
 * ```ts
 * import { getUserAuthorities } from '@szxc/apis'
 *
 * const authorities = await getUserAuthorities();
 * ```
 */
export const getUserAuthorities = async (config?: AxiosRequestConfig) =>
  get<UserAuthority>('/rjhj-system/menu/user-menus-authorities', {}, config)

/**
 * 小程序获取游客菜单
 * @param config
 * @returns
 */
export const getTouristMenus = async (config?: AxiosRequestConfig) =>
  get<any[]>('/rjhj-system/menu/masses-menus', {}, config)
