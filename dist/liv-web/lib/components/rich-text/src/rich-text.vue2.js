'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var lodashEs = require('lodash-es');
require('../../../utils/index.js');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');
var file = require('../../../utils/inject/file.js');

const _hoisted_1 = { class: "liv-rich-text" };
var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivRichText"
  },
  __name: "rich-text",
  props: /* @__PURE__ */ vue.mergeModels({
    toolbar: { type: Object, required: false },
    editor: { type: Object, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const globalProps = vue.inject(component.RICH_TEXT_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const fileUploadUrl = file.injectFileUploadUrl();
    const fileUploadHeader = file.injectFileUploadHeader();
    const fileUploadData = file.injectFileUploadData();
    const handleFileResponse = file.injectHandleFileResponse();
    const handleFileUrls = file.injectHandleFileUrls();
    const model = vue.useModel(__props, "modelValue");
    const toolBarComponent = vue.shallowRef();
    const editorComponent = vue.shallowRef();
    const editorRef = vue.shallowRef();
    vue.onMounted(() => {
      import('@wangeditor/editor-for-vue').then((module) => {
        toolBarComponent.value = module.Toolbar;
        editorComponent.value = module.Editor;
      }).catch((error) => {
        throw new Error(`[liv-web/rich-text]\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u52A0\u8F7D\u5931\u8D25\uFF1A${JSON.stringify(error)}`);
      });
    });
    const handleCreated = (editor) => {
      editorRef.value = editor;
    };
    const toolbarConfig = {};
    const editorUploadConfig = {
      fieldName: "file",
      server: fileUploadUrl,
      maxFileSize: 10 * 1024 * 1024,
      headers: fileUploadHeader instanceof Function ? fileUploadHeader() : fileUploadHeader,
      meta: fileUploadData instanceof Function ? fileUploadData() : fileUploadData,
      customInsert(res, insertFn) {
        const url = handleFileUrls == null ? void 0 : handleFileUrls(handleFileResponse == null ? void 0 : handleFileResponse(res))[0];
        if (url) {
          insertFn(url, "", "");
        } else {
          console.error(`[liv-web/rich-text]\u56FE\u7247\u5904\u7406\u5931\u8D25\uFF0Cresponse=${JSON.stringify(res)}`);
        }
      }
    };
    const editorConfig = {
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9...",
      MENU_CONF: {
        uploadImage: editorUploadConfig,
        uploadVideo: editorUploadConfig
      }
    };
    vue.onBeforeUnmount(() => {
      var _a;
      (_a = editorRef.value) == null ? void 0 : _a.destroy();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(toolBarComponent.value), vue.mergeProps({
          style: vue.unref(lodashEs.merge)(
            { borderBottom: "1px solid var(--el-border-color)" },
            (_a = vue.unref(propsProxy).toolbar) == null ? void 0 : _a.style
          ),
          editor: editorRef.value,
          defaultConfig: vue.unref(lodashEs.merge)(toolbarConfig, (_b = vue.unref(propsProxy).toolbar) == null ? void 0 : _b.defaultConfig),
          mode: "default"
        }, vue.unref(lodashEs.omit)(vue.unref(propsProxy).toolbar, ["style", "defaultConfig"])), null, 16, ["style", "editor", "defaultConfig"])),
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(editorComponent.value), vue.mergeProps({
          style: vue.unref(lodashEs.merge)(
            { height: "320px", overflowY: "hidden" },
            (_c = vue.unref(propsProxy).editor) == null ? void 0 : _c.style
          ),
          modelValue: model.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          defaultConfig: vue.unref(lodashEs.merge)(editorConfig, (_d = vue.unref(propsProxy).editor) == null ? void 0 : _d.defaultConfig),
          mode: "default",
          onOnCreated: handleCreated
        }, vue.unref(lodashEs.omit)(vue.unref(propsProxy).editor, ["style", "defaultConfig"])), null, 16, ["style", "modelValue", "defaultConfig"]))
      ]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=rich-text.vue2.js.map
