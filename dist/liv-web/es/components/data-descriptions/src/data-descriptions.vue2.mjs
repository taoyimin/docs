import { defineComponent, inject, computed, toValue, ref, watch, withDirectives, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, createVNode, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, normalizeProps, guardReactiveProps } from 'vue';
import { ElDescriptions, ElDescriptionsItem, ElIcon, ElTag, ElLink, ElButton, ElImage, vLoading } from 'element-plus';
import { View, Hide } from '@element-plus/icons-vue';
import { descriptionItemProps } from 'element-plus/es/components/descriptions/src/description-item.mjs';
import { omit, pick } from 'lodash-es';
import '../../qr-code/src/qr-code.vue.mjs';
import '../../verify/src/verify.vue.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { injectCheckAuthority } from '../../../utils/inject/authority.mjs';
import { injectHandleFileUrls, injectHandleThumbUrls } from '../../../utils/inject/file.mjs';
import { DATA_DESCRIPTIONS_KEY } from '../../../constants/inject/component.mjs';
import { checkAuthoritys } from '../../../utils/component/index.mjs';
import _sfc_main$1 from '../../verify/src/verify.vue2.mjs';
import _sfc_main$2 from '../../qr-code/src/qr-code.vue2.mjs';

const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["innerHTML"];
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivDataDescriptions"
  },
  __name: "data-descriptions",
  props: {
    data: { type: null, required: false, default: () => ({}) },
    fields: { type: null, required: true }
  },
  setup(__props) {
    const checkAuthority = injectCheckAuthority();
    const handleFileUrls = injectHandleFileUrls();
    const handleThumbUrls = injectHandleThumbUrls();
    const globalProps = inject(DATA_DESCRIPTIONS_KEY, {});
    const props = __props;
    const validFields = computed(() => {
      return toValue(props.fields).filter((field) => {
        return checkAuthoritys(checkAuthority, field.authority);
      });
    });
    const loading = ref(false);
    const componentData = ref();
    watch(
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
    const verifyInfoMap = ref({});
    watch(
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
    watch(
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
      return withDirectives((openBlock(), createBlock(
        unref(ElDescriptions),
        mergeProps({ class: "liv-data-descriptions" }, unref(globalProps)),
        createSlots({
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(validFields.value, (field) => {
                return openBlock(), createElementBlock(
                  Fragment,
                  {
                    key: field.prop
                  },
                  [
                    !field.fieldType || field.fieldType === "text" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 0,
                        "class-name": "liv-data-descriptions__text",
                        "label-align": "center",
                        "min-width": "7vw",
                        ref_for: true
                      }, field),
                      {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(
                              toDisplayString(getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value)),
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
                    )) : field.fieldType === "ciphertext" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 1,
                        "class-name": "liv-data-descriptions__ciphertext",
                        "label-align": "center",
                        "min-width": "7vw",
                        ref_for: true
                      }, field),
                      {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(
                              toDisplayString(verifyInfoMap.value[field.prop].decrypted ? verifyInfoMap.value[field.prop].plaintext : getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value)) + " ",
                              1
                              /* TEXT */
                            ),
                            createVNode(
                              unref(ElIcon),
                              null,
                              {
                                default: withCtx(() => [
                                  verifyInfoMap.value[field.prop].decrypted ? (openBlock(), createBlock(unref(View), {
                                    key: 0,
                                    onClick: ($event) => resetCiphertext(field)
                                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(Hide), {
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
                            createVNode(_sfc_main$1, mergeProps({ ref_for: true }, unref(omit)(field, Object.keys(unref(descriptionItemProps))), {
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
                    )) : field.fieldType === "tag" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 2,
                        "class-name": "liv-data-descriptions__tag",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(unref(ElTag), mergeProps({ ref_for: true }, unref(omit)(field, Object.keys(unref(descriptionItemProps))), {
                              type: typeof field.type === "function" ? field.type((_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value) : field.type
                            }), {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(
                                    toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
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
                    )) : field.fieldType === "link" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 3,
                        "class-name": "liv-data-descriptions__link",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(unref(ElLink), mergeProps({
                              type: "primary",
                              href: getFormatter(field, (_a = componentData.value) == null ? void 0 : _a[field.prop], componentData.value),
                              target: "_blank",
                              ref_for: true
                            }, unref(omit)(field, Object.keys(unref(descriptionItemProps)))), {
                              default: withCtx(() => {
                                var _a2;
                                return [
                                  createTextVNode(
                                    toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
                                    1
                                    /* TEXT */
                                  )
                                ];
                              }),
                              _: 2
                              /* DYNAMIC */
                            }, 1040, ["href"]),
                            createVNode(unref(ElButton), {
                              text: "",
                              type: "primary",
                              onClick: ($event) => {
                                var _a2;
                                return copyToClipboard(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value));
                              }
                            }, {
                              default: withCtx(() => [..._cache[0] || (_cache[0] = [
                                createTextVNode("\u590D\u5236")
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
                    )) : field.fieldType === "image" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 4,
                        "class-name": "liv-data-descriptions__image",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a, _b, _c;
                          return [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList((_c = (_a = unref(handleThumbUrls)) != null ? _a : unref(handleFileUrls)) == null ? void 0 : _c(
                                (_b = componentData.value) == null ? void 0 : _b[field.prop]
                              ), (image, index) => {
                                var _a2, _b2;
                                return openBlock(), createBlock(unref(ElImage), mergeProps({
                                  key: image,
                                  "preview-src-list": (_b2 = unref(handleFileUrls)) == null ? void 0 : _b2((_a2 = componentData.value) == null ? void 0 : _a2[field.prop]),
                                  src: image,
                                  "initial-index": index,
                                  fit: "cover",
                                  "preview-teleported": "",
                                  "hide-on-click-modal": "",
                                  ref_for: true
                                }, unref(omit)(field, Object.keys(unref(descriptionItemProps)))), null, 16, ["preview-src-list", "src", "initial-index"]);
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
                    )) : field.fieldType === "audio" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 5,
                        "class-name": "liv-data-descriptions__audio",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList((_b = unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (audio) => {
                                return openBlock(), createElementBlock("audio", {
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
                    )) : field.fieldType === "video" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 6,
                        "class-name": "liv-data-descriptions__video",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList((_b = unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (video) => {
                                return openBlock(), createElementBlock("video", {
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
                    )) : field.fieldType === "file" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 7,
                        "class-name": "liv-data-descriptions__file",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList((_b = unref(handleFileUrls)) == null ? void 0 : _b((_a = componentData.value) == null ? void 0 : _a[field.prop]), (url) => {
                                return openBlock(), createBlock(unref(ElLink), mergeProps({
                                  key: url,
                                  type: "primary",
                                  href: url,
                                  ref_for: true
                                }, unref(omit)(field, Object.keys(unref(descriptionItemProps)))), {
                                  default: withCtx(() => {
                                    var _a2;
                                    return [
                                      createTextVNode(
                                        toDisplayString(getFormatter(field, (_a2 = componentData.value) == null ? void 0 : _a2[field.prop], componentData.value)),
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
                    )) : field.fieldType === "qrcode" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 8,
                        "class-name": "liv-data-descriptions__qrcode",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createVNode(_sfc_main$2, mergeProps({
                              content: (_b = (_a = componentData.value) == null ? void 0 : _a[field.prop]) != null ? _b : "",
                              ref_for: true
                            }, unref(omit)(field, Object.keys(unref(descriptionItemProps)))), null, 16, ["content"])
                          ];
                        }),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : field.fieldType === "richText" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 9,
                        "class-name": "liv-data-descriptions__richtext",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createElementVNode(
                              "div",
                              {
                                class: "liv-data-descriptions__richtext--container",
                                style: normalizeStyle({ height: field.richTextHeight })
                              },
                              [
                                createElementVNode("div", mergeProps({
                                  class: "liv-data-descriptions__richtext--text",
                                  ref_for: true
                                }, unref(omit)(field, Object.keys(unref(descriptionItemProps))), {
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
                    )) : field.fieldType === "slot" ? (openBlock(), createBlock(
                      unref(ElDescriptionsItem),
                      mergeProps({
                        key: 10,
                        "class-name": "liv-data-descriptions__slot",
                        "label-align": "center",
                        ref_for: true
                      }, unref(pick)(field, Object.keys(unref(descriptionItemProps)))),
                      {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, field.prop, { data: componentData.value })
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : createCommentVNode("v-if", true)
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
          renderList(_ctx.$slots, (_, name) => {
            return {
              name,
              fn: withCtx((slotData) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData || {})))
              ])
            };
          })
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )), [
        [unref(vLoading), loading.value]
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=data-descriptions.vue2.mjs.map
