import type { ObjectDirective } from 'vue';
/**
 * 自定义authority指令
 * 用于根据权限控制dom元素是否渲染
 * @example
 * ```html
 * <button v-authority="'superAdmin'">查询</button>
 * <!-- 支持传入多个权限标识 -->
 * <button v-authority="['admin', 'superAdmin']">查询</button>
 * ```
 */
export declare const vAuthority: ObjectDirective;
