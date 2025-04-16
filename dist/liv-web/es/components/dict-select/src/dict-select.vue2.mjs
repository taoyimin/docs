import { defineComponent, mergeModels, inject, useModel, ref, watchEffect, openBlock, createBlock, unref, mergeProps, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { LivSelect } from '../../select/index.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { injectLoadDictList, injectLoadDictListById } from '../../../utils/inject/dict.mjs';
import { DICT_SELECT_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivDictSelect"
  },
  __name: "dict-select",
  props: /* @__PURE__ */ mergeModels({
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
    const loadDictList = injectLoadDictList();
    const loadDictListById = injectLoadDictListById();
    const globalProps = inject(DICT_SELECT_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const model = useModel(__props, "modelValue");
    const dictId = useModel(__props, "dictId");
    const dictName = useModel(__props, "dictName");
    const dict = useModel(__props, "dict");
    const options = ref([]);
    const selectRef = ref(null);
    function focus() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.focus();
    }
    function blur() {
      var _a;
      (_a = selectRef.value) == null ? void 0 : _a.blur();
    }
    watchEffect(() => {
      var _a, _b;
      if (options.value && options.value.length === 0) {
        return;
      }
      if (Array.isArray(model.value)) {
        if (((_b = (_a = dict.value) == null ? void 0 : _a.map((item) => item[propsProxy.valueKey])) == null ? void 0 : _b.join(",")) === model.value.join(",")) {
          return;
        }
        const dictMap = new Map(
          options.value.map((item) => [item[propsProxy.valueKey], item])
        );
        const selects = model.value.map((value) => dictMap.get(value));
        dictId.value = selects == null ? void 0 : selects.map((item) => item == null ? void 0 : item[propsProxy.idKey]);
        dictName.value = selects == null ? void 0 : selects.map((item) => item == null ? void 0 : item[propsProxy.labelKey]);
        dict.value = selects;
      } else {
        const select = options.value.find((item) => item[propsProxy.valueKey] === model.value);
        dictId.value = select == null ? void 0 : select[propsProxy.idKey];
        dictName.value = select == null ? void 0 : select[propsProxy.labelKey];
        dict.value = select;
      }
    });
    watchEffect(async () => {
      var _a;
      if (propsProxy.parentId) {
        options.value = (_a = await loadDictListById(propsProxy.parentId)) != null ? _a : [];
      } else {
        options.value = [];
      }
    });
    watchEffect(async () => {
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
      return openBlock(), createBlock(unref(LivSelect), mergeProps({
        ref: "dictSelectRef",
        class: "liv-dict-select",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        placeholder: "\u8BF7\u9009\u62E9",
        data: options.value,
        "label-key": unref(propsProxy).labelKey,
        "value-key": unref(propsProxy).valueKey
      }, unref(globalProps)), createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: withCtx((slotData) => [
              renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1040, ["modelValue", "data", "label-key", "value-key"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=dict-select.vue2.mjs.map
