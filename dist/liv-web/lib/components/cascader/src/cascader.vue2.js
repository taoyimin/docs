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
    name: "LivCascader",
    // 关闭属性透传，手动通过v-bind实现属性透传。因为开启属性透传后，外部透传的props优先级最高，即使内部处理props重新赋值给el-cascader也不生效。
    inheritAttrs: false
  },
  __name: "cascader",
  props: /* @__PURE__ */ vue.mergeModels({
    data: { type: Function, required: false, skipCheck: true, default: () => [] }
  }, {
    "modelValue": { type: [String, Number, Array] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const globalProps = vue.inject(component.CASCADER_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const attrs = vue.useAttrs();
    const cascaderProps = {
      multiple: false,
      checkStrictly: true,
      emitPath: false,
      label: "label",
      value: "value",
      id: "id",
      children: "children",
      ...globalProps == null ? void 0 : globalProps.props,
      ...attrs.props || {}
    };
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
        throw new Error("[liv-web/cascader]data\u5C5E\u6027\u53EA\u80FD\u662F\u6570\u7EC4\u3001Promise\u3001Callback\u51FD\u6570\u3001Getter\u51FD\u6570\u3002");
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
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCascader), vue.mergeProps({
        class: "liv-cascader",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        options: options.value,
        props: cascaderProps
      }, vue.unref(lodashEs.omit)({ ...vue.unref(globalProps), ...vue.unref(attrs) }, "props")), vue.createSlots({
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
      ]), 1040, ["modelValue", "options"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=cascader.vue2.js.map
