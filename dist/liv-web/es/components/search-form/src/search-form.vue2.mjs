import { defineComponent, inject, useAttrs, ref, useSlots, computed, watchEffect, openBlock, createBlock, unref, mergeProps, withKeys, withCtx, createVNode, createElementBlock, createElementVNode, Fragment, renderList, isVNode, resolveDynamicComponent, createSlots, renderSlot, createCommentVNode, withDirectives, vShow, createTextVNode, toDisplayString } from 'vue';
import { ElMessage, ElForm, formProps, ElConfigProvider, ElRow, ElCol, ElCollapseTransition, ElFormItem, ElButton, ElIcon, ElDivider, ElDialog, ElUpload } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { Search, RefreshRight, Plus, Delete, Folder, ArrowDown, UploadFilled } from '@element-plus/icons-vue';
import '../../form-item/src/form-item.vue.mjs';
import { chunk, pick, omit } from 'lodash-es';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { SEARCH_FORM_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy, checkAuthoritys, sortByOrder } from '../../../utils/component/index.mjs';
import { injectCheckAuthority } from '../../../utils/inject/authority.mjs';
import _sfc_main$1 from '../../form-item/src/form-item.vue2.mjs';

const _hoisted_1 = {
  key: 0,
  class: "liv-search-form__content"
};
const _hoisted_2 = { class: "liv-search-form__content--form" };
const _hoisted_3 = ["data-single-line"];
const _hoisted_4 = { class: "liv-search-form__footer" };
const _hoisted_5 = { class: "el-upload__tip" };
var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const globalProps = inject(SEARCH_FORM_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(
      props,
      globalProps
    );
    const checkAuthority = injectCheckAuthority();
    const attrs = useAttrs();
    const isExpand = ref(false);
    const formRef = ref(null);
    const slots = useSlots();
    const vNodes = computed(() => {
      return slots["default"] ? slots["default"]() : [];
    });
    const buttonLoadingStatus = ref({});
    const fileList = ref([]);
    const importDialogVisible = ref(false);
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
        ElMessage.error(
          `\u53EA\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u6269\u5C55\u540D\u4E3A${(_b = propsProxy.importOptions) == null ? void 0 : _b.extensions.join("\u3001")}\u7684\u6587\u4EF6\uFF01`
        );
        fileList.value = [];
        return;
      } else if (((_c = propsProxy.importOptions) == null ? void 0 : _c.maxSize) && uploadFile.size && uploadFile.size > propsProxy.importOptions.maxSize) {
        ElMessage.error(
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
            ElMessage.success(res);
          }
        }).catch((err) => {
          if (typeof err === "string") {
            ElMessage.error(err);
          } else {
            throw err;
          }
        }).finally(() => {
          buttonLoadingStatus.value[importButton.key] = false;
          fileList.value = [];
        });
      }
    }
    const validFields = computed(() => {
      const fields = props.fields.filter(
        (field) => field.fieldType && field.show !== false && checkAuthoritys(checkAuthority, field.authority)
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
      return chunk(fields, propsProxy.column);
    });
    const expandFields = computed(() => {
      return validFields.value.slice(0, 2);
    });
    const foldFields = computed(() => {
      return validFields.value.slice(2);
    });
    watchEffect(() => {
      props.fields.forEach((field) => {
        if (field.watchEffect) {
          watchEffect(() => {
            var _a;
            (_a = field.watchEffect) == null ? void 0 : _a.call(field, props.model, formRef.value);
          });
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
    const innerButtonMap = {
      onSearch: {
        name: "\u67E5\u8BE2",
        type: "primary",
        order: 1,
        validate: true,
        icon: Search,
        key: Symbol()
      },
      onReset: {
        name: "\u91CD\u7F6E",
        type: "warning",
        order: 2,
        icon: RefreshRight,
        key: Symbol(),
        onClick: () => resetFields()
      },
      onAdd: {
        name: "\u65B0\u589E",
        type: "success",
        order: 10,
        icon: Plus,
        key: Symbol()
      },
      onBatchDelete: {
        name: "\u6279\u91CF\u5220\u9664",
        type: "danger",
        order: 20,
        icon: Delete,
        key: Symbol()
      },
      onImport: {
        name: "\u5BFC\u5165",
        type: "primary",
        order: 30,
        icon: Folder,
        key: Symbol(),
        onClick: () => {
          importDialogVisible.value = true;
        }
      },
      onExport: {
        name: "\u5BFC\u51FA",
        type: "primary",
        order: 40,
        icon: Folder,
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
    const innerRightButtons = computed(() => {
      if (propsProxy.showReset) {
        return [initInnerButton("onSearch"), initInnerButton("onReset")];
      } else {
        return [initInnerButton("onSearch")];
      }
    });
    const validRightButtons = computed(() => {
      return innerRightButtons.value.filter((button) => {
        return checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => sortByOrder(a.order, b.order));
    });
    const importButton = initInnerButton("onImport");
    const innerBottomButtons = computed(() => {
      return [
        initInnerButton("onAdd"),
        initInnerButton("onBatchDelete"),
        importButton,
        initInnerButton("onExport")
      ];
    });
    const validBottomLeftButtons = computed(() => {
      return innerBottomButtons.value.concat(props.buttons).filter((button) => {
        return button.position !== "right" && button.show !== false && checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => sortByOrder(a.order, b.order)).map((button) => {
        if (!button.key) {
          button.key = Symbol();
        }
        return button;
      });
    });
    const validBottomRightButtons = computed(() => {
      return innerBottomButtons.value.concat(props.buttons).filter((button) => {
        return button.position === "right" && button.show !== false && checkAuthoritys(checkAuthority, button.authority);
      }).sort((a, b) => sortByOrder(a.order, b.order)).map((button) => {
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
      return openBlock(), createBlock(unref(ElForm), mergeProps({
        model: props.model,
        ref_key: "formRef",
        ref: formRef,
        class: "liv-search-form",
        "validate-on-rule-change": false
      }, unref(pick)(unref(globalProps), Object.keys(unref(formProps))), {
        labelWidth: "auto",
        "label-position": (_a = unref(propsProxy).labelPosition) != null ? _a : "right",
        inline: false,
        onKeyup: withKeys(handleKeyupEnter, ["enter"])
      }), {
        default: withCtx(() => [
          createVNode(unref(ElConfigProvider), { locale: unref(zhCn) }, {
            default: withCtx(() => [
              validFields.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
                createElementVNode("div", _hoisted_2, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(expandFields.value, (row) => {
                      return openBlock(), createBlock(
                        unref(ElRow),
                        { gutter: 20 },
                        {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList(row, (field) => {
                                return openBlock(), createBlock(unref(ElCol), {
                                  span: 24 / unref(propsProxy).column
                                }, {
                                  default: withCtx(() => [
                                    isVNode(field) ? (openBlock(), createBlock(resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "numberRange" && Array.isArray(field.prop) ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                      key: 1,
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
                                        key: 2,
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
                                      key: 3,
                                      ref_for: true
                                    }, field, {
                                      modelValue: props.model[field.prop],
                                      "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("v-if", true)
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
                  createVNode(unref(ElCollapseTransition), null, {
                    default: withCtx(() => [
                      withDirectives(createElementVNode(
                        "div",
                        null,
                        [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(foldFields.value, (row) => {
                              return openBlock(), createBlock(
                                unref(ElRow),
                                { gutter: 20 },
                                {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(
                                      Fragment,
                                      null,
                                      renderList(row, (field) => {
                                        return openBlock(), createBlock(unref(ElCol), {
                                          span: 24 / unref(propsProxy).column
                                        }, {
                                          default: withCtx(() => [
                                            isVNode(field) ? (openBlock(), createBlock(resolveDynamicComponent(field), { key: 0 })) : field.fieldType === "numberRange" ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                                              key: 1,
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
                                                key: 2,
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
                                              key: 3,
                                              ref_for: true
                                            }, field, {
                                              modelValue: props.model[field.prop],
                                              "onUpdate:modelValue": ($event) => props.model[field.prop] = $event
                                            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("v-if", true)
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
                        [vShow, isExpand.value]
                      ])
                    ]),
                    _: 3
                    /* FORWARDED */
                  })
                ]),
                createVNode(unref(ElFormItem), { class: "liv-search-form__content--expand" }, {
                  default: withCtx(() => [
                    foldFields.value.length > 0 ? (openBlock(), createBlock(unref(ElButton), {
                      key: 0,
                      link: "",
                      type: "primary",
                      onClick: _cache[0] || (_cache[0] = ($event) => isExpand.value = !isExpand.value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(
                          toDisplayString(isExpand.value ? "\u6536\u7F29" : "\u5C55\u5F00") + " ",
                          1
                          /* TEXT */
                        ),
                        createVNode(unref(ElIcon), { "data-expand": isExpand.value }, {
                          default: withCtx(() => [
                            createVNode(unref(ArrowDown))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["data-expand"])
                      ]),
                      _: 1
                      /* STABLE */
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(unref(ElFormItem), { class: "liv-search-form__content--divider" }, {
                  default: withCtx(() => _cache[3] || (_cache[3] = [
                    createElementVNode(
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
                createElementVNode("div", {
                  class: "liv-search-form__content--button",
                  "data-single-line": expandFields.value.length <= 1
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(validRightButtons.value, (button) => {
                      var _a2, _b;
                      return openBlock(), createBlock(unref(ElButton), mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, unref(omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : true,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(button.name),
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
              ])) : createCommentVNode("v-if", true),
              validFields.value.length > 0 ? (openBlock(), createBlock(unref(ElDivider), {
                key: 1,
                class: "liv-search-form__divider"
              })) : createCommentVNode("v-if", true),
              createElementVNode("div", _hoisted_4, [
                createElementVNode("div", null, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(validBottomLeftButtons.value, (button) => {
                      var _a2, _b;
                      return openBlock(), createBlock(unref(ElButton), mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, unref(omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : true,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(button.name),
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
                createElementVNode("div", null, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(validBottomRightButtons.value, (button) => {
                      var _a2, _b;
                      return openBlock(), createBlock(unref(ElButton), mergeProps({
                        key: button.name,
                        onClick: ($event) => handleButtonClick(button),
                        ref_for: true
                      }, unref(omit)(button, ["onClick"]), {
                        plain: (_a2 = button.plain) != null ? _a2 : false,
                        loading: (_b = buttonLoadingStatus.value[button.key]) != null ? _b : false
                      }), {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(button.name),
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
              createVNode(unref(ElDialog), {
                title: "\u5BFC\u5165",
                modelValue: importDialogVisible.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => importDialogVisible.value = $event),
                class: "liv-search-form__dialog"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(unref(ElUpload), {
                      "file-list": fileList.value,
                      "onUpdate:fileList": _cache[1] || (_cache[1] = ($event) => fileList.value = $event),
                      drag: "",
                      "auto-upload": false,
                      "show-file-list": false,
                      limit: 1,
                      onChange: fileChange
                    }, createSlots({
                      default: withCtx(() => [
                        createVNode(unref(ElIcon), { class: "el-icon--upload" }, {
                          default: withCtx(() => [
                            createVNode(unref(UploadFilled))
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        _cache[4] || (_cache[4] = createElementVNode(
                          "div",
                          { class: "el-upload__text" },
                          [
                            createTextVNode("\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904 \u6216\u8005 "),
                            createElementVNode("em", null, "\u70B9\u51FB\u4E0A\u4F20")
                          ],
                          -1
                          /* HOISTED */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, [
                      ((_a2 = unref(propsProxy).importOptions) == null ? void 0 : _a2.tip) ? {
                        name: "tip",
                        fn: withCtx(() => [
                          createElementVNode(
                            "div",
                            _hoisted_5,
                            toDisplayString(unref(propsProxy).importOptions.tip),
                            1
                            /* TEXT */
                          )
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1032, ["file-list"]),
                    props.onTemplate ? (openBlock(), createBlock(unref(ElRow), {
                      key: 0,
                      justify: "center",
                      class: "liv-search-form__dialog--template"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ElButton), {
                          type: "primary",
                          onClick: handleDownloadTemplate
                        }, {
                          default: withCtx(() => _cache[5] || (_cache[5] = [
                            createTextVNode("\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F")
                          ])),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })) : createCommentVNode("v-if", true)
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

export { _sfc_main as default };
//# sourceMappingURL=search-form.vue2.mjs.map
