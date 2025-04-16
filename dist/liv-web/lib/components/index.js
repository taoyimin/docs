'use strict';

var editor = require('@wangeditor/editor');
require('@amap/amap-jsapi-types');
var index = require('./a-map/index.js');
var index$1 = require('./cascader/index.js');
var index$2 = require('./checkbox/index.js');
var index$3 = require('./data-card/index.js');
var index$4 = require('./data-descriptions/index.js');
var index$5 = require('./data-form/index.js');
var index$6 = require('./data-pagination/index.js');
var index$7 = require('./data-table/index.js');
var index$8 = require('./dict-select/index.js');
var index$9 = require('./form-item/index.js');
var index$a = require('./grid-cascader/index.js');
var index$b = require('./grid-tree/index.js');
var index$c = require('./location-picker/index.js');
var index$d = require('./number-range/index.js');
var index$e = require('./qr-code/index.js');
var index$f = require('./radio/index.js');
var index$g = require('./rich-text/index.js');
var index$h = require('./search-form/index.js');
var index$i = require('./select/index.js');
var index$j = require('./verify/index.js');
var index$k = require('./authority/index.js');
var index$m = require('./remove/index.js');
var index$l = require('./authority/src/directive/index.js');
var index$n = require('./remove/src/directive/index.js');

editor.Boot.registerPlugin(withGetHtml);
function withGetHtml(editor) {
  const { getHtml } = editor;
  const newEditor = editor;
  newEditor.getHtml = () => {
    if (getHtml() === "<p><br></p>") return "";
    if (getHtml() === "<h1></h1>") return "";
    if (getHtml() === "<h2></h2>") return "";
    if (getHtml() === "<h3></h3>") return "";
    if (getHtml() === "<h4></h4>") return "";
    if (getHtml() === "<h5></h5>") return "";
    return getHtml();
  };
  return newEditor;
}

exports.LivAMap = index.LivAMap;
exports.LivCascader = index$1.LivCascader;
exports.LivCheckbox = index$2.LivCheckbox;
exports.LivDataCard = index$3.LivDataCard;
exports.LivDataDescriptions = index$4.LivDataDescriptions;
exports.LivDataForm = index$5.LivDataForm;
exports.LivDataPagination = index$6.LivDataPagination;
exports.LivDataTable = index$7.LivDataTable;
exports.LivDictSelect = index$8.LivDictSelect;
exports.LivFormItem = index$9.LivFormItem;
exports.LivGridCascader = index$a.LivGridCascader;
exports.LivGridTree = index$b.LivGridTree;
exports.LivLocationPicker = index$c.LivLocationPicker;
exports.LivNumberRange = index$d.LivNumberRange;
exports.LivQrCode = index$e.LivQrCode;
exports.LivRadio = index$f.LivRadio;
exports.LivRichText = index$g.LivRichText;
exports.LivSearchForm = index$h.LivSearchForm;
exports.LivSelect = index$i.LivSelect;
exports.LivVerify = index$j.LivVerify;
exports.LivAuthority = index$k.LivAuthority;
exports.LivRemove = index$m.LivRemove;
exports.LivAuthorityDirective = index$l.vAuthority;
exports.vAuthority = index$l.vAuthority;
exports.LivRemoveDirective = index$n.vRemove;
exports.vRemove = index$n.vRemove;
//# sourceMappingURL=index.js.map
