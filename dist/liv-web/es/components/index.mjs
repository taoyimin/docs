import { Boot } from '@wangeditor/editor';
import '@amap/amap-jsapi-types';
export { LivAMap } from './a-map/index.mjs';
export { LivCascader } from './cascader/index.mjs';
export { LivCheckbox } from './checkbox/index.mjs';
export { LivDataCard } from './data-card/index.mjs';
export { LivDataDescriptions } from './data-descriptions/index.mjs';
export { LivDataForm } from './data-form/index.mjs';
export { LivDataPagination } from './data-pagination/index.mjs';
export { LivDataTable } from './data-table/index.mjs';
export { LivDictSelect } from './dict-select/index.mjs';
export { LivFormItem } from './form-item/index.mjs';
export { LivGridCascader } from './grid-cascader/index.mjs';
export { LivGridTree } from './grid-tree/index.mjs';
export { LivLocationPicker } from './location-picker/index.mjs';
export { LivNumberRange } from './number-range/index.mjs';
export { LivQrCode } from './qr-code/index.mjs';
export { LivRadio } from './radio/index.mjs';
export { LivRichText } from './rich-text/index.mjs';
export { LivSearchForm } from './search-form/index.mjs';
export { LivSelect } from './select/index.mjs';
export { LivVerify } from './verify/index.mjs';
export { LivAuthority } from './authority/index.mjs';
export { LivRemove } from './remove/index.mjs';
export { vAuthority as LivAuthorityDirective, vAuthority } from './authority/src/directive/index.mjs';
export { vRemove as LivRemoveDirective, vRemove } from './remove/src/directive/index.mjs';

Boot.registerPlugin(withGetHtml);
function withGetHtml(editor) {
  const { getHtml } = editor;
  const newEditor = editor;
  newEditor.getHtml = () => {
    if (getHtml() === "<p><br></p>") return "";
    if (getHtml() === "<h1></h1>") return "";
    if (getHtml() === "<h2></h2>") return "";
    if (getHtml() === "<h3></h3>") return "";
    if (getHtml() === "<h4></h4>") return "";
    if (getHtml() === "<h5></h5>") return "";
    return getHtml();
  };
  return newEditor;
}
//# sourceMappingURL=index.mjs.map
