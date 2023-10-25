<template>
  <el-dialog v-model="dialogVisible" title="坐标拾取">
    <div>
      <!--  <el-input v-model="input" placeholder="Please input" /> -->
      <div>
        经度：<el-input v-model="markerLongitude" placeholder="经度" /> 纬度：<el-input
          v-model="markerLatitude"
          placeholder="纬度"
        />
      </div>
    </div>
    <div id="map_div" class="map-div"></div>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="sure"> 确定 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    defalut: false
  },
  longitude: {
    type: [String, Number],
    defalut: ''
  },
  latitude: {
    type: [String, Number],
    defalut: ''
  }
})

const emits = defineEmits(['update: visible', 'update: longitude', 'update: latitude'])

const dialogVisible = computed({
  get() {
    return props.visible
  },
  set(value) {
    emits('update:visible', value)
  }
})

const markerLongitude = ref(props.longitude)
const markerLatitude = ref(props.latitude)

let map: any = null,
  AMap: any = null,
  marker: any = null

// 单个 ref
const unwatch = watch(dialogVisible, (newValue) => {
  if (newValue) {
    AMapLoader.load({
      key: 'c5c208ce2441d70c65a4a5af3cc581b8', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((amap) => {
        AMap = amap
        initMap()
        createMarker()
      })
      .catch((e) => {
        console.log(e)
      })
    unwatch()
  }
})

onMounted(() => {})

onUnmounted(() => {
  map?.destroy()
})

function initMap() {
  map = new AMap.Map('map_div', {
    // 设置地图容器id
    //viewMode: '3D', // 是否为3D地图模式
    zoom: 11, // 初始化地图级别
    center: [116.397428, 39.90923], // 初始化地图中心点位置
    layers: []
  })

  /* var wms = new AMap.TileLayer.WMS({
    url: 'http://140.246.166.64:8090/iserver/services/map-360828AnFu/wms130', // wms服务的url地址
    blend: false, // 地图级别切换时，不同级别的图片是否进行混合
    tileSize: 512, // 加载WMS图层服务时，图片的分片大小
    params: {
      LAYERS: 'T360829@360828安福',
      VERSION: '1.3.0'
    } // OGC标准的WMS地图服务的GetMap接口的参数
  })

  map.add(wms) */

  map.on('click', function (e) {
    console.log(e.lnglat.getLng() + ',' + e.lnglat.getLat())
    console.log(map.getCenter())

    marker.setPosition([e.lnglat.getLng(), e.lnglat.getLat()])
    markerLongitude.value = e.lnglat.getLng()
    markerLatitude.value = e.lnglat.getLat()
  })
}

// 创建标记点
function createMarker() {
  marker = new AMap.Marker({
    position: map.getCenter(),
    icon: new AMap.Icon({
      image: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
      imageSize: new AMap.Size(26, 34)
    }),
    offset: new AMap.Pixel(-13, -15),
    // 设置是否可以拖拽
    draggable: true,
    cursor: 'move'
  })

  marker.setMap(map)

  marker.on('dragend', function (e) {
    marker.setPosition([e.lnglat.getLng(), e.lnglat.getLat()])
    markerLongitude.value = e.lnglat.getLng()
    markerLatitude.value = e.lnglat.getLat()
  })
}

// 确定
function sure() {
  dialogVisible.value = false
  emits('update:longitude', markerLongitude.value)
  emits('update:latitude', markerLatitude.value)
}
</script>

<style lang="scss" scoped>
.map-div {
  height: 400px;
}
</style>
