import { get } from "@szxc/http";
import type { AxiosRequestConfig } from "axios";
import type { MonitorProtocol } from "@szxc/components";

/** 监控详情及播放地址类型 */
export interface MonitorWithUrl {
  /** 播放地址列表查询是否成功 */
  success: boolean;
  /** 监控详情 */
  info: Monitor;
  /** 播放地址列表 */
  urls: MonitorUrl[];
  /** 错误信息 */
  errorMessage: string;
}

/** 监控类型 */
export interface Monitor {
  /** 监控id */
  id: string;
  /** 监控名称 */
  deviceName: string;
  /** 监控厂家 */
  deviceModel: string;
  /** 设备地址 */
  address: string;
  /** 是否绑定 */
  bind: string;
  /** 摄像头类型 */
  cameraType: string;
  /** 通道号 */
  channelCode: string;
  /** 公司名称 */
  companyName: string;
  /** 设备编码 */
  deviceNo: string;
  /** 设备来源 */
  deviceSource: string;
  /** 设备类型 */
  deviceType: string;
  /** 网格编码 */
  gridCode: string;
  /** 公共编号 */
  publicId: string;
  /** 设备状态 */
  status: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
}

export type MonitorParam = Partial<Omit<Monitor, "id">>;

/** 监控播放地址 */
export interface MonitorUrl<T = MonitorProtocol> {
  /** 视频流协议 */
  protocol: T;
  /** 清晰度 */
  resolution: string;
  /** 播放地址 */
  url: string;
}

/** 监控网格类型 */
export interface MonitorGrid {
  /** 网格编码 */
  gridCode: string;
  /** 网格id */
  gridId: string;
  /** 网格名称 */
  gridName: string;
  /** 网格级别 */
  gridLevel: string;
  /** 是否叶子节点 */
  isLeaf: boolean;
  /** 当前网格监控数量 */
  monitorCount: number;
}

/**
 * 查询监控分页列表
 * @param { MonitorParam & PageParam } 查询参数
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Page<Monitor> } 监控分页列表
 * @example
 * ```ts
 * import { getMonitorPage } from '@szxc/apis'
 *
 * const monitors = await getMonitorPage();
 * ```
 */
export function getMonitorPage(
  params: MonitorParam & PageParam,
  config?: AxiosRequestConfig
) {
  return get<Page<Monitor>>(`/rjhj-monitor/info/page`, params, config);
}

/**
 * 查询监控详情
 * @param params.id 监控id
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Monitor } 监控详情
 * @example
 * ```ts
 * import { getMonitorDetail } from '@szxc/apis'
 *
 * const monitor = await getMonitorDetail({ id: '123456' });
 * ```
 */
export function getMonitorDetail(
  params: { id: string },
  config?: AxiosRequestConfig
) {
  return get<Monitor>(`/rjhj-monitor/info/detail/${params.id}`, config);
}

/**
 * 查询监控详情及播放地址
 * @param params.id 监控id
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { MonitorWithUrl } 监控详情及播放地址
 * @example
 * ```ts
 * import { getMonitorUrl } from '@szxc/apis'
 *
 * const { info, urls, success, errorMessage } = await getMonitorUrl({ id: '123456' });
 * ```
 */
export function getMonitorUrl(
  params: { id: string },
  config?: AxiosRequestConfig
) {
  return get<MonitorWithUrl>(
    `/rjhj-monitor/info/detailWithPlayUrl/${params.id}`,
    params,
    config
  );
}

/**
 * 查询监控网格列表
 * @param params.gridCode 网格编号
 * @param params.deviceModel 设备厂家
 * @param params.deviceType 设备类型
 * @param params.status 在线状态 1：在线 0：离线
 * @param { AxiosRequestConfig } config
 * @returns { Array<MonitorGrid> } 监控网格列表
 */
export function getMonitorGridList(
  params: {
    gridCode: string;
    deviceModel?: string;
    deviceType?: string;
    status?: string;
  },
  config?: AxiosRequestConfig
) {
  return get<MonitorGrid[]>(
    "/rjhj-monitor/intelligent/getGridVideoCount",
    params,
    config
  );
}
