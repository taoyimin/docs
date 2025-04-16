import { defineComponent, mergeModels, inject, useModel, shallowRef, onMounted, onBeforeUnmount, openBlock, createElementBlock, createBlock, resolveDynamicComponent, mergeProps, unref } from 'vue';
import { merge, omit } from 'lodash-es';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { RICH_TEXT_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';
import { injectFileUploadUrl, injectFileUploadHeader, injectFileUploadData, injectHandleFileResponse, injectHandleFileUrls } from '../../../utils/inject/file.mjs';

const _hoisted_1 = { class: "liv-rich-text" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivRichText"
  },
  __name: "rich-text",
  props: /* @__PURE__ */ mergeModels({
    toolbar: { type: Object, required: false },
    editor: { type: Object, required: false }
  }, {
    "modelValue": { type: String },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const globalProps = inject(RICH_TEXT_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const fileUploadUrl = injectFileUploadUrl();
    const fileUploadHeader = injectFileUploadHeader();
    const fileUploadData = injectFileUploadData();
    const handleFileResponse = injectHandleFileResponse();
    const handleFileUrls = injectHandleFileUrls();
    const model = useModel(__props, "modelValue");
    const toolBarComponent = shallowRef();
    const editorComponent = shallowRef();
    const editorRef = shallowRef();
    onMounted(() => {
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
    onBeforeUnmount(() => {
      var _a;
      (_a = editorRef.value) == null ? void 0 : _a.destroy();
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(resolveDynamicComponent(toolBarComponent.value), mergeProps({
          style: unref(merge)(
            { borderBottom: "1px solid var(--el-border-color)" },
            (_a = unref(propsProxy).toolbar) == null ? void 0 : _a.style
          ),
          editor: editorRef.value,
          defaultConfig: unref(merge)(toolbarConfig, (_b = unref(propsProxy).toolbar) == null ? void 0 : _b.defaultConfig),
          mode: "default"
        }, unref(omit)(unref(propsProxy).toolbar, ["style", "defaultConfig"])), null, 16, ["style", "editor", "defaultConfig"])),
        (openBlock(), createBlock(resolveDynamicComponent(editorComponent.value), mergeProps({
          style: unref(merge)(
            { height: "320px", overflowY: "hidden" },
            (_c = unref(propsProxy).editor) == null ? void 0 : _c.style
          ),
          modelValue: model.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          defaultConfig: unref(merge)(editorConfig, (_d = unref(propsProxy).editor) == null ? void 0 : _d.defaultConfig),
          mode: "default",
          onOnCreated: handleCreated
        }, unref(omit)(unref(propsProxy).editor, ["style", "defaultConfig"])), null, 16, ["style", "modelValue", "defaultConfig"]))
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=rich-text.vue2.mjs.map
