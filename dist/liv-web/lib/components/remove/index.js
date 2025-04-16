'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/directive/index.js');

const LivRemove = {
  install(app) {
    app.directive("remove", index.vRemove);
  },
  directive: index.vRemove
};

exports.LivRemoveDirective = index.vRemove;
exports.vRemove = index.vRemove;
exports.LivRemove = LivRemove;
exports.default = LivRemove;
//# sourceMappingURL=index.js.map
