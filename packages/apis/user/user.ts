import { post, get } from '@szxc/http'
import { type AxiosRequestConfig } from 'axios'
import { type SmsCaptcha } from './login'

/** 修改密码参数 */
export interface ModifyPasswordParam {
  /** 旧密码 */
  oldPassword: string
  /** 新密码 */
  newPassword: string
}

/** 用户实名参数 */
export interface UserAutonymParam {
  /** 验证码返回的id */
  id: string
  /** 验证码 */
  value: string
  /** 网格 */
  gridCode: string
  /** 姓名 */
  realName: string
  /** 身份证号 */
  usrIdNumber: string
}

/** 退出登录 */
export interface LoginOut {
  loginUrl: string | null
}

/**
 * 修改用户密码
 * @param { ModifyPasswordParam } params 请求参数
 * @param { AxiosRequestConfig } config
 * @returns 修改结果
 */
export const modifyPassword = (params: ModifyPasswordParam, config?: AxiosRequestConfig) =>
  post<Result>('/rjhj-system/user/modifyPassword', params, {
    ...config,
    returnResult: true
  })

/** 退出登录 */
export const loginOut = (config?: AxiosRequestConfig) =>
  get<LoginOut>(
    '/blade-auth/oauth/logout',
    {},
    {
      ...config,
      headers: {
        Authorization: null
      }
    }
  )

/**
 * 获取当前用户的跳转地址
 * @return 当前用户的跳转地址
 */
export function getUrlByUser(config?: AxiosRequestConfig) {
  return get<string>('/rjhj-open/admin/sso/getUrlByUser', {}, config)
}

/**
 * 校验手机号是否重复
 * @param params.phone 手机号
 * @param params.code 微信code
 * @returns 校验结果
 * @example
 * import { checkRepeatTel } from '@szxc/apis'
 *
 * const { data } = await checkRepeatTel({ phone: '17388888888', code: 'abc123456' });
 */
export function checkRepeatTel(params: { tel: string; code: string }, config?: AxiosRequestConfig) {
  return get('/rjhj-system/mobile/checkRepeatTel', params, config)
}

/**
 * 小程序群众注册
 * @param params
 * @param config
 * @returns
 */
export function massesAuthentication(
  params: { value: string; id: string; code: string; usrTel: string },
  config?: AxiosRequestConfig
) {
  return post('/rjhj-system/mobile/massesAuthentication', params, config)
}

/**
 * 小程序注销用户
 * @returns
 */
export function deleteUserForApp(params: { value: string; id: string; phone: string }) {
  return post('/rjhj-system/mobile/deleteUserForApp', params, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 小程序获取实名信息
 * @returns
 */
export function queryPerfectUserInfo(config?: AxiosRequestConfig) {
  return get('/rjhj-system/mobile/queryPerfectUserInfoVOToWeChat', config)
}

/**
 * 小程序用户实名前获取手机验证码
 * @param params.phone 手机号
 * @returns 验证码
 * @example
 */
export function getSmsCaptchaByAutonym(params: { gridCode: string; realName: string }) {
  return post<SmsCaptcha, Result<SmsCaptcha>>(
    '/blade-resource/client/validate-message-improve',
    { code: '0-1709543246786', ...params },
    {
      skipTransform: true,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 小程序用户实名
 * @returns
 */
export function improveUserInfo(params: UserAutonymParam, config?: AxiosRequestConfig) {
  return post('/rjhj-system/mobile/improveUserInfo', params, config)
}

/**
 * 获取老平台token
 * @returns
 */
export function getOldToken() {
  return get('/rjhj-open/sso/getOldToken')
}

/**
 * 获取数字乡村平台单点地址
 * @param params
 * @returns
 */
export function getSzxcSSOUrl(params: any) {
  return get('/rjhj-open/sso/cms/redirect', params)
}
