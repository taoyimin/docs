/**
 * 获取属性代理
 * @param target 组件属性
 * @param globalProps 全局属性
 * @returns
 */
export declare function getPropsPoxy<T extends Record<string | symbol, any>>(target: T, globalProps: any): T;
/**
 * 校验权限
 * @param checkAuthority 权限校验方法
 * @param authoritys 单个权限标识或权限标识集合
 * @returns
 */
export declare function checkAuthoritys(checkAuthority: (authority: string) => boolean, authoritys: string | string[] | undefined): boolean;
/**
 * 根据order属性进行排序，如果order是`undefined`，则按照默认传入顺序进行排序
 * @param a 需要排序对象的order属性
 * @param b 需要排序对象的order属性
 * @returns 排序结果
 */
export declare function sortByOrder(a: number | undefined, b: number | undefined): number;
