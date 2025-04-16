export interface FileChunk {
    name: string;
    blob: Blob;
    index: number;
    chunkSize: number;
    fileSize: number;
    md5: string;
    fileName: string;
    totalChunkLength: number;
}
export type FileUploadMergeParams = Pick<FileChunk, 'md5' | 'fileName' | 'fileSize' | 'totalChunkLength'>;
/**
 * 文件上传header
 */
export type FileUploadHeader = Record<string, any> | (() => Record<string, any>);
/**
 * 文件上传data
 */
export type FileUploadData = Record<string, any> | (() => Record<string, any>);
/**
 * 将数据库存储的文件地址转换为可以访问的文件地址数组方法
 * @param urls 数据库存储的文件地址
 * @returns { string[] } 可以访问的文件地址数组
 */
export type HandleFileUrlsFunction = (urls: string | undefined) => string[];
/**
 * 处理文件上传请求返回的response方法
 * @param response 网络请求返回的response
 * @returns { string } 文件上传后的url地址，用于表单提交保存到数据库中
 */
export type HandleFileResponseFunction = (response: any) => string;
/**
 * 文件切片上传配置
 * @param chunkSize 切片大小
 * @param limit 最大上传数量
 * @returns { FileChunkUploadConfig } 文件切片上传配置
 * */
export type FileChunkUploadConfig = {
    chunkSize?: number;
    limit?: number;
};
/**
 * 文件切片上传方法
 * @param params 切片数据
 * @param onUploadProgress 上传进度回调
 * @returns { Promise<T> } 上传后的结果Promise对象
 */
export type FileChunkUploadFunction<T = any> = (params: FileChunk, onUploadProgress: (progressEvent: any) => void) => Promise<T>;
/**
 * 文件切片合并方法
 * @param params 合并参数
 * @returns { Promise<T> } 合并后的结果Promise对象
 */
export type FileChunkMergeFunction<T = any> = (params: FileUploadMergeParams) => Promise<T>;
/**
 * 注入文件上传地址
 */
export declare function injectFileUploadUrl(): undefined;
/**
 * 注入文件上传请求header
 */
export declare function injectFileUploadHeader(): {};
/**
 * 注入文件上传请求data
 */
export declare function injectFileUploadData(): {};
/**
 * 注入处理文件地址方法
 */
export declare function injectHandleFileUrls(): HandleFileUrlsFunction | undefined;
/**
 * 注入处理缩略图地址方法
 */
export declare function injectHandleThumbUrls(): HandleFileUrlsFunction | undefined;
/**
 * 注入处理文件上传请求返回的response方法
 */
export declare function injectHandleFileResponse(): HandleFileResponseFunction | undefined;
/**
 * 注入文件切片上传配置
 * */
export declare function injectFileChunkUploadConfig(): {
    chunkSize: number;
    limit: number;
};
/**
 * 注入文件切片上传地址
 */
export declare function injectFileChunkUploadFunction<T>(): FileChunkUploadFunction<T>;
/**
 * 注入文件切片合并地址
 */
export declare function injectFileChunkMergeFunction<T>(): FileChunkMergeFunction<T>;
