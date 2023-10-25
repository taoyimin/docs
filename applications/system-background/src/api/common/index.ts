import { $get, $post } from '@szxc/http'

// 根据父网格查询子网格
export const queryGridZtreeList = (params: any) => $get(`/tCxghGrid/queryGridZtreeList`, params)

// 网格路径回显接口
export const expandedTreeByCodeWithAuth = (params: any) =>
  $get(`/tCxghGrid/expandedTreeByCodeWithAuth`, params)

// 数据字典
export const getDictList = (params: any) => $get(`/dictionary/getSubListByParent`, params)
