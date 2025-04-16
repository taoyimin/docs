import { defineComponent, inject, useAttrs, computed, toValue, ref, watchEffect, unref, openBlock, createBlock, mergeProps, createSlots, withCtx, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode, Teleport, createVNode, createTextVNode, renderSlot } from 'vue';
import { ElTable, ElTableColumn, ElTooltip, ElIcon, ElButton, ElSwitch, ElTag, ElPopover, ElImage, ElEmpty } from 'element-plus';
import tableProps from 'element-plus/es/components/table/src/table/defaults.mjs';
import tableColumnProps from 'element-plus/es/components/table/src/table-column/defaults.mjs';
import { View, Hide, MoreFilled } from '@element-plus/icons-vue';
import { pick, omit } from 'lodash-es';
import '../../verify/src/verify.vue.mjs';
import '../../qr-code/src/qr-code.vue.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { injectCheckAuthority } from '../../../utils/inject/authority.mjs';
import { injectHandleFileUrls, injectHandleThumbUrls } from '../../../utils/inject/file.mjs';
import { DATA_TABLE_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy, checkAuthoritys, sortByOrder } from '../../../utils/component/index.mjs';
import _sfc_main$1 from '../../verify/src/verify.vue2.mjs';
import _sfc_main$2 from '../../qr-code/src/qr-code.vue2.mjs';

const _hoisted_1 = { class: "liv-table-column__ciphertext" };
const _hoisted_2 = { class: "liv-table-column__ciphertext--tooltip" };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  class: "liv-table-column__tags"
};
const _hoisted_5 = { class: "liv-table-column__operation" };
const _hoisted_6 = { class: "liv-table-column__operation--container" };
var _sfc_main = /* @__PURE__ */ defineComponent({
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
    const checkAuthority = injectCheckAuthority();
    const handleFileUrls = injectHandleFileUrls();
    const handleThumbUrls = injectHandleThumbUrls();
    const globalProps = inject(DATA_TABLE_KEY, {});
    const props = __props;
    const propsPoxy = getPropsPoxy(
      props,
      globalProps
    );
    const attrs = useAttrs();
    const validFields = computed(() => {
      return toValue(props.fields).filter((field) => {
        return checkAuthoritys(checkAuthority, field.authority);
      });
    });
    const innerButtons = computed(() => {
      return [initInnerButton("onDetail"), initInnerButton("onEdit"), initInnerButton("onDelete")];
    });
    const validButtons = computed(() => {
      return innerButtons.value.concat(props.buttons).filter((button) => {
        return checkAuthoritys(checkAuthority, button.authority) && button.show !== false;
      }).sort((a, b) => sortByOrder(a.order, b.order));
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
    const buttonLoadings = ref([]);
    watchEffect(() => {
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
      const result = (_b = (_a = unref(field.onClick)) == null ? void 0 : _a(scope.row, scope.$index, scope.row[field.prop])) != null ? _b : true;
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
    const verifyInfoMap = ref([]);
    watchEffect(() => {
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
    const switchLoadings = ref([]);
    watchEffect(() => {
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
    const imagePopover = ref([-1, -1, -1, -1]);
    const tableRef = ref();
    __expose({ tableRef });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTable), mergeProps({
        ref_key: "tableRef",
        ref: tableRef,
        class: "vp-raw liv-data-table",
        "table-layout": "auto",
        "tooltip-options": {
          placement: "right"
        },
        data: _ctx.data
      }, unref(pick)(unref(globalProps), Object.keys(unref(tableProps)))), createSlots({
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
                    unref(ElTableColumn),
                    mergeProps({
                      key: 0,
                      class: "liv-table-column__text",
                      "show-overflow-tooltip": {
                        popperClass: "liv-table-column__tooltip"
                      },
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps)))),
                    null,
                    16
                    /* FULL_PROPS */
                  )) : field.fieldType === "ciphertext" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 1,
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps))), { showOverflowTooltip: false }),
                    {
                      default: withCtx((scope) => [
                        createElementVNode("div", _hoisted_1, [
                          field.showOverflowTooltip !== false ? (openBlock(), createBlock(unref(ElTooltip), {
                            key: 0,
                            "popper-class": "liv-table-column__tooltip",
                            content: verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope),
                            placement: "right"
                          }, {
                            default: withCtx(() => [
                              createElementVNode(
                                "div",
                                _hoisted_2,
                                toDisplayString(verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["content"])) : (openBlock(), createElementBlock(
                            "div",
                            _hoisted_3,
                            toDisplayString(verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)),
                            1
                            /* TEXT */
                          )),
                          (verifyInfoMap.value[scope.$index][field.prop].decrypted ? verifyInfoMap.value[scope.$index][field.prop].plaintext : getFormatter(field, scope)) ? (openBlock(), createBlock(
                            unref(ElIcon),
                            { key: 2 },
                            {
                              default: withCtx(() => [
                                verifyInfoMap.value[scope.$index][field.prop].decrypted ? (openBlock(), createBlock(unref(View), {
                                  key: 0,
                                  onClick: ($event) => resetCiphertext(scope.$index, field)
                                }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(Hide), {
                                  key: 1,
                                  onClick: ($event) => verifyInfoMap.value[scope.$index][field.prop].visible = true
                                }, null, 8, ["onClick"]))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )) : createCommentVNode("v-if", true)
                        ]),
                        (openBlock(), createBlock(Teleport, { to: "body" }, [
                          verifyInfoMap.value[scope.$index][field.prop].visible ? (openBlock(), createBlock(_sfc_main$1, mergeProps({
                            key: 0,
                            ref_for: true
                          }, unref(omit)(field, Object.keys(unref(tableColumnProps))), {
                            type: field.type,
                            modelValue: verifyInfoMap.value[scope.$index][field.prop].visible,
                            "onUpdate:modelValue": ($event) => verifyInfoMap.value[scope.$index][field.prop].visible = $event,
                            onSuccess: ($event) => verifySuccess($event, scope, field)
                          }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "onSuccess"])) : createCommentVNode("v-if", true)
                        ]))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1040
                    /* FULL_PROPS, DYNAMIC_SLOTS */
                  )) : field.fieldType === "button" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 2,
                      ref_for: true
                    }, unref(pick)(unref(omit)(field, "type"), Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => [
                        createVNode(unref(ElButton), mergeProps({
                          class: "liv-table-column__button",
                          plain: "",
                          size: "small",
                          ref_for: true
                        }, unref(omit)(field, "type", "loading", "onClick", ...Object.keys(unref(tableColumnProps))), {
                          type: typeof field.type === "function" ? field.type(scope.row, scope.$index, scope.row[field.prop]) : field.type,
                          loading: buttonLoadings.value.find((item) => item[0] === scope.row && item[1] === field.prop) ? true : false,
                          onClick: ($event) => buttonOnClick(field, scope)
                        }), {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(
                                toDisplayString((_a = field.name) != null ? _a : getFormatter(field, scope)),
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
                  )) : field.fieldType === "switch" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 3,
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => [
                        createVNode(unref(ElSwitch), mergeProps(
                          {
                            class: "liv-table-column__switch",
                            modelValue: scope.row[field.prop],
                            "onUpdate:modelValue": ($event) => scope.row[field.prop] = $event,
                            size: "small",
                            ref_for: true
                          },
                          unref(omit)(field, "beforeChange", "onChange", "loading", ...Object.keys(unref(tableColumnProps))),
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
                  )) : field.fieldType === "tag" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 4,
                      ref_for: true
                    }, unref(pick)(unref(omit)(field, "type"), Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => [
                        Array.isArray(scope.row[field.prop]) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(scope.row[field.prop], (tag) => {
                              return openBlock(), createBlock(unref(ElTag), mergeProps({
                                class: "liv-table-column__tag",
                                ref_for: true
                              }, unref(omit)(field, Object.keys(unref(tableColumnProps))), {
                                type: typeof field.type === "function" ? field.type(scope.row, scope.$index, tag) : field.type
                              }), {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(tag),
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
                        ])) : (openBlock(), createBlock(unref(ElTag), mergeProps({
                          key: 1,
                          class: "liv-table-column__tag",
                          ref_for: true
                        }, unref(omit)(field, Object.keys(unref(tableColumnProps))), {
                          type: typeof field.type === "function" ? field.type(scope.row, scope.$index, scope.row[field.prop]) : field.type
                        }), {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(getFormatter(field, scope)),
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
                  )) : field.fieldType === "image" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 5,
                      class: "liv-table-column__image",
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => {
                        var _a, _b;
                        return [
                          scope.row[field.prop] ? (openBlock(true), createElementBlock(
                            Fragment,
                            { key: 0 },
                            renderList((_b = (_a = unref(handleThumbUrls)) != null ? _a : unref(handleFileUrls)) == null ? void 0 : _b(scope.row[field.prop]), (image, index) => {
                              return openBlock(), createBlock(unref(ElPopover), {
                                key: image,
                                placement: "top-start",
                                trigger: "hover",
                                onBeforeEnter: ($event) => imagePopover.value = [imagePopover.value[2], imagePopover.value[3], scope.$index, index]
                              }, {
                                reference: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(unref(ElImage), {
                                      "preview-src-list": (_a2 = unref(handleFileUrls)) == null ? void 0 : _a2(scope.row[field.prop]),
                                      src: image,
                                      "initial-index": index,
                                      fit: "cover",
                                      lazy: "",
                                      "preview-teleported": "",
                                      class: "liv-table-column__image--thumb"
                                    }, null, 8, ["preview-src-list", "src", "initial-index"])
                                  ];
                                }),
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    imagePopover.value[0] === scope.$index && imagePopover.value[1] === index || imagePopover.value[2] === scope.$index && imagePopover.value[3] === index ? (openBlock(), createBlock(unref(ElImage), {
                                      key: 0,
                                      "preview-src-list": (_a2 = unref(handleFileUrls)) == null ? void 0 : _a2(scope.row[field.prop]),
                                      src: image,
                                      "initial-index": index,
                                      fit: "cover",
                                      "preview-teleported": "",
                                      class: "liv-table-column__image--preview"
                                    }, null, 8, ["preview-src-list", "src", "initial-index"])) : createCommentVNode("v-if", true)
                                  ];
                                }),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onBeforeEnter"]);
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          )) : (openBlock(), createElementBlock(
                            Fragment,
                            { key: 1 },
                            [
                              createTextVNode("\u65E0")
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
                  )) : field.fieldType === "qrcode" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 6,
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => [
                        createVNode(
                          unref(ElPopover),
                          {
                            placement: "top-start",
                            trigger: "hover"
                          },
                          {
                            reference: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_sfc_main$2, mergeProps({
                                  class: "liv-table-column__qrcode",
                                  content: scope.row[field.prop],
                                  size: 30,
                                  ref_for: true
                                }, unref(omit)(field, Object.keys(unref(tableColumnProps))), {
                                  options: { width: 400, ...(_a = field.options) != null ? _a : {} }
                                }), null, 16, ["content", "options"])
                              ];
                            }),
                            default: withCtx(() => {
                              var _a;
                              return [
                                createVNode(_sfc_main$2, mergeProps({
                                  class: "liv-table-column__qrcode--preview",
                                  content: scope.row[field.prop],
                                  size: 125,
                                  ref_for: true
                                }, unref(omit)(field, Object.keys(unref(tableColumnProps))), {
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
                  )) : field.fieldType === "slot" ? (openBlock(), createBlock(
                    unref(ElTableColumn),
                    mergeProps({
                      key: 7,
                      class: "liv-table-column__slot",
                      ref_for: true
                    }, unref(pick)(field, Object.keys(unref(tableColumnProps)))),
                    {
                      default: withCtx((scope) => [
                        renderSlot(_ctx.$slots, field.prop, mergeProps({ ref_for: true }, scope))
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
          )),
          renderSlot(_ctx.$slots, "default"),
          validButtons.value.length > 0 ? (openBlock(), createBlock(unref(ElTableColumn), {
            key: 0,
            fixed: "right",
            label: "\u64CD\u4F5C"
          }, {
            default: withCtx((scope) => [
              createElementVNode("div", _hoisted_5, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(getShowButtons(scope.row, scope.$index).slice(
                    0,
                    unref(propsPoxy).showButtonCount
                  ), (button) => {
                    return openBlock(), createBlock(unref(ElButton), mergeProps({
                      key: button.name,
                      plain: "",
                      size: "small",
                      onClick: ($event) => {
                        var _a;
                        return (_a = button.onClick) == null ? void 0 : _a.call(button, scope.row, scope.$index);
                      },
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
                    }, 1040, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                getShowButtons(scope.row, scope.$index).slice(unref(propsPoxy).showButtonCount).length > 0 ? (openBlock(), createBlock(
                  unref(ElPopover),
                  {
                    key: 0,
                    placement: "left"
                  },
                  {
                    reference: withCtx(() => [
                      createVNode(unref(ElIcon), { class: "liv-table-column__operation--more" }, {
                        default: withCtx(() => [
                          createVNode(unref(MoreFilled))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    default: withCtx(() => [
                      createElementVNode("div", _hoisted_6, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(getShowButtons(scope.row, scope.$index).slice(
                            unref(propsPoxy).showButtonCount
                          ), (button) => {
                            return openBlock(), createBlock(unref(ElButton), mergeProps({
                              plain: "",
                              key: button.name,
                              size: "small",
                              onClick: ($event) => {
                                var _a;
                                return (_a = button.onClick) == null ? void 0 : _a.call(button, scope.row, scope.$index);
                              },
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
                )) : createCommentVNode("v-if", true)
              ])
            ]),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        !_ctx.$slots.empty ? {
          name: "empty",
          fn: withCtx(() => [
            createVNode(unref(ElEmpty), { description: "\u6682\u65E0\u6570\u636E" })
          ]),
          key: "0"
        } : {
          name: "empty",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "empty")
          ]),
          key: "1"
        }
      ]), 1040, ["data"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=data-table.vue2.mjs.map
