# 文件方法

提供了一些常用的文件相关方法。

## getFileName

根据相对路径获取文件名。

|参数|说明|类型|
| ----|---- |---- |
|relativeUrl|文件的相对路径|`string`|

```ts
import { getFileName } from '@szxc/utils'

const relativeUrl = '/server/file/test.png';
const fileName = getFileName(relativeUrl);
console.log(fileName); // 输出test.png
```

## getFileUrl

根据相对路径获取源文件的绝对路径。

|参数|说明|类型|
| ----|---- |---- |
|relativeUrl|文件的相对路径|`string`|

```ts
import { getFileUrl } from '@szxc/utils'

const relativeUrl = '/server/file/test.png';
const absoluteUrl = getFileUrl(relativeUrl);
console.log(absoluteUrl); // 输出https://www.liv.com/server/file/test.png
```

## getFileUrlList

根据逗号拼接的相对路径获取源文件的绝对路径集合。

|参数|说明|类型|
| ----|---- |---- |
|relativeUrl|文件的相对路径（多个逗号拼接）|`string`|

```ts
import { getFileUrlList } from '@szxc/utils'

const relativeUrl = '/server/file/test1.png,/server/file/test2.png';
const absoluteUrl = getFileUrlList(relativeUrl);
console.log(absoluteUrl); // 输出[https://www.liv.com/server/file/test1.png, https://www.liv.com/server/file/test2.png]
```

## getThumbUrl

根据相对路径获取缩略文件的绝对路径。

|参数|说明|类型|
| ----|---- |---- |
|relativeUrl|文件的相对路径|`string`|

```ts
import { getThumbUrl } from '@szxc/utils'

const relativeUrl = '/server/file/test.png';
const absoluteUrl = getThumbUrl(relativeUrl);
console.log(absoluteUrl); // 输出https://www.liv.com/server/file/test_thumb.png
```

## getThumbUrlList

根据逗号拼接的相对路径获取缩略文件的绝对路径集合。

|参数|说明|类型|
| ----|---- |---- |
|relativeUrl|文件的相对路径（多个逗号拼接）|`string`|

```ts
import { getThumbUrlList } from '@szxc/utils'

const relativeUrl = '/server/file/test1.png,/server/file/test2.png';
const absoluteUrl = getThumbUrlList(relativeUrl);
console.log(absoluteUrl); // 输出[https://www.liv.com/server/file/test1_thumb.png, https://www.liv.com/server/file/test2_thumb.png]
```