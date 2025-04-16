'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var lodashEs = require('lodash-es');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivCheckbox"
  },
  __name: "checkbox",
  props: /* @__PURE__ */ vue.mergeModels({
    data: { type: Function, required: false, skipCheck: true, default: () => [] },
    labelKey: { type: null, required: false, default: () => "label" },
    valueKey: { type: null, required: false, default: () => "value" },
    type: { type: String, required: false, default: () => "default" }
  }, {
    "modelValue": { type: Array },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const globalProps = vue.inject(component.CHECKBOX_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const model = vue.useModel(__props, "modelValue");
    const options = vue.ref([]);
    vue.watch(
      () => propsProxy.data,
      () => {
        options.value = [];
      }
    );
    vue.watchEffect(() => {
      initData(propsProxy.data);
    });
    function initData(data) {
      if (!data) {
        options.value = [];
      } else if (Array.isArray(data)) {
        options.value = data;
      } else if (data instanceof Function) {
        loadFunction(data);
      } else if (data instanceof Promise) {
        loadPromise(data);
      } else {
        throw new Error("[liv-web/checkbox]data\u5C5E\u6027\u53EA\u80FD\u662F\u6570\u7EC4\u3001Promise\u3001Callback\u51FD\u6570\u3001Getter\u51FD\u6570\u3002");
      }
    }
    function loadFunction(fn) {
      if (fn.length === 0) {
        initData(fn());
      } else {
        fn((data) => {
          options.value = data;
        });
      }
    }
    function loadPromise(promise) {
      promise.then((res) => options.value = res);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCheckboxGroup), vue.mergeProps({ class: "liv-checkbox-group" }, vue.unref(lodashEs.pick)(vue.unref(globalProps), Object.keys(vue.unref(elementPlus.checkboxGroupProps))), {
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event)
      }), {
        default: vue.withCtx(() => [
          vue.unref(propsProxy).type === "button" ? (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            { key: 0 },
            vue.renderList(options.value, (item) => {
              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCheckboxButton), vue.mergeProps({
                class: "liv-checkbox-button",
                key: item[vue.unref(propsProxy).labelKey],
                label: item[vue.unref(propsProxy).labelKey],
                value: item[vue.unref(propsProxy).valueKey],
                ref_for: true
              }, vue.unref(lodashEs.omit)(item, "key", "label", "value")), vue.createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                _ctx.$slots.default ? {
                  name: "default",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "default", vue.mergeProps({ ref_for: true }, item || {}))
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["label", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            vue.renderList(options.value, (item) => {
              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCheckbox), vue.mergeProps({
                class: "liv-checkbox",
                key: item[vue.unref(propsProxy).labelKey],
                label: item[vue.unref(propsProxy).labelKey],
                value: item[vue.unref(propsProxy).valueKey],
                ref_for: true
              }, vue.unref(lodashEs.omit)(item, "key", "label", "value")), vue.createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                _ctx.$slots.default ? {
                  name: "default",
                  fn: vue.withCtx(() => [
                    vue.renderSlot(_ctx.$slots, "default", vue.mergeProps({ ref_for: true }, item || {}))
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["label", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["modelValue"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=checkbox.vue2.js.map
