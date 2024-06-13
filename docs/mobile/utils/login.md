# 登录相关

## mpCodeLogin

小程序`code`登录，通过[login](https://uniapp.dcloud.net.cn/api/plugins/login.html#login)API获取`code`，后端解析`code`拿到用户信息完成登录。

```ts
import { mpCodeLogin } from 'liv-uni'

// #ifdef MP
mpCodeLogin()
  .then((userInfo) => {
    console.log(userInfo)
  })
  .catch((err) => {
    if (err.message === '1') {
      // 该openid无群众账号
    } else if (err.message === '2') {
      // 该openid对应账号无手机号
    } else {
      throw err
    }
  })
// #endif
```
