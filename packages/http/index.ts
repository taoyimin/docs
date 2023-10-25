import axios from "axios";
import QS from "qs";
import { baseUrl } from "./base";
//import { useUserStore } from '../stores/userStore'

let useUserStore: any;
const whiteList = ['/blade-auth/oauth/token']

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});

//默认超时时间
instance.defaults.timeout = 10000;
//返回其他状态码
instance.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
instance.defaults.withCredentials = false;

//请求拦截
instance.interceptors.request.use(config => {
  console.log('config:', config)
  const userStore = useUserStore()
  config.headers.Authorization = 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0'
  // if (userStore.token) {
  if (userStore.userInfo && !whiteList.includes(config.url)) {
    const { token_type, access_token } = userStore.userInfo
    config.headers['Blade-Auth'] = `${token_type} ${access_token}`
  }
  // }
  return config;
});

//响应拦截
instance.interceptors.response.use(
  response => {
    console.log(response)
    //const result = response.data || {};
    if (response.status == 200) {
      return Promise.resolve(response.data);
    } else {
      if (response.config.url === '/blade-auth/oauth/token') {
        return Promise.reject({ message: response.data.error_description })
      } else {
        return Promise.reject(response.data)
      }
    }
    // if (response.status === 200) {
    //   return result;
    // } else {
    //   return Promise.reject(res.data);
    // }
  },
  (err) => {
    console.error(err);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $get = (url: string, params: object) => {
  const userStore = useUserStore();
  let result: any = {};

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token });
  } else {
    result = params;
  }

  return instance.get(url, {
    params: result
  });
};

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const $post = (url: string, params: object) => {
  const userStore = useUserStore();
  let result: any = {};

  if (userStore.token) {
    result = Object.assign({}, params, { token: userStore.token });
  } else {
    result = params;
  }

  return instance.post(url, QS.stringify(result)); //是将对象 序列化成URL的形式，以&进行拼接
};

export const get = (url: string, params: object) => {
  return instance.get(url, params);
}

export const post = (url: string, params: object) => {
  return instance.post(url, QS.stringify(params));
}

//export default axios;
export default {
  install: (app: any, options: any) => {
    useUserStore = options.useUserStore;
    app.config.globalProperties["$get"] = $get;
    app.config.globalProperties["$post"] = $post;
    app.config.globalProperties["$axios"] = axios;
  }
};

export * from "./base";
export * from "./file";
