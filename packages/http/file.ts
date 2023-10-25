import { baseUrl } from './base'

// 根据相对路径获取文件名
export const getFileName = (relativeUrl: string): string => {
    if (!relativeUrl) return ''
    return relativeUrl.split('/').pop() ?? relativeUrl
}

// 根据相对路径获取单个文件的绝对路径
export const getFileUrl = (relativeUrl: string): string => {
    if (!relativeUrl) return ''
    return baseUrl + '/ruralLivingEnv/fileControll/downLoadFile?swfName=' + relativeUrl
}

// 根据相对路径获取逗号拼接文件的绝对路径集合
export const getFileUrlList = (relativeUrl: string): Array<string> => {
    if (!relativeUrl) return []
    return relativeUrl.split(',').map(item => baseUrl + '/ruralLivingEnv/fileControll/downLoadFile?swfName=' + item)
}