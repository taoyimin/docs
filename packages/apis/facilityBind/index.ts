import {get, post} from "@szxc/http";
import { type AxiosRequestConfig } from "axios";

/**
 * 物联网设备类型
 */
export interface FacilityBindParams {
    /** 设施类型 公共厕所:1,水质监测站:2,垃圾处理点:3,污水处理厂:4,公共设施:5 */
    facilityCategory?: string
    /** 设施名称 */
    facilityName?: string,
    /** 区域code */
    gridCode?: string,
    current?: string | number,
    size?: string | number,
}

// 查询设施类型
export const getUsefulFacilityTypeList = () => {
    return get('/rjhj-system/dictionary/getSubListByParent', {dicCode: 'attendanceFacilityCategory'})
}

// 查询设施类型的列表
export const getList = (params: FacilityBindParams) => {
    return get('/rjhj-iot/IotFacility/attendanceFacilityList', params)
}