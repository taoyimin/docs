# userStore

用于本地持久化存储用户信息。

## 基础用法

```ts
import { useUserStore } from '@szxc/stores'

const userStore = useUserStore()

// 账号密码登录
const userInfo = await userStore.loginByAccount({ 
  username: 'admin', 
  password: '123456', 
  captchaKey: 'abcdefg123456',
  captchaCode: '123456' 
})

// 手机号登录
const userInfo = await userStore.loginByPhone({ 
  phone: '17388888888', 
  id: 'abcdefg123456', 
  value: '123456'
})

// 修改密码
const { msg } = await userStore.modifyPassword({ 
  userId: '123', 
  oldPassword: 'Admin@123456', 
  newPassword: 'Admin@654321'
})

// 退出登录
userStore.loginOut()

// 获取用户信息
const token = userStore.userInfo

// 获取用户凭证
const token = userStore.token
```

## State

|名称|说明|类型|
| ----|---- |---- |
|userInfo|用户信息| `UserInfo` |

## Getter

|名称|说明|类型|
| ----|---- |---- |
|token|用户凭证| `string` |

## Action
|名称|说明|类型|
| ----|---- |---- |
|loginByAccount|账号密码登录| `(param: AccountLoginParam) => UserInfo` |
|loginByPhone|手机号登录| `(param: PhoneLoginParam) => UserInfo` |
|modifyPassword|修改密码| `(param: ModifyPasswordParam) => Result` |
|loginOut|退出登录| `(path: string = "/login") => void` |


::: details 类型声明
```ts

/** 用户信息类型 */
export interface UserInfo {
  access_token: string
  account: string
  refresh_token: string
  real_name: string
  globalLevel: string
  globalCode: string
  globalName: string
  gridId: string
  nick_name: string
  user_id: string
  user_name: string
}

/** 账号密码登录参数类型 */
export interface AccountLoginParam {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
  /** 验证码接口返回的key */
  captchaKey: string;
  /** 用户输入的验证码 */
  captchaCode: string;
}

/** 手机号登录参数类型 */
export interface PhoneLoginParam {
  /** 手机号 */
  phone: string;
  /** 验证码id */
  id: string;
  /** 用户输入的短信验证码 */
  value: string;
}

/** 修改密码参数 */
export interface ModifyPasswordParam {
  /** 用户id */
  userId: string;
  /** 旧密码 */
  oldPassword: string;
  /** 新密码 */
  newPassword: string;
}

/** 图片验证码类型 */
export interface ImageCaptcha {
  /** 验证码key */
  key: string;
  /** base64格式的验证码图片 */
  image: string;
}

/** 短信验证码类型 */
export interface SmsCaptcha {
  /** 验证码id */
  id: string;
}
```
:::