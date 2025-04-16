import type { FileUploadData, FileUploadHeader, HandleFileResponseFunction, HandleFileUrlsFunction, FileChunkUploadConfig, FileChunkUploadFunction, FileChunkMergeFunction } from 'liv-web/es/utils';
import type { InjectionKey } from 'vue';
/**
 * 文件上传地址key
 */
export declare const FILE_UPLOAD_URL_KEY: InjectionKey<string>;
/**
 * 文件上传header key
 */
export declare const FILE_UPLOAD_HEADER_KEY: InjectionKey<FileUploadHeader>;
/**
 * 文件上传data key
 */
export declare const FILE_UPLOAD_DATA_KEY: InjectionKey<FileUploadData>;
/**
 * 将数据库存储的文件地址转换为可以访问的文件地址数组key
 */
export declare const HANDLE_FILE_URLS_KEY: InjectionKey<HandleFileUrlsFunction>;
/**
 * 将数据库存储的图片地址转换为可以访问的缩略图地址数组key
 */
export declare const HANDLE_THUMB_URLS_KEY: InjectionKey<HandleFileUrlsFunction>;
/**
 * 处理文件上传请求返回的response key
 */
export declare const HANDLE_FILE_RESPONSE_KEY: InjectionKey<HandleFileResponseFunction>;
/**
 * 切片上传配置 key
 */
export declare const FILE_CHUNK_UPLOAD_CONNFIG_KRY: InjectionKey<FileChunkUploadConfig>;
/**
 * 切片上传请求 key
 */
export declare const FILE_CHUNK_UPLOAD_FUNCTION_KEY: InjectionKey<FileChunkUploadFunction>;
/**
 * 切片合并请求 key
 */
export declare const FILE_CHUNK_MERGE_FUNCTION_KEY: InjectionKey<FileChunkMergeFunction>;
