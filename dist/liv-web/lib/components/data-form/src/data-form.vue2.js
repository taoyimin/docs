'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var zhCn = require('element-plus/dist/locale/zh-cn.mjs');
var lodashEs = require('lodash-es');
require('../../form-item/src/form-item.vue.js');
require('../../a-map/src/a-map.vue.js');
require('../../remove/index.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var authority = require('../../../utils/inject/authority.js');
var dataForm = require('../../../constants/inject/data-form.js');
var formItem_vue_vue_type_script_setup_true_lang = require('../../form-item/src/form-item.vue2.js');
var index$1 = require('../../remove/src/directive/index.js');
var aMap_vue_vue_type_script_setup_true_lang = require('../../a-map/src/a-map.vue2.js');

const _hoisted_1 = { class: "liv-data-form__button" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
    const globalProps = vue.inject(component.DATA_FORM_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(
      props,
      globalProps
    );
    const checkAuthority = authority.injectCheckAuthority();
    const formModel = vue.computed(() => {
      return { ...props.model };
    });
    vue.provide(dataForm.DATA_FORM_MODEL_KEY, formModel);
    const AMap = vue.shallowRef();
    vue.provide(dataForm.DATA_FORM_AMAP_KEY, AMap);
    const containLocationPicker = vue.computed(() => {
      return validFields.value.some((field) => {
        var _a, _b;
        if (Array.isArray(field)) {
          return field.some((subField) => {
            var _a2, _b2;
            if (vue.isVNode(subField)) {
              return ((_a2 = subField == null ? void 0 : subField.props) == null ? void 0 : _a2["field-type"]) === "location" || ((_b2 = subField == null ? void 0 : subField.props) == null ? void 0 : _b2["fieldType"]) === "location";
            } else {
              return subField.fieldType === "location";
            }
          });
        } else {
          if (vue.isVNode(field)) {
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
    const formRef = vue.ref(null);
    const attrs = vue.useAttrs();
    const slots = vue.useSlots();
    const vNodes = vue.computed(() => {
      return slots["default"] ? slots["default"]() : [];
    });
    const buttonLoadingStatus = vue.ref({});
    const validFields = vue.computed(() => {
      const fields = toValues(props.fields).filter(
        (field) => Array.isArray(field) || field.fieldType && field.show !== false && index.checkAuthoritys(checkAuthority, field.authority)
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
    vue.watchEffect(() => {
      const fields = toValues(props.fields);
      fields.forEach((field) => {
        if (Array.isArray(field)) {
          field.forEach((subField) => {
            if (subField.watchEffect) {
              vue.watchEffect(() => {
                var _a;
                (_a = subField.watchEffect) == null ? void 0 : _a.call(subField, props.model, formRef.value);
              });
            }
          });
        } else {
          if (field.watchEffect) {
            vue.watchEffect(() => {
              var _a;
              (_a = field.watchEffect) == null ? void 0 : _a.call(field, props.model, formRef.value);
            });
          }
        }
      });
    });
    vue.watchEffect(() => {
      props.buttons.forEach((button) => {
        if (button.watchEffect) {
          vue.watchEffect(() => {
            var _a;
            (_a = button.watchEffect) == null ? void 0 : _a.call(button, props.model, formRef.value);
          });
        }
      });
    });
    function toValues(refs) {
      return refs.map((item) => {
        const value = vue.toValue(item);
        if (Array.isArray(value)) {
          return toValues(value);
        } else {
          return value;
        }
      });
    }
    const innerButtons = vue.computed(() => {
      return [
        initInnerButton("onSubmit"),
        initInnerButton("onSearch"),
        initInnerButton("onReset"),
        initInnerButton("onAdd"),
        initInnerButton("onBatchDelete"),
        initInnerButton("onBack")
      ];
    });
    const validButtons = vue.computed(() => {
      return innerButtons.value.concat(props.buttons).filter((button) => {
        return index.checkAuthoritys(checkAuthority, button.authority) && button.show !== false;
      }).sort((a, b) => index.sortByOrder(a.order, b.order)).map((button) => {
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
            elementPlus.ElMessage.success(res);
          }
        }).catch((err) => {
          if (typeof err === "string") {
            elementPlus.ElMessage.error(err);
          } else {
            throw err;
          }
        }).finally(() => {
          buttonLoadingStatus.value[button.key] = false;
        });
      }
    }
    const ciphertextStatus = vue.ref({});
    function getCiphertextProp(field) {
      var _a, _b, _c, _d;
      if (vue.isVNode(field)) {
        return ((_c = (_a = field.props) == null ? void 0 : _a["field-type"]) != null ? _c : (_b = field.props) == null ? void 0 : _b["fieldType"]) === "ciphertext" ? (_d = field.props) == null ? void 0 : _d["prop"] : null;
      } else {
        return field.fieldType === "ciphertext" ? field.prop : null;
      }
    }
    const ciphertextKeys = vue.computed(() => {
      return validFields.value.flatMap((field) => {
        if (Array.isArray(field)) {
          return field.map(getCiphertextProp).filter(Boolean);
        } else {
          return getCiphertextProp(field) ? [getCiphertextProp(field)] : [];
        }
      });
    });
    vue.watchEffect(() => {
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
    vue.provide(dataForm.CIPHERTEXT_STATUS_KEY, ciphertextStatus);
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
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElForm), vue.mergeProps({
        ref_key: "formRef",
        ref: formRef,
        class: "liv-data-form",
        model: props.model,
        inline: vue.unref(propsProxy).inline,
        onSubmit: _cache[0] || (_cache[0] = vue.withModifiers(() => {
        }, ["prevent"])),
        onKeyup: vue.withKeys(handleSubmit, ["enter"])
      }, vue.unref(lodashEs.pick)(vue.unref(globalProps), Object.keys(vue.unref(elementPlus.formProps)))), {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElConfigProvider), { locale: vue.unref(zhCn) }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(validFields.value, (row) => {
                  return vue.withDirectives((vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElRow),
                    { gutter: 20 },
                    {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(Array.isArray(row) ? row : [row], (field) => {
                            return vue.withDirectives((vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCol), {
                              span: !vue.isVNode(field) && field.span !== void 0 ? field.span : 24 / (Array.isArray(row) ? row.length : 1)
                            }, {
                              default: vue.withCtx(() => [
                                vue.isVNode(field) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "location" && Array.isArray(field.prop) ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 1 },
                                  [
                                    field.prop.length === 2 ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                      key: 0,
                                      ref_for: true
                                    }, field, {
                                      modelValue: [props.model[field.prop[0]], props.model[field.prop[1]]],
                                      longitude: props.model[field.prop[0]],
                                      "onUpdate:longitude": ($event) => props.model[field.prop[0]] = $event,
                                      latitude: props.model[field.prop[1]],
                                      "onUpdate:latitude": ($event) => props.model[field.prop[1]] = $event
                                    }), null, 16, ["modelValue", "longitude", "onUpdate:longitude", "latitude", "onUpdate:latitude"])) : field.prop.length === 3 ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
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
                                    }), null, 16, ["modelValue", "longitude", "onUpdate:longitude", "latitude", "onUpdate:latitude", "address", "onUpdate:address"])) : vue.createCommentVNode("v-if", true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : field.fieldType === "numberRange" && Array.isArray(field.prop) ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                  key: 2,
                                  ref_for: true
                                }, field, {
                                  modelValue: [props.model[field.prop[0]], props.model[field.prop[1]]],
                                  "min-value": props.model[field.prop[0]],
                                  "onUpdate:minValue": ($event) => props.model[field.prop[0]] = $event,
                                  "max-value": props.model[field.prop[1]],
                                  "onUpdate:maxValue": ($event) => props.model[field.prop[1]] = $event
                                }), null, 16, ["modelValue", "min-value", "onUpdate:minValue", "max-value", "onUpdate:maxValue"])) : field.fieldType === "slot" ? (vue.openBlock(), vue.createBlock(
                                  formItem_vue_vue_type_script_setup_true_lang.default,
                                  vue.mergeProps({
                                    key: 3,
                                    ref_for: true
                                  }, field),
                                  vue.createSlots({
                                    _: 2
                                    /* DYNAMIC */
                                  }, [
                                    vue.renderList(vue.unref(lodashEs.omit)(_ctx.$slots, "default"), (_, name) => {
                                      return {
                                        name,
                                        fn: vue.withCtx((slotData) => [
                                          vue.renderSlot(_ctx.$slots, name, vue.mergeProps({ ref_for: true }, slotData || {}))
                                        ])
                                      };
                                    })
                                  ]),
                                  1040
                                  /* FULL_PROPS, DYNAMIC_SLOTS */
                                )) : field.fieldType ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                  key: 4,
                                  ref_for: true
                                }, field, {
                                  modelValue: props.model[field.prop],
                                  "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                }), null, 16, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["span"])), [
                              [vue.unref(index$1.vRemove), vue.unref(propsProxy).inline]
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
                    [vue.unref(index$1.vRemove), vue.unref(propsProxy).inline]
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              vue.createVNode(vue.unref(elementPlus.ElFormItem), { "label-width": "0" }, {
                default: vue.withCtx(() => [
                  vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(validButtons.value, (button) => {
                        var _a;
                        return vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          {
                            key: button.name
                          },
                          [
                            button.show !== false ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                              key: 0,
                              onClick: ($event) => handleButtonClick(button),
                              loading: (_a = buttonLoadingStatus.value[button.key]) != null ? _a : false,
                              ref_for: true
                            }, vue.unref(lodashEs.omit)(button, ["onClick"])), {
                              default: vue.withCtx(() => [
                                vue.createTextVNode(
                                  vue.toDisplayString(button.name),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1040, ["onClick", "loading"])) : vue.createCommentVNode("v-if", true)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])), [
                    [vue.unref(index$1.vRemove), vue.unref(propsProxy).inline]
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              containLocationPicker.value ? (vue.openBlock(), vue.createBlock(aMap_vue_vue_type_script_setup_true_lang.default, {
                key: 0,
                style: { "display": "none" },
                onLoaded: mapLoaded
              })) : vue.createCommentVNode("v-if", true)
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

exports.default = _sfc_main;
//# sourceMappingURL=data-form.vue2.js.map
