import axios from 'axios'
import QS from 'qs'

let useUserStore: any

//默认超时时间
axios.defaults.timeout = 10000
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500
}
//跨域请求，允许保存cookie
axios.defaults.withCredentials = false

//请求拦截
axios.interceptors.request.use((config: any) => {
  const userStore = useUserStore()
  /*
  if (userStore.token) {
    config.headers.Authorization = userStore.token
  }
  */
  return config
})

//响应拦截
axios.interceptors.response.use(
  (res: any) => {
    const result = res.data || {}
    if (res.status === 200) {
      return result
    } else {
      return Promise.reject(res.data)
    }
  },
  (err) => {
    console.error(err)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $get = (url: string, params: object) => {
  const userStore = useUserStore()
  let result: any = {}

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token })
  } else {
    result = params
  }

  return axios.get(url, {
    params: result
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $post = (url: string, params: object) => {
  const userStore = useUserStore()
  let result: any = {}

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token })
  } else {
    result = params
  }

  return axios.post(url, QS.stringify(result)) //是将对象 序列化成URL的形式，以&进行拼接
}

//export default axios;
export default {
  install: (app: any, options: any) => {
    useUserStore = options.useUserStore
    app.config.globalProperties['$get'] = $get
    app.config.globalProperties['$post'] = $post
    app.config.globalProperties['$axios'] = axios
  }
}
