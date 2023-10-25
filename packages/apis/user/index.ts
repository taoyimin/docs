import { $get, $post } from '@szxc/http'

// 获取密钥
export const getSecretKey = () => $get('/user/OrleansWings', {})

// 账号密码登录
export const loginByAccount = (params: any) => $post('/blade-auth/oauth/token', params)

// 退出
export const logout = () => $post('/logoutNew', {})

export default { getSecretKey, loginByAccount, logout }