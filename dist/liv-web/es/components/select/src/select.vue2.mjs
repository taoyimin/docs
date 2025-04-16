import { defineComponent, mergeModels, inject, ref, useModel, watch, watchEffect, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementBlock, Fragment, renderList, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { pick, omit } from 'lodash-es';
import '../../../utils/index.mjs';
import { SelectProps } from 'element-plus/es/components/select/src/select';
import { ElSelect, ElOption } from 'element-plus';
import '../../../constants/index.mjs';
import { SELECT_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivSelect"
  },
  __name: "select",
  props: /* @__PURE__ */ mergeModels({
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
    const globalProps = inject(SELECT_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(
      props,
      globalProps
    );
    const selectRef = ref(null);
    function focus() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.focus();
    }
    function blur() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.blur();
    }
    const model = useModel(__props, "modelValue");
    const visible = ref(false);
    const loading = ref(false);
    const loaded = ref(false);
    const options = ref([]);
    function visibleChange(e) {
      visible.value = e;
    }
    watch(
      () => propsProxy.data,
      () => {
        options.value = [];
        loaded.value = false;
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
      return openBlock(), createBlock(unref(ElSelect), mergeProps({
        ref_key: "selectRef",
        ref: selectRef,
        class: "liv-select",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        noDataText: "\u6682\u65E0\u6570\u636E",
        loading: loading.value,
        onVisibleChange: visibleChange
      }, unref(pick)(unref(globalProps), Object.keys(unref(SelectProps)))), createSlots({
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(options.value, (item) => {
              return openBlock(), createBlock(unref(ElOption), {
                key: item[unref(propsProxy).labelKey],
                label: item[unref(propsProxy).labelKey],
                value: item[unref(propsProxy).valueKey]
              }, createSlots({
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
              ]), 1032, ["label", "value"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
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
      ]), 1040, ["modelValue", "loading"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=select.vue2.mjs.map
