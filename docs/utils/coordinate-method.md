# 坐标系方法

提供了一些常用的坐标系方法。

## toOriginCoordinate

将经纬度信息从目标坐标系转换到源坐标系。

|参数|说明|类型|
| ----|---- |---- |
|lnglat|需要转换的经纬度数组或`GeoJSON`对象|`Array` / `GeoJSON`|

```ts
import { toOriginCoordinate } from '@szxc/utils'

const targetLngLat = [115.918339,28.680622]
const originLngLat = toOriginCoordinate(originLngLat)
```

## toTargetCoordinate

将经纬度信息从源坐标系转换到目标坐标系。

|参数|说明|类型|
| ----|---- |---- |
|lnglat|需要转换的经纬度数组或`GeoJSON`对象|`Array` / `GeoJSON`|

```ts
import { toTargetCoordinate } from '@szxc/utils'

const originLngLat = [115.918339,28.680622]
const targetLngLat = toTargetCoordinate(originLngLat)
```