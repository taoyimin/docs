import { get } from "@szxc/http";
import { AxiosRequestConfig } from "axios";

/**
 * 查询本级及下一级管护员数
 * @param params.gridId 网格id
 * @param { AxiosRequestConfig } config
 * @returns 统计结果
 */
export function statManagerCount(
  params: { gridId?: string; gridCode?: string },
  config?: AxiosRequestConfig
) {
  return get(
    "/rjhj-system/managerStat/countSelfAndNextGridByGridIdAndPost",
    Object.assign(params, { gridPost: 6 }),
    config
  );
}

/**
 * 查询本级及下一级网格员数
 * @param params.gridId 网格id
 * @param { AxiosRequestConfig } config
 * @returns 统计结果
 */
export function statGriderCount(
  params: { gridId?: string; gridCode?: string },
  config?: AxiosRequestConfig
) {
  return get(
    "/rjhj-system/managerStat/countSelfAndNextGridByGridIdAndPost",
    Object.assign(params, { gridPost: 3 }),
    Object.assign(
      {
        fieldsMap: {
          // 由于managerCount字段和管护员统计字段重名，所以统一映射为griderCount字段
          managerCount: "griderCount"
        }
      },
      config
    )
  );
}

/**
 * 查询本级及下一级关注数
 * @param params.gridId 网格id
 * @param { AxiosRequestConfig } config
 * @returns 统计结果
 */
export function statFollowerCount(
  params: { code: string },
  config?: AxiosRequestConfig
) {
  return get(
    "/rjhj-business/userQueryStatistic/groupCountByCode",
    params,
    config
  );
}

/**
 * 查询本级及下一级关注数
 * @param params.gridId 网格id
 * @param { AxiosRequestConfig } config
 * @returns 统计结果
 */
export function statVillageInfo(
  params: { gridId?: string; gridCode?: string },
  config?: AxiosRequestConfig
) {
  return get("/rjhj-business/villageStat/queryVillageStat", params, config);
}
