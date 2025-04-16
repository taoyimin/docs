'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../select/index.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var dict = require('../../../utils/inject/dict.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivDictSelect"
  },
  __name: "dict-select",
  props: /* @__PURE__ */ vue.mergeModels({
    dictType: { type: String, required: false },
    parentId: { type: Number, required: false },
    labelKey: { type: String, required: false, default: () => "label" },
    valueKey: { type: String, required: false, default: () => "value" },
    idKey: { type: String, required: false, default: () => "id" }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {},
    "dictId": { type: null },
    "dictIdModifiers": {},
    "dictName": { type: null },
    "dictNameModifiers": {},
    "dict": { type: null },
    "dictModifiers": {}
  }),
  emits: ["update:modelValue", "update:dictId", "update:dictName", "update:dict"],
  setup(__props, { expose: __expose }) {
    const loadDictList = dict.injectLoadDictList();
    const loadDictListById = dict.injectLoadDictListById();
    const globalProps = vue.inject(component.DICT_SELECT_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const model = vue.useModel(__props, "modelValue");
    const dictId = vue.useModel(__props, "dictId");
    const dictName = vue.useModel(__props, "dictName");
    const dict$1 = vue.useModel(__props, "dict");
    const options = vue.ref([]);
    const selectRef = vue.ref(null);
    function focus() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.focus();
    }
    function blur() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.blur();
    }
    vue.watchEffect(() => {
      var _a, _b;
      if (options.value && options.value.length === 0) {
        return;
      }
      if (Array.isArray(model.value)) {
        if (((_b = (_a = dict$1.value) == null ? void 0 : _a.map((item) => item[propsProxy.valueKey])) == null ? void 0 : _b.join(",")) === model.value.join(",")) {
          return;
        }
        const dictMap = new Map(
          options.value.map((item) => [item[propsProxy.valueKey], item])
        );
        const selects = model.value.map((value) => dictMap.get(value));
        dictId.value = selects == null ? void 0 : selects.map((item) => item == null ? void 0 : item[propsProxy.idKey]);
        dictName.value = selects == null ? void 0 : selects.map((item) => item == null ? void 0 : item[propsProxy.labelKey]);
        dict$1.value = selects;
      } else {
        const select = options.value.find((item) => item[propsProxy.valueKey] === model.value);
        dictId.value = select == null ? void 0 : select[propsProxy.idKey];
        dictName.value = select == null ? void 0 : select[propsProxy.labelKey];
        dict$1.value = select;
      }
    });
    vue.watchEffect(async () => {
      var _a;
      if (propsProxy.parentId) {
        options.value = (_a = await loadDictListById(propsProxy.parentId)) != null ? _a : [];
      } else {
        options.value = [];
      }
    });
    vue.watchEffect(async () => {
      var _a;
      if (propsProxy.dictType) {
        options.value = (_a = await loadDictList(propsProxy.dictType)) != null ? _a : [];
      } else {
        options.value = [];
      }
    });
    __expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index$1.LivSelect), vue.mergeProps({
        ref: "dictSelectRef",
        class: "liv-dict-select",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        data: options.value,
        "label-key": vue.unref(propsProxy).labelKey,
        "value-key": vue.unref(propsProxy).valueKey
      }, vue.unref(globalProps)), vue.createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        vue.renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: vue.withCtx((slotData) => [
              vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1040, ["modelValue", "data", "label-key", "value-key"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=dict-select.vue2.js.map
