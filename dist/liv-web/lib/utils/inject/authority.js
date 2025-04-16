'use strict';

require('../../constants/index.js');
var vue = require('vue');
var authority = require('../../constants/inject/authority.js');

function injectCheckAuthority() {
  const checkAuthority = vue.inject(authority.CHECK_AUTHORITY_KEY, void 0);
  if (checkAuthority) {
    return checkAuthority;
  } else {
    return () => {
      Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6821\u9A8C\u6743\u9650\u65B9\u6CD5\u3002"));
      return false;
    };
  }
}

exports.injectCheckAuthority = injectCheckAuthority;
//# sourceMappingURL=authority.js.map
