# returnResult 返回消息体

用于控制接口是否返回外层消息体。

## 基础用法
假设有一个新增用户接口：
```ts
import { post } from '@szxc/http'

const data = await post('/user', { id: 1, name: '张三'})

// 返回的结果如下
data = {
    id: 1,
    name: '张三'
}
```

框架封装的`get` `post`方法默认不返回外层消息体，如果需要取消息体中的`code` `success` `msg`等字段，可以通过传入`returnResult`属性实现。
```ts
import { post } from '@szxc/http'

const data = await post(
  '/user',
  { id: 1, name: '张三'},
  { returnResult: true }
)

// 返回的结果如下
data = {
  code: 200,
  success: true,
  msg: '新增成功',
  data: {
    id: 1,
    name: '张三'
  }
}
```