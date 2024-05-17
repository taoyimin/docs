import { get } from '@szxc/http'
import type { AxiosRequestConfig } from 'axios'

/** 网格类型 */
export interface Grid {
  /** 网格id */
  gridId: string
  /** 网格code */
  gridCode: string
  /** 网格名称 */
  gridName: string
  /** 网格级别 */
  level: string
  /** 详细网格id */
  detailGridId: string
  /** 详细网格名称 */
  detailGridName: string
  /** 是否有子级网格 */
  hasChildren: boolean
  /** 子级网格 */
  children: Grid[]
  /** 是否是叶子节点 */
  leaf: boolean
}

/** 展开树接口返回类型 */
export interface ExpandedTree {
  /** 展开后的网格数 */
  areaTree: Grid
  /** 选中的网格编码 */
  codePath: string[]
}

/**
 * 根据gridCode查询本级网格信息。
 * @param params.gridCode 网格编码
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Grid } 当前gridCode对应的网格信息
 * @example
 * ```ts
 * import { getGrid } from '@szxc/apis'
 *
 * // 查询东湖区网格信息
 * const grid = await getGrid({ gridCode: '360102' })
 * ```
 */

export function getGrid(params: { gridCode: string }, config?: AxiosRequestConfig) {
  return get<Grid>(`/rjhj-system/grid/getByCode`, params, config)
}

/**
 * 根据gridId查询本级网格信息。
 * @param params.id 网格id
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Grid } 当前gridId对应的网格信息
 * @example
 * ```ts
 * import { getGridById } from '@szxc/apis'
 *
 * // 根据东湖区网格信息
 * const grid = await getGridById({ id: '423715' })
 * ```
 */
export function getGridById(params: { id: string }, config?: AxiosRequestConfig) {
  return get<Grid>(`/rjhj-system/grid/getById`, params, config)
}

/**
 * 根据gridCode查询子网格信息。
 * @param params.gridCode 网格编码
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Array<Grid> } 子网格集合
 * @example
 * ```ts
 * import { getGridChildren } from '@szxc/apis'
 *
 * // 查询南昌市子级网格信息
 * const grids = await getGridChildren({ gridCode: '3601' })
 * ```
 */
export function getGridChildren(params: { gridCode: string }, config?: AxiosRequestConfig) {
  return get<Grid[]>(`/rjhj-system/grid/getChildList`, params, config)
}

/**
 * 根据rootCode和targetCode查询展开后的网格树。
 * @param params.rootCode 起始网格编码，不传默认从根网格开始查询
 * @param params.targetCode 目标网格编码
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { ExpandedTree } 当前选中树及展开后的网格树
 * @example
 * ```ts
 * import { getExpandedTree } from '@szxc/apis'
 *
 * // 用户信息
 * const userStore = useUserStore()
 *
 * // 查询从根网格到东湖区网格展开后的网格树
 * const { areaTree, codePath } = await getExpandedTree({ targetCode: '360102' })
 *
 * // 查询从用户所属网格到东湖区网格展开后的网格树
 * const { areaTree, codePath } = await getExpandedTree({
 *   rootCode: userStore.userInfo.globalCode,
 *   targetCode: '360102'
 * })
 * ```
 */
export function getExpandedTree(
  params: {
    rootCode?: string
    targetCode: string
  },
  config?: AxiosRequestConfig
) {
  return get<ExpandedTree>(`/rjhj-system/grid/getExpandedTree`, params, config)
}

/**
 * 根据rootId和targetId查询展开后的网格树。
 * @param params.rootId 起始网格id，不传默认从根网格开始查询
 * @param params.targetId 目标网格id
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { ExpandedTree } 当前选中树及展开后的网格树
 * @example
 * ```ts
 * import { getExpandedTreeById } from '@szxc/apis'
 *
 * // 用户信息
 * const userStore = useUserStore()
 *
 * // 查询从根网格到东湖区网格展开后的网格树
 * const { areaTree, codePath } = await getExpandedTreeById({ targetId: '423715' })
 *
 * // 查询从用户所属网格到东湖区网格展开后的网格树
 * const { areaTree, codePath } = await getExpandedTreeById({
 *   rootId: userStore.userInfo.gridId,
 *   targetId: '423715'
 * })
 * ```
 */
export function getExpandedTreeById(
  params: {
    rootId?: string | number
    targetId: string | number
  },
  config?: AxiosRequestConfig
) {
  return get<ExpandedTree>(`/rjhj-system/grid/getExpandedTreeById`, params, config)
}

/**
 * 查询根网格信息
 * @param { AxiosRequestConfig } config 请求配置
 * @returns { Grid } 根网格信息
 * @example
 * ```ts
 * import { getRootGrid } from '@szxc/apis'
 *
 * // 查询根网格信息
 * const grid = await getRootGrid()
 * ```
 */
export function getRootGrid(config?: AxiosRequestConfig) {
  return get<Grid>(`/rjhj-system/grid/getRootNode`, {}, config)
}

/**
 * 根据网格编码查询网格边界
 * @param param
 * @returns 返回网格边界数据
 */
export const getGridBoundaryByGridCode = (gridCode?: string | number) => {
  return get('/rjhj-system/gridBoundary/getByGridCode', { gridCode })
}
