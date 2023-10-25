import { $get, $post } from '@szxc/http'

// 获取事件列表
export const getList = (params: {
    gridCode: number,
    type: string,
    pageNum: number,
    pageSize: number,
    hasPic: string
}) => {
    return $get('/event/jurisdictionListData', params)
}

// 获取事件详情
export const getDetail = (params: {
    eventId: string | string[]
}) => {
    return $get('/event/getEvent', params)
}

// 获取事件流程
export const getProcess = () => {
    // TODO 
    console.log('请求事件流程')
}


export default { getList, getDetail, getProcess }