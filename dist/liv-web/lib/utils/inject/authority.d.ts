/**
 * 校验权限方法
 */
export type CheckAuthorityFunction = (authority: string) => boolean;
/**
 * 注入校验权限方法
 */
export declare function injectCheckAuthority(): () => boolean;
