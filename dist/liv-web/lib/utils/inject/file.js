'use strict';

require('../../constants/index.js');
var vue = require('vue');
var file = require('../../constants/inject/file.js');

function injectFileUploadUrl() {
  const fileUploadUrl = vue.inject(file.FILE_UPLOAD_URL_KEY, void 0);
  if (fileUploadUrl) {
    return fileUploadUrl;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3002");
  }
}
function injectFileUploadHeader() {
  const fileUploadHeader = vue.inject(file.FILE_UPLOAD_HEADER_KEY, {});
  return fileUploadHeader;
}
function injectFileUploadData() {
  const fileUploadData = vue.inject(file.FILE_UPLOAD_DATA_KEY, {});
  return fileUploadData;
}
function injectHandleFileUrls() {
  const handleFileUrls = vue.inject(file.HANDLE_FILE_URLS_KEY, void 0);
  if (handleFileUrls) {
    return handleFileUrls;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u6587\u4EF6\u5730\u5740\u65B9\u6CD5\u3002");
  }
}
function injectHandleThumbUrls() {
  const handleThumbUrls = vue.inject(file.HANDLE_THUMB_URLS_KEY, void 0);
  if (handleThumbUrls) {
    return handleThumbUrls;
  } else {
    console.warn("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u7F29\u7565\u56FE\u5730\u5740\u65B9\u6CD5\u3002");
  }
}
function injectHandleFileResponse() {
  const handleFileResponse = vue.inject(file.HANDLE_FILE_RESPONSE_KEY, void 0);
  if (handleFileResponse) {
    return handleFileResponse;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\u8FD4\u56DE\u7684response\u65B9\u6CD5\u3002");
  }
}
function injectFileChunkUploadConfig() {
  const fileChunkUploadConfig = vue.inject(file.FILE_CHUNK_UPLOAD_CONNFIG_KRY, {
    chunkSize: 5 * 1024 * 1024,
    limit: 3
  });
  return fileChunkUploadConfig;
}
function injectFileChunkUploadFunction() {
  const fileChunkUploadAxios = vue.inject(file.FILE_CHUNK_UPLOAD_FUNCTION_KEY, void 0);
  if (fileChunkUploadAxios) {
    return fileChunkUploadAxios;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u5207\u7247\u4E0A\u4F20\u5730\u5740\u3002"));
  }
}
function injectFileChunkMergeFunction() {
  const fileChunkMerge = vue.inject(file.FILE_CHUNK_MERGE_FUNCTION_KEY, void 0);
  if (fileChunkMerge) {
    return fileChunkMerge;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u5207\u7247\u5408\u5E76\u5730\u5740\u3002"));
  }
}

exports.injectFileChunkMergeFunction = injectFileChunkMergeFunction;
exports.injectFileChunkUploadConfig = injectFileChunkUploadConfig;
exports.injectFileChunkUploadFunction = injectFileChunkUploadFunction;
exports.injectFileUploadData = injectFileUploadData;
exports.injectFileUploadHeader = injectFileUploadHeader;
exports.injectFileUploadUrl = injectFileUploadUrl;
exports.injectHandleFileResponse = injectHandleFileResponse;
exports.injectHandleFileUrls = injectHandleFileUrls;
exports.injectHandleThumbUrls = injectHandleThumbUrls;
//# sourceMappingURL=file.js.map
