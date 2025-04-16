import { defineComponent, mergeModels, inject, useModel, ref, watch, watchEffect, openBlock, createBlock, unref, mergeProps, withCtx, createElementBlock, Fragment, renderList, createSlots, renderSlot } from 'vue';
import { ElCheckboxGroup, checkboxGroupProps, ElCheckboxButton, ElCheckbox } from 'element-plus';
import { pick, omit } from 'lodash-es';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { CHECKBOX_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivCheckbox"
  },
  __name: "checkbox",
  props: /* @__PURE__ */ mergeModels({
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
    const globalProps = inject(CHECKBOX_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
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
      return openBlock(), createBlock(unref(ElCheckboxGroup), mergeProps({ class: "liv-checkbox-group" }, unref(pick)(unref(globalProps), Object.keys(unref(checkboxGroupProps))), {
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event)
      }), {
        default: withCtx(() => [
          unref(propsProxy).type === "button" ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList(options.value, (item) => {
              return openBlock(), createBlock(unref(ElCheckboxButton), mergeProps({
                class: "liv-checkbox-button",
                key: item[unref(propsProxy).labelKey],
                label: item[unref(propsProxy).labelKey],
                value: item[unref(propsProxy).valueKey],
                ref_for: true
              }, unref(omit)(item, "key", "label", "value")), createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                _ctx.$slots.default ? {
                  name: "default",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, item || {}))
                  ]),
                  key: "0"
                } : void 0
              ]), 1040, ["label", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (openBlock(true), createElementBlock(
            Fragment,
            { key: 1 },
            renderList(options.value, (item) => {
              return openBlock(), createBlock(unref(ElCheckbox), mergeProps({
                class: "liv-checkbox",
                key: item[unref(propsProxy).labelKey],
                label: item[unref(propsProxy).labelKey],
                value: item[unref(propsProxy).valueKey],
                ref_for: true
              }, unref(omit)(item, "key", "label", "value")), createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                _ctx.$slots.default ? {
                  name: "default",
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, item || {}))
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

export { _sfc_main as default };
//# sourceMappingURL=checkbox.vue2.mjs.map
