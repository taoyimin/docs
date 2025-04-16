'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../utils/index.js');
var elementPlus = require('element-plus');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

const _hoisted_1 = { class: "liv-number-range" };
const _hoisted_2 = {
  key: 0,
  class: "liv-number-range__prepend"
};
const _hoisted_3 = ["disabled"];
const _hoisted_4 = {
  key: 1,
  class: "liv-number-range__append"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivNumberRange"
  },
  __name: "number-range",
  props: /* @__PURE__ */ vue.mergeModels({
    modelValue: { type: Array, required: false },
    min: { type: Number, required: false, default: () => -Infinity },
    max: { type: Number, required: false, default: () => Infinity },
    minPlaceholder: { type: String, required: false, default: () => "\u6700\u5C0F\u503C" },
    maxPlaceholder: { type: String, required: false, default: () => "\u6700\u5927\u503C" },
    rangeSeparator: { type: String, required: false, default: () => "\u81F3" },
    disabled: { type: Boolean, required: false, default: () => false }
  }, {
    "minValue": { type: null, ...{
      default: void 0
    } },
    "minValueModifiers": {},
    "maxValue": { type: null, ...{
      default: void 0
    } },
    "maxValueModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["update:modelValue"], ["update:minValue", "update:maxValue"]),
  setup(__props, { emit: __emit }) {
    const globalProps = vue.inject(component.NUMBER_RANGE_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const minModel = vue.useModel(__props, "minValue");
    const maxModel = vue.useModel(__props, "maxValue");
    const isFocus = vue.ref(false);
    const noEffect = vue.ref(false);
    const emit = __emit;
    vue.onMounted(() => {
      vue.watch(
        () => props.modelValue,
        (newVal, oldVal) => {
          if (noEffect.value) {
            noEffect.value = false;
            return;
          }
          if (!newVal) {
            minModel.value = void 0;
            maxModel.value = void 0;
          } else {
            if (newVal !== oldVal && newVal[0] !== (oldVal == null ? void 0 : oldVal[0]) && newVal[1] !== (oldVal == null ? void 0 : oldVal[1])) {
              vue.nextTick(() => {
                minModel.value = newVal[0];
                maxModel.value = newVal[1];
              });
            }
          }
        },
        {
          immediate: true,
          deep: true
        }
      );
    });
    function handleUpdateMinValue(e) {
      noEffect.value = true;
      minModel.value = e;
      emit("update:modelValue", [e, maxModel.value]);
    }
    function handleUpdateMaxValue(e) {
      noEffect.value = true;
      maxModel.value = e;
      emit("update:modelValue", [minModel.value, e]);
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "prepend")
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "div",
          {
            class: vue.normalizeClass(["liv-number-range__input", {
              "is-disabled": _ctx.disabled,
              "is-focus": isFocus.value,
              "has-prepend": _ctx.$slots.prepend,
              "has-append": _ctx.$slots.append
            }])
          },
          [
            vue.createVNode(vue.unref(elementPlus.ElInputNumber), {
              class: "liv-number-range__input--min",
              modelValue: minModel.value,
              placeholder: vue.unref(propsProxy).minPlaceholder,
              controls: false,
              disabled: _ctx.disabled,
              min: _ctx.min,
              max: (_a = maxModel.value) != null ? _a : _ctx.max,
              "onUpdate:modelValue": handleUpdateMinValue,
              onBlur: _cache[0] || (_cache[0] = ($event) => isFocus.value = false),
              onFocus: _cache[1] || (_cache[1] = ($event) => !_ctx.disabled && (isFocus.value = true))
            }, null, 8, ["modelValue", "placeholder", "disabled", "min", "max"]),
            vue.createElementVNode("div", {
              class: "liv-number-range__input--separator",
              disabled: _ctx.disabled
            }, vue.toDisplayString(vue.unref(propsProxy).rangeSeparator), 9, _hoisted_3),
            vue.createVNode(vue.unref(elementPlus.ElInputNumber), {
              class: "liv-number-range__input--min",
              modelValue: maxModel.value,
              placeholder: vue.unref(propsProxy).maxPlaceholder,
              controls: false,
              disabled: _ctx.disabled,
              min: (_b = minModel.value) != null ? _b : _ctx.min,
              max: _ctx.max,
              "onUpdate:modelValue": handleUpdateMaxValue,
              onBlur: _cache[2] || (_cache[2] = ($event) => isFocus.value = false),
              onFocus: _cache[3] || (_cache[3] = ($event) => !_ctx.disabled && (isFocus.value = true))
            }, null, 8, ["modelValue", "placeholder", "disabled", "min", "max"])
          ],
          2
          /* CLASS */
        ),
        _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "append")
        ])) : vue.createCommentVNode("v-if", true)
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=number-range.vue2.js.map
