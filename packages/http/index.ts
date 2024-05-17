import axios, {
  InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import { useUserStore } from '@szxc/stores'
import {
  coordinateRequestTransform,
  coordinateResponseTransform,
  decryptTransform,
  deepFieldsMapTransform,
  encryptTransform,
  fieldsMapTransform,
  jsonObjectTransform,
  jsonStringTransform
} from './transform'
import { exportFile } from './file'

/** axios实例 */
export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

/** request拦截器 */
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig & { skipTransform?: boolean }) => {
    const userStore = useUserStore()
    if (userStore.userInfo) {
      config.headers['Blade-Auth'] = `${userStore.tokenType} ${userStore.accessToken}`
    }
    if (config.responseType !== 'blob' && !config.skipTransform) {
      //config.headers['Content-Type'] = 'application/json'
      config.transformRequest = [
        coordinateRequestTransform(config),
        encryptTransform(config),
        jsonStringTransform
      ]
      config.transformResponse = [
        decryptTransform(config),
        jsonObjectTransform,
        fieldsMapTransform(config),
        deepFieldsMapTransform(config),
        coordinateResponseTransform(config)
      ]
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/** response拦截器 */
instance.interceptors.response.use(
  (response) => {
    if (
      response.status == 200 &&
      (response.data.code == 200 ||
        response.config.responseType === 'blob' ||
        response.request.responseType === 'arraybuffer')
    ) {
      // 验证下载是否失败
      if (response.config.responseType === 'blob' && response.data.type === 'application/json') {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsText(response.data, 'utf-8')
          reader.onload = function (e) {
            const data = JSON.parse(e.target.result)
            if (data.code !== 0) {
              return reject({
                ...data,
                message: data?.msg || `下载失败，状态码：${data.code}`
              })
              return resolve(response)
            }
          }
        })
      }

      return response
    } else {
      return Promise.reject({
        ...response.data,
        message: response.data?.msg ?? `请求失败，状态码：${response.status}`
      })
    }
  },
  (error) => {
    return Promise.reject({
      ...error.response?.data,
      message: error.response?.data?.msg ?? error.message
    })
  }
)

/**
 * get请求方法
 * @param url 请求地址
 * @param params 请求参数
 * @param config 请求配置
 * @returns 请求结果
 * @example
 * ```ts
 * // 查询某个用户
 * const user = await get<User>('/api/user', {id: 1})
 * // 查询用户列表
 * const {records: users} = await get<Page<User>>('/api/users', {current: 1, size: 10})
 * ```
 */
export const get = async <T = any, D = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig<D>
): Promise<T> => {
  const response = await instance.get<T, AxiosResponse<T, D>, D>(url, {
    params,
    ...config
  })
  if (config?.responseType === 'blob') {
    exportFile(response)
    return response.data
  } else if (config?.returnResult) {
    return response.data
  } else {
    return (response.data as Result).data
  }
}

/**
 * delete请求方法
 * @param url 请求地址
 * @param params 请求参数
 * @param config 请求配置
 * @returns 请求结果
 */
export const del = async <T = any, D = any>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig<D>
): Promise<T> => {
  const response = await instance.delete<T, AxiosResponse<T, D>, D>(url, {
    params,
    ...config
  })

  if (config?.returnResult) {
    return response.data
  } else {
    return (response.data as Result).data
  }
}

/**
 * post请求方法
 * @param url 请求地址
 * @param data 请求参数
 * @param config 请求配置
 * @returns 请求结果
 * @example
 * ```ts
 * // 新增一个用户
 * const user = await post<User>('/api/user', {name: 'tom', age: 25})
 * ```
 */
export const post = async <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<T> => {
  const response = await instance.post<T, AxiosResponse<T, D>, D>(url, data, config)
  if (config?.returnResult) {
    return response.data
  } else {
    return (response.data as Result).data
  }
}

/**
 * put请求方法
 * @param url 请求地址
 * @param data 请求参数
 * @param config 请求配置
 * @returns 请求结果
 */
export const put = async <T = any, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<T> => {
  const response = await instance.put<T, AxiosResponse<T, D>, D>(url, data, config)
  if (config?.returnResult) {
    return response.data
  } else {
    return (response.data as Result).data
  }
}

declare module 'axios' {
  /**
   * AxiosRequestConfig扩展功能
   * @link https://k8s.nccxgh.com:9096/docs/http/return-result.html
   */
  export interface AxiosRequestConfig {
    /** [返回消息体](https://k8s.nccxgh.com:9096/docs/http/return-result.html) ：用于控制是否返回Result消息体。 */
    returnResult?: boolean
    /** [字段映射](https://k8s.nccxgh.com:9096/docs/http/fields-map.html) ：用于对接口返回的第一层数据进行字段映射。*/
    fieldsMap?: Record<string, string>
    /** [深层字段映射] (https://k8s.nccxgh.com:9096/docs/http/deep-fields-map.html) ：用于对接口返回的所有数据进行字段映射。*/
    deepFieldsMap?: Record<string, string>
    __deepFieldsMap__?: boolean
    /** [坐标系转换](https://k8s.nccxgh.com:9096/docs/http/transform-coordinate.html) ：自动对接口中经纬度数据进行坐标系转换。*/
    transformCoordinate?: boolean
    __transformCoordinate__?: boolean
    /** [报文加密](https://k8s.nccxgh.com:9096/docs/http/encrypt-params.html) ：加密请求报文并解密返回报文 */
    encryptParams?: boolean
  }
}

/**
 * get方法，对应get请求
 * @deprecated 该方法已过时，后续将删除，请尽快迁移到{@link get}方法。
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $get = (url: string, params?: object) => {
  const userStore = useUserStore()
  let result: any = {}

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token })
  } else {
    result = params
  }

  return instance.get(url, {
    params: result
  })
}

/**
 * post方法，对应post请求
 * @deprecated 该方法已过时，后续将删除，请尽快迁移到{@link post}方法。
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $post = (url: string, params: object, type?: string) => {
  const userStore = useUserStore()
  let result: any = {}

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token })
  } else {
    result = params
  }
  if (type) {
    return instance.post(url, JSON.stringify(result), {
      headers: { 'content-type': type }
    })
  } else {
    return instance.post(url, result) //是将对象 序列化成URL的形式，以&进行拼接
  }
}

export default {
  install: (app: any) => {
    app.config.globalProperties['$get'] = get
    app.config.globalProperties['$post'] = post
    app.config.globalProperties['$http'] = instance
  }
}
