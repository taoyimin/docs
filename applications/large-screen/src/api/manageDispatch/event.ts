import { $get, $post } from '@/utils/http'
import { baseUrl } from '@/api/base'

// 事件列表
export const listEventInfo = (params: any) =>
  $get(`${baseUrl}/managementDispatch/listEventInfo`, params)

// 事件详情
export const getEvent = (params: any) => $post(`${baseUrl}/event/getEvent`, params)

// 事件流程
export const getEventProcess = (params: any) => $post(`${baseUrl}/event/getEventProcess`, params)

// 人员列表
export const listCardInfo = (params: any) =>
  $get(`${baseUrl}/managementDispatch/listCardInfo`, params)

// 人员打卡记录
export const cardRecord = (params: any) => $get(`${baseUrl}/tFacilityCard/queryCardRecord`, params)

// 车辆列表
export const listCarInfo = (params: any) =>
  $get(`${baseUrl}/managementDispatch/listCarInfo`, params)

// 车辆打卡记录
export const carRecord = (params: any) => $get(`${baseUrl}/tFacilityCar/queryCarRecord`, params)
