'use strict';

var file = require('./file.js');
var dict = require('./dict.js');
var grid = require('./grid.js');
var authority = require('./authority.js');



exports.injectFileChunkMergeFunction = file.injectFileChunkMergeFunction;
exports.injectFileChunkUploadConfig = file.injectFileChunkUploadConfig;
exports.injectFileChunkUploadFunction = file.injectFileChunkUploadFunction;
exports.injectFileUploadData = file.injectFileUploadData;
exports.injectFileUploadHeader = file.injectFileUploadHeader;
exports.injectFileUploadUrl = file.injectFileUploadUrl;
exports.injectHandleFileResponse = file.injectHandleFileResponse;
exports.injectHandleFileUrls = file.injectHandleFileUrls;
exports.injectHandleThumbUrls = file.injectHandleThumbUrls;
exports.injectLoadDictList = dict.injectLoadDictList;
exports.injectLoadDictListById = dict.injectLoadDictListById;
exports.injectLoadGridByCode = grid.injectLoadGridByCode;
exports.injectLoadGridById = grid.injectLoadGridById;
exports.injectLoadGridChildrenByCode = grid.injectLoadGridChildrenByCode;
exports.injectLoadGridTreeByCode = grid.injectLoadGridTreeByCode;
exports.injectLoadRootGrid = grid.injectLoadRootGrid;
exports.injectLoadUserGrid = grid.injectLoadUserGrid;
exports.injectCheckAuthority = authority.injectCheckAuthority;
//# sourceMappingURL=index.js.map
