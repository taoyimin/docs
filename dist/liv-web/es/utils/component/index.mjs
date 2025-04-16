import { cloneDeep } from 'lodash-es';
import { getCurrentInstance } from 'vue';

function getPropsPoxy(target, globalProps) {
  var _a;
  const propsDefaults = (
    // @ts-ignore
    (_a = getCurrentInstance()) == null ? void 0 : _a.propsDefaults
  );
  return new Proxy(target, {
    get: (target2, prop, receiver) => {
      var _a2;
      const value = Reflect.get(target2, prop, receiver);
      if (value !== void 0 && (propsDefaults == null ? void 0 : propsDefaults[prop]) === void 0) {
        if (typeof (globalProps == null ? void 0 : globalProps[prop]) === "object" && typeof value === "object") {
          return Object.assign(cloneDeep(globalProps[prop]), value);
        } else {
          return value;
        }
      } else {
        return (_a2 = globalProps == null ? void 0 : globalProps[prop]) != null ? _a2 : value;
      }
    }
  });
}
function checkAuthoritys(checkAuthority, authoritys) {
  if (!authoritys || Array.isArray(authoritys) && authoritys.length === 0) {
    return true;
  } else {
    if (Array.isArray(authoritys)) {
      let hasAuthority = false;
      for (const authority of authoritys) {
        if (checkAuthority(authority)) {
          hasAuthority = true;
          break;
        }
      }
      return hasAuthority;
    } else {
      return checkAuthority(authoritys);
    }
  }
}
function sortByOrder(a, b) {
  if (a === void 0 && b === void 0) {
    return 0;
  } else if (a === void 0 && b !== void 0) {
    return 1;
  } else if (a !== void 0 && b === void 0) {
    return -1;
  } else {
    return a - b;
  }
}

export { checkAuthoritys, getPropsPoxy, sortByOrder };
//# sourceMappingURL=index.mjs.map
