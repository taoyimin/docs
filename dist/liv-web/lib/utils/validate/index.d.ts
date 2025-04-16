import { MatchDecimalOptions } from '../regex';
/**
 * 非空校验
 * @remark 纯空格也视为空
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateNonEmpty: (rule: any, value: any, callback: any) => void;
/**
 * 数字校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateNumber: (rule: any, value: any, callback: any) => void;
/**
 * 密码校验（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）
 * @param rule
 * @param value
 * @param callback
 */
export declare const validatePassword: (rule: any, value: any, callback: any) => void;
/**
 * 手机号校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validatePhone: (rule: any, value: any, callback: any) => void;
/**
 * 身份证校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateIdCard: (rule: any, value: any, callback: any) => void;
/**
 * 经度校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateLongitude: (rule: any, value: any, callback: any) => void;
/**
 * 纬度校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateLatitude: (rule: any, value: any, callback: any) => void;
/**
 * 邮箱校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateEmail: (rule: any, value: any, callback: any) => void;
/**
 * 小数校验
 * @param rule
 * @param value
 * @param callback
 */
export declare const validateDecimal: (rule: any, value: any, callback: any) => void;
/**
 * 创建小数校验规则
 * @param options 校验参数
 */
export declare function createValidateDecimal(options?: MatchDecimalOptions): (rule: any, value: any, callback: any) => void;
