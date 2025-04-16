'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/directive/index.js');

const LivAuthority = {
  install(app) {
    app.directive("authority", index.vAuthority);
  },
  directive: index.vAuthority
};

exports.LivAuthorityDirective = index.vAuthority;
exports.vAuthority = index.vAuthority;
exports.LivAuthority = LivAuthority;
exports.default = LivAuthority;
//# sourceMappingURL=index.js.map
