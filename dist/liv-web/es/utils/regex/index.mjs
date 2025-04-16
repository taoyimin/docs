import _impl from './id_validator_es6.mjs';

const NUMBER_REGEX = /^[0-9]+$/;
const PASSWORD_REGEX = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$=%^&*()_+-.]).*$/;
const PHONE_REGEX = /^1[3-9]\d{9}$/;
const LONGITUDE_REGEX = /^-?(?:180(?:(?:\.0+)?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]+)?))$/;
const LATITUDE_REGEX = /^-?(?:90(?:(?:\.0+)?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]+)?))$/;
const INCLUDE_ZH_REGEX = /[\u4e00-\u9fa5]+/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function matchNumber(string) {
  return NUMBER_REGEX.test(string);
}
function matchPassword(string) {
  return PASSWORD_REGEX.test(string);
}
function matchPhone(string) {
  return PHONE_REGEX.test(string);
}
function matchIdCard(string) {
  return _impl.isValid(string);
}
function matchLongitude(string) {
  return LONGITUDE_REGEX.test(string);
}
function matchLatitude(string) {
  return LATITUDE_REGEX.test(string);
}
function matchIncludeZh(string) {
  return INCLUDE_ZH_REGEX.test(string);
}
function matchEmail(string) {
  return EMAIL_REGEX.test(string);
}
function matchDecimal(str, options = {}) {
  const { minDigits = 0, maxDigits, min = -Infinity, max = Infinity } = options;
  let regexPattern;
  if (minDigits === 0) {
    if (maxDigits === void 0 || maxDigits < 0) {
      regexPattern = `^-?\\d+(\\.\\d{0,})?$`;
    } else {
      regexPattern = `^-?\\d+(\\.\\d{0,${maxDigits}})?$`;
    }
  } else {
    if (maxDigits === void 0 || maxDigits < 0) {
      regexPattern = `^-?\\d*\\.\\d{${minDigits},}`;
    } else {
      regexPattern = `^-?\\d*\\.\\d{${minDigits},${maxDigits}}$`;
    }
  }
  const regex = new RegExp(regexPattern);
  if (!regex.test(str)) {
    return false;
  }
  const num = parseFloat(str);
  return num >= min && num <= max;
}

export { EMAIL_REGEX, INCLUDE_ZH_REGEX, LATITUDE_REGEX, LONGITUDE_REGEX, NUMBER_REGEX, PASSWORD_REGEX, PHONE_REGEX, matchDecimal, matchEmail, matchIdCard, matchIncludeZh, matchLatitude, matchLongitude, matchNumber, matchPassword, matchPhone };
//# sourceMappingURL=index.mjs.map
