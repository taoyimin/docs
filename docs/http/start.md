# 快速开始

本节将介绍如何在项目中使用 http 库。

## 全局注册
```ts
// main.ts
import { createApp } from 'vue'
import http from '@szxc/http'
import App from './App.vue'

const app = createApp(App)

app.use(http)
app.mount('#app')
```

## 使用
```ts
<script setup lang="ts">
import { get, post } from '@szxc/http'

get('/api/users', {id: 1}).then(res => {
    console.log(res)
})

post('/api/submit', {name: 'admin', age: 25}).then(res => {
    console.log(res)
})
</script>
```

## 异常处理
框架对未捕获的异常进行了统一处理，在使用请求方法时，无需判断`code=200`、`success=true`等字段，使用者只需关注接口调用成功后返回的结果。如需对异常进行特殊处理，可以使用`catch`方法。

```ts
get('/api/users').then(res => {
    console.log(res)
}).catch(err => {
    // 自己捕获异常并处理
    loading.close()
})
```

也可以对异常进行特殊处理后继续抛给框架处理。

```ts
get('/api/users').then(res => {
    console.log(res)
}).catch(err => {
    // 自己捕获异常并处理
    loading.close()
    // 抛出异常交给框架统一处理
    throw err
    // 或者
    return Promise.reject(err)
})
```