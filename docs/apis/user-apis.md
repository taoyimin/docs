
# 用户相关接口

## loginByAccount

使用账号密码登录。

|参数|说明|类型|
| ----|---- |---- |
|username|登录账号| `string` |
|password|登录密码| `string` |
|captchaKey|[获取图片验证码](#getimagecaptcha)接口返回的key| `string` |
|captchaCode|用户输入的验证码| `string` |

```ts
import { loginByAccount } from '@szxc/apis'

const userInfo = await loginByAccount({
  username: 'admin',
  password: 'admin@123456',
  captchaKey: '123456',
  captchaCode: 'abcd'
})
```

## loginByPhone

使用手机号登录。

|参数|说明|类型|
| ----|---- |---- |
|phone|手机号| `string` |
|id|[获取短信验证码](#getsmscaptcha)接口返回的id| `string` |
|value|用户输入的短信验证码| `string` |

```ts
import { loginByPhone } from '@szxc/apis'

const userInfo = await loginByPhone({
  phone: '17388888888',
  id: 'abcdefg123456',
  value: '123456'
})
```

## getUserAuthorities

获取用户权限信息。

```ts
import { getUserAuthorities } from '@szxc/apis'

const authorities = await getUserAuthorities();
```

## getImageCaptcha

获取图片验证码。

```ts
import { getImageCaptcha } from '@szxc/apis'

const { key, image } = await getImageCaptcha();
```

## getSmsCaptcha

获取短信验证码。

```ts
import { getSmsCaptcha } from '@szxc/apis'

const { data } = await getSmsCaptcha({ phone: '17388888888' });
```