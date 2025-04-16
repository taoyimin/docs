import { defineComponent, mergeModels, inject, useAttrs, useModel, ref, watch, watchEffect, openBlock, createBlock, unref, mergeProps, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { ElCascader } from 'element-plus';
import { omit } from 'lodash-es';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { CASCADER_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivCascader",
    // 关闭属性透传，手动通过v-bind实现属性透传。因为开启属性透传后，外部透传的props优先级最高，即使内部处理props重新赋值给el-cascader也不生效。
    inheritAttrs: false
  },
  __name: "cascader",
  props: /* @__PURE__ */ mergeModels({
    data: { type: Function, required: false, skipCheck: true, default: () => [] }
  }, {
    "modelValue": { type: [String, Number, Array] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const globalProps = inject(CASCADER_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const attrs = useAttrs();
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
    const model = useModel(__props, "modelValue");
    const options = ref([]);
    watch(
      () => propsProxy.data,
      () => {
        options.value = [];
      }
    );
    watchEffect(() => {
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
      return openBlock(), createBlock(unref(ElCascader), mergeProps({
        class: "liv-cascader",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        options: options.value,
        props: cascaderProps
      }, unref(omit)({ ...unref(globalProps), ...unref(attrs) }, "props")), createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        renderList(unref(omit)(_ctx.$slots, "default"), (_, name) => {
          return {
            name,
            fn: withCtx((slotData) => [
              renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1040, ["modelValue", "options"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=cascader.vue2.mjs.map
