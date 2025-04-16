'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var zhCn = require('element-plus/dist/locale/zh-cn.mjs');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivDataPagination"
  },
  __name: "data-pagination",
  props: /* @__PURE__ */ vue.mergeModels({
    total: { type: Number, required: false, default: () => 0 },
    currentKey: { type: null, required: false, default: () => "current" },
    sizeKey: { type: null, required: false, default: () => "size" }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {},
    "current": { type: Number, ...{
      default: 1
    } },
    "currentModifiers": {},
    "pageSize": { type: Number, ...{
      default: 10
    } },
    "pageSizeModifiers": {}
  }),
  emits: ["update:modelValue", "update:current", "update:pageSize"],
  setup(__props) {
    const globalProps = vue.inject(component.DATA_PAGINATION_KEY, {});
    const props = __props;
    const propsPoxy = index.getPropsPoxy(props, globalProps);
    const page = vue.useModel(__props, "modelValue");
    const current = vue.useModel(__props, "current");
    const pageSize = vue.useModel(__props, "pageSize");
    const noEffect = vue.ref(false);
    const updateModelValue = () => {
      noEffect.value = true;
    };
    vue.watchEffect(() => {
      if (page.value) {
        current.value = page.value[propsPoxy.currentKey];
        pageSize.value = page.value[propsPoxy.sizeKey];
      }
      noEffect.value = false;
    });
    vue.watchEffect(() => {
      if (!noEffect.value) return;
      if (page.value) {
        page.value[propsPoxy.currentKey] = current.value;
        page.value[propsPoxy.sizeKey] = pageSize.value;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElConfigProvider), { locale: vue.unref(zhCn) }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElPagination), vue.mergeProps({
            class: "liv-data-pagination",
            background: "",
            layout: "total, sizes, prev, pager, next, jumper",
            total: _ctx.total,
            "current-page": current.value,
            "onUpdate:currentPage": [
              _cache[0] || (_cache[0] = ($event) => current.value = $event),
              updateModelValue
            ],
            "page-size": pageSize.value,
            "onUpdate:pageSize": [
              _cache[1] || (_cache[1] = ($event) => pageSize.value = $event),
              updateModelValue
            ]
          }, { ...vue.unref(globalProps), ..._ctx.$attrs }), null, 16, ["total", "current-page", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["locale"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=data-pagination.vue2.js.map
