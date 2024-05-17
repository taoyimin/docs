# get / post 方法
框架内部封装了get、post两个用于网络请求的方法，并对返回结果进行了处理。

正常情况下，axios返回的数据类型为`AxiosResponse`，在使用时我们需要手动获取业务所需要的数据：
```ts
<script setup lang="ts">
import axios from 'axios'

axios.get('/api/users').then(res => {
    const users = res.data.data
})
// 或者
const response = await axios.post('/api/user')
const user = response.data.data
</script>
```

get/post方法对接口返回结果进行了处理，只返回最终业务所需的数据。
```ts
<script setup lang="ts">
import { get, post } from '@szxc/http'

get('/api/users').then(res => {
    const users = res
})
// 或者
const user = await post('/api/user')
</script>
```