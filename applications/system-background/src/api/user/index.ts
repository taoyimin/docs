import { $get, $post } from '@szxc/http'

import { baseUrl } from '@/api/base'

// 获取密钥
export const getSecretKey = () => $get(`/user/OrleansWings`, {})

// 账号密码登录
export const loginByAccount = (params: any) => $post(`/blade-auth/oauth/token`, params)

// 退出
export const logout = () => $post(`/logoutNew`, {})
