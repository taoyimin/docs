import { get } from '@szxc/http'

export interface UserConfig {
  id: string
  name: string
  gridCode: string
  homeUrl: string
  browserTitle: string
  navTitle: string
  navGreetings: string
}

/**
 * 获取用户动态配置
 * @param { ModifyPasswordParam } params 请求参数
 * @param { AxiosRequestConfig } config
 * @returns 修改结果
 */
export function getUserConfig() {
  return get<UserConfig>('/rjhj-system/region-sys-config/getMyConfig')
}
