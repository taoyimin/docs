import {$get, $post} from '@szxc/http'

const baseurl: string = '/rjhj-system/menu'

export const getList = (params: {
    sysId: number,
    name: string,
    url: string
}) => {
    return $get(baseurl + '/listByCondition', params)
}