# 报文加解密

用于对接口的请求报文加密，并对返回报文解密。

## 基础用法

传入`encryptParams`参数为`true`，即可开启请求报文加密，同时返回报文也是加密的，框架会自动解密返回报文。

```ts
import { get } from '@szxc/http'

const data = await get(
  "/dict", 
  { dictType: 'eventType' }, 
  { encryptParams: true }
)
```

:::tip 提示
 只有http状态码在[200, 300)之间时，返回的报文才是加密的。
:::