import { $get, $post } from "@szxc/http";

// 数据字典
export const getDictList = (params: any) =>
  $get(`/rjhj-system/dictionary/getSubListByParent`, params);

export default { getDictList };
