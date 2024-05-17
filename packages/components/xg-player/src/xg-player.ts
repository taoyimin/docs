import type { ExtractPropTypes, PropType } from 'vue'
import type { Monitor, MonitorUrl } from '@szxc/apis'

/** 西瓜播放器网络配置 */
export interface XgPlayerNetworkOptions {
  /** 重试次数 */
  retryCount: number
  /** 每次重试间隔 */
  retryDelay: number
  /** 请求超时时间 */
  loadTimeout: number
  /** 保活间隔时间 */
  keepAliveInterval: number
  /** 不同监控厂家个性化网络配置 */
  [key: string]: any
}

/** 西瓜播放器支持的视频流协议 */
export type XgPlayerProtocol = 'hls' | 'hlss' | 'hlsjs' | 'flv'

export const xgPlayerProps = {
  /**
   * @description 监控视频详情
   */
  monitor: Object as PropType<Monitor>,
  /**
   * @description 播放地址列表
   */
  urls: Array as PropType<Array<MonitorUrl<XgPlayerProtocol>>>,
  /**
   * @description 播放器网络配置
   */
  networkOptions: Object as PropType<XgPlayerNetworkOptions>
}

export const xgPlayerEmits = {
  ['error']: (errorMessage: string) => {}
}

export type XgPlayerProps = ExtractPropTypes<typeof xgPlayerProps>
export type XgPlayerEmits = typeof xgPlayerEmits
