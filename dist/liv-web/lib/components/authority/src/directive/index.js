'use strict';

require('../../../../constants/index.js');
require('../../../../utils/index.js');
var authority = require('../../../../constants/inject/authority.js');
var index = require('../../../../utils/component/index.js');

const vAuthority = {
  mounted: (el, binding, vnode) => {
    var _a;
    if (binding.value) {
      const checkAuthority = vnode.ctx.provides[authority.CHECK_AUTHORITY_KEY].checkAuthority;
      if (!checkAuthority) {
        Promise.reject(
          new Error("[liv-web/utils]\u6CA1\u6709\u63D0\u4F9B\u6821\u9A8C\u6743\u9650\u65B9\u6CD5\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u6CE8\u5165\u76F8\u5173\u65B9\u6CD5\u3002")
        );
        return;
      }
      const isAuthority = index.checkAuthoritys(checkAuthority, binding.value);
      if (!isAuthority) {
        (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
      }
    }
  }
};

exports.vAuthority = vAuthority;
//# sourceMappingURL=index.js.map
