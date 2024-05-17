import {
  matchNumber,
  matchPassword,
  matchPhone,
  matchIdCard,
  matchLongitude,
  matchLatitude,
  matchEmail,
  matchDecimal1,
  matchDecimal2,
  matchDecimal3,
  matchDecimal4
} from "../regex";

/**
 * 非空校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateNonEmpty = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    callback(new Error(rule?.message ?? "该项不能为空"));
  } else {
    callback();
  }
};

/**
 * 数字校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateNumber = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入数字") : callback();
  } else {
    if (!matchNumber(value)) {
      callback(new Error(rule?.message ?? "请输入数字"));
    } else {
      callback();
    }
  }
};

/**
 * 密码校验（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）
 * @param rule
 * @param value
 * @param callback
 */
export const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入密码") : callback();
  } else {
    if (value === undefined || value === null || value === "") {
      callback(new Error(rule?.message ?? "请输入密码"));
    } else if (value.length < 8) {
      callback(new Error(rule?.message ?? "密码至少8位"));
    } else if (value.length > 20) {
      callback(new Error(rule?.message ?? "密码至多20位"));
    } else if (!matchPassword(value)) {
      callback(
        new Error(
          rule?.message ?? "至少包含1个大写字母、1个小写字母、1个数字和1个字符"
        )
      );
    } else {
      callback();
    }
  }
};

/**
 * 手机号校验
 * @param rule
 * @param value
 * @param callback
 */
export const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入手机号") : callback();
  } else {
    if (!matchPhone(value)) {
      callback(new Error(rule?.message ?? "请输入正确的手机号"));
    } else {
      callback();
    }
  }
};

/**
 * 身份证校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateIdCard = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入身份证号") : callback();
  } else {
    if (!matchIdCard(value)) {
      callback(new Error(rule?.message ?? "请输入正确的身份证号"));
    } else {
      callback();
    }
  }
};

/**
 * 经度校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateLongitude = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入经度") : callback();
  } else {
    if (!matchLongitude(value)) {
      callback(new Error(rule?.message ?? "经度需要在[-180, 180]之内"));
    } else {
      callback();
    }
  }
};

/**
 * 纬度校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateLatitude = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入纬度") : callback();
  } else {
    if (!matchLatitude(value)) {
      callback(new Error(rule?.message ?? "纬度需要在[-90, 90]之内"));
    } else {
      callback();
    }
  }
};

/**
 * 邮箱校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required ? callback(rule?.message ?? "请输入邮箱") : callback();
  } else {
    if (!matchEmail(value)) {
      callback(new Error(rule?.message ?? "请输入正确的邮箱"));
    } else {
      callback();
    }
  }
};

/**
 * 一位以内小数校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateDecimal1 = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required
      ? callback(rule?.message ?? "请输入一位以内的小数")
      : callback();
  } else {
    if (!matchDecimal1(value)) {
      callback(new Error(rule?.message ?? "请输入一位以内的小数"));
    } else {
      callback();
    }
  }
};

/**
 * 两位以内小数校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateDecimal2 = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required
      ? callback(rule?.message ?? "请输入两位以内的小数")
      : callback();
  } else {
    if (!matchDecimal2(value)) {
      callback(new Error(rule?.message ?? "请输入两位以内的小数"));
    } else {
      callback();
    }
  }
};

/**
 * 三位以内小数校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateDecimal3 = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required
      ? callback(rule?.message ?? "请输入三位以内的小数")
      : callback();
  } else {
    if (!matchDecimal3(value)) {
      callback(new Error(rule?.message ?? "请输入三位以内的小数"));
    } else {
      callback();
    }
  }
};

/**
 * 四位以内小数校验
 * @param rule
 * @param value
 * @param callback
 */
export const validateDecimal4 = (rule: any, value: any, callback: any) => {
  if (value === undefined || value === null || value === "") {
    rule.required
      ? callback(rule?.message ?? "请输入四位以内的小数")
      : callback();
  } else {
    if (!matchDecimal4(value)) {
      callback(new Error(rule?.message ?? "请输入四位以内的小数"));
    } else {
      callback();
    }
  }
};
