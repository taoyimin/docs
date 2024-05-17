import {get, post} from "@szxc/http";
import { type AxiosRequestConfig } from "axios";

/**
 * 物联网设备类型
 */
export interface InterDevices {
    /** 设备类型 */
    facilityCategory: string
    /** 设备编号 */
    deviceNo: string,
    /** 设备型号 */
    deviceModel: string,
    /** 设备名称 */
    deviceName: string,
    bind: string,
}

/**
 * 监控设备类型
 */
export interface MonitorDevices {
    /** 设备类型 */
    facilityCategory: string
    /** 设备编号 */
    deviceNo: string,
    /** 设备型号 */
    deviceModel: string,
    /** 设备名称 */
    deviceName: string,
}

/**
 * 设备列表查询参数类型
 */
export type InterDevicesParam = Partial<Pick<InterDevices, 'facilityCategory' | 'deviceNo' | 'bind'>>

/**
 * 监控设备列表查询参数类型
 */
export type MonitorDevicesParam = Partial<Pick<MonitorDevices, 'deviceModel' | 'deviceNo' | 'deviceName'>>

/**
 * 绑定设备类型
 */
export interface BindParams {
    /** 设备id */
    netDeviceId: string,
    /** 设施id */
    facilityId: string,
    /** 设施类型 */
    facilityType: string,
    /** 设备类型 */
    deviceType: string,
}

export interface BoundDevices {
     /** 设施id */
    facilityId: string,
    /** 设施类型 */
    facilityCategory: string,
    // 设备类型 监控传8
    deviceType?: string
}

/**
 * 解绑设备类型
 */
export interface UnBindParams {
    id: string
}

const baseUrl = '/rjhj-iot'
const monitorBaseUrl = '/rjhj-monitor'

// 查询物联网设备列表
export const getLotDevicesList = (params?: InterDevicesParam & PageParam) => {
    return get(baseUrl + '/internetDevice/page', params)
}
    
// 查询物联网设备类型（不同设施设备类型不一样，所以是动态的）
export const getUsefulDeviceTypeList = (params: {
    dicParentCode: string,
    dicThreeCode: string
}, config?: AxiosRequestConfig) => {
    return get(baseUrl + '/bindDevice/getEnableBindDeviceType', params, config)
}

//绑定设备
export const postBindDevices = (params: BindParams) => {
    return post(baseUrl + '/bindDevice/newBindDevice', params)
}

//解绑设备
export const postUnBindDevices = (params: UnBindParams) => {
    return post(baseUrl + `/bindDevice/removeBind?id=${params.id}`, {})
}

//查询已绑定设备
export const getBindInternetDevicesList = (params: BoundDevices) => {
    return get(baseUrl + '/bindDevice/selectBindDevicesByFacility', params)
}

// 查询监控列表
export const getMonitorList = (params?: MonitorDevicesParam & PageParam) => {
    return get(monitorBaseUrl + '/info/page', params);
}

export default {
    getLotDevicesList,
    postBindDevices,
    getBindInternetDevicesList,
    postUnBindDevices,
    getMonitorList,
};