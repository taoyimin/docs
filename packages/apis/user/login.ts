import http from '@szxc/http/login'

/** 用户信息类型 */
export interface UserInfo {
  access_token: string
  account: string
  refresh_token: string
  real_name: string
  globalLevel: string
  globalCode: string
  globalName: string
  gridId: string
  nick_name: string
  user_id: string
  user_name: string
  token_type: string
}

/** 账号密码登录参数类型 */
export interface LoginParam {
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
}

/** 账号密码加图形验证码登录参数类型 */
export interface AccountLoginParam {
  /** 用户名 */
  username: string
  /** 密码 */
  password: string
  /** 验证码接口返回的key */
  captchaKey: string
  /** 用户输入的验证码 */
  captchaCode: string
}

/** 手机号登录参数类型 */
export interface PhoneLoginParam {
  /** 手机号 */
  phone: string
  /** 验证码id */
  id: string
  /** 用户输入的短信验证码 */
  value: string
  /** 群众使用手机号登录时传1 */
  masses?: string
}

/** 授权码登录参数类型 */
export interface CodeLoginParam {
  /** 授权码 */
  code: string
  /** 授权页地址 */
  redirect_uri: string
}

/** RefreshToken登录参数类型 */
export interface RefreshTokenLoginParam {
  /** 用户token */
  refresh_token: string
}

/** 小程序Code登录参数类型 */
export interface MpCodeLoginParam {
  /** 小程序code */
  code: string
}

/** 龘云token登录参数类型 */
export interface DayunTokenLoginParam {
  /** 龘云token */
  token: string
}

export interface UacCodeLoginParam {
  /** 宁夏uacCode */
  authorize_code: string
  uac_token: string
}

export interface UacTokenLoginParam {
  /** 宁夏uacToken */
  uac_token: string
}

/** 图片验证码类型 */
export interface ImageCaptcha {
  /** 验证码key */
  key: string
  /** base64格式的验证码图片 */
  image: string
}

/** 短信验证码类型 */
export interface SmsCaptcha {
  /** 验证码id */
  id: string
}

/**
 * 账号密码登录
 * @param { LoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { login } from '@szxc/apis'
 *
 * const userInfo = await login({
 *   username: 'admin',
 *   password: 'admin@123456'
 * })
 * ```
 */
export function login(params: LoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'password'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 账号密码加图形验证码登录
 * @param { AccountLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByAccount } from '@szxc/apis'
 *
 * const userInfo = await loginByAccount({
 *   username: 'admin',
 *   password: 'admin@123456',
 *   captchaKey: '123456',
 *   captchaCode: 'abcd'
 * })
 * ```
 */
export function loginByAccount(params: AccountLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'captcha'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Captcha-Key': params.captchaKey,
        'Captcha-Code': params.captchaCode
      }
    }
  )
}

/**
 * 手机号登录
 * @param { PhoneLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByPhone } from '@szxc/apis'
 *
 * const userInfo = await loginByPhone({
 *   phone: '17388888888',
 *   id: 'abcdefg123456',
 *   value: '123456'
 * })
 * ```
 */
export function loginByPhone(params: PhoneLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'sms_code'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 授权码登录
 * @param { CodeLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByCode } from '@szxc/apis'
 *
 * const userInfo = await loginByCode({
 *   code: 'abc123456',
 *   redirect_uri: 'https://www.liv.com/auth/'
 * })
 * ```
 */
export function loginByCode(params: CodeLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'authorization_code'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic b3BlbjpvcGVuX3NlY3JldA=='
      }
    }
  )
}

/**
 * Token登录
 * @param { RefreshTokenLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByRefreshToken } from '@szxc/apis'
 *
 * const userInfo = await loginByRefreshToken({
 *   refresh_token: 'abc123456'
 * })
 * ```
 */
export function loginByRefreshToken(params: RefreshTokenLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'refresh_token'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 小程序Code登录
 * @param { MpCodeLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByMpCode } from '@szxc/apis'
 *
 * const userInfo = await loginByMpCode({
 *   code: 'abc123456'
 * })
 * ```
 */
export function loginByMpCode(params: MpCodeLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'wechat_ma'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 龘云token登录
 * @param { DayunTokenLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByDaYunToken } from '@szxc/apis'
 *
 * const userInfo = await loginByDaYunToken({
 *   token: 'abc123456'
 * })
 * ```
 */
export function loginByDaYunToken(params: DayunTokenLoginParam) {
  return http.get<UserInfo, UserInfo>('/blade-auth/oauth/getMiniAppDaYunToken', {
    headers: {
      Authorization: ''
    },
    params: params
  })
}

/**
 * 宁夏uacCode登录
 * @param { UacCodeLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByUacCode } from '@szxc/apis'
 *
 * const userInfo = await loginByUacCode({
 *   uac_code: 'abc123456'
 * })
 * ```
 */
export function loginByUacCode(params: UacCodeLoginParam) {
  return new Promise<UserInfo>((resolve, reject) => {
    http
      .post<UserInfo, UserInfo>(
        '/blade-auth/oauth/token',
        Object.assign(params, {
          scope: 'all',
          grant_type: 'uac_code'
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then((res: any) => {
        resolve(Object.assign(res, { real_name: res.nick_name }))
      })
      .catch((e: any) => {
        reject(e)
      })
  })
}

/**
 * 宁夏uacToken登录
 * @param { UacTokenLoginParam } params 请求参数
 * @returns 登录结果
 * @example
 * ```ts
 * import { loginByUacToken } from '@szxc/apis'
 *
 * const userInfo = await loginByUacToken({
 *   uac_token: 'abc123456'
 * })
 * ```
 */
export function loginByUacToken(params: UacTokenLoginParam) {
  return http.post<UserInfo, UserInfo>(
    '/blade-auth/oauth/token',
    Object.assign(params, {
      scope: 'all',
      grant_type: 'uac_chat'
    }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 获取图片验证码
 * @returns 图片验证码信息
 * @example
 * import { getImageCaptcha } from '@szxc/apis'
 *
 * const { key, image } = await getImageCaptcha();
 */
export function getImageCaptcha() {
  return http.get<ImageCaptcha, ImageCaptcha>('/blade-auth/oauth/captcha', {
    headers: {
      Authorization: ''
    }
  })
}

/**
 * 获取短信验证码，会校验当前手机号是否是我们平台的用户
 * @param params.phone 手机号
 * @returns 短信验证码
 * @example
 * import { getSmsCaptcha } from '@szxc/apis'
 *
 * const { data } = await getSmsCaptcha({ phone: '17388888888' });
 */
export function getSmsCaptcha(params: { phone: string }) {
  return http.post<SmsCaptcha, Result<SmsCaptcha>>(
    '/blade-resource/sms/endpoint/send-validate',
    Object.assign(params, { code: '0-1709543246786' }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}

/**
 * 获取短信验证码，不会校验当前手机号是否是我们平台的用户
 * @param params.phone 手机号
 * @returns 短信验证码
 * @example
 * import { getSmsCaptchaByTourist } from '@szxc/apis'
 *
 * const { data } = await getSmsCaptchaByTourist({ phone: '17388888888' });
 */
export function getSmsCaptchaByTourist(params: { phone: string }) {
  return http.post<SmsCaptcha, Result<SmsCaptcha>>(
    '/blade-resource/sms/endpoint/send-validate-tourist',
    Object.assign(params, { code: '0-1709543246786' }),
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
}
