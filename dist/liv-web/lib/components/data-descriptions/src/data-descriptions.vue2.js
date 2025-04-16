'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var descriptionItem_mjs = require('element-plus/es/components/descriptions/src/description-item.mjs');
var lodashEs = require('lodash-es');
require('../../qr-code/src/qr-code.vue.js');
require('../../verify/src/verify.vue.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var authority = require('../../../utils/inject/authority.js');
var file = require('../../../utils/inject/file.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var verify_vue_vue_type_script_setup_true_lang = require('../../verify/src/verify.vue2.js');
var qrCode_vue_vue_type_script_setup_true_lang = require('../../qr-code/src/qr-code.vue2.js');

const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["innerHTML"];
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivDataDescriptions"
  },
  __name: "data-descriptions",
  props: {
    data: { type: null, required: false, default: () => ({}) },
    fields: { type: null, required: true }
  },
  setup(__props) {
    const checkAuthority = authority.injectCheckAuthority();
    const handleFileUrls = file.injectHandleFileUrls();
    const handleThumbUrls = file.injectHandleThumbUrls();
    const globalProps = vue.inject(component.DATA_DESCRIPTIONS_KEY, {});
    const props = __props;
    const validFields = vue.computed(() => {
      return vue.toValue(props.fields).filter((field) => {
        return index.checkAuthoritys(checkAuthority, field.authority);
      });
    });
    const loading = vue.ref(false);
    const componentData = vue.ref();
    vue.watch(
      () => props.data,
      () => {
        if (props.data instanceof Promise) {
          loading.value = true;
          props.data.then((res) => componentData.value = res).finally(() => loading.value = false);
        } else {
          componentData.value = props.data;
        }
      },
      {
        immediate: true
      }
    );
    function getFormatter(field, value, data) {
      var _a, _b;
      if (data) {
        return (_b = (_a = field.formatter) == null ? void 0 : _a.call(field, value, data)) != null ? _b : value;
      } else {
        return "";
      }
    }
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
      }).catch((err) => {
        console.error("[liv-web/data-descriptions]\u590D\u5236\u6587\u672C\u5230\u526A\u5207\u677F\u5931\u8D25\uFF01", err);
      });
    }
    const verifyInfoMap = vue.ref({});
    vue.watch(
      validFields,
      () => {
        validFields.value.forEach((field) => {
          if (field.fieldType === "ciphertext" && verifyInfoMap.value[field.prop] === void 0) {
            verifyInfoMap.value[field.prop] = {
              decrypted: false,
              visible: false,
              plaintext: ""
            };
          }
        });
      },
      {
        immediate: true
      }
    );
    vue.watch(
      () => props.data,
      () => {
        validFields.value.forEach((field) => {
          if (field.fieldType === "ciphertext") {
            verifyInfoMap.value[field.prop] = {
              decrypted: false,
              visible: false,
              plaintext: ""
            };
          }
        });
      }
    );
    function resetCiphertext(field) {
      const verifyInfo = verifyInfoMap.value[field.prop];
      if (verifyInfo) {
        verifyInfo.decrypted = false;
        verifyInfo.plaintext = "";
      }
    }
    function verifySuccess(params, field) {
      var _a;
      const decryptImpl = (_a = field.decrypt) == null ? void 0 : _a.call(field, params, componentData.value);
      if (decryptImpl) {
        if (decryptImpl instanceof Promise) {
          decryptImpl.then((res) => {
            verifyInfoMap.value[field.prop].decrypted = true;
            verifyInfoMap.value[field.prop].plaintext = res;
          });
        } else if (typeof decryptImpl === "string") {
          verifyInfoMap.value[field.prop].decrypted = true;
          verifyInfoMap.value[field.prop].plaintext = decryptImpl;
        } else {
          console.error("[liv-web/data-descriptions]\u8BF7\u68C0\u67E5\u4F20\u5165\u7684\u89E3\u5BC6\u903B\u8F91\u662F\u5426\u6B63\u786E\uFF01");
        }
      } else {
        console.error("[liv-web/data-descriptions]\u5F53fieldType\u4E3Aciphertext\u65F6\uFF0C\u9700\u8981\u4F20\u5165\u5177\u4F53\u7684\u89E3\u5BC6\u903B\u8F91\uFF01");
      }
    }
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createBlock(
        vue.unref(elementPlus.ElDescriptions),
        vue.mergeProps({ class: "liv-data-descriptions" }, vue.unref(globalProps)),
        vue.createSlots({
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(validFields.value, (field) => {
                return vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  {
                    key: field.prop
                  },
                  [
                    !field.fieldType || field.fieldType === "text" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 0,
                        "class-name": "liv-data-descriptions__text",
                        "label-align": "center",
                        "min-width": "7vw",
                        ref_for: true
                      }, field),
                      {
                        default: vue.withCtx(() => {
                          var _a;
                          return [
                            vue.createTextVNode(
                              vue.toDisplayString(getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value)),
                              1
                              /* TEXT */
                            )
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "ciphertext" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 1,
                        "class-name": "liv-data-descriptions__ciphertext",
                        "label-align": "center",
                        "min-width": "7vw",
                        ref_for: true
                      }, field),
                      {
                        default: vue.withCtx(() => {
                          var _a;
                          return [
                            vue.createTextVNode(
                              vue.toDisplayString(verifyInfoMap.value[field.prop].decrypted ? verifyInfoMap.value[field.prop].plaintext : getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value)) + " ",
                              1
                              /* TEXT */
                            ),
                            vue.createVNode(
                              vue.unref(elementPlus.ElIcon),
                              null,
                              {
                                default: vue.withCtx(() => [
                                  verifyInfoMap.value[field.prop].decrypted ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.View), {
                                    key: 0,
                                    onClick: ($event) => resetCiphertext(field)
                                  }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.Hide), {
                                    key: 1,
                                    onClick: ($event) => verifyInfoMap.value[field.prop].visible = true
                                  }, null, 8, ["onClick"]))
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            ),
                            vue.createVNode(verify_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({ ref_for: true }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps))), {
                              modelValue: verifyInfoMap.value[field.prop].visible,
                              "onUpdate:modelValue": ($event) => verifyInfoMap.value[field.prop].visible = $event,
                              onSuccess: ($event) => verifySuccess($event, field)
                            }), null, 16, ["modelValue", "onUpdate:modelValue", "onSuccess"])
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "tag" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 2,
                        "class-name": "liv-data-descriptions__tag",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a;
                          return [
                            vue.createVNode(vue.unref(elementPlus.ElTag), vue.mergeProps({ ref_for: true }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps))), {
                              type: typeof field.type === "function" ? field.type((_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value) : field.type
                            }), {
                              default: vue.withCtx(() => {
                                var _a2;
                                return [
                                  vue.createTextVNode(
                                    vue.toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
                                    1
                                    /* TEXT */
                                  )
                                ];
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, 1040, ["type"])
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "link" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 3,
                        "class-name": "liv-data-descriptions__link",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a;
                          return [
                            vue.createVNode(vue.unref(elementPlus.ElLink), vue.mergeProps({
                              type: "primary",
                              href: getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value),
                              target: "_blank",
                              ref_for: true
                            }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))), {
                              default: vue.withCtx(() => {
                                var _a2;
                                return [
                                  vue.createTextVNode(
                                    vue.toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
                                    1
                                    /* TEXT */
                                  )
                                ];
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, 1040, ["href"]),
                            vue.createVNode(vue.unref(elementPlus.ElButton), {
                              text: "",
                              type: "primary",
                              onClick: ($event) => {
                                var _a2;
                                return copyToClipboard(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value));
                              }
                            }, {
                              default: vue.withCtx(() => [..._cache[0] || (_cache[0] = [
                                vue.createTextVNode("\u590D\u5236")
                              ])]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["onClick"])
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "image" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 4,
                        "class-name": "liv-data-descriptions__image",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b, _c;
                          return [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList((_c = (_a = vue.unref(handleThumbUrls)) != null ? _a : vue.unref(handleFileUrls)) == null ? void 0 : _c(
                                (_b = componentData.value) == null ? void 0 : _b[field.prop]
                              ), (image, index) => {
                                var _a2, _b2;
                                return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImage), vue.mergeProps({
                                  key: image,
                                  "preview-src-list": (_b2 = vue.unref(handleFileUrls)) == null ? void 0 : _b2((_a2 = componentData.value) == null ? void 0 : _a2[field.prop]),
                                  src: image,
                                  "initial-index": index,
                                  fit: "cover",
                                  "preview-teleported": "",
                                  "hide-on-click-modal": "",
                                  ref_for: true
                                }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))), null, 16, ["preview-src-list", "src", "initial-index"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "audio" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 5,
                        "class-name": "liv-data-descriptions__audio",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList((_b = vue.unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (audio) => {
                                return vue.openBlock(), vue.createElementBlock("audio", {
                                  key: audio,
                                  controls: "",
                                  src: audio
                                }, " \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 audio \u64AD\u653E\u5668\u3002 ", 8, _hoisted_1);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "video" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 6,
                        "class-name": "liv-data-descriptions__video",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList((_b = vue.unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (video) => {
                                return vue.openBlock(), vue.createElementBlock("video", {
                                  key: video,
                                  controls: "",
                                  src: video
                                }, " \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u64AD\u653E\u5668\u3002 ", 8, _hoisted_2);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "file" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 7,
                        "class-name": "liv-data-descriptions__file",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList((_b = vue.unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (url) => {
                                return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElLink), vue.mergeProps({
                                  key: url,
                                  type: "primary",
                                  href: url,
                                  ref_for: true
                                }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))), {
                                  default: vue.withCtx(() => {
                                    var _a2;
                                    return [
                                      vue.createTextVNode(
                                        vue.toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
                                        1
                                        /* TEXT */
                                      )
                                    ];
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1040, ["href"]);
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "qrcode" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 8,
                        "class-name": "liv-data-descriptions__qrcode",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            vue.createVNode(qrCode_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                              content: (_b = (_a = componentData.value) == null ? void 0 : _a[field.prop]) != null ? _b : "",
                              ref_for: true
                            }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))), null, 16, ["content"])
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "richText" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 9,
                        "class-name": "liv-data-descriptions__richtext",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => {
                          var _a;
                          return [
                            vue.createElementVNode(
                              "div",
                              {
                                class: "liv-data-descriptions__richtext--container",
                                style: vue.normalizeStyle({ height: field.richTextHeight })
                              },
                              [
                                vue.createElementVNode("div", vue.mergeProps({
                                  class: "liv-data-descriptions__richtext--text",
                                  ref_for: true
                                }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps))), {
                                  innerHTML: (_a = componentData.value) == null ? void 0 : _a[field.prop]
                                }), null, 16, _hoisted_3)
                              ],
                              4
                              /* STYLE */
                            )
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "slot" ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElDescriptionsItem),
                      vue.mergeProps({
                        key: 10,
                        "class-name": "liv-data-descriptions__slot",
                        "label-align": "center",
                        ref_for: true
                      }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(descriptionItem_mjs.descriptionItemProps)))),
                      {
                        default: vue.withCtx(() => [
                          vue.renderSlot(_ctx.$slots, field.prop, { data: componentData.value })
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
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
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )), [
        [vue.unref(elementPlus.vLoading), loading.value]
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=data-descriptions.vue2.js.map
