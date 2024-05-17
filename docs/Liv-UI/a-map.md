# A Map 高德地图

该组件对高德地图的创建、初始化、销毁以及各项配置进行了封装，并提供了图层切换等内置控件。

## 基础用法

:::demo
```vue
<template>
  <liv-a-map class="map" />
</template>

<style lang="scss" scoped>
.map {
  height: 400px;
}
</style>
```
:::

## 初始化配置

你可以通过传入`load-options`属性来配置地图的加载参数，该属性与高德地图JS API的加载参数（即[AMapLoader.load](https://lbs.amap.com/api/javascript-api-v2/guide/abc/load)方法的参数）完全一致。你还可以通过传入`map-options`属性来配置地图的初始化参数，该属性与高德地图初始化参数（即[AMap.Map](https://lbs.amap.com/api/javascript-api-v2/documentation#map)方法的参数）一一对应，唯一不同点在于对`layers`属性进行了改造，由于组件内部对`AMap`的加载和`map`的初始化进行了封装，只有在`loaded`事件中才能拿到`AMap`与`map`实例。而初始化地图时传入的`layers`属性往往需要使用`AMap`实例去创建图层，这时你可以通过一个回调函数拿到`AMap`实例，然后在该回调函数中创建图层并返回图层数组。同时，组件内置了`default`、`satellite`、`roadNet`和`traffic`四种图层，直接传入字符串即可快速生成对应图层。

:::demo
```vue
<template>
  <liv-a-map 
    class="map" 
    :load-options="loadOptions" 
    :map-options="mapOptions" 
    @loaded="loaded" />
</template>

<script lang="ts" setup>
const loadOptions = {
  version: '2.0',
  plugins: ['AMap.ControlBar', 'AMap.ToolBar', 'AMap.Scale'],
  Loca: {
    version: '2.0'
  }
}

const mapOptions = {
  pitch: 45,
  zoom: 8,
  center: [116.39, 39.9],
  dragEnable: false,
  mapStyle: 'amap://styles/dark',
  // 组件内置了`default`、`satellite`、`roadNet`和`traffic`四种图层
  // 直接传入字符串即可生成对应图层
  // layers: ['satellite', 'roadNet'],
  // 你也可以通过回调函数拿到AMap实例去创建其他图层
  layers: (AMap) => {
    // 创建省市简易行政区图层
    const distProvince = new AMap.DistrictLayer.Province({
      zIndex: 10, //设置图层层级
      zooms: [2, 15], //设置图层显示范围
      adcode: '130000', //设置行政区 adcode
      depth: 2 //设置数据显示层级
    })

    // 设置行政区图层样式
    distProvince.setStyles({
      'stroke-width': 2, //描边线宽
      fill: '#ffffffe7' //填充颜色
    })
    return ['satellite', 'roadNet', distProvince]
  }
}

function loaded(map, AMap) {
  // 地图初始化完成后可以拿到地图实例进行添加Marker、Polyline等操作
  const controlbar = new AMap.ControlBar({
    position: {
      bottom: '0.3rem',
      right: '6rem'
    }
  })
  map.addControl(controlbar)
  const toolbar = new AMap.ToolBar()
  map.addControl(toolbar)
  const scale = new AMap.Scale()
  map.addControl(scale)
}
</script>

<style lang="scss" scoped>
.map {
  height: 400px;
}
</style>
```
:::

## 图层控制

你可以通过`layers`属性来控制图层的切换，可以传入组件内置的`default`、`satellite`、`roadNet`和`traffic`四种图层，并且支持传入高德地图提供的任意[图层对象](https://lbs.amap.com/api/javascript-api-v2/guide/layers/official-layers)。

:::demo
```vue
<template>
  <el-radio-group v-model="index">
    <el-radio :label="0">矢量+交通</el-radio>
    <el-radio :label="1">卫星+路网</el-radio>
    <el-radio :label="2">矢量+行政区</el-radio>
  </el-radio-group>
  <liv-a-map class="map" :layers="layers" @loaded="loaded" />
</template>

<script lang="ts" setup>
import { ref, shallowRef, watchEffect } from 'vue'

let distProvince = null

const index = ref(0)

// 注意!!!不要使用ref将地图相关对象设置为深层响应式数据
const layers = shallowRef([])

watchEffect(() => {
  switch (index.value) {
    case 0:
      layers.value = ['default', 'traffic']
      break
    case 1:
      layers.value = ['satellite', 'roadNet']
      break
    case 2:
      layers.value = ['default', distProvince]
      break
    default:
      break
  }
})

function loaded(map, AMap) {
  // 创建行政区图层
  distProvince = new AMap.DistrictLayer.Province({
    zIndex: 10, //设置图层层级
    zooms: [2, 15], //设置图层显示范围
    adcode: [360000], //设置行政区
    depth: 2 //设置数据显示层级
  })

  // 设置行政区图层样式
  distProvince.setStyles({
    'stroke-width': 2, //描边线宽
    fill: '#ffffffe7' //填充颜色
  })
}
</script>

<style lang="scss" scoped>
.map {
  height: 400px;
}
</style>
```
:::

:::danger 注意
请不要使用`ref`将地图或图层等对象设置为响应式数据，由于这些对象中可能存在成千上万个属性，使用`ref`将会深层递归将所有属性转为响应式数据，可能会造成严重的性能问题。如果业务需要将这些对象设置成响应式数据，请使用`shallowRef`将他们设置为浅层响应式数据。
:::

## 图层控件

组件内部封装了图层切换控件，可以通过`layers-control`属性控制是否展示。默认展示在左下角，你可以通过`deep`深度选择器修改控件展示的位置。

:::demo
```vue
<template>
  <liv-a-map class="map" layers-control />
</template>

<style lang="scss" scoped>
.map {
  height: 400px;
}

:deep(.liv-layers-control) {
  left: auto;
  right: 40px;
}
</style>
```
:::

## 图层控件按钮

通过传入`layers-buttons`属性可以生成对应的图层切换按钮，内部会根据传入的图层内容匹配对应的按钮图片，你也可以通过`image`属性设置按钮图片。

:::demo
```vue
<template>
  <liv-a-map
    class="map"
    :map-options="mapOptions"
    :layers-buttons="layersButtons"
    layers-control
    @loaded="loaded"
  />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

const layersButtons = shallowRef([])

const mapOptions = {
  center: [116.33719, 39.942384],
  zoom: 15
}

function loaded(map, AMap) {
  // 创建行政区图层
  let distProvince = new AMap.DistrictLayer.Province({
    zIndex: 10, //设置图层层级
    zooms: [2, 15], //设置图层显示范围
    adcode: [110000], //设置行政区
    depth: 2 //设置数据显示层级
  })

  // 设置行政区图层样式
  distProvince.setStyles({
    'stroke-width': 2,
    fill: '#ffffffe7'
  })

  //创建图片图层
  let imageLayer = new AMap.ImageLayer({
    url: 'https://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/dongwuyuan.jpg', //图片 Url
    bounds: new AMap.Bounds([116.327911, 39.939229], [116.342659, 39.946275]), //图片范围大小的经纬度，传入西南和东北的经纬度坐标
    zIndex: 2, //图层的层级
    zooms: [13, 20] //设置可见级别，[最小级别，最大级别]
  })

  layersButtons.value = [
    {
      name: '矢量+交通',
      layers: ['default', 'traffic']
    },
    {
      name: '卫星+网路',
      layers: ['satellite', 'roadNet']
    },
    {
      name: '卫星+行政',
      layers: ['satellite', distProvince]
    },
    {
      name: '矢量+图片',
      // 设置按钮图片
      image: new URL('../assets/images/layer_image.png', import.meta.url).href,
      layers: ['default', imageLayer]
    }
  ]
}
</script>

<style lang="scss" scoped>
.map {
  height: 400px;
}
</style>
```
:::

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| load-options | 高德地图JS API的加载参数，对应[AMapLoader.load](https://lbs.amap.com/api/javascript-api-v2/guide/abc/load)方法的参数 | `AMap.LoadOptions` | — | — |
| map-options | 高德地图初始化参数，对应[AMap.Map](https://lbs.amap.com/api/javascript-api-v2/documentation#map)方法的参数 | `AMap.MapOptions` | — | — |
| layers | 地图展示的图层 | `AMapLayer` | — | ['default'] |
| layers-control | 是否展示图层切换控件 | `boolean` | — | false |
| layers-buttons | 自定义图层切换按钮 | `Array<AMapLayerButton>` | — | — |
| layers-index / v-model:layers-index | 当前选中的图层切换按钮下标 | `number` | — | 0 |

## 事件

| 事件名 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| loaded | 地图加载完成后的回调 | `Function` | `(map, AMap) => void` | — |