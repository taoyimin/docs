import { $get, $post } from '@/utils/http'
import { baseUrl } from '@/api/base'

// 获取密钥
export const getSecretKey = () => $get(`${baseUrl}/user/OrleansWings`, {})

// 账号密码登录
export const loginByAccount = (params: any) => $post(`${baseUrl}/loginNew`, params)

// 退出
export const logout = () => $post(`${baseUrl}/logoutNew`, {})
