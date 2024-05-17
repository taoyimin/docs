import { get } from "@szxc/http";

/**
 * 用户信息列表类型
 */
export interface User {
  id: string;
  userName: string;
  realName: string;
  userLevel: string;
  userLevelStr: string;
  roleId: number;
  roleName: string;
  usrTel: string;
  statusStr: string;
  bindStatus: string;
  gridCode: string;
  usrLocation: string;
  orgId: string;
  globalName: string;
}

/**
 * 列表查询参数类型
 */
export type SerachParam = Partial<
  Pick<User, "gridCode"> & {
    userRealName?: string;
    roleRecognition?: string;
  }
>;

/**
 * 获取用户列表数据
 * @param param 用户列表查询参数
 * @returns 用户列表数据
 */
export const getUserPage = (param?: SerachParam & PageParam) => {
  return get<Page<User>>("/rjhj-system/user/getUserListPage", param);
};

/**
 * 获取用户数据-回显用
 * @param param 用户列表查询参数
 * @returns 用户列表数据
 */
export const getUserList = (ids: string) => {
  return get("/rjhj-system/user/getByIds", { ids });
};
