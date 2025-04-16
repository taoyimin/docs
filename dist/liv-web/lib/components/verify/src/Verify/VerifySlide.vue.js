'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../utils/index.js');
var util = require('../utils/util.js');
var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var _pluginVue_exportHelper = require('../../../../_virtual/_plugin-vue_export-helper.js');
var index = require('../../../../utils/encrypt/index.js');

const _sfc_main = {
  name: "VerifySlide",
  components: { ElIcon: elementPlus.ElIcon, RefreshRight: iconsVue.RefreshRight, ArrowRightBold: iconsVue.ArrowRightBold, Select: iconsVue.Select, CloseBold: iconsVue.CloseBold },
  props: {
    captchaType: {
      type: String
    },
    type: {
      type: String,
      default: "1"
    },
    //弹出式pop，固定fixed
    mode: {
      type: String,
      default: "fixed"
    },
    vSpace: {
      type: Number,
      default: 5
    },
    explain: {
      type: String,
      default: "\u5411\u53F3\u6ED1\u52A8\u5B8C\u6210\u9A8C\u8BC1"
    },
    imgSize: {
      type: Object,
      default() {
        return {
          width: "310px",
          height: "155px"
        };
      }
    },
    blockSize: {
      type: Object,
      default() {
        return {
          width: "50px",
          height: "50px"
        };
      }
    },
    barSize: {
      type: Object,
      default() {
        return {
          width: "310px",
          height: "40px"
        };
      }
    },
    reqGet: {
      type: Function,
      required: true
    },
    reqCheck: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const { mode, captchaType, vSpace, imgSize, barSize, type, blockSize, explain } = vue.toRefs(props);
    const { proxy } = vue.getCurrentInstance();
    let secretKey = vue.ref(""), passFlag = vue.ref(""), backImgBase = vue.ref(""), blockBackImgBase = vue.ref(""), backToken = vue.ref(""), startMoveTime = vue.ref(""), endMovetime = vue.ref(""), tipsBackColor = vue.ref(""), tipWords = vue.ref(""), text = vue.ref(""), finishText = vue.ref(""), setSize = vue.reactive({
      imgHeight: 0,
      imgWidth: 0,
      barHeight: 0,
      barWidth: 0
    }), top = vue.ref(0), left = vue.ref(0), moveBlockLeft = vue.ref(void 0), leftBarWidth = vue.ref(void 0), moveBlockBackgroundColor = vue.ref(void 0), leftBarBorderColor = vue.ref("var(--liv-verify-border-color)"), iconColor = vue.ref(void 0), iconClass = vue.ref("icon-right"), status = vue.ref(false), isEnd = vue.ref(false), showRefresh = vue.ref(true), transitionLeft = vue.ref(""), transitionWidth = vue.ref(""), startLeft = vue.ref(0);
    const barArea = vue.computed(() => {
      return proxy.$el.querySelector(".verify-bar-area");
    });
    function init() {
      text.value = explain.value;
      getPictrue();
      vue.nextTick(() => {
        let { imgHeight, imgWidth, barHeight, barWidth } = util.resetSize(proxy);
        setSize.imgHeight = imgHeight;
        setSize.imgWidth = imgWidth;
        setSize.barHeight = barHeight;
        setSize.barWidth = barWidth;
        proxy.$parent.$emit("ready", proxy);
      });
      window.removeEventListener("touchmove", function(e) {
        move(e);
      });
      window.removeEventListener("mousemove", function(e) {
        move(e);
      });
      window.removeEventListener("touchend", function() {
        end();
      });
      window.removeEventListener("mouseup", function() {
        end();
      });
      window.addEventListener("touchmove", function(e) {
        move(e);
      });
      window.addEventListener("mousemove", function(e) {
        move(e);
      });
      window.addEventListener("touchend", function() {
        end();
      });
      window.addEventListener("mouseup", function() {
        end();
      });
    }
    vue.watch(type, () => {
      init();
    });
    vue.onMounted(() => {
      init();
      proxy.$el.onselectstart = function() {
        return false;
      };
    });
    function start(e) {
      e = e || window.event;
      if (!e.touches) {
        var x = e.clientX;
      } else {
        var x = e.touches[0].pageX;
      }
      startLeft.value = Math.floor(x - barArea.value.getBoundingClientRect().left);
      startMoveTime.value = +/* @__PURE__ */ new Date();
      if (isEnd.value == false) {
        text.value = "";
        moveBlockBackgroundColor.value = "#337ab7";
        leftBarBorderColor.value = "#337AB7";
        iconColor.value = "#fff";
        e.stopPropagation();
        status.value = true;
      }
    }
    function move(e) {
      e = e || window.event;
      if (status.value && isEnd.value == false) {
        if (!e.touches) {
          var x = e.clientX;
        } else {
          var x = e.touches[0].pageX;
        }
        var bar_area_left = barArea.value.getBoundingClientRect().left;
        var move_block_left = x - bar_area_left;
        if (move_block_left >= barArea.value.offsetWidth - parseInt(parseInt(blockSize.value.width) / 2) - 2) {
          move_block_left = barArea.value.offsetWidth - parseInt(parseInt(blockSize.value.width) / 2) - 2;
        }
        if (move_block_left <= 0) {
          move_block_left = parseInt(parseInt(blockSize.value.width) / 2);
        }
        moveBlockLeft.value = move_block_left - startLeft.value + "px";
        leftBarWidth.value = move_block_left - startLeft.value + "px";
      }
    }
    function end() {
      endMovetime.value = +/* @__PURE__ */ new Date();
      if (status.value && isEnd.value == false) {
        var moveLeftDistance = parseInt((moveBlockLeft.value || "").replace("px", ""));
        moveLeftDistance = moveLeftDistance * 310 / parseInt(setSize.imgWidth);
        let data = {
          captchaType: captchaType.value,
          pointJson: secretKey.value ? index.aesEncrypt(JSON.stringify({ x: moveLeftDistance, y: 5 }), secretKey.value) : JSON.stringify({ x: moveLeftDistance, y: 5 }),
          token: backToken.value
        };
        if (props.reqCheck) {
          props.reqCheck(data).then((res) => {
            if (res.repCode == "0000") {
              moveBlockBackgroundColor.value = "#5cb85c";
              leftBarBorderColor.value = "#5cb85c";
              iconColor.value = "#fff";
              iconClass.value = "icon-check";
              showRefresh.value = false;
              isEnd.value = true;
              if (mode.value == "pop") {
                setTimeout(() => {
                  proxy.$parent.clickShow = false;
                  refresh();
                }, 1500);
              }
              passFlag.value = true;
              tipWords.value = `${((endMovetime.value - startMoveTime.value) / 1e3).toFixed(2)}s\u9A8C\u8BC1\u6210\u529F`;
              var captchaVerification = secretKey.value ? index.aesEncrypt(
                backToken.value + "---" + JSON.stringify({ x: moveLeftDistance, y: 5 }),
                secretKey.value
              ) : backToken.value + "---" + JSON.stringify({ x: moveLeftDistance, y: 5 });
              setTimeout(() => {
                tipWords.value = "";
                proxy.$parent.closeBox();
                proxy.$parent.$emit("success", { captchaVerification });
              }, 1e3);
            } else {
              moveBlockBackgroundColor.value = "#d9534f";
              leftBarBorderColor.value = "#d9534f";
              iconColor.value = "#fff";
              iconClass.value = "icon-close";
              passFlag.value = false;
              setTimeout(function() {
                refresh();
              }, 1e3);
              proxy.$parent.$emit("error", proxy);
              tipWords.value = "\u9A8C\u8BC1\u5931\u8D25";
              setTimeout(() => {
                tipWords.value = "";
              }, 1e3);
            }
          });
        } else {
          console.error("[liv-web/verify]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u914D\u7F6E\u6821\u9A8C\u9A8C\u8BC1\u7801\u65B9\u6CD5\u3002");
        }
        status.value = false;
      }
    }
    const refresh = () => {
      showRefresh.value = true;
      finishText.value = "";
      transitionLeft.value = "left .3s";
      moveBlockLeft.value = 0;
      leftBarWidth.value = void 0;
      transitionWidth.value = "width .3s";
      leftBarBorderColor.value = "var(--el-border-color)";
      moveBlockBackgroundColor.value = "var(--liv-verify-move-block-color)";
      iconColor.value = "var(--color)";
      iconClass.value = "icon-right";
      isEnd.value = false;
      getPictrue();
      setTimeout(() => {
        transitionWidth.value = "";
        transitionLeft.value = "";
        text.value = explain.value;
      }, 300);
    };
    function getPictrue() {
      let data = {
        captchaType: captchaType.value
      };
      if (props.reqGet) {
        props.reqGet(data).then((res) => {
          if (res.repCode == "0000") {
            backImgBase.value = res.repData.originalImageBase64;
            blockBackImgBase.value = res.repData.jigsawImageBase64;
            backToken.value = res.repData.token;
            secretKey.value = res.repData.secretKey;
          } else {
            tipWords.value = res.repMsg;
          }
        });
      } else {
        console.error("[liv-web/verify]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u914D\u7F6E\u83B7\u53D6\u9A8C\u8BC1\u7801\u65B9\u6CD5\u3002");
      }
    }
    return {
      secretKey,
      //后端返回的ase加密秘钥
      passFlag,
      //是否通过的标识
      backImgBase,
      //验证码背景图片
      blockBackImgBase,
      //验证滑块的背景图片
      backToken,
      //后端返回的唯一token值
      startMoveTime,
      //移动开始的时间
      endMovetime,
      //移动结束的时间
      tipsBackColor,
      //提示词的背景颜色
      tipWords,
      text,
      finishText,
      setSize,
      top,
      left,
      moveBlockLeft,
      leftBarWidth,
      // 移动中样式
      moveBlockBackgroundColor,
      leftBarBorderColor,
      iconColor,
      iconClass,
      status,
      //鼠标状态
      isEnd,
      //是够验证完成
      showRefresh,
      transitionLeft,
      transitionWidth,
      barArea,
      refresh,
      start
    };
  }
};
const _hoisted_1 = { style: { "position": "relative" } };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RefreshRight = vue.resolveComponent("RefreshRight");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_ArrowRightBold = vue.resolveComponent("ArrowRightBold");
  const _component_Select = vue.resolveComponent("Select");
  const _component_CloseBold = vue.resolveComponent("CloseBold");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    $props.type === "2" ? (vue.openBlock(), vue.createElementBlock(
      "div",
      {
        key: 0,
        class: "verify-img-out",
        style: vue.normalizeStyle({ height: parseInt($setup.setSize.imgHeight) + $props.vSpace + "px" })
      },
      [
        vue.createElementVNode(
          "div",
          {
            class: "verify-img-panel",
            style: vue.normalizeStyle({ width: $setup.setSize.imgWidth, height: $setup.setSize.imgHeight })
          },
          [
            vue.createElementVNode("img", {
              src: "data:image/png;base64," + $setup.backImgBase,
              alt: "",
              style: { "width": "100%", "height": "100%", "display": "block" }
            }, null, 8, _hoisted_2),
            vue.withDirectives(vue.createVNode(_component_el_icon, {
              class: "verify-refresh",
              size: "22",
              onClick: $setup.refresh
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_RefreshRight)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]), [
              [vue.vShow, $setup.showRefresh]
            ]),
            vue.createVNode(vue.Transition, { name: "tips" }, {
              default: vue.withCtx(() => [
                $setup.tipWords ? (vue.openBlock(), vue.createElementBlock(
                  "span",
                  {
                    key: 0,
                    class: vue.normalizeClass(["verify-tips", $setup.passFlag ? "suc-bg" : "err-bg"])
                  },
                  vue.toDisplayString($setup.tipWords),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ]),
              _: 1
              /* STABLE */
            })
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true),
    vue.createCommentVNode(" \u516C\u5171\u90E8\u5206 "),
    vue.createElementVNode(
      "div",
      {
        class: "verify-bar-area",
        style: vue.normalizeStyle({ width: $setup.setSize.imgWidth, height: $props.barSize.height, "line-height": $props.barSize.height })
      },
      [
        vue.createElementVNode("span", {
          class: "verify-msg",
          textContent: vue.toDisplayString($setup.text)
        }, null, 8, _hoisted_3),
        vue.createElementVNode(
          "div",
          {
            class: "verify-left-bar",
            style: vue.normalizeStyle({
              width: $setup.leftBarWidth !== void 0 ? $setup.leftBarWidth : $props.barSize.height,
              height: $props.barSize.height,
              "border-color": $setup.leftBarBorderColor,
              transaction: $setup.transitionWidth
            })
          },
          [
            vue.createElementVNode("span", {
              class: "verify-msg",
              textContent: vue.toDisplayString($setup.finishText)
            }, null, 8, _hoisted_4),
            vue.createElementVNode(
              "div",
              {
                class: "verify-move-block",
                onTouchstart: _cache[0] || (_cache[0] = (...args) => $setup.start && $setup.start(...args)),
                onMousedown: _cache[1] || (_cache[1] = (...args) => $setup.start && $setup.start(...args)),
                style: vue.normalizeStyle({
                  width: $props.barSize.height,
                  height: $props.barSize.height,
                  "background-color": $setup.moveBlockBackgroundColor,
                  left: $setup.moveBlockLeft,
                  transition: $setup.transitionLeft
                })
              },
              [
                vue.createVNode(_component_el_icon, {
                  size: "22",
                  color: $setup.iconColor
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createVNode(
                      _component_ArrowRightBold,
                      null,
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, $setup.iconClass === "icon-right"]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      _component_Select,
                      null,
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, $setup.iconClass === "icon-check"]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      _component_CloseBold,
                      null,
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, $setup.iconClass === "icon-close"]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["color"]),
                $props.type === "2" ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: "verify-sub-block",
                    style: vue.normalizeStyle({
                      width: Math.floor(parseInt($setup.setSize.imgWidth) * 47 / 310) + "px",
                      height: $setup.setSize.imgHeight,
                      top: "-" + (parseInt($setup.setSize.imgHeight) + $props.vSpace) + "px",
                      "background-size": $setup.setSize.imgWidth + " " + $setup.setSize.imgHeight
                    })
                  },
                  [
                    vue.createElementVNode("img", {
                      src: "data:image/png;base64," + $setup.blockBackImgBase,
                      alt: "",
                      style: { "width": "100%", "height": "100%", "display": "block", "-webkit-user-drag": "none" }
                    }, null, 8, _hoisted_5)
                  ],
                  4
                  /* STYLE */
                )) : vue.createCommentVNode("v-if", true)
              ],
              36
              /* STYLE, NEED_HYDRATION */
            )
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    )
  ]);
}
var VerifySlide = /* @__PURE__ */ _pluginVue_exportHelper.default(_sfc_main, [["render", _sfc_render]]);

exports.default = VerifySlide;
//# sourceMappingURL=VerifySlide.vue.js.map
