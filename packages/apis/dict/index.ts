import { get } from '@szxc/http'
import { type AxiosRequestConfig } from 'axios'

/** 字典类型 */
export interface Dict {
  /** 一级字典Id */
  dicId: number
  /** 一级字典值 */
  dicCode: string
  /** 一级字典名称 */
  dicName: string
  /** 二级字典Id */
  dicSubId: number
  /** 二级字典值 */
  dicSubCode: string
  /** 二级字典名称 */
  dicSubName: string
  /** 三级字典Id */
  dicThrId: number
  /** 三级字典值 */
  dicThrCode: string
  /** 三级字典名称 */
  dicThrName: string
}

/**
 * 获取数据字典集合
 * @param params 查询参数
 * @param config 请求配置
 * @returns 数据字典集合
 * @example
 * ```ts
 * const dicts = await getDictList({ dicCode: 'eventType' });
 * ```
 */
export const getDictList = (params: { dicCode: string }, config?: AxiosRequestConfig) =>
  get<Dict[]>(`/rjhj-system/dictionary/getSubListByParent`, params, config)

/**
 * 获取父级字典id查询子级数据字典集合
 * @param params 查询参数
 * @param config 请求配置
 * @returns 数据字典集合
 * @example
 * ```ts
 * const dicts = await getDictListById({ id: 147, subLevel: 3 });
 * ```
 */
export const getDictListById = (
  params: { id: number; subLevel: number },
  config?: AxiosRequestConfig
) => get<Dict[]>(`/rjhj-system/dic/listSubByParentId`, params, config)
