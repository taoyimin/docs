<template>
  <el-form
    :inline="true"
    :model="searchForm"
    ref="searchFormRef"
    class="vp-raw"
    :rules="rules"
    v-bind="$attrs"
  >
    <el-form-item class="input-wrap" prop="search" label="输入关键字">
      <el-input
        v-model="searchForm.search"
        placeholder="请输入关键字"
        clearable
        @change="search"
      ></el-input>
    </el-form-item>
    <el-form-item class="input-wrap" prop="longitude" label="经度">
      <el-input
        v-model="searchForm.longitude"
        placeholder="请输入经度"
        clearable
        @change="handleChange"
      ></el-input>
    </el-form-item>
    <el-form-item class="input-wrap" prop="latitude" label="纬度">
      <el-input
        v-model="searchForm.latitude"
        placeholder="请输入纬度"
        clearable
        @change="handleChange"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(searchFormRef)">确定</el-button>
    </el-form-item>
  </el-form>

  <div class="map-container">
    <div class="map" :id="id"></div>
    <div id="panel"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, nextTick, onMounted } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {
  toOriginCoordinate,
  toTargetCoordinate,
  validateLongitude,
  validateLatitude,
  getMapZoomAndCenter
} from '@szxc/utils'
import { useUserStore } from '@szxc/stores'
import { locationPickerProps } from './location-picker'

type SearchFrom = {
  search: string
  longitude: number | string
  latitude: number | string
}

const store: any = useUserStore()
let map = null
let placeSearch = null
let marker = null

const random = () => {
  return Math.random().toString(36).substr(2)
}

defineOptions({
  name: 'LivLocationPicker'
})

const props = defineProps(locationPickerProps)
const emit = defineEmits([
  'update:modelValue',
  'update:longitude',
  'update:latitude',
  'closed',
  'change'
])

const searchFormRef = ref<FormInstance>()
const searchForm = reactive<SearchFrom>({
  search: props.search,
  longitude: props.modelValue?.longitude,
  latitude: props.modelValue?.latitude
})

const rules = reactive<FormRules<typeof searchForm>>({
  longitude: [
    { required: true, message: '请输入经度', trigger: 'change' },
    { validator: validateLongitude, trigger: 'change' }
  ],
  latitude: [
    { required: true, message: '请输入纬度', trigger: 'change' },
    { validator: validateLatitude, trigger: 'change' }
  ]
})
const id = ref<string>(random())

const addMarker = (lng, lat, updateInput) => {
  if (updateInput) {
    let wgs84 = toOriginCoordinate([lng, lat])
    searchForm.longitude = wgs84[0]
    searchForm.latitude = wgs84[1]
  }
  marker && map.remove(marker)
  marker = new AMap.Marker({
    icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
    position: [lng, lat],
    offset: new AMap.Pixel(-9, -31),
    zIndex: 9999
  })
  map.add(marker)
  if (!updateInput) map.panTo([lng, lat])
}
// 定位地图点位
const getFormatPoint = async (): Promise<any> => {
  let point: any = []
  let zoom = 10
  if (searchForm.longitude && searchForm.latitude) {
    point = [searchForm.longitude, searchForm.latitude]
    zoom = 16
  } else {
    const defaultZoomAndCenter = await getMapZoomAndCenter()
    point = defaultZoomAndCenter.center
    zoom = defaultZoomAndCenter.zoom
  }
  const gcj02 = point.length ? toTargetCoordinate(point) : []
  return { gcj02, zoom }
}

// 搜索
const search = () => {
  if (searchForm.search) {
    placeSearch.search(searchForm.search)
  } else {
    placeSearch.clear()
  }
}

const handleChange = () => {
  if (searchForm.longitude && searchForm.latitude) {
    const gcj02 = toTargetCoordinate([
      searchForm.longitude as number,
      searchForm.latitude as number
    ])
    map.setCenter(gcj02)
    addMarker(gcj02[0], gcj02[1], false)
  }
}

// 保存
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const location = {
        longitude: searchForm.longitude,
        latitude: searchForm.latitude
      }
      emit('update:modelValue', location)
      emit('update:longitude', location.longitude)
      emit('update:latitude', location.latitude)
      emit('change', location)
      emit('closed')
    }
  })
}

const onLoadAMap = () => {
  import('@amap/amap-jsapi-loader').then((module) => {
    module.default
      .load({
        key: import.meta.env.VITE_AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
      .then(async (AMap) => {
        // 地图点击事件
        const { gcj02, zoom } = await getFormatPoint()
        map = new AMap.Map(id.value, {
          resizeEnable: true,
          center: gcj02.length ? [gcj02?.[0], gcj02?.[1]] : null,
          zoom
        })
        // 添加默认marker
        updatePosition()
        map.on('click', (e) => {
          addMarker(e.lnglat.getLng(), e.lnglat.getLat(), true)
        })
        AMap.plugin(['AMap.PlaceSearch'], function () {
          //构造地点查询类
          placeSearch = new AMap.PlaceSearch({
            pageSize: 5, // 单页显示结果条数
            pageIndex: 1, // 页码
            city: store.userInfo?.gridCode || '全国', // 兴趣点城市
            citylimit: true, //是否强制限制在设置的城市内搜索
            map: map, // 展现结果的地图实例
            panel: 'panel', // 结果列表将在此容器中进行展示。
            autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          })
          AMap.Event.addListener(placeSearch, 'markerClick', function (e) {
            addMarker(e.data.location.lng, e.data.location.lat, true)
          })
          AMap.Event.addListener(placeSearch, 'listElementClick', function (e) {
            addMarker(e.data.location.lng, e.data.location.lat, true)
          })
        })
      })
      .catch((e) => {
        console.log('map load err', e)
      })
  })
}

onMounted(() => {
  onLoadAMap()
})

const onUnmountedAMap = () => {
  map?.destroy()
}

// 更新marker
const updatePosition = async () => {
  if (searchForm.longitude && searchForm.latitude) {
    const gcj02 = toTargetCoordinate<any>([searchForm.longitude, searchForm.latitude])
    addMarker(gcj02[0], gcj02[1], false)
  } else {
    marker && map.remove(marker)
  }
}

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      searchForm.latitude = props.modelValue?.latitude
      searchForm.longitude = props.modelValue?.longitude
      nextTick(updatePosition)
    } else {
      onUnmountedAMap()
    }
  }
)
</script>

<style lang="scss" scoped>
.vp-raw {
  display: flex;
  margin-bottom: 20px;
  .input-wrap {
    width: 30%;
  }
}
.map-container {
  position: relative;
  width: 100%;
  height: 40vh;
  .map {
    width: 100%;
    height: 100%;
  }
}
#panel {
  position: absolute;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  left: 10px;
  width: 280px;
}
</style>
<style>
.amap-logo,
.amap-copyright {
  display: none;
}
</style>
