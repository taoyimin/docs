# 位置获取

内部封装了定位权限申请、位置获取等逻辑，用于快速实现定位相关业务，Web端基于`vueuse`库的[useGeolocation](https://vueuse.org/core/usegeolocation/#usegeolocation)API实现，小程序端基于[getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)API实现。

## 基础用法

```vue
<template>
  <view>经度：{{ coords?.longitude }}</view>
  <view>纬度：{{ coords?.latitude }}</view>
  <view>错误信息：{{ error?.message }}</view>
  <up-button @click="getLocation">获取定位</up-button>
</template>

<script lang="ts" setup>
import { useGeoLocation } from 'liv-uni'

const { coords, error, getLocation } = useGeoLocation()
</script>
```

## Result

| 参数名      | 说明         | 类型                                                          | 默认值 |
| ----------- | ------------ | ------------------------------------------------------------- | ------ |
| coords      | 位置信息     | `GeolocationCoordinates \| UniApp.GetLocationSuccess \| null` | null   |
| error       | 错误信息     | `GeolocationPositionError \| null`                            | null   |
| getLocation | 获取位置信息 | `() => void`                                                  | —      |
