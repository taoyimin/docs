/**
 * 数字正则表达式
 */
export declare const NUMBER_REGEX: RegExp;
/**
 * 密码正则表达式
 */
export declare const PASSWORD_REGEX: RegExp;
/**
 * 手机号正则表达式
 */
export declare const PHONE_REGEX: RegExp;
/**
 * 经度正则表达式
 */
export declare const LONGITUDE_REGEX: RegExp;
/**
 * 纬度正则表达式
 */
export declare const LATITUDE_REGEX: RegExp;
/**
 * 包含中文字符正则表达式
 */
export declare const INCLUDE_ZH_REGEX: RegExp;
/**
 * email正则表达式
 */
export declare const EMAIL_REGEX: RegExp;
/**
 * 匹配一个字符串是否是数字
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchNumber(string: string): boolean;
/**
 * 匹配一个字符串是否是密码（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchPassword(string: string): boolean;
/**
 * 匹配一个字符串是否是手机号
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchPhone(string: string): boolean;
/**
 * 匹配一个字符串是否是身份证
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchIdCard(string: string): any;
/**
 * 匹配一个字符串是否是经度
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchLongitude(string: string): boolean;
/**
 * 匹配一个字符串是否是纬度
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchLatitude(string: string): boolean;
/**
 * 匹配一个字符串是否包含中文
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchIncludeZh(string: string): boolean;
/**
 * 匹配一个字符串是否是邮箱
 * @param string 需要匹配的字符串
 * @returns
 */
export declare function matchEmail(string: string): boolean;
/**
 * 匹配小数参数
 */
export interface MatchDecimalOptions {
    min?: number;
    max?: number;
    minDigits?: number;
    maxDigits?: number;
}
/**
 * 匹配一个字符串是否是小数
 * @param str 需要匹配的字符串
 * @param options 匹配参数
 * @returns
 */
export declare function matchDecimal(str: string, options?: MatchDecimalOptions): boolean;
