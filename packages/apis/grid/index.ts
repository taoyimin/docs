import { $get, $post } from "@szxc/http";

// 获取子网格
export const getChildren: Function = () => {
  // TODO
  console.log("请求子网格");
};

// 根据父网格查询子网格
export const queryGridZtreeList = (params: any) =>
  //$get(`/tCxghGrid/queryGridZtreeList`, params);
  $get(`/rjhj-system/grid/queryGridDtreeList`, params);

// 网格路径回显接口
export const expandedTreeByCodeWithAuth = (params: any) =>
  $get(`/tCxghGrid/expandedTreeByCodeWithAuth`, params);

export default { getChildren, queryGridZtreeList, expandedTreeByCodeWithAuth };
