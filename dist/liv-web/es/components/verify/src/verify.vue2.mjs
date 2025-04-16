import { defineComponent, mergeModels, inject, toRefs, useModel, ref, shallowRef, computed, watchEffect, withDirectives, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, createTextVNode, createVNode, withCtx, createCommentVNode, createBlock, resolveDynamicComponent, vShow } from 'vue';
import VerifySlide from './Verify/VerifySlide.vue.mjs';
import VerifyPoints from './Verify/VerifyPoints.vue.mjs';
import { ElIcon } from 'element-plus';
import { Close } from '@element-plus/icons-vue';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import { VERIFY_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

const _hoisted_1 = {
  key: 0,
  class: "liv-verify__verifybox--top"
};
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivVerify"
  },
  __name: "verify",
  props: /* @__PURE__ */ mergeModels({
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
  emits: /* @__PURE__ */ mergeModels(["ready", "success"], ["update:modelValue"]),
  setup(__props, { expose: __expose }) {
    const globalProps = inject(VERIFY_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const { type, mode, vSpace, explain, imgSize, get, check } = toRefs(propsProxy);
    const clickShow = useModel(__props, "modelValue");
    const verifyType = ref(void 0);
    const componentType = shallowRef(void 0);
    const instance = ref({});
    const showBox = computed(() => {
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
    watchEffect(() => {
      switch (type == null ? void 0 : type.value) {
        case "blockPuzzle":
          verifyType.value = "2";
          componentType.value = VerifySlide;
          break;
        case "clickWord":
          verifyType.value = "";
          componentType.value = VerifyPoints;
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
      return withDirectives((openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["liv-verify", unref(mode) == "pop" ? "liv-verify-mask" : ""])
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(mode) == "pop" ? "liv-verify__verifybox" : ""),
              style: normalizeStyle({ "max-width": parseInt(unref(imgSize).width) + 30 + "px" })
            },
            [
              unref(mode) == "pop" ? (openBlock(), createElementBlock("div", _hoisted_1, [
                _cache[0] || (_cache[0] = createTextVNode(" \u8BF7\u5B8C\u6210\u5B89\u5168\u9A8C\u8BC1 ")),
                createVNode(unref(ElIcon), {
                  size: "22",
                  onClick: closeBox
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Close))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : createCommentVNode("v-if", true),
              createElementVNode(
                "div",
                {
                  class: "liv-verify__verifybox--bottom",
                  style: normalizeStyle({ padding: unref(mode) == "pop" ? "15px" : "0" })
                },
                [
                  createCommentVNode(" \u9A8C\u8BC1\u7801\u5BB9\u5668 "),
                  componentType.value ? (openBlock(), createBlock(resolveDynamicComponent(componentType.value), {
                    key: 0,
                    captchaType: unref(type),
                    type: verifyType.value,
                    mode: unref(mode),
                    vSpace: unref(vSpace),
                    explain: unref(explain),
                    imgSize: unref(imgSize),
                    reqGet: unref(get),
                    reqCheck: unref(check),
                    ref_key: "instance",
                    ref: instance
                  }, null, 8, ["captchaType", "type", "mode", "vSpace", "explain", "imgSize", "reqGet", "reqCheck"])) : createCommentVNode("v-if", true)
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
        [vShow, showBox.value]
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=verify.vue2.mjs.map
