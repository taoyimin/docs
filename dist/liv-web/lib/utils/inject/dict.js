'use strict';

require('../../constants/index.js');
var vue = require('vue');
var dict = require('../../constants/inject/dict.js');

function injectLoadDictList() {
  const loadDictList = vue.inject(dict.LOAD_DICT_LIST_KEY, void 0);
  if (loadDictList) {
    return loadDictList;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u52A0\u8F7D\u6570\u636E\u5B57\u5178\u5217\u8868\u65B9\u6CD5\u3002"));
  }
}
function injectLoadDictListById() {
  const loadDictListById = vue.inject(dict.LOAD_DICT_LIST_BY_ID_KEY, void 0);
  if (loadDictListById) {
    return loadDictListById;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u52A0\u8F7D\u5B50\u7EA7\u6570\u636E\u5B57\u5178\u5217\u8868\u65B9\u6CD5\u3002"));
  }
}

exports.injectLoadDictList = injectLoadDictList;
exports.injectLoadDictListById = injectLoadDictListById;
//# sourceMappingURL=dict.js.map
