# 通用方法

提供了一些常用的方法。

## flattenArray

多维数组转一维数组。

|参数|说明|类型|
| ----|---- |---- |
|arr|需要转换的数组|`Array`|

```ts
import { flattenArray } from '@szxc/utils'

const multiArray = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];

const flattenedArray = flattenArray(multiArray);
console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```