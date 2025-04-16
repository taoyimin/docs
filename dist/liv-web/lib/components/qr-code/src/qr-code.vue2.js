'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var index$1 = require('../../../utils/qrCode/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivQrCode"
  },
  __name: "qr-code",
  props: {
    hideOnClickModal: { type: Boolean, required: false },
    src: { type: String, required: false },
    fit: { type: String, required: false },
    loading: { type: String, required: false },
    lazy: { type: Boolean, required: false },
    scrollContainer: { type: null, required: false },
    previewSrcList: { type: null, required: false },
    previewTeleported: { type: Boolean, required: false, default: () => true },
    zIndex: { type: null, required: false },
    initialIndex: { type: Number, required: false },
    infinite: { type: Boolean, required: false },
    closeOnPressEscape: { type: Boolean, required: false },
    zoomRate: { type: Number, required: false },
    minScale: { type: Number, required: false },
    maxScale: { type: Number, required: false },
    showProgress: { type: Boolean, required: false },
    crossorigin: { type: null, required: false },
    content: { type: String, required: false },
    size: { type: Number, required: false, default: () => 100 },
    options: { type: Object, required: false }
  },
  setup(__props) {
    const globalProps = vue.inject(component.QR_CODE_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(
      props,
      globalProps
    );
    const img = vue.ref("");
    vue.watchEffect(async () => {
      if (!propsProxy.content) return img.value = "";
      try {
        img.value = await index$1.qrCode.toDataURL(propsProxy.content, {
          width: propsProxy.size,
          margin: 0,
          ...propsProxy.options
        });
      } catch (err) {
        console.error("[liv-web/qrcode]\u751F\u6210\u4E8C\u7EF4\u7801\u56FE\u7247\u5931\u8D25\uFF01");
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImage), {
        class: "liv-qr-code",
        style: vue.normalizeStyle({ width: vue.unref(propsProxy).size + "px", height: vue.unref(propsProxy).size + "px" }),
        src: img.value,
        "preview-src-list": [img.value],
        fit: "cover",
        "preview-teleported": ""
      }, vue.createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        vue.renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: vue.withCtx((slotData) => [
              vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1032, ["style", "src", "preview-src-list"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=qr-code.vue2.js.map
