import { defineComponent, inject, ref, watchEffect, openBlock, createBlock, unref, normalizeStyle, createSlots, renderList, withCtx, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { ElImage } from 'element-plus';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { QR_CODE_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';
import { qrCode } from '../../../utils/qrCode/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const globalProps = inject(QR_CODE_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(
      props,
      globalProps
    );
    const img = ref("");
    watchEffect(async () => {
      if (!propsProxy.content) return img.value = "";
      try {
        img.value = await qrCode.toDataURL(propsProxy.content, {
          width: propsProxy.size,
          margin: 0,
          ...propsProxy.options
        });
      } catch (err) {
        console.error("[liv-web/qrcode]\u751F\u6210\u4E8C\u7EF4\u7801\u56FE\u7247\u5931\u8D25\uFF01");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElImage), {
        class: "liv-qr-code",
        style: normalizeStyle({ width: unref(propsProxy).size + "px", height: unref(propsProxy).size + "px" }),
        src: img.value,
        "preview-src-list": [img.value],
        fit: "cover",
        "preview-teleported": ""
      }, createSlots({
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
      ]), 1032, ["style", "src", "preview-src-list"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=qr-code.vue2.mjs.map
