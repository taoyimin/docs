const baseFileUrl = import.meta.env.VITE_FILE_URL

if (import.meta.env.VITE_USE_MINIO !== 'true' && !baseFileUrl) {
  console.warn(
    '[utils]当前项目环境变量没有配置文件上传地址。详情请看：https://k8s.nccxgh.com:9096/docs/guide/env.html'
  )
}

/**
 * [根据相对路径获取文件名](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getfilename)
 * @param relativeUrl 文件的相对路径
 * @returns 文件名
 * @example
 * ```ts
 * import { getFileName } from '@szxc/utils'
 * 
 * const relativeUrl = '/server/file/test.png';
 * const fileName = getFileName(relativeUrl);
 * console.log(fileName); // 输出test.png
```
 */
export const getFileName = (relativeUrl: string): string => {
  if (!relativeUrl) return ''
  return relativeUrl.split('/').pop() ?? relativeUrl
}

/**
 * [根据相对路径获取源文件的绝对路径](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getfileurl)
 * @param relativeUrl 源文件的相对路径
 * @returns 源文件的绝对路径
 * @example
 * ```ts
 * import { getFileUrl } from '@szxc/utils'
 *
 * const relativeUrl = '/server/file/test.png';
 * const absoluteUrl = getFileUrl(relativeUrl);
 * console.log(absoluteUrl); // 输出https://www.liv.com/server/file/test.png
 * ```
 */
export const getFileUrl = (relativeUrl: string): string => {
  if (!relativeUrl) return ''
  if (import.meta.env.VITE_USE_MINIO === 'true') {
    // #ifdef MP
    if (import.meta.env.VITE_MP_TRIAL_BASE_URL || import.meta.env.VITE_MP_DEVELOP_BASE_URL) {
      const { envVersion } = uni.getAccountInfoSync().miniProgram
      if (envVersion === 'trial') {
        return `${
          import.meta.env.VITE_MP_TRIAL_BASE_URL
        }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl}`
      } else if (envVersion === 'develop') {
        return `${
          import.meta.env.VITE_MP_DEVELOP_BASE_URL
        }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl}`
      }
    }
    // #endif
    return `${
      import.meta.env.VITE_BASE_URL
    }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl}`
  } else {
    return `${baseFileUrl}/weChatRuralLivingEnv/fileControll/downLoadFile?swfName=${relativeUrl}`
  }
}

/**
 * [根据逗号拼接的相对路径获取源文件的绝对路径集合](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getfileurllist)
 * @param relativeUrl 源文件的相对路径
 * @param isSplit 是否需要分割（base64时不用分割），
 * @param isJoin 是否需要getFileUrl的地址，
 * @returns 源文件的绝对路径集合
 * @example
 * ```ts
 * import { getFileUrlList } from '@szxc/utils'
 *
 * const relativeUrl = '/server/file/test1.png,/server/file/test2.png';
 * const absoluteUrl = getFileUrlList(relativeUrl);
 * console.log(absoluteUrl); // 输出[https://www.liv.com/server/file/test1.png, https://www.liv.com/server/file/test2.png]
 *```
 */
export const getFileUrlList = (
  relativeUrl: string,
  isJoin: boolean = true,
  isSplit: boolean = true
): Array<string> => {
  if (!relativeUrl) return []
  if (isSplit === false) return Array.isArray(relativeUrl) ? relativeUrl : [relativeUrl]
  if (isJoin === false) return relativeUrl.split(',')
  return relativeUrl.split(',').map(getFileUrl)
}

/**
 * [根据相对路径获取缩略文件的绝对路径](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getthumburl)
 * @param relativeUrl 源文件的相对路径
 * @returns 缩略文件的绝对路径
 * @example
 * ```ts
 * import { getThumbUrl } from '@szxc/utils'
 *
 * const relativeUrl = '/server/file/test.png';
 * const absoluteUrl = getThumbUrl(relativeUrl);
 * console.log(absoluteUrl); // 输出https://www.liv.com/server/file/test_thumb.png
 * ```
 */
export const getThumbUrl = (relativeUrl: string): string => {
  if (!relativeUrl) return ''
  const fileSuffix = getFileName(relativeUrl).split('.')[1]
  if (import.meta.env.VITE_USE_MINIO === 'true') {
    // #ifdef MP
    if (import.meta.env.VITE_MP_TRIAL_BASE_URL || import.meta.env.VITE_MP_DEVELOP_BASE_URL) {
      const { envVersion } = uni.getAccountInfoSync().miniProgram
      if (envVersion === 'trial') {
        return `${
          import.meta.env.VITE_MP_TRIAL_BASE_URL
        }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl.replace(
          '.' + fileSuffix,
          '_thumb.' + fileSuffix
        )}`
      } else if (envVersion === 'develop') {
        return `${
          import.meta.env.VITE_MP_DEVELOP_BASE_URL
        }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl.replace(
          '.' + fileSuffix,
          '_thumb.' + fileSuffix
        )}`
      }
    }
    // #endif
    return `${
      import.meta.env.VITE_BASE_URL
    }/blade-resource/oss/endpoint/downloadByName?fileName=${relativeUrl.replace(
      '.' + fileSuffix,
      '_thumb.' + fileSuffix
    )}`
  } else {
    return `${baseFileUrl}/weChatRuralLivingEnv/fileControll/downLoadFile?swfName=${relativeUrl.replace(
      '.' + fileSuffix,
      '_thumb.' + fileSuffix
    )}`
  }
}

/**
 * [根据逗号拼接的相对路径获取缩略文件的绝对路径集合](https://k8s.nccxgh.com:9096/docs/utils/file-method.html#getthumburllist)
 * @param relativeUrl 源文件的相对路径
 * @returns 缩略文件的绝对路径集合
 * @example
 * ```ts
 * import { getThumbUrlList } from '@szxc/utils'
 *
 * const relativeUrl = '/server/file/test1.png,/server/file/test2.png';
 * const absoluteUrl = getThumbUrlList(relativeUrl);
 * console.log(absoluteUrl); // 输出[https://www.liv.com/server/file/test1_thumb.png, https://www.liv.com/server/file/test2_thumb.png]
 *```
 */
export const getThumbUrlList = (relativeUrl: string): Array<string> => {
  if (!relativeUrl) return []
  return relativeUrl.split(',').map(getThumbUrl)
}
