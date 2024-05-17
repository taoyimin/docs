import { get, post } from "@szxc/http";

/** 组织架构类型 */
export interface DistrictTree {
  /** 组织id */
  id: string;
  /** 组织名称 */
  name: string;
  /** 组织code */
  code: string;
  /** 是否是叶节点 */
  leaf: boolean;
}

// 获取组织架构列表
export const getDistrictTree = (params: {
  id: "",
  name: "",
  orgType: ""
}) => post<DistrictTree[]>('/rjhj-system/client/api-district/queryDistrictTree', params);
