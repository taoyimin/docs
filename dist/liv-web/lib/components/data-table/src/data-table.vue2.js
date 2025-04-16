'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var tableProps = require('element-plus/es/components/table/src/table/defaults.mjs');
var tableColumnProps = require('element-plus/es/components/table/src/table-column/defaults.mjs');
var iconsVue = require('@element-plus/icons-vue');
var lodashEs = require('lodash-es');
require('../../verify/src/verify.vue.js');
require('../../qr-code/src/qr-code.vue.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var authority = require('../../../utils/inject/authority.js');
var file = require('../../../utils/inject/file.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var verify_vue_vue_type_script_setup_true_lang = require('../../verify/src/verify.vue2.js');
var qrCode_vue_vue_type_script_setup_true_lang = require('../../qr-code/src/qr-code.vue2.js');

const _hoisted_1 = { class: "liv-table-column__ciphertext" };
const _hoisted_2 = { class: "liv-table-column__ciphertext--tooltip" };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  class: "liv-table-column__tags"
};
const _hoisted_5 = { class: "liv-table-column__operation" };
const _hoisted_6 = { class: "liv-table-column__operation--container" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivDataTable"
  },
  __name: "data-table",
  props: {
    data: { type: Array, required: false, default: () => [] },
    fields: { type: null, required: true },
    buttons: { type: null, required: false, default: () => [] },
    showButtonCount: { type: Number, required: false, default: () => 3 },
    onDetail: { type: Function, required: false },
    onEdit: { type: Function, required: false },
    onDelete: { type: Function, required: false }
  },
  setup(__props, { expose: __expose }) {
    const checkAuthority = authority.injectCheckAuthority();
    const handleFileUrls = file.injectHandleFileUrls();
    const handleThumbUrls = file.injectHandleThumbUrls();
    const globalProps = vue.inject(component.DATA_TABLE_KEY, {});
    const props = __props;
    const propsPoxy = index.getPropsPoxy(
      props,
      globalProps
    );
    const attrs = vue.useAttrs();
    const validFields = vue.computed(() => {
      return vue.toValue(props.fields).filter((field) => {
        return index.checkAuthoritys(checkAuthority, field.authority);
      });
    });
    const innerButtons = vue.computed(() => {
      return [initInnerButton("onDetail"), initInnerButton("onEdit"), initInnerButton("onDelete")];
    });
    const validButtons = vue.computed(() => {
      return innerButtons.value.concat(props.buttons).filter((button) => {
        return index.checkAuthoritys(checkAuthority, button.authority) && button.show !== false;
      }).sort((a, b) => index.sortByOrder(a.order, b.order));
    });
    const innerButtonMap = {
      onDetail: {
        name: "\u8BE6\u60C5",
        type: "primary",
        order: 10
      },
      onEdit: {
        name: "\u7F16\u8F91",
        type: "warning",
        order: 20
      },
      onDelete: {
        name: "\u5220\u9664",
        type: "danger",
        order: 30
      }
    };
    function initInnerButton(type) {
      const button = {
        ...innerButtonMap[type]
      };
      if (props[type]) {
        button.onClick = props[type];
      } else {
        const key = Object.keys(attrs).find((key2) => key2.startsWith(type));
        const regex = /\((.*?)\)/;
        const matches = key == null ? void 0 : key.match(regex);
        if (matches && matches[1]) {
          button.onClick = attrs[key];
          button.authority = matches[1].split("|");
        } else {
          button.show = false;
        }
      }
      return button;
    }
    function getShowButtons(row, index) {
      return validButtons.value.filter((button) => {
        if (typeof button.show === "function") {
          return button.show(row, index);
        } else {
          return button.show !== false;
        }
      });
    }
    function getFormatter(field, scope) {
      return field.formatter ? field == null ? void 0 : field.formatter(scope.row, scope.column, scope.row[field.prop], scope.$index) : scope.row[field.prop];
    }
    const buttonLoadings = vue.ref([]);
    vue.watchEffect(() => {
      var _a, _b;
      buttonLoadings.value = (_b = (_a = props.data) == null ? void 0 : _a.reduce(
        (pre, cur) => {
          const scope = buttonLoadings.value.find((item) => item[0].row === cur);
          if (scope) {
            pre.push(scope);
          }
          return pre;
        },
        []
      )) != null ? _b : [];
    });
    function buttonOnClick(field, scope) {
      var _a, _b;
      const result = (_b = (_a = vue.unref(field.onClick)) == null ? void 0 : _a(scope.row, scope.$index, scope.row[field.prop])) != null ? _b : true;
      if (result instanceof Promise) {
        if (!buttonLoadings.value.find((item) => item[0] === scope.row && item[1] === field.prop)) {
          buttonLoadings.value.push([scope.row, field.prop]);
        }
        result.finally(() => {
          const index = buttonLoadings.value.map((item) => item[0]).indexOf(scope.row);
          if (index !== -1) {
            buttonLoadings.value.splice(index, 1);
          }
        });
      }
    }
    const verifyInfoMap = vue.ref([]);
    vue.watchEffect(() => {
      verifyInfoMap.value = props.data.map((_row) => {
        const rowVerifyInfo = {};
        validFields.value.filter((field) => field.fieldType === "ciphertext").forEach((field) => {
          rowVerifyInfo[field.prop] = {
            decrypted: false,
            visible: false,
            plaintext: ""
          };
        });
        return rowVerifyInfo;
      });
    });
    function verifySuccess(params, scope, field) {
      var _a;
      const decryptImpl = (_a = field.decrypt) == null ? void 0 : _a.call(field, params, scope.row);
      if (decryptImpl) {
        if (decryptImpl instanceof Promise) {
          decryptImpl.then((res) => {
            verifyInfoMap.value[scope.$index][field.prop].decrypted = true;
            verifyInfoMap.value[scope.$index][field.prop].plaintext = res;
          });
        } else if (typeof decryptImpl === "string") {
          verifyInfoMap.value[scope.$index][field.prop].decrypted = true;
          verifyInfoMap.value[scope.$index][field.prop].plaintext = decryptImpl;
        } else {
          console.error("[liv-web/data-table]\u8BF7\u68C0\u67E5\u4F20\u5165\u7684\u89E3\u5BC6\u903B\u8F91\u662F\u5426\u6B63\u786E\uFF01");
        }
      } else {
        console.error("[liv-web/data-table]\u5F53fieldType\u4E3Aciphertext\u65F6\uFF0C\u9700\u8981\u4F20\u5165\u5177\u4F53\u7684\u89E3\u5BC6\u903B\u8F91\uFF01");
      }
    }
    function resetCiphertext(index, field) {
      const verifyInfo = verifyInfoMap.value[index][field.prop];
      if (verifyInfo) {
        verifyInfo.decrypted = false;
        verifyInfo.plaintext = "";
      }
    }
    const switchLoadings = vue.ref([]);
    vue.watchEffect(() => {
      var _a, _b;
      switchLoadings.value = (_b = (_a = props.data) == null ? void 0 : _a.reduce(
        (pre, cur) => {
          const scope = switchLoadings.value.find((item) => item[0].row === cur);
          if (scope) {
            pre.push(scope);
          }
          return pre;
        },
        []
      )) != null ? _b : [];
    });
    function switchBeforeChange(field, scope) {
      var _a, _b;
      const result = (_b = (_a = field.beforeChange) == null ? void 0 : _a.call(field, scope.row, scope.$index, scope.row[field.prop])) != null ? _b : true;
      if (result instanceof Promise) {
        return new Promise((resolve) => {
          if (!switchLoadings.value.find((item) => item[0] === scope.row && item[1] === field.prop)) {
            switchLoadings.value.push([scope.row, field.prop]);
          }
          result.then(resolve).finally(() => {
            const index = switchLoadings.value.map((item) => item[0]).indexOf(scope.row);
            if (index !== -1) {
              switchLoadings.value.splice(index, 1);
            }
          });
        });
      } else {
        return result;
      }
    }
    const imagePopover = vue.ref([-1, -1, -1, -1]);
    const tableRef = vue.ref();
    __expose({ tableRef });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTable), vue.mergeProps({
        ref_key: "tableRef",
        ref: tableRef,
        class: "vp-raw liv-data-table",
        "table-layout": "auto",
        "tooltip-options": {
          placement: "right"
        },
        data: _ctx.data
      }, vue.unref(lodashEs.pick)(vue.unref(globalProps), Object.keys(vue.unref(tableProps)))), vue.createSlots({
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
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 0,
                      class: "liv-table-column__text",
                      "show-overflow-tooltip": {
                        popperClass: "liv-table-column__tooltip"
                      },
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps)))),
                    null,
                    16
                    /* FULL_PROPS */
                  )) : field.fieldType === "ciphertext" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 1,
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps))), { showOverflowTooltip: false }),
                    {
                      default: vue.withCtx((scope) => [
                        vue.createElementVNode("div", _hoisted_1, [
                          field.showOverflowTooltip !== false ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTooltip), {
                            key: 0,
                            "popper-class": "liv-table-column__tooltip",
                            content: verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope),
                            placement: "right"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createElementVNode(
                                "div",
                                _hoisted_2,
                                vue.toDisplayString(verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["content"])) : (vue.openBlock(), vue.createElementBlock(
                            "div",
                            _hoisted_3,
                            vue.toDisplayString(verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)),
                            1
                            /* TEXT */
                          )),
                          (verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)) ? (vue.openBlock(), vue.createBlock(
                            vue.unref(elementPlus.ElIcon),
                            { key: 2 },
                            {
                              default: vue.withCtx(() => [
                                verifyInfoMap.value[scope.$index][field.prop].decrypted ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.View), {
                                  key: 0,
                                  onClick: ($event) => resetCiphertext(scope.$index, field)
                                }, null, 8, ["onClick"])) : (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.Hide), {
                                  key: 1,
                                  onClick: ($event) => verifyInfoMap.value[scope.$index][field.prop].visible = true
                                }, null, 8, ["onClick"]))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )) : vue.createCommentVNode("v-if", true)
                        ]),
                        (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
                          verifyInfoMap.value[scope.$index][field.prop].visible ? (vue.openBlock(), vue.createBlock(verify_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                            key: 0,
                            ref_for: true
                          }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(tableColumnProps))), {
                            type: field.type,
                            modelValue: verifyInfoMap.value[scope.$index][field.prop].visible,
                            "onUpdate:modelValue": ($event) => verifyInfoMap.value[scope.$index][field.prop].visible = $event,
                            onSuccess: ($event) => verifySuccess($event, scope, field)
                          }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "onSuccess"])) : vue.createCommentVNode("v-if", true)
                        ]))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "button" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 2,
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(vue.unref(lodashEs.omit)(field, "type"), Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => [
                        vue.createVNode(vue.unref(elementPlus.ElButton), vue.mergeProps({
                          class: "liv-table-column__button",
                          plain: "",
                          size: "small",
                          ref_for: true
                        }, vue.unref(lodashEs.omit)(field, "type", "loading", "onClick", ...Object.keys(vue.unref(tableColumnProps))), {
                          type: typeof field.type === "function" ? field.type(scope.row, scope.$index, scope.row[field.prop]) : field.type,
                          loading: buttonLoadings.value.find((item) => item[0] === scope.row && item[1] === field.prop) ? true : false,
                          onClick: ($event) => buttonOnClick(field, scope)
                        }), {
                          default: vue.withCtx(() => {
                            var _a;
                            return [
                              vue.createTextVNode(
                                vue.toDisplayString((_a = field.name) != null ? _a : getFormatter(field, scope)),
                                1
                                /* TEXT */
                              )
                            ];
                          }),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["type", "loading", "onClick"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "switch" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 3,
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => [
                        vue.createVNode(vue.unref(elementPlus.ElSwitch), vue.mergeProps(
                          {
                            class: "liv-table-column__switch",
                            modelValue: scope.row[field.prop],
                            "onUpdate:modelValue": ($event) => scope.row[field.prop] = $event,
                            size: "small",
                            ref_for: true
                          },
                          vue.unref(lodashEs.omit)(field, "beforeChange", "onChange", "loading", ...Object.keys(vue.unref(tableColumnProps))),
                          {
                            loading: switchLoadings.value.find((item) => item[0] === scope.row && item[1] === field.prop) ? true : false,
                            "before-change": () => switchBeforeChange(field, scope),
                            onChange: ($event) => {
                              var _a;
                              return (_a = field.onChange) == null ? void 0 : _a.call(field, $event, scope.row, scope.$index, scope.row[field.prop]);
                            }
                          }
                        ), null, 16, ["modelValue", "onUpdate:modelValue", "loading", "before-change", "onChange"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "tag" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 4,
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(vue.unref(lodashEs.omit)(field, "type"), Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => [
                        Array.isArray(scope.row[field.prop]) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                          (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            null,
                            vue.renderList(scope.row[field.prop], (tag) => {
                              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTag), vue.mergeProps({
                                class: "liv-table-column__tag",
                                ref_for: true
                              }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(tableColumnProps))), {
                                type: typeof field.type === "function" ? field.type(scope.row, scope.$index, tag) : field.type
                              }), {
                                default: vue.withCtx(() => [
                                  vue.createTextVNode(
                                    vue.toDisplayString(tag),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1040, ["type"]);
                            }),
                            256
                            /* UNKEYED_FRAGMENT */
                          ))
                        ])) : (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTag), vue.mergeProps({
                          key: 1,
                          class: "liv-table-column__tag",
                          ref_for: true
                        }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(tableColumnProps))), {
                          type: typeof field.type === "function" ? field.type(scope.row, scope.$index, scope.row[field.prop]) : field.type
                        }), {
                          default: vue.withCtx(() => [
                            vue.createTextVNode(
                              vue.toDisplayString(getFormatter(field, scope)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["type"]))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "image" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 5,
                      class: "liv-table-column__image",
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => {
                        var _a, _b;
                        return [
                          scope.row[field.prop] ? (vue.openBlock(true), vue.createElementBlock(
                            vue.Fragment,
                            { key: 0 },
                            vue.renderList((_b = (_a = vue.unref(handleThumbUrls)) != null ? _a : vue.unref(handleFileUrls)) == null ? void 0 : _b(scope.row[field.prop]), (image, index) => {
                              return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElPopover), {
                                key: image,
                                placement: "top-start",
                                trigger: "hover",
                                onBeforeEnter: ($event) => imagePopover.value = [imagePopover.value[2], imagePopover.value[3], scope.$index, index]
                              }, {
                                reference: vue.withCtx(() => {
                                  var _a2;
                                  return [
                                    vue.createVNode(vue.unref(elementPlus.ElImage), {
                                      "preview-src-list": (_a2 = vue.unref(handleFileUrls)) == null ? void 0 : _a2(scope.row[field.prop]),
                                      src: image,
                                      "initial-index": index,
                                      fit: "cover",
                                      lazy: "",
                                      "preview-teleported": "",
                                      class: "liv-table-column__image--thumb"
                                    }, null, 8, ["preview-src-list", "src", "initial-index"])
                                  ];
                                }),
                                default: vue.withCtx(() => {
                                  var _a2;
                                  return [
                                    imagePopover.value[0] === scope.$index && imagePopover.value[1] === index || imagePopover.value[2] === scope.$index && imagePopover.value[3] === index ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImage), {
                                      key: 0,
                                      "preview-src-list": (_a2 = vue.unref(handleFileUrls)) == null ? void 0 : _a2(scope.row[field.prop]),
                                      src: image,
                                      "initial-index": index,
                                      fit: "cover",
                                      "preview-teleported": "",
                                      class: "liv-table-column__image--preview"
                                    }, null, 8, ["preview-src-list", "src", "initial-index"])) : vue.createCommentVNode("v-if", true)
                                  ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onBeforeEnter"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          )) : (vue.openBlock(), vue.createElementBlock(
                            vue.Fragment,
                            { key: 1 },
                            [
                              vue.createTextVNode("\u65E0")
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ];
                      }),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "qrcode" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 6,
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => [
                        vue.createVNode(
                          vue.unref(elementPlus.ElPopover),
                          {
                            placement: "top-start",
                            trigger: "hover"
                          },
                          {
                            reference: vue.withCtx(() => {
                              var _a;
                              return [
                                vue.createVNode(qrCode_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                  class: "liv-table-column__qrcode",
                                  content: scope.row[field.prop],
                                  size: 30,
                                  ref_for: true
                                }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(tableColumnProps))), {
                                  options: { width: 400, ...(_a = field.options) != null ? _a : {} }
                                }), null, 16, ["content", "options"])
                              ];
                            }),
                            default: vue.withCtx(() => {
                              var _a;
                              return [
                                vue.createVNode(qrCode_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                                  class: "liv-table-column__qrcode--preview",
                                  content: scope.row[field.prop],
                                  size: 125,
                                  ref_for: true
                                }, vue.unref(lodashEs.omit)(field, Object.keys(vue.unref(tableColumnProps))), {
                                  options: { width: 400, ...(_a = field.options) != null ? _a : {} }
                                }), null, 16, ["content", "options"])
                              ];
                            }),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "slot" ? (vue.openBlock(), vue.createBlock(
                    vue.unref(elementPlus.ElTableColumn),
                    vue.mergeProps({
                      key: 7,
                      class: "liv-table-column__slot",
                      ref_for: true
                    }, vue.unref(lodashEs.pick)(field, Object.keys(vue.unref(tableColumnProps)))),
                    {
                      default: vue.withCtx((scope) => [
                        vue.renderSlot(_ctx.$slots, field.prop, vue.mergeProps({ ref_for: true }, scope))
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
          )),
          vue.renderSlot(_ctx.$slots, "default"),
          validButtons.value.length > 0 ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTableColumn), {
            key: 0,
            fixed: "right",
            label: "\u64CD\u4F5C"
          }, {
            default: vue.withCtx((scope) => [
              vue.createElementVNode("div", _hoisted_5, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(getShowButtons(scope.row, scope.$index).slice(
                    0,
                    vue.unref(propsPoxy).showButtonCount
                  ), (button) => {
                    return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                      key: button.name,
                      plain: "",
                      size: "small",
                      onClick: ($event) => {
                        var _a;
                        return (_a = button.onClick) == null ? void 0 : _a.call(button, scope.row, scope.$index);
                      },
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
                    }, 1040, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                getShowButtons(scope.row, scope.$index).slice(vue.unref(propsPoxy).showButtonCount).length > 0 ? (vue.openBlock(), vue.createBlock(
                  vue.unref(elementPlus.ElPopover),
                  {
                    key: 0,
                    placement: "left"
                  },
                  {
                    reference: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElIcon), { class: "liv-table-column__operation--more" }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(iconsVue.MoreFilled))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    default: vue.withCtx(() => [
                      vue.createElementVNode("div", _hoisted_6, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(getShowButtons(scope.row, scope.$index).slice(
                            vue.unref(propsPoxy).showButtonCount
                          ), (button) => {
                            return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({
                              plain: "",
                              key: button.name,
                              size: "small",
                              onClick: ($event) => {
                                var _a;
                                return (_a = button.onClick) == null ? void 0 : _a.call(button, scope.row, scope.$index);
                              },
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
                            }, 1040, ["onClick"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
            /* STABLE */
          })) : vue.createCommentVNode("v-if", true)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !_ctx.$slots.empty ? {
          name: "empty",
          fn: vue.withCtx(() => [
            vue.createVNode(vue.unref(elementPlus.ElEmpty), { description: "\u6682\u65E0\u6570\u636E" })
          ]),
          key: "0"
        } : {
          name: "empty",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "empty")
          ]),
          key: "1"
        }
      ]), 1040, ["data"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=data-table.vue2.js.map
