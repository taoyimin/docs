import { getGridBoundaryByGridCode } from '@szxc/apis'
import { useUserStore } from '@szxc/stores'
import { toTargetCoordinate } from '../coordinate'

/**
 * 获取地图初始化中心点和缩放级别
 * @param gridCode 网格编码
 * @returns {zoom: number, center: [number, number]}
 */

interface ResultMapInfo {
  zoom: number
  center: [number, number]
}

export async function getMapZoomAndCenter(gridCode: string): Promise<ResultMapInfo> {
  let defaultZoom = Number(import.meta.env.VITE_MAP_ZOOM)
  let defaultCenter: [number, number] = [
    Number(import.meta.env.VITE_MAP_CENTER_LONGITUDE),
    Number(import.meta.env.VITE_MAP_CENTER_LATITUDE)
  ]
  try {
    const store: any = useUserStore()
    const res = await getGridBoundaryByGridCode(gridCode ?? store.userInfo?.globalCode)
    const zoom = res.zoom || defaultZoom
    const center =
      res.centerX && res.centerY ? toTargetCoordinate([res.centerX, res.centerY]) : defaultCenter
    return {
      zoom,
      center
    }
  } catch (e) {
    return {
      zoom: defaultZoom,
      center: defaultCenter
    }
  }
}
