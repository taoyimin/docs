'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('../utils/util.js');
require('../../../../utils/index.js');
var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var _pluginVue_exportHelper = require('../../../../_virtual/_plugin-vue_export-helper.js');
var index = require('../../../../utils/encrypt/index.js');

const _sfc_main = {
  name: "VerifyPoints",
  components: { ElIcon: elementPlus.ElIcon, RefreshRight: iconsVue.RefreshRight },
  props: {
    //弹出式pop，固定fixed
    mode: {
      type: String,
      default: "fixed"
    },
    captchaType: {
      type: String
    },
    //间隔
    vSpace: {
      type: Number,
      default: 5
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
    const { mode, captchaType, vSpace, imgSize, barSize } = vue.toRefs(props);
    const { proxy } = vue.getCurrentInstance();
    let secretKey = vue.ref(""), checkNum = vue.ref(3), fontPos = vue.reactive([]), checkPosArr = vue.reactive([]), num = vue.ref(1), pointBackImgBase = vue.ref(""), poinTextList = vue.reactive([]), backToken = vue.ref(""), setSize = vue.reactive({
      imgHeight: 0,
      imgWidth: 0,
      barHeight: 0,
      barWidth: 0
    }), tempPoints = vue.reactive([]), text = vue.ref(""), barAreaColor = vue.ref(void 0), barAreaBorderColor = vue.ref(void 0), showRefresh = vue.ref(true), bindingClick = vue.ref(true);
    const init = () => {
      fontPos.splice(0, fontPos.length);
      checkPosArr.splice(0, checkPosArr.length);
      num.value = 1;
      getPictrue();
      vue.nextTick(() => {
        let { imgHeight, imgWidth, barHeight, barWidth } = util.resetSize(proxy);
        setSize.imgHeight = imgHeight;
        setSize.imgWidth = imgWidth;
        setSize.barHeight = barHeight;
        setSize.barWidth = barWidth;
        proxy.$parent.$emit("ready", proxy);
      });
    };
    vue.onMounted(() => {
      init();
      proxy.$el.onselectstart = function() {
        return false;
      };
    });
    const canvas = vue.ref(null);
    const canvasClick = (e) => {
      checkPosArr.push(getMousePos(canvas, e));
      if (num.value == checkNum.value) {
        num.value = createPoint(getMousePos(canvas, e));
        let arr = pointTransfrom(checkPosArr, setSize);
        checkPosArr.length = 0;
        checkPosArr.push(...arr);
        setTimeout(() => {
          var captchaVerification = secretKey.value ? index.aesEncrypt(backToken.value + "---" + JSON.stringify(checkPosArr), secretKey.value) : backToken.value + "---" + JSON.stringify(checkPosArr);
          let data = {
            captchaType: captchaType.value,
            pointJson: secretKey.value ? index.aesEncrypt(JSON.stringify(checkPosArr), secretKey.value) : JSON.stringify(checkPosArr),
            token: backToken.value
          };
          if (props.reqCheck) {
            props.reqCheck(data).then((res) => {
              if (res.repCode == "0000") {
                barAreaColor.value = "#4cae4c";
                barAreaBorderColor.value = "#5cb85c";
                text.value = "\u9A8C\u8BC1\u6210\u529F";
                bindingClick.value = false;
                if (mode.value == "pop") {
                  setTimeout(() => {
                    proxy.$parent.clickShow = false;
                    refresh();
                  }, 1500);
                }
                proxy.$parent.$emit("success", { captchaVerification });
              } else {
                proxy.$parent.$emit("error", proxy);
                barAreaColor.value = "#d9534f";
                barAreaBorderColor.value = "#d9534f";
                text.value = "\u9A8C\u8BC1\u5931\u8D25";
                setTimeout(() => {
                  refresh();
                }, 700);
              }
            });
          } else {
            console.error("[liv-web/verify]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u914D\u7F6E\u6821\u9A8C\u9A8C\u8BC1\u7801\u65B9\u6CD5\u3002");
          }
        }, 400);
      }
      if (num.value < checkNum.value) {
        num.value = createPoint(getMousePos(canvas, e));
      }
    };
    const getMousePos = function(obj, e) {
      var x = e.offsetX;
      var y = e.offsetY;
      return { x, y };
    };
    const createPoint = function(pos) {
      tempPoints.push(Object.assign({}, pos));
      return num.value + 1;
    };
    const refresh = function() {
      tempPoints.splice(0, tempPoints.length);
      barAreaColor.value = "#000";
      barAreaBorderColor.value = "#ddd";
      bindingClick.value = true;
      fontPos.splice(0, fontPos.length);
      checkPosArr.splice(0, checkPosArr.length);
      num.value = 1;
      getPictrue();
      text.value = "\u9A8C\u8BC1\u5931\u8D25";
      showRefresh.value = true;
    };
    function getPictrue() {
      let data = {
        captchaType: captchaType.value
      };
      if (props.reqGet) {
        props.reqGet(data).then((res) => {
          if (res.repCode == "0000") {
            pointBackImgBase.value = res.repData.originalImageBase64;
            backToken.value = res.repData.token;
            secretKey.value = res.repData.secretKey;
            poinTextList.value = res.repData.wordList;
            text.value = "\u8BF7\u4F9D\u6B21\u70B9\u51FB\u3010" + poinTextList.value.join(",") + "\u3011";
          } else {
            text.value = res.repMsg;
          }
        });
      } else {
        console.error("[liv-web/verify]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u914D\u7F6E\u83B7\u53D6\u9A8C\u8BC1\u7801\u65B9\u6CD5\u3002");
      }
    }
    const pointTransfrom = function(pointArr, imgSize2) {
      var newPointArr = pointArr.map((p) => {
        let x = Math.round(310 * p.x / parseInt(imgSize2.imgWidth));
        let y = Math.round(155 * p.y / parseInt(imgSize2.imgHeight));
        return { x, y };
      });
      return newPointArr;
    };
    return {
      secretKey,
      checkNum,
      fontPos,
      checkPosArr,
      num,
      pointBackImgBase,
      poinTextList,
      backToken,
      setSize,
      tempPoints,
      text,
      barAreaColor,
      barAreaBorderColor,
      showRefresh,
      bindingClick,
      init,
      canvas,
      canvasClick,
      getMousePos,
      createPoint,
      refresh,
      getPictrue,
      pointTransfrom
    };
  }
};
const _hoisted_1 = { style: { "position": "relative" } };
const _hoisted_2 = { class: "verify-img-out" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "verify-msg" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RefreshRight = vue.resolveComponent("RefreshRight");
  const _component_el_icon = vue.resolveComponent("el-icon");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode(
        "div",
        {
          class: "verify-img-panel",
          style: vue.normalizeStyle({
            width: $setup.setSize.imgWidth,
            height: $setup.setSize.imgHeight,
            "background-size": $setup.setSize.imgWidth + " " + $setup.setSize.imgHeight,
            "margin-bottom": $props.vSpace + "px"
          })
        },
        [
          vue.withDirectives(vue.createVNode(_component_el_icon, {
            class: "verify-refresh",
            size: "22",
            style: { "z-index": "3" },
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
          vue.createElementVNode("img", {
            src: "data:image/png;base64," + $setup.pointBackImgBase,
            ref: "canvas",
            alt: "",
            style: { "width": "100%", "height": "100%", "display": "block" },
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.bindingClick ? $setup.canvasClick($event) : void 0)
          }, null, 8, _hoisted_3),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.tempPoints, (tempPoint, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: index,
                  class: "point-area",
                  style: vue.normalizeStyle({
                    "background-color": "#1abd6c",
                    color: "#fff",
                    "z-index": 9999,
                    width: "20px",
                    height: "20px",
                    "text-align": "center",
                    "line-height": "20px",
                    "border-radius": "50%",
                    position: "absolute",
                    top: parseInt(tempPoint.y - 10) + "px",
                    left: parseInt(tempPoint.x - 10) + "px"
                  })
                },
                vue.toDisplayString(index + 1),
                5
                /* TEXT, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )
    ]),
    vue.createElementVNode(
      "div",
      {
        class: "verify-bar-area",
        style: vue.normalizeStyle({
          width: $setup.setSize.imgWidth,
          color: this.barAreaColor,
          "border-color": this.barAreaBorderColor,
          "line-height": this.barSize.height
        })
      },
      [
        vue.createElementVNode(
          "span",
          _hoisted_4,
          vue.toDisplayString($setup.text),
          1
          /* TEXT */
        )
      ],
      4
      /* STYLE */
    )
  ]);
}
var VerifyPoints = /* @__PURE__ */ _pluginVue_exportHelper.default(_sfc_main, [["render", _sfc_render]]);

exports.default = VerifyPoints;
//# sourceMappingURL=VerifyPoints.vue.js.map
