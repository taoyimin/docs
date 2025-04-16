import { matchNumber, matchPassword, matchPhone, matchIdCard, matchLongitude, matchLatitude, matchEmail, matchDecimal } from '../regex/index.mjs';

const validateNonEmpty = (rule, value, callback) => {
  var _a;
  if (value === void 0 || value === null || value.toString().trim() === "") {
    callback(new Error((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BE5\u9879\u4E0D\u80FD\u4E3A\u7A7A"));
  } else {
    callback();
  }
};
const validateNumber = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u6570\u5B57") : callback();
  } else {
    if (!matchNumber(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u6570\u5B57"));
    } else {
      callback();
    }
  }
};
const validatePassword = (rule, value, callback) => {
  var _a, _b, _c, _d, _e;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u5BC6\u7801") : callback();
  } else {
    if (value === void 0 || value === null || value === "") {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u5BC6\u7801"));
    } else if (value.length < 8) {
      callback(new Error((_c = rule == null ? void 0 : rule.message) != null ? _c : "\u5BC6\u7801\u81F3\u5C118\u4F4D"));
    } else if (value.length > 20) {
      callback(new Error((_d = rule == null ? void 0 : rule.message) != null ? _d : "\u5BC6\u7801\u81F3\u591A20\u4F4D"));
    } else if (!matchPassword(value)) {
      callback(new Error((_e = rule == null ? void 0 : rule.message) != null ? _e : "\u81F3\u5C11\u5305\u542B1\u4E2A\u5927\u5199\u5B57\u6BCD\u30011\u4E2A\u5C0F\u5199\u5B57\u6BCD\u30011\u4E2A\u6570\u5B57\u548C1\u4E2A\u5B57\u7B26"));
    } else {
      callback();
    }
  }
};
const validatePhone = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u624B\u673A\u53F7") : callback();
  } else {
    if (!matchPhone(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"));
    } else {
      callback();
    }
  }
};
const validateIdCard = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7") : callback();
  } else {
    if (!matchIdCard(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u53F7"));
    } else {
      callback();
    }
  }
};
const validateLongitude = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u7ECF\u5EA6") : callback();
  } else {
    if (!matchLongitude(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u7ECF\u5EA6\u9700\u8981\u5728[-180, 180]\u4E4B\u5185"));
    } else {
      callback();
    }
  }
};
const validateLatitude = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u7EAC\u5EA6") : callback();
  } else {
    if (!matchLatitude(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u7EAC\u5EA6\u9700\u8981\u5728[-90, 90]\u4E4B\u5185"));
    } else {
      callback();
    }
  }
};
const validateEmail = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u90AE\u7BB1") : callback();
  } else {
    if (!matchEmail(value)) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1"));
    } else {
      callback();
    }
  }
};
const validateDecimal = (rule, value, callback) => {
  var _a, _b;
  if (value === void 0 || value === null || value === "") {
    rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u5C0F\u6570") : callback();
  } else {
    if (!matchDecimal(value, { minDigits: 1 })) {
      callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : "\u8BF7\u8F93\u5165\u5C0F\u6570"));
    } else {
      callback();
    }
  }
};
function createValidateDecimal(options) {
  return (rule, value, callback) => {
    var _a, _b, _c, _d, _e;
    if (value === void 0 || value === null || value === "") {
      rule.required ? callback((_a = rule == null ? void 0 : rule.message) != null ? _a : "\u8BF7\u8F93\u5165\u5C0F\u6570") : callback();
    } else {
      if (!matchDecimal(value, {
        minDigits: options == null ? void 0 : options.minDigits
      })) {
        callback(new Error((_b = rule == null ? void 0 : rule.message) != null ? _b : `\u8BF7\u8F93\u5165${options == null ? void 0 : options.minDigits}\u4F4D\u4EE5\u4E0A\u7684\u5C0F\u6570`));
      } else if (!matchDecimal(value, {
        maxDigits: options == null ? void 0 : options.maxDigits
      })) {
        callback(new Error((_c = rule == null ? void 0 : rule.message) != null ? _c : `\u8BF7\u8F93\u5165${options == null ? void 0 : options.maxDigits}\u4F4D\u4EE5\u5185\u7684\u5C0F\u6570`));
      } else if (!matchDecimal(value, {
        min: options == null ? void 0 : options.min
      })) {
        callback(new Error((_d = rule == null ? void 0 : rule.message) != null ? _d : `\u8BF7\u8F93\u5165\u5927\u4E8E${options == null ? void 0 : options.min}\u7684\u5C0F\u6570`));
      } else if (!matchDecimal(value, {
        max: options == null ? void 0 : options.max
      })) {
        callback(new Error((_e = rule == null ? void 0 : rule.message) != null ? _e : `\u8BF7\u8F93\u5165\u5C0F\u4E8E${options == null ? void 0 : options.max}\u7684\u5C0F\u6570`));
      } else {
        callback();
      }
    }
  };
}

export { createValidateDecimal, validateDecimal, validateEmail, validateIdCard, validateLatitude, validateLongitude, validateNonEmpty, validateNumber, validatePassword, validatePhone };
//# sourceMappingURL=index.mjs.map
