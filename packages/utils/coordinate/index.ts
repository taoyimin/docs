import gcoord, { type GeoJSON, type Position } from 'gcoord'

const origin = import.meta.env.VITE_ORIGIN_COORDINATE
const target = import.meta.env.VITE_TARGET_COORDINATE

if (!origin) {
  console.warn(
    '[utils]当前项目环境变量没有配置源坐标系。详情请看：https://k8s.nccxgh.com:9096/docs/guide/env.html'
  )
}

if (!target) {
  console.warn(
    '[utils]当前项目环境变量没有配置目标坐标系。详情请看：https://k8s.nccxgh.com:9096/docs/guide/env.html'
  )
}

/**
 * 将经纬度信息从目标坐标系转换到源坐标系
 * @param lnglat 需要转换的经纬度信息
 * @returns 转换后的经纬度信息
 * @example
 * ```ts
 * const targetLngLat = [115.918339,28.680622]
 * const originLngLat = toOriginCoordinate(originLngLat)
 * ```
 */
export const toOriginCoordinate = <T extends GeoJSON | Position>(lnglat: T | string): T => {
  return gcoord.transform<T>(lnglat, target, origin)
}

/**
 * 将经纬度信息从源坐标系转换到目标坐标系
 * @param lnglat 需要转换的经纬度信息
 * @returns 转换后的经纬度信息
 * @example
 * ```ts
 * const originLngLat = [115.918339, 28.680622]
 * const targetLngLat = toTargetCoordinate(originLngLat)
 * ```
 */
export const toTargetCoordinate = <T extends GeoJSON | Position>(lnglat: T | string): T => {
  return gcoord.transform<T>(lnglat, origin, target)
}
