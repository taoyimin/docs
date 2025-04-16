'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashEs = require('lodash-es');
require('../../../utils/index.js');
var select = require('element-plus/es/components/select/src/select');
var elementPlus = require('element-plus');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivSelect"
  },
  __name: "select",
  props: /* @__PURE__ */ vue.mergeModels({
    data: { type: Function, required: false, skipCheck: true, default: () => [] },
    labelKey: { type: String, required: false, default: () => "label" },
    valueKey: { type: String, required: false, default: () => "value" },
    lazy: { type: Boolean, required: false, default: () => false }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const globalProps = vue.inject(component.SELECT_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(
      props,
      globalProps
    );
    const selectRef = vue.ref(null);
    function focus() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.focus();
    }
    function blur() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.blur();
    }
    const model = vue.useModel(__props, "modelValue");
    const visible = vue.ref(false);
    const loading = vue.ref(false);
    const loaded = vue.ref(false);
    const options = vue.ref([]);
    function visibleChange(e) {
      visible.value = e;
    }
    vue.watch(
      () => propsProxy.data,
      () => {
        options.value = [];
        loaded.value = false;
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
        if (propsProxy.lazy) {
          if (visible.value && !loaded.value) {
            loadFunction(data);
          }
        } else {
          loadFunction(data);
        }
      } else if (data instanceof Promise) {
        loadPromise(data);
      } else {
        throw new Error("[liv-web/select]data\u5C5E\u6027\u53EA\u80FD\u662F\u6570\u7EC4\u3001Promise\u3001Callback\u51FD\u6570\u3001Getter\u51FD\u6570\u3002");
      }
    }
    function loadFunction(fn) {
      if (fn.length === 0) {
        initData(fn());
      } else {
        loading.value = true;
        fn(
          (data) => {
            options.value = data != null ? data : [];
            loading.value = false;
            loaded.value = true;
          },
          () => {
            loading.value = false;
            loaded.value = true;
          }
        );
      }
    }
    function loadPromise(promise) {
      loading.value = true;
      promise.then((res) => options.value = res != null ? res : []).finally(() => {
        loading.value = false;
        loaded.value = true;
      });
    }
    __expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElSelect), vue.mergeProps({
        ref_key: "selectRef",
        ref: selectRef,
        class: "liv-select",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        noDataText: "\u6682\u65E0\u6570\u636E",
        loading: loading.value,
        onVisibleChange: visibleChange
      }, vue.unref(lodashEs.pick)(vue.unref(globalProps), Object.keys(vue.unref(select.SelectProps)))), vue.createSlots({
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(options.value, (item) => {
              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElOption), {
                key: item[vue.unref(propsProxy).labelKey],
                label: item[vue.unref(propsProxy).labelKey],
                value: item[vue.unref(propsProxy).valueKey]
              }, vue.createSlots({
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
              ]), 1032, ["label", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        vue.renderList(vue.unref(lodashEs.omit)(_ctx.$slots, "default"), (_, name) => {
          return {
            name,
            fn: vue.withCtx((slotData) => [
              vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1040, ["modelValue", "loading"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=select.vue2.js.map
