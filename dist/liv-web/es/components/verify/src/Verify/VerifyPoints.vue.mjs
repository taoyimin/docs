import { resetSize } from '../utils/util.mjs';
import '../../../../utils/index.mjs';
import { toRefs, getCurrentInstance, ref, reactive, nextTick, onMounted, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, withDirectives, createVNode, withCtx, vShow, Fragment, renderList, toDisplayString } from 'vue';
import { ElIcon } from 'element-plus';
import { RefreshRight } from '@element-plus/icons-vue';
import _export_sfc from '../../../../_virtual/_plugin-vue_export-helper.mjs';
import { aesEncrypt } from '../../../../utils/encrypt/index.mjs';

const _sfc_main = {
  name: "VerifyPoints",
  components: { ElIcon, RefreshRight },
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
    const { mode, captchaType, vSpace, imgSize, barSize } = toRefs(props);
    const { proxy } = getCurrentInstance();
    let secretKey = ref(""), checkNum = ref(3), fontPos = reactive([]), checkPosArr = reactive([]), num = ref(1), pointBackImgBase = ref(""), poinTextList = reactive([]), backToken = ref(""), setSize = reactive({
      imgHeight: 0,
      imgWidth: 0,
      barHeight: 0,
      barWidth: 0
    }), tempPoints = reactive([]), text = ref(""), barAreaColor = ref(void 0), barAreaBorderColor = ref(void 0), showRefresh = ref(true), bindingClick = ref(true);
    const init = () => {
      fontPos.splice(0, fontPos.length);
      checkPosArr.splice(0, checkPosArr.length);
      num.value = 1;
      getPictrue();
      nextTick(() => {
        let { imgHeight, imgWidth, barHeight, barWidth } = resetSize(proxy);
        setSize.imgHeight = imgHeight;
        setSize.imgWidth = imgWidth;
        setSize.barHeight = barHeight;
        setSize.barWidth = barWidth;
        proxy.$parent.$emit("ready", proxy);
      });
    };
    onMounted(() => {
      init();
      proxy.$el.onselectstart = function() {
        return false;
      };
    });
    const canvas = ref(null);
    const canvasClick = (e) => {
      checkPosArr.push(getMousePos(canvas, e));
      if (num.value == checkNum.value) {
        num.value = createPoint(getMousePos(canvas, e));
        let arr = pointTransfrom(checkPosArr, setSize);
        checkPosArr.length = 0;
        checkPosArr.push(...arr);
        setTimeout(() => {
          var captchaVerification = secretKey.value ? aesEncrypt(backToken.value + "---" + JSON.stringify(checkPosArr), secretKey.value) : backToken.value + "---" + JSON.stringify(checkPosArr);
          let data = {
            captchaType: captchaType.value,
            pointJson: secretKey.value ? aesEncrypt(JSON.stringify(checkPosArr), secretKey.value) : JSON.stringify(checkPosArr),
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
  const _component_RefreshRight = resolveComponent("RefreshRight");
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode(
        "div",
        {
          class: "verify-img-panel",
          style: normalizeStyle({
            width: $setup.setSize.imgWidth,
            height: $setup.setSize.imgHeight,
            "background-size": $setup.setSize.imgWidth + " " + $setup.setSize.imgHeight,
            "margin-bottom": $props.vSpace + "px"
          })
        },
        [
          withDirectives(createVNode(_component_el_icon, {
            class: "verify-refresh",
            size: "22",
            style: { "z-index": "3" },
            onClick: $setup.refresh
          }, {
            default: withCtx(() => [
              createVNode(_component_RefreshRight)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"]), [
            [vShow, $setup.showRefresh]
          ]),
          createElementVNode("img", {
            src: "data:image/png;base64," + $setup.pointBackImgBase,
            ref: "canvas",
            alt: "",
            style: { "width": "100%", "height": "100%", "display": "block" },
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.bindingClick ? $setup.canvasClick($event) : void 0)
          }, null, 8, _hoisted_3),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.tempPoints, (tempPoint, index) => {
              return openBlock(), createElementBlock(
                "div",
                {
                  key: index,
                  class: "point-area",
                  style: normalizeStyle({
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
                toDisplayString(index + 1),
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
    createElementVNode(
      "div",
      {
        class: "verify-bar-area",
        style: normalizeStyle({
          width: $setup.setSize.imgWidth,
          color: this.barAreaColor,
          "border-color": this.barAreaBorderColor,
          "line-height": this.barSize.height
        })
      },
      [
        createElementVNode(
          "span",
          _hoisted_4,
          toDisplayString($setup.text),
          1
          /* TEXT */
        )
      ],
      4
      /* STYLE */
    )
  ]);
}
var VerifyPoints = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);

export { VerifyPoints as default };
//# sourceMappingURL=VerifyPoints.vue.mjs.map
