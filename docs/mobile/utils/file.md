# 文件相关

## uploadFile

文件上传。

| 参数 | 说明                 | 类型             |
| ---- | -------------------- | ---------------- |
| file | 本地路径或`Blob`对象 | `string \| Blob` |

```ts
import { uploadFile } from 'liv-uni'

uploadFile('xxx.png').then((url) => {
  // 上传成功后的地址
  console.log(url)
})
```
