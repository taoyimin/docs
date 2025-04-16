'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var VerifySlide = require('./Verify/VerifySlide.vue.js');
var VerifyPoints = require('./Verify/VerifyPoints.vue.js');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
require('../../../constants/index.js');
require('../../../utils/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

const _hoisted_1 = {
  key: 0,
  class: "liv-verify__verifybox--top"
};
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivVerify"
  },
  __name: "verify",
  props: /* @__PURE__ */ vue.mergeModels({
    get: { type: Function, required: false },
    check: { type: Function, required: false },
    type: { type: String, required: false, default: () => "blockPuzzle" },
    mode: { type: String, required: false, default: () => "pop" },
    vSpace: { type: Number, required: false, default: () => 5 },
    explain: { type: String, required: false, default: () => "\u5411\u53F3\u6ED1\u52A8\u5B8C\u6210\u9A8C\u8BC1" },
    imgSize: { type: Object, required: false, default: () => {
      return {
        width: "310px",
        height: "155px"
      };
    } }
  }, {
    "modelValue": {
      default: false
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ vue.mergeModels(["ready", "success"], ["update:modelValue"]),
  setup(__props, { expose: __expose }) {
    const globalProps = vue.inject(component.VERIFY_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const { type, mode, vSpace, explain, imgSize, get, check } = vue.toRefs(propsProxy);
    const clickShow = vue.useModel(__props, "modelValue");
    const verifyType = vue.ref(void 0);
    const componentType = vue.shallowRef(void 0);
    const instance = vue.ref({});
    const showBox = vue.computed(() => {
      if ((mode == null ? void 0 : mode.value) == "pop") {
        return clickShow.value;
      } else {
        return true;
      }
    });
    const refresh = () => {
      if (instance.value.refresh) {
        instance.value.refresh();
      }
    };
    const closeBox = () => {
      clickShow.value = false;
      refresh();
    };
    const show = () => {
      if ((mode == null ? void 0 : mode.value) == "pop") {
        clickShow.value = true;
      }
    };
    vue.watchEffect(() => {
      switch (type == null ? void 0 : type.value) {
        case "blockPuzzle":
          verifyType.value = "2";
          componentType.value = VerifySlide.default;
          break;
        case "clickWord":
          verifyType.value = "";
          componentType.value = VerifyPoints.default;
          break;
      }
    });
    __expose({
      clickShow,
      verifyType,
      componentType,
      instance,
      showBox,
      closeBox,
      show
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(["liv-verify", vue.unref(mode) == "pop" ? "liv-verify-mask" : ""])
        },
        [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(mode) == "pop" ? "liv-verify__verifybox" : ""),
              style: vue.normalizeStyle({ "max-width": parseInt(vue.unref(imgSize).width) + 30 + "px" })
            },
            [
              vue.unref(mode) == "pop" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                _cache[0] || (_cache[0] = vue.createTextVNode(" \u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1 ")),
                vue.createVNode(vue.unref(elementPlus.ElIcon), {
                  size: "22",
                  onClick: closeBox
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.Close))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "div",
                {
                  class: "liv-verify__verifybox--bottom",
                  style: vue.normalizeStyle({ padding: vue.unref(mode) == "pop" ? "15px" : "0" })
                },
                [
                  vue.createCommentVNode(" \u9A8C\u8BC1\u7801\u5BB9\u5668 "),
                  componentType.value ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(componentType.value), {
                    key: 0,
                    captchaType: vue.unref(type),
                    type: verifyType.value,
                    mode: vue.unref(mode),
                    vSpace: vue.unref(vSpace),
                    explain: vue.unref(explain),
                    imgSize: vue.unref(imgSize),
                    reqGet: vue.unref(get),
                    reqCheck: vue.unref(check),
                    ref_key: "instance",
                    ref: instance
                  }, null, 8, ["captchaType", "type", "mode", "vSpace", "explain", "imgSize", "reqGet", "reqCheck"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      )), [
        [vue.vShow, showBox.value]
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=verify.vue2.js.map
