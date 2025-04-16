import '../../constants/index.mjs';
import { inject } from 'vue';
import { CHECK_AUTHORITY_KEY } from '../../constants/inject/authority.mjs';

function injectCheckAuthority() {
  const checkAuthority = inject(CHECK_AUTHORITY_KEY, void 0);
  if (checkAuthority) {
    return checkAuthority;
  } else {
    return () => {
      Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6821\u9A8C\u6743\u9650\u65B9\u6CD5\u3002"));
      return false;
    };
  }
}

export { injectCheckAuthority };
//# sourceMappingURL=authority.mjs.map
