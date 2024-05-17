<template>
  <div class="liv-a-map">
    <div :id="mapId" class="liv-map"></div>
    <el-popover
      v-if="layersControl && layersButtons.length > 0"
      placement="right"
      width="fit-content"
      trigger="hover"
    >
      <template #reference>
        <div
          class="liv-layers-control"
          :style="{
            backgroundImage: `url(${
              layersButtons[layersIndex].image ??
              getLayersButtonImage(layersButtons[layersIndex].layers)
            })`
          }"
        >
          <span class="liv-layers-button-title">{{ layersButtons[layersIndex].name }}</span>
        </div>
      </template>
      <template #default>
        <div class="liv-layers-button-container">
          <div
            v-for="(button, index) in layersButtons"
            class="liv-layers-button"
            :style="{
              backgroundImage: `url(${button.image ?? getLayersButtonImage(button.layers)})`
            }"
            :key="index"
            @click="layersIndex = index"
          >
            <span class="liv-layers-button-title">{{ button.name }}</span>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted, shallowRef } from 'vue'
import type { AMapProps, AMapEmits, AMapLayerType, AMapLayer } from './a-map'
import vector from '../../assets/a-map/vector.png'
import satellite from '../../assets/a-map/satellite.png'

defineOptions({
  name: 'LivAMap'
})

const props = withDefaults(defineProps<AMapProps>(), {
  layers: () => ['default'],
  layersButtons: () => [
    {
      name: '矢量',
      image: vector,
      layers: ['default']
    },
    {
      name: '卫星',
      image: satellite,
      layers: ['default', 'satellite']
    }
  ]
})

const emit = defineEmits<AMapEmits>()

type Layer = Required<AMap.MapOptions>['layers'][number]

let AMapInstance = shallowRef<AMap.NameSpace | null>(null)
// 地图实例
let map: AMap.Map | null = null
// 默认图层
let defaultLayer: Layer | null = null
// 卫星图层
let satelliteLayer: Layer | null = null
// 路网图层
let roadNetLayer: Layer | null = null
// 实时交通图层
let trafficLayer: Layer | null = null
// 当前选择的图层按钮下标
const layersIndex = defineModel('layersIndex', {
  default: 0
})

const mapId = 'map' + new Date().getTime()

defineExpose({
  map
})

watch(
  () => props.layers,
  (newValue, oldValue) => {
    hideLayers(getLayers(oldValue))
    showLayers(getLayers(newValue))
  }
)

watch(layersIndex, (newValue, oldValue) => {
  hideLayers(getLayers(props.layersButtons[oldValue]?.layers ?? []))
  showLayers(getLayers(props.layersButtons[newValue]?.layers ?? []))
})

watch(
  () => props.layersButtons,
  (newValue, oldValue) => {
    hideLayers(getLayers(oldValue[layersIndex.value]?.layers ?? []))
    showLayers(getLayers(newValue[layersIndex.value]?.layers ?? []))
  }
)

function showLayers(layers: Layer[]) {
  layers.forEach((layer) => {
    layer.show()
  })
}

function hideLayers(layers: Layer[]) {
  layers.forEach((layer) => {
    layer.hide()
  })
}

function getLayers(layers: AMapLayer[]) {
  return layers.map((layer) => {
    if (typeof layer === 'string') {
      // 懒加载图层
      const layerType = layer as AMapLayerType
      switch (layerType) {
        case 'default':
          if (defaultLayer === null) {
            defaultLayer = AMapInstance.value?.createDefaultLayer() as Layer
            map?.addLayer(defaultLayer)
          }
          return defaultLayer
        case 'satellite':
          if (satelliteLayer === null) {
            satelliteLayer = new AMapInstance.value!.TileLayer.Satellite()
            map?.addLayer(satelliteLayer)
          }
          return satelliteLayer
        case 'roadNet':
          if (roadNetLayer === null) {
            roadNetLayer = new AMapInstance.value!.TileLayer.RoadNet()
            map?.addLayer(roadNetLayer)
          }
          return roadNetLayer
        case 'traffic':
          if (trafficLayer === null) {
            trafficLayer = new AMapInstance.value!.TileLayer.Traffic()
            map?.addLayer(trafficLayer)
          }
          return trafficLayer
        default:
          // eslint-disable-next-line no-case-declarations
          const n: never = layerType
          console.warn(`[LivAMap]传入了不存在的图层类型layerType=${n}，将使用默认图层代替。`)
          if (defaultLayer === null) {
            defaultLayer = AMapInstance.value?.createDefaultLayer() as Layer
            map?.addLayer(defaultLayer)
          }
          return defaultLayer
      }
    } else {
      if (layer) {
        if (!layer.map) {
          // 图层还未添加到地图上
          map?.add(layer)
        }
      } else {
        console.warn(`[LivAMap]传入了一个空的图层，请确保图层创建完成之后再传入。`)
      }
      return layer
    }
  })
}

function getLayersButtonImage(layers: AMapLayer[]) {
  if (layers.includes('satellite')) {
    return satellite
  } else {
    return vector
  }
}

onMounted(() => {
  import('@amap/amap-jsapi-loader').then((module) => {
    module.default
      .load({
        key: import.meta.env.VITE_AMAP_KEY,
        version: '2.0',
        ...props.loadOptions
      })
      .then((aMap: AMap.NameSpace) => {
        AMapInstance.value = aMap
        map = new AMapInstance.value.Map(mapId, {
          viewMode: '3D',
          zoom: Number(import.meta.env.VITE_MAP_ZOOM),
          center: [
            Number(import.meta.env.VITE_MAP_CENTER_LONGITUDE),
            Number(import.meta.env.VITE_MAP_CENTER_LATITUDE)
          ],
          ...props.mapOptions,
          layers: initLayers()
        })
        emit('loaded', map, AMapInstance.value)
      })
  })
})

function initLayers() {
  if (props.layersControl) {
    // 如果开启了layersControl，则根据当前选中的layersButtons初始化图层
    return getLayers(props.layersButtons[layersIndex.value]?.layers ?? [])
  } else if (props.mapOptions?.layers) {
    // 如果mapOptions中传入了layers属性，则根据传入的layers初始化图层
    if (typeof props.mapOptions.layers === 'function') {
      return getLayers(props.mapOptions.layers(AMapInstance.value!))
    } else {
      return getLayers(props.mapOptions?.layers)
    }
  } else {
    // 根据传入的layers属性初始化图层
    return getLayers(props.layers)
  }
}

onUnmounted(() => {
  map?.destroy()
  map = null
  defaultLayer = null
  satelliteLayer = null
  roadNetLayer = null
  trafficLayer = null
})
</script>

<style lang="scss">
.liv-a-map {
  width: 100%;
  height: 100%;
  position: relative;

  .liv-map {
    width: 100%;
    height: 100%;
  }
}

.liv-layers-control {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border: 1px solid #999;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.6);
  background-size: 100% 100%;
  position: absolute;
  bottom: 40px;
  left: 40px;
}

.liv-layers-button-container {
  display: flex;
  flex-direction: row;
}

.liv-layers-button {
  width: 80px;
  height: 80px;
  cursor: pointer;
  position: relative;
  border: 1px solid #999;
  background-size: 100% 100%;
}

.liv-layers-button + .liv-layers-button {
  margin-left: 8px;
}

.liv-layers-button-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-weight: bolder;
}
</style>
