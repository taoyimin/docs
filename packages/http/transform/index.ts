import type { AxiosRequestConfig, AxiosRequestTransformer, AxiosResponseTransformer } from 'axios'
import {
  decryptAES,
  encryptAES,
  matchLatitude,
  matchLongitude,
  toOriginCoordinate,
  toTargetCoordinate
} from '@szxc/utils'

/**
 * 将请求数据从json对象转换成string
 * @param response 接口返回结果
 * @returns string
 */
export function jsonStringTransform(data: any): AxiosRequestTransformer {
  return typeof data === 'object' ? JSON.stringify(data) : data
}

/**
 * 将返回结果从string转换成json对象
 * @param response 接口返回结果
 * @returns json对象
 */
export function jsonObjectTransform(result: any): AxiosResponseTransformer {
  return typeof result === 'object' ? result : JSON.parse(result)
}

/**
 * 将请求结果中的某些字段映射为其他字段，只会映射返回数据第一层的字段。
 * @param config 请求配置
 * @returns 字段映射后的请求结果
 */
export function fieldsMapTransform(config: AxiosRequestConfig): AxiosResponseTransformer {
  return (result, _headers, status) => {
    if (config.fieldsMap && status === 200 && result.code === 200) {
      if (result.data instanceof Array) {
        result.data.forEach((item: any) => {
          mapField(config, item)
        })
      } else {
        mapField(config, result.data)
      }
    }
    return result
  }
}

/**
 * 将一个对象中的某些字段映射为其他字段
 * @param data 需要映射的对象
 * @param config 请求配置
 */
function mapField(config: AxiosRequestConfig, data: any) {
  const { url, fieldsMap } = config
  Object.keys(fieldsMap!).forEach((key) => {
    if (data.hasOwnProperty(key)) {
      data[fieldsMap![key]] = data[key]
      delete data[key]
    } else {
      console.warn(
        `[http]${url}接口返回结果中没有找到参数fieldsMap中的${key}字段。详情请看：https://k8s.nccxgh.com:9096/docs/http/fields-map.html`
      )
    }
  })
}

/**
 * 将请求结果中的某些字段映射为其他字段。该映射方法为深层映射，返回数据中所有深层嵌套对象的字段都会被映射。
 * @param config 请求配置
 * @returns 字段映射后的请求结果
 */
export function deepFieldsMapTransform(config: AxiosRequestConfig): AxiosResponseTransformer {
  return (result, _headers, status) => {
    if (config.deepFieldsMap && status === 200 && result.code === 200) {
      mapFieldDeep(result.data, config)
      const { url, __deepFieldsMap__ } = config
      if (!__deepFieldsMap__) {
        console.warn(
          `[http]${url}接口开启了deepFieldsMap配置，但是返回数据中没有匹配到对应的字段。详情请看：https://k8s.nccxgh.com:9096/docs/http/deep-fields-map.html`
        )
      }
    }
    return result
  }
}

/**
 * 将一个对象中的某些字段映射为其他字段
 * @param data 需要映射的对象
 * @param config 请求配置
 */
function mapFieldDeep(data: any, config: AxiosRequestConfig) {
  if (data instanceof Array) {
    // 循环递归
    data.forEach((item) => mapFieldDeep(item, config))
  } else if (data instanceof Object) {
    const { deepFieldsMap } = config
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof Array) {
        // 循环递归
        data[key].forEach((item: any) => mapFieldDeep(item, config))
      } else if (data[key] instanceof Object) {
        // 递归
        mapFieldDeep(data[key], config)
      } else {
        Object.keys(deepFieldsMap as object).forEach((key) => {
          if (data.hasOwnProperty(key)) {
            if (data[key] instanceof Array) {
              // 循环递归
              data[key].forEach((item: any) => mapFieldDeep(item, config))
            }
            data[deepFieldsMap![key]] = data[key]
            delete data[key]
            config.__deepFieldsMap__ = true
          }
        })
      }
    })
  }
}

/**
 * 将请求体中的经纬度坐标系转换为源坐标系
 * @param config 请求配置
 * @returns 坐标系转换后的数据
 */
export function coordinateRequestTransform(config: AxiosRequestConfig): AxiosRequestTransformer {
  return (data, _headers) => {
    if (config.transformCoordinate) {
      transformCoordinate(data, toOriginCoordinate, config)
    }
    return data
  }
}

/**
 * 将请求体中的经纬度坐标系转换为目标坐标系
 * @param config 请求配置
 * @returns 坐标系转换后的数据
 */
export function coordinateResponseTransform(config: AxiosRequestConfig): AxiosResponseTransformer {
  return (result, _headers, status) => {
    if (config.transformCoordinate && status === 200 && result.code === 200) {
      transformCoordinate(result.data, toTargetCoordinate, config)
      const { url, __transformCoordinate__ } = config
      if (!__transformCoordinate__) {
        console.warn(
          `[http]${url}接口开启了transformCoordinate配置，但是请求数据和返回数据中没有匹配到对应的经纬度字段。详情请看：https://k8s.nccxgh.com:9096/docs/http/transform-coordinate.html`
        )
      }
    }
    return result
  }
}

/**
 * 坐标系转换
 * @param data 需要转换的数据
 * @param transformFn 具体转换方法
 */
function transformCoordinate(data: any, transformFn: Function, config: AxiosRequestConfig) {
  if (data instanceof Array) {
    // 循环递归
    data.forEach((item) => transformCoordinate(item, transformFn, config))
  } else if (data instanceof Object) {
    const longitudeRegex = /longitude/gi
    const latitudeRegex = /latitude/gi
    const longitudeKeys: string[] = []
    const latitudeKeys: string[] = []
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof Array) {
        // 循环递归
        data[key].forEach((item: any) => transformCoordinate(item, transformFn, config))
      } else if (data[key] instanceof Object) {
        // 递归
        transformCoordinate(data[key], transformFn, config)
      } else {
        if (key.match(longitudeRegex) && matchLongitude(data[key]?.toString())) {
          // 匹配到符合的经度字段和值
          longitudeKeys.push(key)
        } else if (key.match(latitudeRegex) && matchLatitude(data[key]?.toString())) {
          // 匹配到符合的纬度字段和值
          latitudeKeys.push(key)
        }
      }
    })
    const keys = latitudeKeys.map((key) => key.replace(latitudeRegex, ''))
    longitudeKeys.forEach((key) => {
      const index = keys.indexOf(key.replace(longitudeRegex, ''))
      if (index != -1) {
        // 经度字段匹配到了对应的纬度字段
        config.__transformCoordinate__ = true
        const targetLngLat = transformFn([data[key], data[latitudeKeys[index]]])
        data[key] = targetLngLat[0]
        data[latitudeKeys[index]] = targetLngLat[1]
      }
    })
  }
}

/**
 * 加密报文
 * @param config 请求配置
 * @returns 加密后的数据
 */
export function encryptTransform(config: AxiosRequestConfig): AxiosRequestTransformer {
  return (data, _headers) => {
    if (config.encryptParams) {
      if (config.method === 'get') {
        config.params = {
          data: encryptAES(JSON.stringify(config.params))
        }
      } else if (config.method === 'post') {
        return encryptAES(JSON.stringify(config.data))
      }
    }
    return data
  }
}

/**
 * 解密报文
 * @param config 请求配置
 * @returns 解密后的数据
 */
export function decryptTransform(config: AxiosRequestConfig): AxiosResponseTransformer {
  return (result, _headers, status) => {
    if (config.encryptParams && status && status >= 200 && status < 300) {
      return decryptAES(result)
    }
    return result
  }
}
