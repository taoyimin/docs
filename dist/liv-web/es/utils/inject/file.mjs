import '../../constants/index.mjs';
import { inject } from 'vue';
import { FILE_UPLOAD_URL_KEY, FILE_UPLOAD_HEADER_KEY, FILE_UPLOAD_DATA_KEY, HANDLE_FILE_URLS_KEY, HANDLE_THUMB_URLS_KEY, HANDLE_FILE_RESPONSE_KEY, FILE_CHUNK_UPLOAD_CONNFIG_KRY, FILE_CHUNK_UPLOAD_FUNCTION_KEY, FILE_CHUNK_MERGE_FUNCTION_KEY } from '../../constants/inject/file.mjs';

function injectFileUploadUrl() {
  const fileUploadUrl = inject(FILE_UPLOAD_URL_KEY, void 0);
  if (fileUploadUrl) {
    return fileUploadUrl;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u4E0A\u4F20\u5730\u5740\u3002");
  }
}
function injectFileUploadHeader() {
  const fileUploadHeader = inject(FILE_UPLOAD_HEADER_KEY, {});
  return fileUploadHeader;
}
function injectFileUploadData() {
  const fileUploadData = inject(FILE_UPLOAD_DATA_KEY, {});
  return fileUploadData;
}
function injectHandleFileUrls() {
  const handleFileUrls = inject(HANDLE_FILE_URLS_KEY, void 0);
  if (handleFileUrls) {
    return handleFileUrls;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u6587\u4EF6\u5730\u5740\u65B9\u6CD5\u3002");
  }
}
function injectHandleThumbUrls() {
  const handleThumbUrls = inject(HANDLE_THUMB_URLS_KEY, void 0);
  if (handleThumbUrls) {
    return handleThumbUrls;
  } else {
    console.warn("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u7F29\u7565\u56FE\u5730\u5740\u65B9\u6CD5\u3002");
  }
}
function injectHandleFileResponse() {
  const handleFileResponse = inject(HANDLE_FILE_RESPONSE_KEY, void 0);
  if (handleFileResponse) {
    return handleFileResponse;
  } else {
    console.error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u5904\u7406\u6587\u4EF6\u4E0A\u4F20\u8BF7\u6C42\u8FD4\u56DE\u7684response\u65B9\u6CD5\u3002");
  }
}
function injectFileChunkUploadConfig() {
  const fileChunkUploadConfig = inject(FILE_CHUNK_UPLOAD_CONNFIG_KRY, {
    chunkSize: 5 * 1024 * 1024,
    limit: 3
  });
  return fileChunkUploadConfig;
}
function injectFileChunkUploadFunction() {
  const fileChunkUploadAxios = inject(FILE_CHUNK_UPLOAD_FUNCTION_KEY, void 0);
  if (fileChunkUploadAxios) {
    return fileChunkUploadAxios;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u5207\u7247\u4E0A\u4F20\u5730\u5740\u3002"));
  }
}
function injectFileChunkMergeFunction() {
  const fileChunkMerge = inject(FILE_CHUNK_MERGE_FUNCTION_KEY, void 0);
  if (fileChunkMerge) {
    return fileChunkMerge;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u6587\u4EF6\u5207\u7247\u5408\u5E76\u5730\u5740\u3002"));
  }
}

export { injectFileChunkMergeFunction, injectFileChunkUploadConfig, injectFileChunkUploadFunction, injectFileUploadData, injectFileUploadHeader, injectFileUploadUrl, injectHandleFileResponse, injectHandleFileUrls, injectHandleThumbUrls };
//# sourceMappingURL=file.mjs.map
