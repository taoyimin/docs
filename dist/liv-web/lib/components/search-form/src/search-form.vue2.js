'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var zhCn = require('element-plus/dist/locale/zh-cn.mjs');
var iconsVue = require('@element-plus/icons-vue');
require('../../form-item/src/form-item.vue.js');
var lodashEs = require('lodash-es');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var authority = require('../../../utils/inject/authority.js');
var formItem_vue_vue_type_script_setup_true_lang = require('../../form-item/src/form-item.vue2.js');

const _hoisted_1 = {
  key: 0,
  class: "liv-search-form__content"
};
const _hoisted_2 = { class: "liv-search-form__content--form" };
const _hoisted_3 = ["data-single-line"];
const _hoisted_4 = { class: "liv-search-form__footer" };
const _hoisted_5 = { class: "el-upload__tip" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivSearchForm"
  },
  __name: "search-form",
  props: {
    model: { type: null, required: true },
    fields: { type: null, required: false, default: () => [] },
    column: { type: Number, required: false, default: () => 3 },
    buttons: { type: Array, required: false, default: () => [] },
    showReset: { type: Boolean, required: false, default: () => true },
    importOptions: { type: Object, required: false, default: () => {
      return {
        extensions: ["xls", "xlsx"]
      };
    } },
    onSearch: { type: Function, required: false },
    onReset: { type: Function, required: false },
    onAdd: { type: Function, required: false },
    onBatchDelete: { type: Function, required: false },
    onImport: { type: Function, required: false },
    onExport: { type: Function, required: false },
    onTemplate: { type: Function, required: false }
  },
  setup(__props, { expose: __expose }) {
    const globalProps = vue.inject(component.SEARCH_FORM_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(
      props,
      globalProps
    );
    const checkAuthority = authority.injectCheckAuthority();
    const attrs = vue.useAttrs();
    const isExpand = vue.ref(false);
    const formRef = vue.ref(null);
    const slots = vue.useSlots();
    const vNodes = vue.computed(() => {
      return slots["default"] ? slots["default"]() : [];
    });
    const buttonLoadingStatus = vue.ref({});
    const fileList = vue.ref([]);
    const importDialogVisible = vue.ref(false);
    function handleDownloadTemplate() {
      const result = propsProxy.onTemplate();
      if (typeof result === "string") {
        const link = document.createElement("a");
        link.href = result;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (result instanceof Promise) {
        result.then();
      }
    }
    function fileChange(uploadFile) {
      var _a, _b, _c;
      if (((_a = propsProxy.importOptions) == null ? void 0 : _a.extensions) && !propsProxy.importOptions.extensions.find((ext) => uploadFile.name.endsWith(ext))) {
        elementPlus.ElMessage.error(
          `\u53EA\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u6269\u5C55\u540D\u4E3A${(_b = propsProxy.importOptions) == null ? void 0 : _b.extensions.join("\u3001")}\u7684\u6587\u4EF6\uFF01`
        );
        fileList.value = [];
        return;
      } else if (((_c = propsProxy.importOptions) == null ? void 0 : _c.maxSize) && uploadFile.size && uploadFile.size > propsProxy.importOptions.maxSize) {
        elementPlus.ElMessage.error(
          `\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${propsProxy.importOptions.maxSize >= 1024 * 1024 ? propsProxy.importOptions.maxSize / 1024 / 1024 + "M" : propsProxy.importOptions.maxSize / 1024 + "KB"}\uFF01`
        );
        fileList.value = [];
        return;
      }
      importDialogVisible.value = false;
      buttonLoadingStatus.value[importButton.key] = true;
      const result = importButton.handleImport(uploadFile.raw);
      if (result instanceof Promise) {
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
          buttonLoadingStatus.value[importButton.key] = false;
          fileList.value = [];
        });
      }
    }
    const validFields = vue.computed(() => {
      const fields = props.fields.filter(
        (field) => field.fieldType && field.show !== false && index.checkAuthoritys(checkAuthority, field.authority)
      );
      vNodes.value.forEach((vNode) => {
        var _a;
        const fieldIndex = vNode.props ? (_a = vNode.props["field-index"]) != null ? _a : vNode.props["fieldIndex"] : void 0;
        if (fieldIndex !== void 0 && fieldIndex < fields.length) {
          fields.splice(fieldIndex, 0, vNode);
        } else {
          fields.push(vNode);
        }
      });
      return lodashEs.chunk(fields, propsProxy.column);
    });
    const expandFields = vue.computed(() => {
      return validFields.value.slice(0, 2);
    });
    const foldFields = vue.computed(() => {
      return validFields.value.slice(2);
    });
    vue.watchEffect(() => {
      props.fields.forEach((field) => {
        if (field.watchEffect) {
          vue.watchEffect(() => {
            var _a;
            (_a = field.watchEffect) == null ? void 0 : _a.call(field, props.model, formRef.value);
          });
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
    const innerButtonMap = {
      onSearch: {
        name: "\u67E5\u8BE2",
        type: "primary",
        order: 1,
        validate: true,
        icon: iconsVue.Search,
        key: Symbol()
      },
      onReset: {
        name: "\u91CD\u7F6E",
        type: "warning",
        order: 2,
        icon: iconsVue.RefreshRight,
        key: Symbol(),
        onClick: () => resetFields()
      },
      onAdd: {
        name: "\u65B0\u589E",
        type: "success",
        order: 10,
        icon: iconsVue.Plus,
        key: Symbol()
      },
      onBatchDelete: {
        name: "\u6279\u91CF\u5220\u9664",
        type: "danger",
        order: 20,
        icon: iconsVue.Delete,
        key: Symbol()
      },
      onImport: {
        name: "\u5BFC\u5165",
        type: "primary",
        order: 30,
        icon: iconsVue.Folder,
        key: Symbol(),
        onClick: () => {
          importDialogVisible.value = true;
        }
      },
      onExport: {
        name: "\u5BFC\u51FA",
        type: "primary",
        order: 40,
        icon: iconsVue.Folder,
        key: Symbol(),
        position: "right",
        plain: false
      }
    };
    function initInnerButton(type) {
      const button = {
        ...innerButtonMap[type]
      };
      if (props[type]) {
        if (type !== "onImport") {
          button.onClick = props[type];
        } else {
          button.handleImport = props[type];
        }
      } else {
        const key = Object.keys(attrs).find((key2) => key2.startsWith(type));
        const regex = /\((.*?)\)/;
        const matches = key == null ? void 0 : key.match(regex);
        if (matches && matches[1]) {
          if (type !== "onImport") {
            button.onClick = attrs[key];
          } else {
            button.handleImport = attrs[key];
          }
          button.authority = matches[1].split("|");
        } else {
          button.show = false;
        }
      }
      return button;
    }
    const innerRightButtons = vue.computed(() => {
      if (propsProxy.showReset) {
        return [initInnerButton("onSearch"), initInnerButton("onReset")];
      } else {
        return [initInnerButton("onSearch")];
      }
    });
    const validRightButtons = vue.computed(() => {
      return innerRightButtons.value.filter((button) => {
        return index.checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => index.sortByOrder(a.order, b.order));
    });
    const importButton = initInnerButton("onImport");
    const innerBottomButtons = vue.computed(() => {
      return [
        initInnerButton("onAdd"),
        initInnerButton("onBatchDelete"),
        importButton,
        initInnerButton("onExport")
      ];
    });
    const validBottomLeftButtons = vue.computed(() => {
      return innerBottomButtons.value.concat(props.buttons).filter((button) => {
        return button.position !== "right" && button.show !== false && index.checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => index.sortByOrder(a.order, b.order)).map((button) => {
        if (!button.key) {
          button.key = Symbol();
        }
        return button;
      });
    });
    const validBottomRightButtons = vue.computed(() => {
      return innerBottomButtons.value.concat(props.buttons).filter((button) => {
        return button.position === "right" && button.show !== false && index.checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => index.sortByOrder(a.order, b.order)).map((button) => {
        if (!button.key) {
          button.key = Symbol();
        }
        return button;
      });
    });
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
      if (button === importButton) {
        button.onClick();
      } else {
        const result = (_a = button.onClick) == null ? void 0 : _a.call(button, props.model, formRef.value);
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
    }
    function handleKeyupEnter() {
      const searchButton = validRightButtons.value.find((button) => button.name === "\u67E5\u8BE2");
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
      var _a;
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElForm), vue.mergeProps({
        model: props.model,
        ref_key: "formRef",
        ref: formRef,
        class: "liv-search-form",
        "validate-on-rule-change": false
      }, vue.unref(lodashEs.pick)(vue.unref(globalProps), Object.keys(vue.unref(elementPlus.formProps))), {
        labelWidth: "auto",
        "label-position": (_a = vue.unref(propsProxy).labelPosition) != null ? _a : "right",
        inline: false,
        onKeyup: vue.withKeys(handleKeyupEnter, ["enter"])
      }), {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElConfigProvider), { locale: vue.unref(zhCn) }, {
            default: vue.withCtx(() => [
              validFields.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
                vue.createElementVNode("div", _hoisted_2, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(expandFields.value, (row) => {
                      return vue.openBlock(), vue.createBlock(
                        vue.unref(elementPlus.ElRow),
                        { gutter: 20 },
                        {
                          default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(
                              vue.Fragment,
                              null,
                              vue.renderList(row, (field) => {
                                return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCol), {
                                  span: 24 / vue.unref(propsProxy).column
                                }, {
                                  default: vue.withCtx(() => [
                                    vue.isVNode(field) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "numberRange" && Array.isArray(field.prop) ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                      key: 1,
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
                                        key: 2,
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
                                      key: 3,
                                      ref_for: true
                                    }, field, {
                                      modelValue: props.model[field.prop],
                                      "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true)
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["span"]);
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
                      );
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  )),
                  vue.createVNode(vue.unref(elementPlus.ElCollapseTransition), null, {
                    default: vue.withCtx(() => [
                      vue.withDirectives(vue.createElementVNode(
                        "div",
                        null,
                        [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(foldFields.value, (row) => {
                              return vue.openBlock(), vue.createBlock(
                                vue.unref(elementPlus.ElRow),
                                { gutter: 20 },
                                {
                                  default: vue.withCtx(() => [
                                    (vue.openBlock(true), vue.createElementBlock(
                                      vue.Fragment,
                                      null,
                                      vue.renderList(row, (field) => {
                                        return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCol), {
                                          span: 24 / vue.unref(propsProxy).column
                                        }, {
                                          default: vue.withCtx(() => [
                                            vue.isVNode(field) ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "numberRange" ? (vue.openBlock(), vue.createBlock(formItem_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                              key: 1,
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
                                                key: 2,
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
                                              key: 3,
                                              ref_for: true
                                            }, field, {
                                              modelValue: props.model[field.prop],
                                              "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true)
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        }, 1032, ["span"]);
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
                              );
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ],
                        512
                        /* NEED_PATCH */
                      ), [
                        [vue.vShow, isExpand.value]
                      ])
                    ]),
                    _: 3
                    /* FORWARDED */
                  })
                ]),
                vue.createVNode(vue.unref(elementPlus.ElFormItem), { class: "liv-search-form__content--expand" }, {
                  default: vue.withCtx(() => [
                    foldFields.value.length > 0 ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                      key: 0,
                      link: "",
                      type: "primary",
                      onClick: _cache[0] || (_cache[0] = ($event) => isExpand.value = !isExpand.value)
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(
                          vue.toDisplayString(isExpand.value ? "\u6536\u7F29" : "\u5C55\u5F00") + " ",
                          1
                          /* TEXT */
                        ),
                        vue.createVNode(vue.unref(elementPlus.ElIcon), { "data-expand": isExpand.value }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(iconsVue.ArrowDown))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["data-expand"])
                      ]),
                      _: 1
                      /* STABLE */
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(vue.unref(elementPlus.ElFormItem), { class: "liv-search-form__content--divider" }, {
                  default: vue.withCtx(() => _cache[3] || (_cache[3] = [
                    vue.createElementVNode(
                      "div",
                      null,
                      null,
                      -1
                      /* HOISTED */
                    )
                  ])),
                  _: 1
                  /* STABLE */
                }),
                vue.createElementVNode("div", {
                  class: "liv-search-form__content--button",
                  "data-single-line": expandFields.value.length <= 1
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(validRightButtons.value, (button) => {
                      var _a2, _b;
                      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, vue.unref(lodashEs.omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : true,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(button.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1040, ["onClick", "plain", "loading"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 8, _hoisted_3)
              ])) : vue.createCommentVNode("v-if", true),
              validFields.value.length > 0 ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElDivider), {
                key: 1,
                class: "liv-search-form__divider"
              })) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("div", _hoisted_4, [
                vue.createElementVNode("div", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(validBottomLeftButtons.value, (button) => {
                      var _a2, _b;
                      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, vue.unref(lodashEs.omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : true,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(button.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1040, ["onClick", "plain", "loading"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("div", null, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(validBottomRightButtons.value, (button) => {
                      var _a2, _b;
                      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, vue.unref(lodashEs.omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : false,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(button.name),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1040, ["onClick", "plain", "loading"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createVNode(vue.unref(elementPlus.ElDialog), {
                title: "\u5BFC\u5165",
                modelValue: importDialogVisible.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => importDialogVisible.value = $event),
                class: "liv-search-form__dialog"
              }, {
                default: vue.withCtx(() => {
                  var _a2;
                  return [
                    vue.createVNode(vue.unref(elementPlus.ElUpload), {
                      "file-list": fileList.value,
                      "onUpdate:fileList": _cache[1] || (_cache[1] = ($event) => fileList.value = $event),
                      drag: "",
                      "auto-upload": false,
                      "show-file-list": false,
                      limit: 1,
                      onChange: fileChange
                    }, vue.createSlots({
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "el-icon--upload" }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(iconsVue.UploadFilled))
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        _cache[4] || (_cache[4] = vue.createElementVNode(
                          "div",
                          { class: "el-upload__text" },
                          [
                            vue.createTextVNode("\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904 \u6216\u8005 "),
                            vue.createElementVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")
                          ],
                          -1
                          /* HOISTED */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, [
                      ((_a2 = vue.unref(propsProxy).importOptions) == null ? void 0 : _a2.tip) ? {
                        name: "tip",
                        fn: vue.withCtx(() => [
                          vue.createElementVNode(
                            "div",
                            _hoisted_5,
                            vue.toDisplayString(vue.unref(propsProxy).importOptions.tip),
                            1
                            /* TEXT */
                          )
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["file-list"]),
                    props.onTemplate ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRow), {
                      key: 0,
                      justify: "center",
                      class: "liv-search-form__dialog--template"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(elementPlus.ElButton), {
                          type: "primary",
                          onClick: handleDownloadTemplate
                        }, {
                          default: vue.withCtx(() => _cache[5] || (_cache[5] = [
                            vue.createTextVNode("\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F")
                          ])),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })) : vue.createCommentVNode("v-if", true)
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["modelValue"])
            ]),
            _: 3
            /* FORWARDED */
          }, 8, ["locale"])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "label-position"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=search-form.vue2.js.map
