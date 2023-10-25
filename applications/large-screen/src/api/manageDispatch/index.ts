import { $get, $post } from '@/utils/http'
import { baseUrl } from '@/api/base'

// 获取网格边界
export const queryGridBoundary = (params: any) =>
  $get(`${baseUrl}/graphShow/getGridBoundary`, params)

// 查询区域树
export const queryGridZtreeList = (params: any) =>
  $get(`${baseUrl}/tCxghGrid/queryGridZtreeList`, params)

// 数据字典
export const getSubListByParent = (params: any) =>
  $get(`${baseUrl}/dictionary/getSubListByParent`, params)

// 查询点位总览
export const listPointInfo = (params: any) =>
  $get(`${baseUrl}/managementDispatch/listPointInfo`, params)
