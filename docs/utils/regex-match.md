# 正则匹配

用于对输入的字符串进行正则匹配。

## matchNumber

匹配一个字符串是否是纯数字。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchNumber } from '@szxc/utils'

console.log(matchNumber('123')) // true
console.log(matchNumber('abc')) // false
```

## matchPassword

匹配一个字符串是否是密码。（至少8位,至多20位,至少包含1个大写字母、1个小写字母、1个数字和1个特殊字符）

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchPassword } from '@szxc/utils'

console.log(matchPassword('Admin@123456%')) // true
console.log(matchPassword('admin@123456%')) // false
```

## matchPhone

匹配一个字符串是否是手机号。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchPhone } from '@szxc/utils'

console.log(matchPhone('15888888888')) // true
console.log(matchPhone('12345678910')) // false
```

## matchIdCard

匹配一个字符串是否是身份证。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchIdCard } from '@szxc/utils'

console.log(matchIdCard('360121199503253035')) // true
console.log(matchIdCard('36011119950325')) // false
```

## matchLongitude

匹配一个字符串是否是经度。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchLongitude } from '@szxc/utils'

console.log(matchLongitude('180')) // true
console.log(matchLongitude('-180.0')) // true
console.log(matchLongitude('180.1')) // false
```

## matchLatitude

匹配一个字符串是否是纬度。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchLatitude } from '@szxc/utils'

console.log(matchLatitude('90')) // true
console.log(matchLatitude('-90.0')) // true
console.log(matchLatitude('90.111')) // false
```

## matchEmail

匹配一个字符串是否是邮箱。

|参数|说明|类型|
| ----|---- |---- |
|string|需要匹配的字符串|`string`|

```ts
import { matchEmail } from '@szxc/utils'

console.log(matchEmail('0123456789@163.com')) // true
console.log(matchEmail('0123456789@163')) // false
console.log(matchEmail('0123456789@com')) // false
```