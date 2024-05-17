# transformCoordinate 坐标系转换

对接口请求数据和返回结果中的经纬度信息进行坐标系转换。

## 基础用法

通过传入`transformCoordinate`属性，你可以快速开启坐标系转换能力。

```ts
import { post } from '@szxc/http'

// 没有开启坐标系转换，result中的经纬度信息是原始数据
const result = get("/api/points", {
  current: 1,
  size: 10,
});

// 开启了坐标系转换，result中的经纬度信息是转换后的数据
const result = get(
  "/api/points",
  { current: 1, size: 10 },
  { transformCoordinate: true }
);

// 没有开启坐标系转换，后端接收到的是原始数据
const result = post("/api/point", {
  longitude: 115.918339,
  latitude: 28.680622,
});

// 开启了坐标系转换，后端接收到的是转换后的数据
const result = post(
  "/api/point",
  { longitude: 115.918339, latitude: 28.680622 },
  { transformCoordinate: true }
);
```

## 请求数据

只有包含`longitude`或`latitude`字符（不区分大小写）并且成对出现的字段才会被转换坐标系。

```ts
// 会被转换
const param = { longitude: 115.918339, latitude: 28.680622 }
// 不会被转换（不匹配正则）
const param = { lng: 115.918339, lat: 28.680622 }
// 会被转换
const param = { startLongitude: 115.918339, startLatitude: 28.680622 }
// 不会被转换（没有成对出现）
const param = { startLongitude: 115.918339, endLatitude: 28.680622 }
// 会被转换
const param = { point: { longitude: 115.918339, latitude: 28.680622 } }
// 不会被转换（不在同一层级）
const param = { longitude: 115.918339, point: { latitude: 28.680622 } }
```
::: warning 注意
对于请求数据中的经纬度数据，只有通过post方法提交的数据，才会被转换坐标系。对于返回数据中的经纬度数据，无论是get还是post方法，都会被转换坐标系。
:::


## 返回数据

不会被转换的情况同[请求数据](#请求数据)，下面只展示会被转换的情况。

```ts
// 会被转换
const result = {
  code: 200,
  msg: "请求成功",
  data: { longitude: 115.918339, latitude: 28.680622 },
};
// 会被转换
const result = {
  code: 200,
  msg: "请求成功",
  data: [
    { longitude: 115.918339, latitude: 28.680622 },
    { longitude: 115.918339, latitude: 28.680622 },
  ],
};
// 会被转换
const result = {
  code: 200,
  msg: "请求成功",
  data: {
    total: 100,
    current: 1,
    size: 10,
    records: [
      { longitude: 115.918339, latitude: 28.680622 },
      { longitude: 115.918339, latitude: 28.680622 },
    ],
  },
};
```
::: tip 提示
如果一个接口的请求数据和返回数据中同时包含经纬度数据，那么将按照上述转换规则一起被转换。
:::