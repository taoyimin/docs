import { defineComponent, inject, computed, provide, shallowRef, isVNode, ref, useAttrs, useSlots, watchEffect, toValue, openBlock, createBlock, unref, mergeProps, withModifiers, withKeys, withCtx, createVNode, createElementBlock, Fragment, renderList, withDirectives, resolveDynamicComponent, createCommentVNode, createSlots, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { ElMessage, ElForm, formProps, ElConfigProvider, ElRow, ElCol, ElFormItem, ElButton } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { pick, omit } from 'lodash-es';
import '../../form-item/src/form-item.vue.mjs';
import '../../a-map/src/a-map.vue.mjs';
import '../../remove/index.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { DATA_FORM_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy, checkAuthoritys, sortByOrder } from '../../../utils/component/index.mjs';
import { injectCheckAuthority } from '../../../utils/inject/authority.mjs';
import { DATA_FORM_MODEL_KEY, DATA_FORM_AMAP_KEY, CIPHERTEXT_STATUS_KEY } from '../../../constants/inject/data-form.mjs';
import _sfc_main$1 from '../../form-item/src/form-item.vue2.mjs';
import { vRemove } from '../../remove/src/directive/index.mjs';
import _sfc_main$2 from '../../a-map/src/a-map.vue2.mjs';

const _hoisted_1 = { class: "liv-data-form__button" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivDataForm"
  },
  __name: "data-form",
  props: {
    model: { type: null, required: true },
    fields: { type: null, required: false, default: () => [] },
    inline: { type: Boolean, required: false, default: () => false },
    buttons: { type: null, required: false, default: () => [] },
    showReset: { type: Boolean, required: false, default: () => false },
    onSubmit: { type: Function, required: false },
    onSearch: { type: Function, required: false },
    onReset: { type: Function, required: false },
    onAdd: { type: Function, required: false },
    onBatchDelete: { type: Function, required: false },
    onBack: { type: Function, required: false }
  },
  setup(__props, { expose: __expose }) {
    const globalProps = inject(DATA_FORM_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(
      props,
      globalProps
    );
    const checkAuthority = injectCheckAuthority();
    const formModel = computed(() => {
      return { ...props.model };
    });
    provide(DATA_FORM_MODEL_KEY, formModel);
    const AMap = shallowRef();
    provide(DATA_FORM_AMAP_KEY, AMap);
    const containLocationPicker = computed(() => {
      return validFields.value.some((field) => {
        var _a, _b;
        if (Array.isArray(field)) {
          return field.some((subField) => {
            var _a2, _b2;
            if (isVNode(subField)) {
              return ((_a2 = subField == null ? void 0 : subField.props) == null ? void 0 : _a2["field-type"]) === "location" || ((_b2 = subField == null ? void 0 : subField.props) == null ? void 0 : _b2["fieldType"]) === "location";
            } else {
              return subField.fieldType === "location";
            }
          });
        } else {
          if (isVNode(field)) {
            return ((_a = field == null ? void 0 : field.props) == null ? void 0 : _a["field-type"]) === "location" || ((_b = field == null ? void 0 : field.props) == null ? void 0 : _b["fieldType"]) === "location";
          } else {
            return field.fieldType === "location";
          }
        }
      });
    });
    function mapLoaded(_mapInstance, AMapInstance) {
      AMap.value = AMapInstance;
    }
    const formRef = ref(null);
    const attrs = useAttrs();
    const slots = useSlots();
    const vNodes = computed(() => {
      return slots["default"] ? slots["default"]() : [];
    });
    const buttonLoadingStatus = ref({});
    const validFields = computed(() => {
      const fields = toValues(props.fields).filter(
        (field) => Array.isArray(field) || field.fieldType && field.show !== false && checkAuthoritys(checkAuthority, field.authority)
      ).map((field) => {
        if (Array.isArray(field)) {
          for (let i = field.length - 1; i >= 0; i--) {
            if (field[i].show === false) {
              field.splice(i, 1);
            }
          }
        }
        return field;
      });
      vNodes.value.forEach((vNode) => {
        var _a;
        const fieldIndex = vNode.props ? (_a = vNode.props["field-index"]) != null ? _a : vNode.props["fieldIndex"] : void 0;
        if (fieldIndex !== void 0 && fieldIndex < fields.length) {
          const field = fields[fieldIndex];
          if (Array.isArray(field)) {
            field.push(vNode);
          } else {
            fields.splice(fieldIndex, 0, [vNode]);
          }
        } else {
          fields.push([vNode]);
        }
      });
      return fields;
    });
    watchEffect(() => {
      const fields = toValues(props.fields);
      fields.forEach((field) => {
        if (Array.isArray(field)) {
          field.forEach((subField) => {
            if (subField.watchEffect) {
              watchEffect(() => {
                var _a;
                (_a = subField.watchEffect) == null ? void 0 : _a.call(subField, props.model, formRef.value);
              });
            }
          });
        } else {
          if (field.watchEffect) {
            watchEffect(() => {
              var _a;
              (_a = field.watchEffect) == null ? void 0 : _a.call(field, props.model, formRef.value);
            });
          }
        }
      });
    });
    watchEffect(() => {
      props.buttons.forEach((button) => {
        if (button.watchEffect) {
          watchEffect(() => {
            var _a;
            (_a = button.watchEffect) == null ? void 0 : _a.call(button, props.model, formRef.value);
          });
        }
      });
    });
    function toValues(refs) {
      return refs.map((item) => {
        const value = toValue(item);
        if (Array.isArray(value)) {
          return toValues(value);
        } else {
          return value;
        }
      });
    }
    const innerButtons = computed(() => {
      return [
        initInnerButton("onSubmit"),
        initInnerButton("onSearch"),
        initInnerButton("onReset"),
        initInnerButton("onAdd"),
        initInnerButton("onBatchDelete"),
        initInnerButton("onBack")
      ];
    });
    const validButtons = computed(() => {
      return innerButtons.value.concat(props.buttons).filter((button) => {
        return checkAuthoritys(checkAuthority, button.authority) && button.show !== false;
      }).sort((a, b) => sortByOrder(a.order, b.order)).map((button) => {
        if (!button.key) {
          button.key = Symbol();
        }
        return button;
      });
    });
    const innerButtonMap = {
      onSubmit: {
        name: "\u63D0\u4EA4",
        type: "primary",
        order: 10,
        validate: true,
        key: Symbol()
      },
      onSearch: {
        name: "\u67E5\u8BE2",
        type: "primary",
        order: 20,
        validate: true,
        key: Symbol()
      },
      onReset: {
        name: "\u91CD\u7F6E",
        type: "warning",
        order: 30,
        key: Symbol(),
        // 内部已实现重置逻辑，只需设置showReset属性为true即可
        onClick: () => resetFields()
      },
      onAdd: {
        name: "\u65B0\u589E",
        type: "success",
        order: 40,
        key: Symbol()
      },
      onBatchDelete: {
        name: "\u6279\u91CF\u5220\u9664",
        type: "danger",
        order: 50,
        key: Symbol()
      },
      onBack: {
        name: "\u8FD4\u56DE",
        order: 60,
        key: Symbol()
      }
    };
    function initInnerButton(type) {
      const button = {
        ...innerButtonMap[type]
      };
      if (props[type]) {
        button.onClick = props[type];
        button.show = true;
      } else {
        const key = Object.keys(attrs).find((key2) => key2.startsWith(type));
        const regex = /\((.*?)\)/;
        const matches = key == null ? void 0 : key.match(regex);
        if (matches && matches[1]) {
          button.onClick = attrs[key];
          button.authority = matches[1].split("|");
          button.show = true;
        } else {
          if (type === "onReset" && propsProxy.showReset === true) {
            button.show = true;
          } else {
            button.show = false;
          }
        }
      }
      return button;
    }
    function handleButtonClick(button) {
      var _a;
      if (button.validate) {
        (_a = formRef.value) == null ? void 0 : _a.validate((valid, _fields) => {
          if (valid) {
            triggerEvent(button);
          }
        });
      } else {
        triggerEvent(button);
      }
    }
    function triggerEvent(button) {
      var _a;
      const result = (_a = button.onClick) == null ? void 0 : _a.call(button, formatFormData(), formRef.value);
      if (result instanceof Promise) {
        buttonLoadingStatus.value[button.key] = true;
        result.then((res) => {
          if (typeof res === "string") {
            ElMessage.success(res);
          }
        }).catch((err) => {
          if (typeof err === "string") {
            ElMessage.error(err);
          } else {
            throw err;
          }
        }).finally(() => {
          buttonLoadingStatus.value[button.key] = false;
        });
      }
    }
    const ciphertextStatus = ref({});
    function getCiphertextProp(field) {
      var _a, _b, _c, _d;
      if (isVNode(field)) {
        return ((_c = (_a = field.props) == null ? void 0 : _a["field-type"]) != null ? _c : (_b = field.props) == null ? void 0 : _b["fieldType"]) === "ciphertext" ? (_d = field.props) == null ? void 0 : _d["prop"] : null;
      } else {
        return field.fieldType === "ciphertext" ? field.prop : null;
      }
    }
    const ciphertextKeys = computed(() => {
      return validFields.value.flatMap((field) => {
        if (Array.isArray(field)) {
          return field.map(getCiphertextProp).filter(Boolean);
        } else {
          return getCiphertextProp(field) ? [getCiphertextProp(field)] : [];
        }
      });
    });
    watchEffect(() => {
      ciphertextKeys.value.forEach((key) => {
        if (ciphertextStatus.value[key] === void 0) {
          if (formModel.value[key] === void 0 || formModel.value[key] === null || formModel.value[key] === "") {
            ciphertextStatus.value[key] = true;
          } else {
            ciphertextStatus.value[key] = false;
          }
        }
      });
    });
    provide(CIPHERTEXT_STATUS_KEY, ciphertextStatus);
    function formatFormData() {
      const temp = { ...props.model };
      Object.keys(temp).forEach((key) => {
        if (ciphertextStatus.value[key] === false) {
          delete temp[key];
        }
      });
      return temp;
    }
    function handleSubmit() {
      const searchButton = validButtons.value.find((button) => button.name === "\u67E5\u8BE2");
      if (!searchButton) return;
      handleButtonClick(searchButton);
    }
    function validate(callback) {
      return formRef.value.validate(callback);
    }
    function validateField(props2, callback) {
      return formRef.value.validateField(props2, callback);
    }
    function scrollToField(prop) {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.scrollToField(prop);
    }
    function clearValidate(props2) {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.clearValidate(props2);
    }
    function resetFields(props2) {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.resetFields(props2);
    }
    __expose({
      validate,
      validateField,
      resetFields,
      scrollToField,
      clearValidate
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElForm), mergeProps({
        ref_key: "formRef",
        ref: formRef,
        class: "liv-data-form",
        model: props.model,
        inline: unref(propsProxy).inline,
        onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"])),
        onKeyup: withKeys(handleSubmit, ["enter"])
      }, unref(pick)(unref(globalProps), Object.keys(unref(formProps)))), {
        default: withCtx(() => [
          createVNode(unref(ElConfigProvider), { locale: unref(zhCn) }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(validFields.value, (row) => {
                  return withDirectives((openBlock(), createBlock(
                    unref(ElRow),
                    { gutter: 20 },
                    {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(Array.isArray(row) ? row : [row], (field) => {
                            return withDirectives((openBlock(), createBlock(unref(ElCol), {
                              span: !isVNode(field) && field.span !== void 0 ? field.span : 24 / (Array.isArray(row) ? row.length : 1)
                            }, {
                              default: withCtx(() => [
                                isVNode(field) ? (openBlock(), createBlock(resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "location" && Array.isArray(field.prop) ? (openBlock(), createElementBlock(
                                  Fragment,
                                  { key: 1 },
                                  [
                                    field.prop.length === 2 ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                      key: 0,
                                      ref_for: true
                                    }, field, {
                                      modelValue: [props.model[field.prop[0]], props.model[field.prop[1]]],
                                      longitude: props.model[field.prop[0]],
                                      "onUpdate:longitude": ($event) => props.model[field.prop[0]] = $event,
                                      latitude: props.model[field.prop[1]],
                                      "onUpdate:latitude": ($event) => props.model[field.prop[1]] = $event
                                    }), null, 16, ["modelValue", "longitude", "onUpdate:longitude", "latitude", "onUpdate:latitude"])) : field.prop.length === 3 ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, field, {
                                      modelValue: [props.model[field.prop[0]], props.model[field.prop[1]]],
                                      longitude: props.model[field.prop[0]],
                                      "onUpdate:longitude": ($event) => props.model[field.prop[0]] = $event,
                                      latitude: props.model[field.prop[1]],
                                      "onUpdate:latitude": ($event) => props.model[field.prop[1]] = $event,
                                      address: props.model[field.prop[2]],
                                      "onUpdate:address": ($event) => props.model[field.prop[2]] = $event
                                    }), null, 16, ["modelValue", "longitude", "onUpdate:longitude", "latitude", "onUpdate:latitude", "address", "onUpdate:address"])) : createCommentVNode("v-if", true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : field.fieldType === "numberRange" && Array.isArray(field.prop) ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                  key: 2,
                                  ref_for: true
                                }, field, {
                                  modelValue: [props.model[field.prop[0]], props.model[field.prop[1]]],
                                  "min-value": props.model[field.prop[0]],
                                  "onUpdate:minValue": ($event) => props.model[field.prop[0]] = $event,
                                  "max-value": props.model[field.prop[1]],
                                  "onUpdate:maxValue": ($event) => props.model[field.prop[1]] = $event
                                }), null, 16, ["modelValue", "min-value", "onUpdate:minValue", "max-value", "onUpdate:maxValue"])) : field.fieldType === "slot" ? (openBlock(), createBlock(
                                  _sfc_main$1,
                                  mergeProps({
                                    key: 3,
                                    ref_for: true
                                  }, field),
                                  createSlots({
                                    _: 2
                                    /* DYNAMIC */
                                  }, [
                                    renderList(unref(omit)(_ctx.$slots, "default"), (_, name) => {
                                      return {
                                        name,
                                        fn: withCtx((slotData) => [
                                          renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData || {}))
                                        ])
                                      };
                                    })
                                  ]),
                                  1040
                                  /* FULL_PROPS, DYNAMIC_SLOTS */
                                )) : field.fieldType ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                  key: 4,
                                  ref_for: true
                                }, field, {
                                  modelValue: props.model[field.prop],
                                  "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                }), null, 16, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["span"])), [
                              [unref(vRemove), unref(propsProxy).inline]
                            ]);
                          }),
                          256
                          /* UNKEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )), [
                    [unref(vRemove), unref(propsProxy).inline]
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              createVNode(unref(ElFormItem), { "label-width": "0" }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(validButtons.value, (button) => {
                        var _a;
                        return openBlock(), createElementBlock(
                          Fragment,
                          {
                            key: button.name
                          },
                          [
                            button.show !== false ? (openBlock(), createBlock(unref(ElButton), mergeProps({
                              key: 0,
                              onClick: ($event) => handleButtonClick(button),
                              loading: (_a = buttonLoadingStatus.value[button.key]) != null ? _a : false,
                              ref_for: true
                            }, unref(omit)(button, ["onClick"])), {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString(button.name),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1040, ["onClick", "loading"])) : createCommentVNode("v-if", true)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])), [
                    [unref(vRemove), unref(propsProxy).inline]
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              containLocationPicker.value ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                style: { "display": "none" },
                onLoaded: mapLoaded
              })) : createCommentVNode("v-if", true)
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["locale"])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "inline"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=data-form.vue2.mjs.map
