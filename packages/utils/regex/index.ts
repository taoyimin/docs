import IDValidator from "./id_validator_es6";

const NUMBER_REGEX = /^[0-9]+$/;
const PASSWORD_REGEX =
  /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$=%^&*()_+-.]).*$/;
const PHONE_REGEX = /^1[3-9]\d{9}$/;
// const IDCARD_REGEX =
//   /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
const LONGITUDE_REGEX =
  /^-?(?:180(?:(?:\.0+)?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]+)?))$/;
const LATITUDE_REGEX =
  /^-?(?:90(?:(?:\.0+)?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]+)?))$/;
const INCLUDE_ZH_REGEX = /[\u4e00-\u9fa5]+/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const DECIMAL1_REGEX = /^\d+(\.\d{1,1})?$/;
const DECIMAL2_REGEX = /^\d+(\.\d{1,2})?$/;
const DECIMAL3_REGEX = /^\d+(\.\d{1,3})?$/;
const DECIMAL4_REGEX = /^\d+(\.\d{1,4})?$/;

/**
 * 匹配一个字符串是否是数字
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchNumber = (string: string) => {
  return NUMBER_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是密码（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchPassword = (string: string) => {
  return PASSWORD_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是手机号
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchPhone = (string: string) => {
  return PHONE_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是身份证
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchIdCard = (string: string) => {
  return IDValidator.isValid(string);
};

/**
 * 匹配一个字符串是否是经度
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchLongitude = (string: string) => {
  return LONGITUDE_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是纬度
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchLatitude = (string: string) => {
  return LATITUDE_REGEX.test(string);
};

/**
 * 匹配一个字符串是否包含中文
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchIncludeZh = (string: string) => {
  return INCLUDE_ZH_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是邮箱
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchEmail = (string: string) => {
  return EMAIL_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是一位以内的小数
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchDecimal1 = (string: string) => {
  return DECIMAL1_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是两位以内的小数
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchDecimal2 = (string: string) => {
  return DECIMAL2_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是三位以内的小数
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchDecimal3 = (string: string) => {
  return DECIMAL3_REGEX.test(string);
};

/**
 * 匹配一个字符串是否是四位以内的小数
 * @param string 需要匹配的字符串
 * @returns
 */
export const matchDecimal4 = (string: string) => {
  return DECIMAL4_REGEX.test(string);
};
