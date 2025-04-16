/**
 * [根据文件路径获取文件名](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getfilename)
 * @param path 文件的相对路径
 * @returns 文件名
 * @example
 * ```ts
 * import { getFileName } from 'liv-web'
 *
 * const relativeUrl = '/server/file/test.png';
 * const fileName = getFileName(relativeUrl);
 * console.log(fileName); // 输出test.png
```
 */
export declare const getFileName: (path: string) => string;
export declare const getMd5ByFile: (file: File) => Promise<string>;
