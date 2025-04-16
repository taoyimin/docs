'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var lodashEs = require('lodash-es');
require('../../select/src/select.vue.js');
require('../../radio/src/radio.vue.js');
require('../../checkbox/src/checkbox.vue.js');
require('../../cascader/src/cascader.vue.js');
require('../../dict-select/src/dict-select.vue.js');
require('../../grid-cascader/src/grid-cascader.vue.js');
require('../../location-picker/src/location-picker.vue.js');
require('../../rich-text/src/rich-text.vue.js');
require('../../number-range/src/number-range.vue.js');
require('../../verify/src/verify.vue.js');
require('../../../utils/index.js');
require('../../../constants/index.js');
var file = require('../../../utils/inject/file.js');
var dataForm = require('../../../constants/inject/data-form.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/validate/index.js');
var index$1 = require('../../../utils/file/index.js');
var select_vue_vue_type_script_setup_true_lang = require('../../select/src/select.vue2.js');
var cascader_vue_vue_type_script_setup_true_lang = require('../../cascader/src/cascader.vue2.js');
var radio_vue_vue_type_script_setup_true_lang = require('../../radio/src/radio.vue2.js');
var checkbox_vue_vue_type_script_setup_true_lang = require('../../checkbox/src/checkbox.vue2.js');
var numberRange_vue_vue_type_script_setup_true_lang = require('../../number-range/src/number-range.vue2.js');
var dictSelect_vue_vue_type_script_setup_true_lang = require('../../dict-select/src/dict-select.vue2.js');
var gridCascader_vue_vue_type_script_setup_true_lang = require('../../grid-cascader/src/grid-cascader.vue2.js');
var richText_vue_vue_type_script_setup_true_lang = require('../../rich-text/src/rich-text.vue2.js');
var locationPicker_vue_vue_type_script_setup_true_lang = require('../../location-picker/src/location-picker.vue2.js');
var verify_vue_vue_type_script_setup_true_lang = require('../../verify/src/verify.vue2.js');

const _hoisted_1 = { class: "liv-form-item__label" };
const _hoisted_2 = { class: "liv-form-item__upload--tip" };
const _hoisted_3 = {
  key: 18,
  class: "liv-form-item__location-picker"
};
const _hoisted_4 = { class: "liv-form-item__location-picker--value" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { key: 19 };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivFormItem",
    inheritAttrs: false
  },
  __name: "form-item",
  props: /* @__PURE__ */ vue.mergeModels({
    fieldType: { type: null, required: false }
  }, {
    "modelValue": {
      default: void 0,
      type: [String, Number, Boolean, Object, Array]
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const slots = vue.useSlots();
    const fileUploadUrl = file.injectFileUploadUrl();
    const fileChunkUploadConfig = file.injectFileChunkUploadConfig();
    const fileChunkUploadFunction = file.injectFileChunkUploadFunction();
    const fileChunkMergeFunction = file.injectFileChunkMergeFunction();
    const fileUploadHeader = file.injectFileUploadHeader();
    const fileUploadData = file.injectFileUploadData();
    const handleFileResponse = file.injectHandleFileResponse();
    const handleFileUrls = file.injectHandleFileUrls();
    const formModel = vue.inject(dataForm.DATA_FORM_MODEL_KEY, void 0);
    const AMapRef = vue.inject(dataForm.DATA_FORM_AMAP_KEY, vue.shallowRef());
    const formItemRef = vue.shallowRef(null);
    const globalProps = vue.inject(component.FORM_ITEM_KEY, {});
    const props = __props;
    const attrs = vue.useAttrs();
    const formItemAttrs = vue.computed(() => {
      return lodashEs.pick(
        Object.assign(globalProps != null ? globalProps : {}, attrs),
        Object.keys(elementPlus.formItemProps)
      );
    });
    const contentAttrs = vue.computed(() => {
      return lodashEs.omit(attrs, Object.keys(elementPlus.formItemProps));
    });
    const formContext = vue.inject(elementPlus.formContextKey);
    const initialVal = vue.ref();
    const [model, modifiers] = vue.useModel(__props, "modelValue", {
      set(value) {
        var _a, _b;
        if (modifiers.raw) {
          return value;
        } else {
          switch (props.fieldType) {
            case "input":
            case "ciphertext":
            case "textarea":
            case "radio":
            case "date":
            case "time":
            case "number":
            case "switch":
            case "rate":
            case "color":
            case "richText":
            case "numberRange":
            case "location":
            case "slot":
            case void 0:
              return value;
            case "select":
            case "dict":
            case "dictId":
              if (attrs.multiple === "" || attrs.multiple === true) {
                return Array.isArray(value) ? value.join(",") : value;
              } else {
                return value;
              }
            case "cascader":
            case "grid":
            case "gridCode":
            case "gridId":
              if (((_a = attrs.props) == null ? void 0 : _a.multiple) === "" || ((_b = attrs.props) == null ? void 0 : _b.multiple) === true) {
                return Array.isArray(value) ? value.join(",") : value;
              } else {
                return value;
              }
            case "checkbox":
              return value.join(",");
            case "image":
            case "audio":
            case "video":
            case "file":
              fileList.value = value;
              return uploadFiles2Urls(value);
            default:
              const n = props.fieldType;
              console.warn(`[liv-web/form-item]\u4F20\u5165\u4E86\u4E00\u4E2A\u672A\u77E5\u7684fieldType\u7C7B\u578B\uFF0CfieldType=${n}\u3002`);
              return value;
          }
        }
      },
      get(value) {
        var _a, _b;
        if (modifiers.raw) {
          return value;
        } else {
          switch (props.fieldType) {
            case "input":
            case "ciphertext":
            case "textarea":
            case "radio":
            case "time":
            case "number":
            case "switch":
            case "rate":
            case "color":
            case "richText":
            case "numberRange":
            case "location":
            case "slot":
            case void 0:
              return value;
            case "date":
              return typeof value === "number" ? value + "" : value;
            case "select":
            case "dict":
            case "dictId":
              if (attrs.multiple === "" || attrs.multiple === true) {
                return value ? Array.isArray(value) ? value : value.split(",") : [];
              } else {
                return value;
              }
            case "cascader":
            case "grid":
            case "gridCode":
            case "gridId":
              if (((_a = attrs.props) == null ? void 0 : _a.multiple) === "" || ((_b = attrs.props) == null ? void 0 : _b.multiple) === true) {
                return value ? Array.isArray(value) ? value : value.split(",") : [];
              } else {
                return value;
              }
            case "checkbox":
              return value ? value.split(",") : [];
            case "image":
            case "audio":
            case "video":
            case "file":
              return urls2UploadFiles(value);
            default:
              const n = props.fieldType;
              console.warn(`[liv-web/form-item]\u4F20\u5165\u4E86\u4E00\u4E2A\u672A\u77E5\u7684fieldType\u7C7B\u578B\uFF0CfieldType=${n}\u3002`);
              return value;
          }
        }
      }
    });
    const formItemRules = vue.computed(() => {
      const { required: requiredAttr, label, rules, prop } = formItemAttrs.value;
      const required = requiredAttr === "" || requiredAttr === true;
      const emptyRule = {
        required,
        message: "",
        trigger: ["blur", "change"],
        validator: index.validateNonEmpty
      };
      if (props.fieldType === "ciphertext" && (ciphertextStatus == null ? void 0 : ciphertextStatus.value[prop]) === false) {
        return void 0;
      }
      switch (props.fieldType) {
        case "input":
        case "textarea":
        case "number":
        case "richText":
        case "ciphertext":
          emptyRule.message = `\u8BF7\u8F93\u5165${label != null ? label : ""}`;
          break;
        case "select":
        case "cascader":
        case "radio":
        case "switch":
        case "date":
        case "time":
        case "rate":
        case "color":
        case "dict":
        case "dictId":
        case "grid":
        case "gridCode":
        case "gridId":
          emptyRule.message = `\u8BF7\u9009\u62E9${label != null ? label : ""}`;
          break;
        case "checkbox":
          emptyRule.message = `\u8BF7\u9009\u62E9${label != null ? label : ""}`;
          emptyRule.trigger = ["blur"];
          break;
        case "image":
        case "audio":
        case "video":
        case "file":
          emptyRule.message = `\u8BF7\u4E0A\u4F20${label != null ? label : ""}`;
          break;
        case "numberRange":
          emptyRule.message = `\u8BF7\u8F93\u5165${label != null ? label : ""}`;
          emptyRule.validator = (_rule, _value, callback) => {
            var _a, _b, _c, _d;
            if (model.value === void 0 || model.value === null || model.value.length === 0 || ((_a = model.value) == null ? void 0 : _a[0]) === void 0 || ((_b = model.value) == null ? void 0 : _b[1]) === void 0 || ((_c = model.value) == null ? void 0 : _c[0]) === null || ((_d = model.value) == null ? void 0 : _d[1]) === null) {
              callback(new Error());
            } else {
              callback();
            }
          };
          break;
        case "location":
          emptyRule.message = `\u8BF7\u9009\u62E9${label != null ? label : ""}`;
          emptyRule.validator = (_rule, _value, callback) => {
            var _a, _b;
            if (model.value === void 0 || model.value === null || model.value.length === 0 || !((_a = model.value) == null ? void 0 : _a[0]) || !((_b = model.value) == null ? void 0 : _b[1])) {
              callback(new Error());
            } else {
              callback();
            }
          };
          break;
        case "slot":
        case void 0:
          emptyRule.message = `${label != null ? label : "\u8BE5\u9879"}\u662F\u5FC5\u586B\u9879`;
          break;
        default:
          const n = props.fieldType;
          emptyRule.message = `${label != null ? label : "\u8BE5\u9879"}\u662F\u5FC5\u586B\u9879`;
          console.warn(`[liv-web/form-item]\u4F20\u5165\u4E86\u4E00\u4E2A\u672A\u77E5\u7684fieldType\u7C7B\u578B\uFF0CfieldType=${n}\u3002`);
          break;
      }
      if (Array.isArray(rules)) {
        if (required) {
          return [emptyRule, ...rules];
        } else {
          return rules;
        }
      } else {
        if (rules) {
          if (required) {
            return [emptyRule, rules];
          } else {
            return rules;
          }
        } else {
          if (required) {
            return emptyRule;
          } else {
            return void 0;
          }
        }
      }
    });
    function validateFormItem(_value) {
      vue.nextTick(() => {
        var _a;
        return (_a = formItemRef.value) == null ? void 0 : _a.validate("change");
      });
    }
    const dateValueFormat = {
      undefined: "YYYY-MM-DD",
      year: "YYYY",
      month: "YYYY-MM",
      date: "YYYY-MM-DD",
      datetime: "YYYY-MM-DD HH:mm:ss",
      dateTime: "YYYY-MM-DD HH:mm:ss"
    };
    const uploadListType = {
      image: "picture-card",
      audio: "text",
      video: "text",
      file: "text"
    };
    const uploadAccpet = {
      image: "image/*",
      audio: "audio/*",
      video: "video/*",
      file: "*"
    };
    const imageViewerVisible = vue.ref(false);
    const previewList = vue.ref([]);
    function onPreview(uploadFile) {
      if (props.fieldType === "image") {
        previewList.value = [uploadFile.url];
        imageViewerVisible.value = true;
      } else {
        elementPlus.ElMessage.warning("\u5F53\u524D\u6587\u4EF6\u7C7B\u578B\u4E0D\u652F\u6301\u9884\u89C8\uFF01");
      }
    }
    const fileList = vue.ref([]);
    function getFileAllChunks(file, md5, name) {
      const chunkSize = fileChunkUploadConfig.chunkSize;
      const chunks = [];
      const fileSize = file.size;
      let count = Math.ceil(fileSize / chunkSize);
      let index = 0;
      const fileName = file.name;
      while (index < count) {
        const chunk = file.slice(index * chunkSize, (index + 1) * chunkSize);
        chunks.push({
          index,
          name,
          chunkSize,
          md5,
          fileSize,
          blob: chunk,
          fileName,
          totalChunkLength: count
        });
        index++;
      }
      return chunks;
    }
    async function fileHttpRequest(option) {
      const { file, onProgress } = option;
      const LIMIT = fileChunkUploadConfig.limit;
      const md5 = await index$1.getMd5ByFile(file);
      const fileSize = file.size;
      const chunks = getFileAllChunks(file, md5, option.filename);
      const totalChunkLength = chunks.length;
      const progressArr = new Array(totalChunkLength).fill(0);
      try {
        while (chunks.length) {
          const requests = chunks.splice(0, LIMIT).map(async (chunk) => {
            await (fileChunkUploadFunction == null ? void 0 : fileChunkUploadFunction(chunk, (progressEvent) => {
              progressArr[chunk.index] = progressEvent.loaded;
              const uploadedSize = progressArr.reduce((a, b) => a + b, 0);
              const progress = uploadedSize / fileSize * 100;
              onProgress == null ? void 0 : onProgress({ percent: progress });
            }));
          });
          await Promise.all(requests);
        }
        const mergeParam = {
          md5,
          fileName: file.name,
          fileSize,
          totalChunkLength
        };
        const res = await (fileChunkMergeFunction == null ? void 0 : fileChunkMergeFunction(mergeParam));
        return Promise.resolve(res);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    function uploadSuccess(response, uploadFile, uploadFiles) {
      var _a;
      if (uploadFiles.filter((uploadFile2) => uploadFile2.status !== "success").length === 0) {
        model.value = uploadFiles;
        validateFormItem(uploadFiles);
      }
      const onSuccess = (_a = contentAttrs.value["on-success"]) != null ? _a : contentAttrs.value["onSuccess"];
      if (onSuccess) {
        onSuccess(response, uploadFile, uploadFiles);
      }
    }
    function beforeUpload(rawFile) {
      var _a;
      if (props.fieldType === "image" && !rawFile.type.startsWith("image")) {
        elementPlus.ElMessage.error("\u8BF7\u4E0A\u4F20\u56FE\u7247\u7C7B\u578B\u6587\u4EF6!");
        return false;
      } else if (props.fieldType === "audio" && !rawFile.type.startsWith("audio")) {
        elementPlus.ElMessage.error("\u8BF7\u4E0A\u4F20\u97F3\u9891\u7C7B\u578B\u6587\u4EF6!");
        return false;
      } else if (props.fieldType === "video" && !rawFile.type.startsWith("video")) {
        elementPlus.ElMessage.error("\u8BF7\u4E0A\u4F20\u89C6\u9891\u7C7B\u578B\u6587\u4EF6!");
        return false;
      } else if (contentAttrs.value.extensions && !contentAttrs.value.extensions.find((ext) => rawFile.name.endsWith(ext))) {
        elementPlus.ElMessage.error(`\u53EA\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u6269\u5C55\u540D\u4E3A${contentAttrs.value.extensions.join("\u3001")}\u7684\u6587\u4EF6\uFF01`);
        return false;
      } else if (contentAttrs.value.maxSize && rawFile.size > contentAttrs.value.maxSize) {
        elementPlus.ElMessage.error(
          `\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${contentAttrs.value.maxSize >= 1024 * 1024 ? contentAttrs.value.maxSize / 1024 / 1024 + "M" : contentAttrs.value.maxSize / 1024 + "KB"}\uFF01`
        );
        return false;
      }
      const beforeUpload2 = (_a = contentAttrs.value["before-upload"]) != null ? _a : contentAttrs.value["beforeUpload"];
      if (beforeUpload2) {
        return beforeUpload2(rawFile);
      } else {
        return true;
      }
    }
    function uploadRemove(uploadFile, uploadFiles) {
      var _a;
      model.value = uploadFiles;
      validateFormItem(uploadFiles);
      const onRemove = (_a = contentAttrs.value["on-remove"]) != null ? _a : contentAttrs.value["onRemove"];
      if (onRemove) {
        onRemove(uploadFile, uploadFiles);
      }
    }
    function uploadFiles2Urls(uploadFiles) {
      return uploadFiles.reduce((urls, file) => {
        if (file.status === "success") {
          if (file.relativeUrl) {
            urls.push(file.relativeUrl);
          } else if (file.response) {
            const url = handleFileResponse == null ? void 0 : handleFileResponse(file.response);
            if (url) {
              urls.push(url);
            }
          }
        }
        return urls;
      }, []).join(",");
    }
    function urls2UploadFiles(urls) {
      const relativeUrls = urls ? urls.split(",") : [];
      const files = [];
      relativeUrls.map((relativeUrl) => {
        var _a;
        const file = (_a = fileList.value) == null ? void 0 : _a.find(
          (item) => item.response ? (handleFileResponse == null ? void 0 : handleFileResponse(item.response)) === relativeUrl : false
        );
        if (!file) {
          files.push({
            name: index$1.getFileName(relativeUrl),
            url: handleFileUrls == null ? void 0 : handleFileUrls(relativeUrl)[0],
            relativeUrl,
            status: "success",
            uid: elementPlus.genFileId()
          });
        } else {
          files.push(file);
        }
      });
      return files;
    }
    const locationPickerDialog = vue.ref(false);
    function locationPickerConfirm() {
      locationPickerDialog.value = false;
      validateFormItem();
    }
    const address = vue.ref("");
    vue.watch(AMapRef, () => {
      var _a, _b;
      if (props.fieldType === "location" && !address.value && AMapRef.value && ((_a = model.value) == null ? void 0 : _a[0]) && ((_b = model.value) == null ? void 0 : _b[1])) {
        AMapRef.value.plugin(["AMap.Geocoder"], () => {
          const geocoder = new AMapRef.value.Geocoder({
            radius: 1e3,
            extensions: "all"
          });
          geocoder == null ? void 0 : geocoder.getAddress(model.value, (status, result) => {
            if (status === "complete" && result.info === "OK") {
              address.value = result.regeocode.formattedAddress;
            } else {
              console.error("[liv-web/form-item]\u9006\u5730\u7406\u7F16\u7801\u5931\u8D25\uFF01", result);
            }
          });
        });
      }
    });
    const verifyVisible = vue.ref(false);
    const ciphertextStatus = vue.inject(
      dataForm.CIPHERTEXT_STATUS_KEY,
      void 0
    );
    const ciphertextDecrypted = vue.computed(() => {
      var _a;
      return (_a = ciphertextStatus == null ? void 0 : ciphertextStatus.value) == null ? void 0 : _a[formItemAttrs.value.prop];
    });
    const updateFromInput = vue.ref(false);
    vue.watch(model, (newValue) => {
      if (props.fieldType === "ciphertext") {
        if (ciphertextStatus == null ? void 0 : ciphertextStatus.value) {
          if (updateFromInput.value) {
            updateFromInput.value = false;
          } else {
            if (newValue !== void 0 && newValue !== null && newValue !== "") {
              ciphertextStatus.value[formItemAttrs.value.prop] = false;
              initialVal.value = model.value;
            }
          }
        }
      }
    });
    function ciphertextUpdate(e) {
      updateFromInput.value = true;
      model.value = e;
    }
    function verifySuccess(params) {
      var _a, _b;
      const decryptImpl = (_b = (_a = contentAttrs.value).decrypt) == null ? void 0 : _b.call(_a, params, formModel == null ? void 0 : formModel.value);
      if (decryptImpl) {
        if (decryptImpl instanceof Promise) {
          decryptImpl.then((res) => {
            ciphertextUpdate(res);
            if (ciphertextStatus == null ? void 0 : ciphertextStatus.value) {
              ciphertextStatus.value[formItemAttrs.value.prop] = true;
            }
          });
        } else if (typeof decryptImpl === "string") {
          ciphertextUpdate(decryptImpl);
          if (ciphertextStatus == null ? void 0 : ciphertextStatus.value) {
            ciphertextStatus.value[formItemAttrs.value.prop] = true;
          }
        } else {
          console.error("[liv-web/form-item]\u8BF7\u68C0\u67E5\u4F20\u5165\u7684\u89E3\u5BC6\u903B\u8F91\u662F\u5426\u6B63\u786E\uFF01");
        }
      } else {
        console.error("[liv-web/form-item]\u5F53fieldType\u4E3Aciphertext\u65F6\uFF0C\u9700\u8981\u4F20\u5165\u5177\u4F53\u7684\u89E3\u5BC6\u903B\u8F91\uFF01");
      }
    }
    function resetCiphertext() {
      model.value = initialVal.value;
      if (ciphertextStatus == null ? void 0 : ciphertextStatus.value) {
        ciphertextStatus.value[formItemAttrs.value.prop] = false;
      }
    }
    vue.onMounted(() => {
      var _a, _b, _c;
      if (props.fieldType === "numberRange" && Array.isArray(formItemAttrs.value.prop)) {
        let resetNumberRange = function() {
          model.value = [initialVal.value[0], initialVal.value[1]];
          if (formContext == null ? void 0 : formContext.model) {
            if (formItemAttrs.value.prop) {
              formContext.model[formItemAttrs.value.prop[0]] = initialVal.value[0];
              formContext.model[formItemAttrs.value.prop[1]] = initialVal.value[1];
            }
          }
        };
        initialVal.value = lodashEs.clone(model.value);
        const field = (_a = formContext == null ? void 0 : formContext.getField) == null ? void 0 : _a.call(formContext, formItemAttrs.value.prop);
        if (field) {
          field.resetField = resetNumberRange;
        }
      }
      if (props.fieldType === "location" && Array.isArray(formItemAttrs.value.prop)) {
        let resetLocation = function() {
          model.value = [initialVal.value[0], initialVal.value[1]];
          if (formContext == null ? void 0 : formContext.model) {
            if (formItemAttrs.value.prop) {
              formContext.model[formItemAttrs.value.prop[0]] = initialVal.value[0];
              formContext.model[formItemAttrs.value.prop[1]] = initialVal.value[1];
            }
          }
        };
        initialVal.value = lodashEs.clone(model.value);
        const field = (_b = formContext == null ? void 0 : formContext.getField) == null ? void 0 : _b.call(formContext, formItemAttrs.value.prop);
        if (field) {
          field.resetField = resetLocation;
        }
      }
      if (props.fieldType === "ciphertext") {
        initialVal.value = model.value;
        const field = (_c = formContext == null ? void 0 : formContext.getField) == null ? void 0 : _c.call(formContext, formItemAttrs.value.prop);
        if (field) {
          field.resetField = resetCiphertext;
        }
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createVNode(vue.unref(elementPlus.ElFormItem), vue.mergeProps({
            ref_key: "formItemRef",
            ref: formItemRef,
            class: "liv-form-item"
          }, formItemAttrs.value, { rules: formItemRules.value }), {
            label: vue.withCtx(() => {
              var _a;
              return [
                vue.createElementVNode("div", _hoisted_1, [
                  vue.createElementVNode(
                    "span",
                    null,
                    vue.toDisplayString(formItemAttrs.value.label),
                    1
                    /* TEXT */
                  ),
                  contentAttrs.value.tooltip ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTooltip), {
                    key: 0,
                    effect: "dark",
                    content: contentAttrs.value.tooltip,
                    placement: (_a = contentAttrs.value.placement) != null ? _a : "top"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElIcon), {
                        class: "liv-form-item__label-icon",
                        size: 14
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(iconsVue.QuestionFilled))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["content", "placement"])) : vue.createCommentVNode("v-if", true)
                ])
              ];
            }),
            default: vue.withCtx(() => {
              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
              return [
                _ctx.fieldType === "input" || _ctx.fieldType === "textarea" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInput), vue.mergeProps({
                  key: 0,
                  class: "liv-form-item__input",
                  placeholder: "\u8BF7\u8F93\u5165" + ((_a = formItemAttrs.value.label) != null ? _a : ""),
                  showWordLimit: contentAttrs.value.maxlength ? true : false,
                  type: _ctx.fieldType === "textarea" ? "textarea" : "text",
                  rows: 3
                }, vue.unref(lodashEs.omit)(contentAttrs.value, ["prefix", "suffix", "prepend", "append"]), {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  }),
                  contentAttrs.value.prefix ? {
                    name: "prefix",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.prefix),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "0"
                  } : void 0,
                  contentAttrs.value.suffix ? {
                    name: "suffix",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.suffix),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "1"
                  } : void 0,
                  contentAttrs.value.prepend ? {
                    name: "prepend",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.prepend),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "2"
                  } : void 0,
                  contentAttrs.value.append ? {
                    name: "append",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.append),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "3"
                  } : void 0
                ]), 1040, ["placeholder", "showWordLimit", "type", "modelValue"])) : _ctx.fieldType === "ciphertext" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInput), vue.mergeProps({
                  key: 1,
                  class: "liv-form-item__ciphertext",
                  placeholder: "\u8BF7\u8F93\u5165" + ((_b = formItemAttrs.value.label) != null ? _b : ""),
                  showWordLimit: contentAttrs.value.maxlength ? true : false,
                  disabled: !ciphertextDecrypted.value
                }, vue.unref(lodashEs.omit)(contentAttrs.value, ["type"]), {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": ciphertextUpdate
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  }),
                  !_ctx.$slots.append && initialVal.value !== void 0 && initialVal.value !== null && initialVal.value !== "" ? {
                    name: "append",
                    fn: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                        default: vue.withCtx(() => [
                          ciphertextDecrypted.value ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.View), {
                            key: 0,
                            onClick: resetCiphertext
                          })) : (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.Hide), {
                            key: 1,
                            onClick: _cache[1] || (_cache[1] = ($event) => verifyVisible.value = true)
                          }))
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["placeholder", "showWordLimit", "disabled", "modelValue"])) : _ctx.fieldType === "select" ? (vue.openBlock(), vue.createBlock(select_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 2,
                  class: "liv-form-item__select",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_c = formItemAttrs.value.label) != null ? _c : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "modelValue"])) : _ctx.fieldType === "cascader" ? (vue.openBlock(), vue.createBlock(cascader_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 3,
                  class: "liv-form-item__cascader",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_d = formItemAttrs.value.label) != null ? _d : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(model) ? model.value = $event : null),
                  onChange: validateFormItem
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(vue.unref(slots), (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "modelValue"])) : _ctx.fieldType === "radio" ? (vue.openBlock(), vue.createBlock(radio_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 4,
                  class: "liv-form-item__radio"
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(vue.unref(slots), (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["modelValue"])) : _ctx.fieldType === "checkbox" ? (vue.openBlock(), vue.createBlock(checkbox_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 5,
                  class: "liv-form-item__checkbox"
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(model) ? model.value = $event : null),
                  onChange: validateFormItem
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(vue.unref(slots), (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["modelValue"])) : _ctx.fieldType === "date" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElDatePicker), vue.mergeProps({
                  key: 6,
                  class: "liv-form-item__date",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_e = formItemAttrs.value.label) != null ? _e : ""),
                  "value-format": dateValueFormat[contentAttrs.value.type],
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "value-format", "modelValue"])) : _ctx.fieldType === "time" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTimePicker), vue.mergeProps({
                  key: 7,
                  class: "liv-form-item__time",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_f = formItemAttrs.value.label) != null ? _f : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), null, 16, ["placeholder", "modelValue"])) : _ctx.fieldType === "switch" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElSwitch), vue.mergeProps({
                  key: 8,
                  class: "liv-form-item__switch"
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["modelValue"])) : _ctx.fieldType === "number" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInputNumber), vue.mergeProps({
                  key: 9,
                  class: "liv-form-item__number",
                  placeholder: "\u8BF7\u8F93\u5165" + ((_g = formItemAttrs.value.label) != null ? _g : "")
                }, vue.unref(lodashEs.omit)(contentAttrs.value, ["prefix", "suffix"]), {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  }),
                  contentAttrs.value.prefix ? {
                    name: "prefix",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.prefix),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "0"
                  } : void 0,
                  contentAttrs.value.suffix ? {
                    name: "suffix",
                    fn: vue.withCtx(() => [
                      vue.createTextVNode(
                        vue.toDisplayString(contentAttrs.value.suffix),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "1"
                  } : void 0
                ]), 1040, ["placeholder", "modelValue"])) : _ctx.fieldType === "numberRange" ? (vue.openBlock(), vue.createBlock(numberRange_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 10,
                  class: "liv-form-item__number-range",
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }, contentAttrs.value), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["modelValue"])) : _ctx.fieldType === "rate" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRate), vue.mergeProps({ key: 11 }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), null, 16, ["modelValue"])) : _ctx.fieldType === "color" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElColorPicker), vue.mergeProps({ key: 12 }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), null, 16, ["modelValue"])) : _ctx.fieldType === "image" || _ctx.fieldType === "audio" || _ctx.fieldType === "video" || _ctx.fieldType === "file" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElUpload), vue.mergeProps({
                  key: 13,
                  class: ["liv-form-item__upload", {
                    "liv-form-item__upload--hide": vue.unref(model).length >= (contentAttrs.value.limit || 9)
                  }],
                  action: contentAttrs.value["chunk"] ? "" : vue.unref(fileUploadUrl),
                  "http-request": contentAttrs.value["chunk"] ? fileHttpRequest : void 0,
                  headers: typeof vue.unref(fileUploadHeader) === "function" ? vue.unref(fileUploadHeader)() : vue.unref(fileUploadHeader),
                  "list-type": uploadListType[_ctx.fieldType],
                  data: typeof vue.unref(fileUploadData) === "function" ? vue.unref(fileUploadData)() : vue.unref(fileUploadData),
                  accept: uploadAccpet[_ctx.fieldType],
                  limit: 9,
                  "on-preview": onPreview
                }, vue.unref(lodashEs.omit)(contentAttrs.value, ["on-success", "onSuccess", "on-remove", "onRemove"]), {
                  "file-list": vue.unref(model),
                  "on-success": uploadSuccess,
                  "on-remove": uploadRemove,
                  "before-upload": beforeUpload
                }), vue.createSlots({
                  default: vue.withCtx(() => {
                    var _a2, _b2, _c2, _d2;
                    return [
                      ((_b2 = (_a2 = contentAttrs.value["listType"]) != null ? _a2 : contentAttrs.value["list-type"]) != null ? _b2 : uploadListType[_ctx.fieldType]) === "picture-card" ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), { key: 0 }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(iconsVue.Plus))
                        ]),
                        _: 1
                        /* STABLE */
                      })) : (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
                        key: 1,
                        type: "primary",
                        plain: "",
                        disabled: ((_d2 = (_c2 = vue.unref(model)) == null ? void 0 : _c2.length) != null ? _d2 : 0) >= (contentAttrs.value.limit || 9)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(elementPlus.ElIcon), {
                            style: { "margin-right": "4px" },
                            size: "16"
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(vue.unref(iconsVue.FolderOpened))
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          _cache[25] || (_cache[25] = vue.createTextVNode(" \u9009\u62E9\u6587\u4EF6"))
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["disabled"]))
                    ];
                  }),
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  }),
                  contentAttrs.value.tip ? {
                    name: "tip",
                    fn: vue.withCtx(() => [
                      vue.createElementVNode(
                        "div",
                        _hoisted_2,
                        vue.toDisplayString(contentAttrs.value.tip),
                        1
                        /* TEXT */
                      )
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["action", "http-request", "headers", "list-type", "data", "accept", "class", "file-list"])) : _ctx.fieldType === "dict" ? (vue.openBlock(), vue.createBlock(dictSelect_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 14,
                  class: "liv-form-item__dict",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_h = formItemAttrs.value.label) != null ? _h : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "modelValue"])) : _ctx.fieldType === "dictId" ? (vue.openBlock(), vue.createBlock(dictSelect_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 15,
                  class: "liv-form-item__dict",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_i = formItemAttrs.value.label) != null ? _i : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  "dict-id": vue.unref(model),
                  "onUpdate:dictId": _cache[14] || (_cache[14] = ($event) => vue.isRef(model) ? model.value = $event : null)
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "dict-id"])) : _ctx.fieldType === "grid" || _ctx.fieldType === "gridCode" ? (vue.openBlock(), vue.createBlock(gridCascader_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 16,
                  class: "liv-form-item__grid",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_j = formItemAttrs.value.label) != null ? _j : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  modelValue: vue.unref(model),
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => vue.isRef(model) ? model.value = $event : null),
                  onChange: validateFormItem
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "modelValue"])) : _ctx.fieldType === "gridId" ? (vue.openBlock(), vue.createBlock(gridCascader_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                  key: 17,
                  class: "liv-form-item__grid",
                  placeholder: "\u8BF7\u9009\u62E9" + ((_k = formItemAttrs.value.label) != null ? _k : ""),
                  clearable: ""
                }, contentAttrs.value, {
                  "grid-id": vue.unref(model),
                  "onUpdate:gridId": _cache[16] || (_cache[16] = ($event) => vue.isRef(model) ? model.value = $event : null),
                  onChange: validateFormItem
                }), vue.createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  vue.renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: vue.withCtx((slotData) => [
                        vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
                      ])
                    };
                  })
                ]), 1040, ["placeholder", "grid-id"])) : _ctx.fieldType === "location" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.createVNode(vue.unref(elementPlus.ElButton), {
                    type: "primary",
                    plain: "",
                    onClick: _cache[17] || (_cache[17] = ($event) => locationPickerDialog.value = true)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(vue.unref(elementPlus.ElIcon), {
                        style: { "margin-right": "4px" },
                        size: "16"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(iconsVue.Location))
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      _cache[26] || (_cache[26] = vue.createTextVNode(" \u9009\u62E9\u4F4D\u7F6E"))
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("div", _hoisted_4, [
                    ((_l = vue.unref(model)) == null ? void 0 : _l[0]) || ((_m = vue.unref(model)) == null ? void 0 : _m[1]) ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTooltip), {
                      key: 0,
                      placement: "top"
                    }, {
                      content: vue.withCtx(() => {
                        var _a2, _b2;
                        return [
                          address.value ? (vue.openBlock(), vue.createElementBlock(
                            "div",
                            _hoisted_7,
                            vue.toDisplayString(address.value),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true),
                          vue.createElementVNode(
                            "div",
                            null,
                            "\u7ECF\u5EA6\uFF1A" + vue.toDisplayString((_a2 = vue.unref(model)) == null ? void 0 : _a2[0]) + " \u7EAC\u5EA6\uFF1A" + vue.toDisplayString((_b2 = vue.unref(model)) == null ? void 0 : _b2[1]),
                            1
                            /* TEXT */
                          )
                        ];
                      }),
                      default: vue.withCtx(() => {
                        var _a2, _b2, _c2, _d2;
                        return [
                          address.value ? (vue.openBlock(), vue.createElementBlock(
                            "span",
                            _hoisted_5,
                            vue.toDisplayString(address.value),
                            1
                            /* TEXT */
                          )) : ((_a2 = vue.unref(model)) == null ? void 0 : _a2[0]) || ((_b2 = vue.unref(model)) == null ? void 0 : _b2[1]) ? (vue.openBlock(), vue.createElementBlock(
                            "span",
                            _hoisted_6,
                            " \u7ECF\u5EA6\uFF1A" + vue.toDisplayString((_c2 = vue.unref(model)) == null ? void 0 : _c2[0]) + " \u7EAC\u5EA6\uFF1A" + vue.toDisplayString((_d2 = vue.unref(model)) == null ? void 0 : _d2[1]),
                            1
                            /* TEXT */
                          )) : vue.createCommentVNode("v-if", true)
                        ];
                      }),
                      _: 1
                      /* STABLE */
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ])) : _ctx.fieldType === "richText" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                  vue.createVNode(richText_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({
                    class: "liv-form-item__rich-text",
                    modelValue: vue.unref(model),
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => vue.isRef(model) ? model.value = $event : null)
                  }, contentAttrs.value), null, 16, ["modelValue"])
                ])) : _ctx.fieldType === "slot" && formItemAttrs.value.prop ? vue.renderSlot(_ctx.$slots, formItemAttrs.value.prop, { key: 20 }) : vue.renderSlot(_ctx.$slots, "default", { key: 21 }),
                vue.renderSlot(_ctx.$slots, "right")
              ];
            }),
            _: 3
            /* FORWARDED */
          }, 16, ["rules"]),
          imageViewerVisible.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElImageViewer), {
            key: 0,
            onClose: _cache[19] || (_cache[19] = () => imageViewerVisible.value = false),
            "url-list": previewList.value
          }, null, 8, ["url-list"])) : vue.createCommentVNode("v-if", true),
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            title: "\u9009\u53D6\u7ECF\u7EAC\u5EA6",
            modelValue: locationPickerDialog.value,
            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => locationPickerDialog.value = $event),
            width: "55%"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(locationPicker_vue_vue_type_script_setup_true_lang.default, vue.mergeProps(contentAttrs.value, {
                modelValue: vue.unref(model),
                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => vue.isRef(model) ? model.value = $event : null),
                address: address.value,
                "onUpdate:address": _cache[21] || (_cache[21] = ($event) => address.value = $event),
                onConfirm: _cache[22] || (_cache[22] = ($event) => locationPickerConfirm())
              }), null, 16, ["modelValue", "address"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _ctx.fieldType === "ciphertext" ? (vue.openBlock(), vue.createBlock(verify_vue_vue_type_script_setup_true_lang.default, vue.mergeProps({ key: 1 }, contentAttrs.value, {
            modelValue: verifyVisible.value,
            "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => verifyVisible.value = $event),
            onSuccess: verifySuccess
          }), null, 16, ["modelValue"])) : vue.createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=form-item.vue2.js.map
