<template>
  <div id="om_home" class="om-home-page">
    <div id="map_div" class="map-div"></div>
    <div class="page-nav">
      <div
        v-cloak
        v-for="item in navList"
        class="nav-item"
        :class="[item.className, currNav && item.value === currNav.value ? 'sel' : '']"
        @click="navSelect(item)"
        :key="item.value"
      >
        <i></i>{{ item.name }}
      </div>
    </div>
    <div v-cloak class="page-header">
      <i class="icon"></i>
      <span class="title">{{ userInfo.gobalName }}农村人居环境5G+长效管护平台</span>
    </div>

    <el-cascader
      size="large"
      class="grid-selector"
      placeholder=""
      v-model="gridCodeList"
      :options="cascaderOptions"
      :show-all-levels="false"
      :props="cascaderProps"
      @change="cascaderChange"
    ></el-cascader>

    <el-popover v-cloak placement="right" trigger="hover">
      <div class="selector-list">
        <div
          v-for="item in markerTypeList"
          class="map-selector-item"
          @click="markerTypeChange(item)"
          :key="item.type"
        >
          <img :src="`/src/assets/images/manageDispatch/${currMapType.type}_${item.type}.png`" />
          <span class="map-type-name">{{ item.name }}</span>
        </div>
      </div>

      <template #reference>
        <div class="marker-selector">
          <div class="map-selector-item">
            <img
              :src="`/src/assets/images/manageDispatch/${currMapType.type}_${currMarkerType.type}.png`"
            />
            <span class="map-type-name">{{ currMarkerType.name }}</span>
          </div>
        </div>
      </template>
    </el-popover>

    <el-popover v-cloak placement="right" trigger="hover">
      <div class="selector-list">
        <div
          v-for="item in mapTypeList"
          class="map-selector-item"
          @click="mapTypeChange(item)"
          :key="item.type"
        >
          <img :src="`/src/assets/images/manageDispatch/${item.type}.png`" />
          <span class="map-type-name">{{ item.name }}</span>
        </div>
      </div>

      <template #reference>
        <div class="map-selector">
          <div class="map-selector-item">
            <img :src="`/src/assets/images/manageDispatch/${currMapType.type}.png`" />
            <span class="map-type-name">{{ currMapType.name }}</span>
          </div>
        </div>
      </template>
    </el-popover>

    <div class="right-part">
      <transition mode="out-in" name="el-fade-in-linear">
        <component :is="currNav && currNav.compName" :code="gridCode"></component>
      </transition>
    </div>

    <el-dialog
      class="common-dialog"
      title="事件详情"
      v-model="eventDialogVisible"
      top="10vh"
      width="900px"
    >
      <event-detail class="event-frame" :eventId="eventData.eventId"></event-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="管护员详情"
      v-if="personnelDialogVisible"
      v-model="personnelDialogVisible"
      top="5vh"
      width="480px"
    >
      <personnel-detail :data="personnelData" ref="personnel_detail"></personnel-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="车辆详情"
      v-if="carDialogVisible"
      v-model="carDialogVisible"
      top="5vh"
      width="480px"
    >
      <car-detail ref="car_detail" :data="carData"></car-detail>
    </el-dialog>
    <!--
    <el-dialog
      custom-class="common-dialog"
      title="监控详情"
      v-if="monitorDialogVisible"
      :visible.sync="monitorDialogVisible"
      top="10vh"
      width="800px"
    >
      <monitor-detail ref="monitor_detail" :data="monitorData"></monitor-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="垃圾处理点"
      v-if="rubbishDialogVisible"
      :visible.sync="rubbishDialogVisible"
      width="600px"
    >
      <rubbish-detail :data="rubbishData" ref="rubbish_detail"></rubbish-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      :title="sewageData.type === 'sewage' ? '污水处理站' : '水质监测站'"
      v-if="sewageDialogVisible"
      :visible.sync="sewageDialogVisible"
      width="600px"
    >
      <sewage-detail ref="sewage_detail" :data="sewageData"></sewage-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="智能电表"
      v-if="electricityDialogVisible"
      :visible.sync="electricityDialogVisible"
      width="600px"
    >
      <electricity-detail ref="sewage_detail" :data="electricityData"></electricity-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="公厕"
      v-if="toiletsDialogVisible"
      :visible.sync="toiletsDialogVisible"
      width="600px"
    >
      <toilets-detail ref="toilets_detail" :data="toiletsData"></toilets-detail>
    </el-dialog>

    <el-dialog
      custom-class="common-dialog"
      title="播放音频"
      v-if="suonaDialogVisible"
      :visible.sync="suonaDialogVisible"
      width="700px"
    >
      <suona-detail :data="suonaData" ref="suona_detail"></suona-detail>
    </el-dialog>
    -->
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { queryGridBoundary, queryGridZtreeList, listPointInfo } from '@/api/manageDispatch'
import gcoord from 'gcoord'
import CompEvent from './CompEvent.vue'
import EventDetail from './EventDetail.vue'
import CompPersonnel from './CompPersonnel.vue'
import PersonnelDetail from './PersonnelDetail.vue'
import CompCar from './CompCar.vue'
import CarDetail from './CarDetail.vue'

//地图实例
let map
//默认图层
let vector
//卫星图层
let satellite

// 海量标记点图层
let massMarks = null
// 点聚合
let markerCluster = null
const markerType = {
  monitor: '监控',
  toilet: '气味探测器',
  rubbish: '垃圾传感器',
  event: '事件',
  card: '卡牌',
  car: '车辆',
  rubbishSite: '垃圾站',
  waterQua: '水质探测器',
  electricity: '电表传感器',
  waterQuaFacility: '水质监测站',
  sewage: '污水处理厂',
  toiletFacility: '厕所',
  loudspeaker: '大喇叭'
}

export default {
  components: {
    CompEvent,
    EventDetail,
    CompPersonnel,
    PersonnelDetail,
    CompCar,
    CarDetail
  },
  data() {
    return {
      eventDialogVisible: false,
      monitorDialogVisible: false,
      rubbishDialogVisible: false,
      sewageDialogVisible: false,
      electricityDialogVisible: false,
      toiletsDialogVisible: false,
      suonaDialogVisible: false,
      personnelDialogVisible: false,
      carDialogVisible: false,
      eventData: {},
      suonaData: {},
      monitorData: {},
      personnelData: {},
      carData: {},
      rubbishData: {},
      toiletsData: {},
      sewageData: {},
      electricityData: {},
      currNav: null,
      navList: [
        {
          name: '事件',
          className: 'nav-sj',
          compName: 'comp-event',
          value: 'sj'
        },
        {
          name: '人员',
          className: 'nav-ry',
          compName: 'comp-personnel',
          value: 'ry'
        },
        {
          name: '车辆',
          className: 'nav-cl',
          compName: 'comp-car',
          value: 'cl'
        },
        {
          name: '监控',
          className: 'nav-jk',
          compName: 'comp-monitor',
          value: 'jk'
        },
        {
          name: '垃圾',
          className: 'nav-lj',
          compName: 'comp-rubbish',
          value: 'lj'
        },
        {
          name: '污水',
          className: 'nav-ws',
          compName: 'comp-sewage',
          value: 'ws'
        },
        {
          name: '公厕',
          className: 'nav-gc',
          compName: 'comp-toilets',
          value: 'gc'
        },
        {
          name: '喇叭',
          className: 'nav-lb',
          compName: 'comp-suona',
          value: 'lb'
        }
      ],
      currMapType: {
        name: '卫星',
        type: 'satellite'
      },
      mapTypeList: [
        {
          name: '标准',
          type: 'vector'
        },
        {
          name: '卫星',
          type: 'satellite'
        }
      ],
      currMarkerType: {
        name: '普通',
        type: 'massMarks'
      },
      markerTypeList: [
        {
          name: '普通',
          type: 'massMarks'
        },
        {
          name: '聚合',
          type: 'markerCluster'
        }
      ],
      points: [],
      currentMarkerType: 1,
      gridCodeList: [],
      cascaderOptions: [],
      cascaderProps: {
        checkStrictly: true,
        value: 'code',
        label: 'name',
        leaf: 'isLeaf',
        lazy: true,
        lazyLoad(node, resolve) {
          const { isLeaf, value, level } = node
          if (!isLeaf) {
            queryGridZtreeList({ code: value }).then((res) => {
              let arr = res.map((item) => {
                return {
                  name: item.name,
                  code: item.code,
                  isLeaf: !item.isParent
                }
              })
              resolve(arr)
            })
          } else {
            resolve()
          }
        }
      }
    }
  },
  computed: {
    ...mapState(useUserStore, {
      userInfo: 'userInfo',
      gobalCode: (store) => store.userInfo.gobalCode,
      // 它可以正常读取“this”，但无法正常写入...
      gobalName: (store) => store.userInfo.gobalName
    }),
    gridCode() {
      return this.gridCodeList[this.gridCodeList.length - 1]
    }
  },
  methods: {
    navSelect(navItem) {
      if (!this.currNav) {
        this.currNav = navItem
      } else if (navItem.value === this.currNav.value) {
        this.currNav = null
        this.getGridBoundary()
      } else {
        this.currNav = navItem
      }
    },
    cascaderChange(value) {
      this.currNav = null
      //var gridCode = value[value.length - 1];
      this.getGridBoundary()
    },
    mapTypeChange(item) {
      if (item.type != this.currMapType.type) {
        if (item.type === 'satellite') {
          map.addLayer(satellite)
        } else {
          map.removeLayer(satellite)
        }
        //map.removeLayer(this[this.currMapType.type]);
        //map.addLayer(this[item.type]);
        this.currMapType = item
      }
    },
    markerTypeChange(item) {
      if (item.type != this.currMarkerType.type) {
        this.currMarkerType = item
        if (item.type == 'massMarks') {
          this.addMarkers(markerCluster?.points ?? [])
        } else if (item.type == 'markerCluster') {
          this.addMarkers(massMarks?.getData() ?? [])
        }
      }
    },
    loadMap() {
      this.initMap('map_div')
    },
    initMap(container) {
      AMapLoader.load({
        key: 'c5c208ce2441d70c65a4a5af3cc581b8', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((amap) => {
          AMap = amap
          //默认图层
          vector = AMap.createDefaultLayer()
          //卫星图层
          satellite = new AMap.TileLayer.Satellite()

          map = new AMap.Map(container, {
            //pitch: 45, // 地图俯仰角度，有效范围 0 度- 83 度
            viewMode: '3D', // 地图模式
            terrain: true, // 开启地形图
            //center: [115.9934900, 28.6481100],
            zooms: [2, 16],
            layers: [
              //默认使用默认图层叠加卫星图层
              vector,
              satellite
            ]
          })

          this.getGridBoundary()

          AMap.plugin(['AMap.ControlBar', 'AMap.ToolBar', 'AMap.Scale'], function () {
            // 添加工具条方向盘
            let controlbar = new AMap.ControlBar({
              position: {
                bottom: '0.3rem',
                right: 'calc(1rem + 30px + 10px)'
              }
            })
            map.addControl(controlbar)
            // 添加工具条
            let toolbar = new AMap.ToolBar({
              position: {
                bottom: 'calc(0.3rem + 16px)',
                right: '1rem'
              }
            })
            map.addControl(toolbar)
            // 添加比例尺控件
            let scale = new AMap.Scale({
              position: {
                bottom: '0.3rem',
                left: 'calc(1rem + 80px + 16px + 80px + 16px)'
              }
            })
            map.addControl(scale)
          })
        })
        .catch((e) => {
          console.log(e)
        })

      /*setTimeout(()=> {
                    map.removeLayer(this.satelliteLayer);
                    map.addLayer(this.defaultLayer);
                }, 3000);*/
    },
    // 获取网格边界数据
    getGridBoundary() {
      queryGridBoundary({ code: this.gridCode }).then((res) => {
        if (res.success) {
          //添加网格标注
          const polygonData = res.data.points,
            pointsStr = this.getParenthesesStr(polygonData)
          let points = pointsStr.split(',')
          this.setMapView(points)
        }
      })
    },
    getParenthesesStr(text) {
      let result = ''
      if (this.isObjEmpty(text)) return result
      let regex = /\((.+?)\)/g
      let options = text.match(regex)
      if (!this.isObjEmpty(options)) {
        let option = options[0]
        if (!this.isObjEmpty(option)) {
          result = option.substring(2, option.length - 1)
        }
      }
      return result
    },
    //字符串非空判断
    isObjEmpty(text) {
      if (text == null || text == '') return true
      else return false
    },
    // 设置地图边界
    setMapView(pathData) {
      map.clearMap()

      var path = pathData.map(function (item) {
        //GCJ02 AMap
        var itemList = gcoord.transform(
          item.split(' '), // 经纬度坐标
          gcoord.WGS84, // 当前坐标系
          gcoord.AMap // 目标坐标系
        )
        var pathItem = new AMap.LngLat(itemList[0], itemList[1])

        return pathItem
      })

      var polygon = new AMap.Polygon({
        path: path,
        strokeColor: 'red',
        strokeWeight: 2,
        strokeOpacity: 1,
        fillOpacity: 0.1,
        fillColor: '#000',
        zIndex: 100,
        bubble: true
      })

      map.add(polygon)
      map.setFitView(polygon, false, [120, 60, 60, 60])

      this.getListPointInfo()
      //this.addMarkers();
    },
    // 获取地图3000个点位
    getListPointInfo() {
      listPointInfo({ gridCode: this.gridCode }).then((res) => {
        if (res.code === '0') {
          this.addMarkers(res.data)
        }
      })
    },
    // 获取点位样式
    getPointStyle(data) {
      var style = 1
      switch (data.type) {
        case 'monitor': // 监控
          if (data.status === '1') {
            style = 0
          } else {
            style = 1
          }
          break
        case 'rubbish': // 垃圾
          if (data.alarm === '2') {
            style = 4
          } else if (data.status === '1') {
            style = 2
          } else {
            style = 3
          }
          break
        case 'rubbishSite': // 垃圾站
          style = 12
          break
        case 'toilet': // 气味探测器
          if (data.status === '1') {
            style = 5
          } else {
            style = 6
          }
          break
        case 'event': // 事件
          style = 7
          break
        case 'card': // 人员（卡牌）
          if (data.status === '1') {
            style = 8
          } else {
            style = 9
          }
          break
        case 'car': // 车辆
          if (data.status === '1') {
            style = 10
          } else {
            style = 11
          }
          break
        case 'waterQua': // 水质探测器
          if (data.status === '1') {
            style = 13
          } else {
            style = 14
          }
          break
        case 'electricity': // 智能电表
          if (data.status === '1') {
            style = 15
          } else {
            style = 16
          }
          break
        case 'sewage': // 污水处理站
          style = 17
          break
        case 'waterQuaFacility': // 水质监测站
          style = 13
          break
        case 'loudspeaker': // 大喇叭
          if (data.status === '1') {
            style = 18
          } else {
            style = 19
          }
          break
        case 'toiletFacility': // 公厕设施
          style = 20
          break
        default:
      }

      return style
    },
    // 添加覆盖物
    addMarkers(data) {
      let points = data.map((item) => {
        item.lnglat = [item.longitude, item.latitude]
        item.style = this.getPointStyle(item)
        item.typeStr = markerType[item.type]
        return item
      })
      if (this.currMarkerType.type == 'massMarks') {
        markerCluster?.setData([])
        this.addMassMarks(points)
      } else if (this.currMarkerType.type == 'markerCluster') {
        massMarks.clear()
        this.addClusterer(points)
      }
    },
    // 添加点聚合点位
    addClusterer(data) {
      var style = [
        {
          // 0监控在线
          url: '/src/assets/images/manageDispatch/om-monitor(online).gif'
        },
        {
          // 1监控离线
          url: '/src/assets/images/manageDispatch/om-monitor(offline).gif'
        },
        {
          // 2垃圾在线
          url: '/src/assets/images/manageDispatch/om-rubbish(online).gif'
        },
        {
          // 3垃圾离线
          url: '/src/assets/images/manageDispatch/om-rubbish(offline).gif'
        },
        {
          // 4垃圾告警
          url: '/src/assets/images/manageDispatch/om-rubbish(warn).gif'
        },
        {
          // 5气味探测器在线
          url: '/src/assets/images/manageDispatch/om-toiletDevice(online).gif'
        },
        {
          // 6气味探测器离线
          url: '/src/assets/images/manageDispatch/om-toiletDevice(offline).gif'
        },
        {
          // 7事件
          url: '/src/assets/images/manageDispatch/om-event(online).gif'
        },
        {
          // 8人员（卡牌）在线
          url: '/src/assets/images/manageDispatch/om-staff(online).gif'
        },
        {
          // 9人员（卡牌）离线
          url: '/src/assets/images/manageDispatch/om-staff(offline).gif'
        },
        {
          // 10车辆在线
          url: '/src/assets/images/manageDispatch/om-car(online).gif'
        },
        {
          // 11车辆离线
          url: '/src/assets/images/manageDispatch/om-car(offline).gif'
        },
        {
          // 12垃圾站
          url: '/src/assets/images/manageDispatch/om-rubbishFacility(online).gif'
        },
        {
          // 13水质探测器在线
          url: '/src/assets/images/manageDispatch/om-waterQua(online).gif'
        },
        {
          // 14水质探测器离线
          url: '/src/assets/images/manageDispatch/om-waterQua(offline).gif'
        },
        {
          // 15智能电表在线
          url: '/src/assets/images/manageDispatch/om-elec(online).gif'
        },
        {
          // 16智能电表离线
          url: '/src/assets/images/manageDispatch/om-elec(offline).gif'
        },
        {
          // 17污水处理站
          url: '/src/assets/images/manageDispatch/om-waterFacility(online).gif'
        },
        {
          // 18大喇叭在线
          url: '/src/assets/images/manageDispatch/om-loudspeaker(online).gif'
        },
        {
          // 19大喇叭离线
          url: '/src/assets/images/manageDispatch/om-loudspeaker(offline).gif'
        },
        {
          // 20气味探测器离线
          url: '/src/assets/images/manageDispatch/om-toiletDevice(offline).gif'
        }
      ]
      var _renderMarker = function (context) {
        var content = `<img style='height: 70px; width: 70px;' src='${
          style[context.data[0].style].url
        }'/>`
        var offset = new AMap.Pixel(-35, -60)
        context.marker.setContent(content)
        context.marker.setOffset(offset)
      }
      if (!markerCluster) {
        AMap.plugin(['AMap.MarkerClusterer'], () => {
          markerCluster = new AMap.MarkerClusterer(map, data, {
            maxZoom: 14,
            renderMarker: _renderMarker
          })
          markerCluster.points = data
          markerCluster.on('click', (e) => {
            if (e.clusterData.length == 0) {
              return
            } else if (e.clusterData.length == 1) {
              // 点击事件
              e.data = e.clusterData[0]
              this.markerClick(e)
            } else {
              // 点击聚合点放大地图层级
              let alllng = 0,
                alllat = 0
              for (const mo of e.clusterData) {
                ;(alllng += mo.lnglat.lng), (alllat += mo.lnglat.lat)
              }
              const lat = alllat / e.clusterData.length
              const lng = alllng / e.clusterData.length
              if (map.getZoom() < 4) {
                map.setZoomAndCenter(map.getZoom() + 8, [lng, lat])
              } else if (map.getZoom() < 8) {
                map.setZoomAndCenter(map.getZoom() + 4, [lng, lat])
              } else {
                map.setZoomAndCenter(map.getZoom() + 2, [lng, lat])
              }
            }
          })
        })
      } else {
        markerCluster.setData(data)
      }
    },
    // 添加海量点
    addMassMarks(data) {
      var style = [
        {
          // 0监控在线
          url: '/src/assets/images/manageDispatch/icon_monitor_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 1监控离线
          url: '/src/assets/images/manageDispatch/icon_monitor_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 2垃圾在线
          url: '/src/assets/images/manageDispatch/icon_rubbish_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 3垃圾离线
          url: '/src/assets/images/manageDispatch/icon_rubbish_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 4垃圾告警
          url: '/src/assets/images/manageDispatch/icon_rubbish_warning.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 5气味探测器在线
          url: '/src/assets/images/manageDispatch/icon_detector_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 6气味探测器离线
          url: '/src/assets/images/manageDispatch/icon_detector_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 7事件
          url: '/src/assets/images/manageDispatch/icon_event_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 8人员（卡牌）在线
          url: '/src/assets/images/manageDispatch/icon_personnel_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 9人员（卡牌）离线
          url: '/src/assets/images/manageDispatch/icon_personnel_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 10车辆在线
          url: '/src/assets/images/manageDispatch/icon_car_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 11车辆离线
          url: '/src/assets/images/manageDispatch/icon_car_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 12垃圾站
          url: '/src/assets/images/manageDispatch/icon_rubbish_site_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 13水质探测器在线
          url: '/src/assets/images/manageDispatch/icon_water_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 14水质探测器离线
          url: '/src/assets/images/manageDispatch/icon_water_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 15智能电表在线
          url: '/src/assets/images/manageDispatch/icon_electricity_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 16智能电表离线
          url: '/src/assets/images/manageDispatch/icon_electricity_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 17污水处理站
          url: '/src/assets/images/manageDispatch/icon_water_site_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 18大喇叭在线
          url: '/src/assets/images/manageDispatch/icon_suona_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 19大喇叭离线
          url: '/src/assets/images/manageDispatch/icon_suona_offline.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        },
        {
          // 20气味探测器离线
          url: '/src/assets/images/manageDispatch/icon_toilet_online.png',
          anchor: new AMap.Pixel(15, 18),
          size: new AMap.Size(30, 35)
        }
      ]

      if (!massMarks) {
        massMarks = new AMap.MassMarks(data, {
          zIndex: 999, // 海量点图层叠加的顺序
          style: style // 设置样式对象
        })

        massMarks.setMap(map)

        //var marker = new AMap.Marker({content: ' ', map: map});

        //构建自定义信息窗体
        var infoWindow = new AMap.InfoWindow({
          isCustom: true,
          anchor: 'bottom-center',
          offset: [0, -20]
        })

        massMarks.on('mouseover', function (e) {
          /*marker.setPosition(e.data.lnglat);
                        marker.setLabel({content: e.data.type})*/
          infoWindow.setContent(
            `<div style="background-color: #f0f9eb;border-color: #e1f3d8;color: #67c23a;border-radius: 2px;padding: 2px 5px;box-shadow: 1px 1px 5px #333;color: #333;">${e.data.typeStr}</div>`
          )
          infoWindow.open(map, e.data.lnglat)
        })
        massMarks.on('mouseout', function (e) {
          infoWindow.close()
        })

        massMarks.on('click', this.markerClick)
      } else {
        massMarks.clear()
        massMarks.setData(data)
      }
    },
    markerClick: function (e) {
      console.log(e.data)
      switch (e.data.type) {
        case 'event':
          this.showEventDialog(e.data.id)
          break
        case 'monitor':
          this.showMoniterDialog(e.data)
          break
        case 'loudspeaker':
          this.showSuonaDialog(e.data)
          break
        case 'card':
          this.showPersonnelDialog(e.data)
          break
        case 'car':
          this.showCarDialog(e.data)
          break
        case 'rubbish':
          this.showRubbishDialog(e.data)
          break
        case 'rubbishSite':
          this.showRubbishDialog(e.data)
          break
        case 'toilet':
          this.showToiletsDialog(e.data)
          break
        case 'toiletFacility':
          this.showToiletsDialog(e.data)
          break
        case 'waterQua':
          this.showSewageDialog(e.data)
          break
        case 'waterQuaFacility':
          this.showSewageDialog(e.data)
          break
        case 'sewage':
          this.showSewageDialog(e.data)
          break
        case 'electricity':
          this.showElectricityDialog(e.data)
          break
        default:
      }
    },
    // 设置视角
    setMarkersView(dataList) {
      var markerList = dataList.map((item) => {
        var marker = new AMap.Marker({
          icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
          position: [item.longitude, item.latitude],
          offset: new AMap.Pixel(-13, -30)
        })

        return marker
      })
      map.setFitView(markerList, false, [120, 60, 450, 450])
    },
    // 设置点位和定位
    setPointAndView(dataList) {
      var filterData = dataList.filter((item) => {
        return (
          item.latitude && item.longitude && item.latitude !== '0E-7' && item.longitude !== '0E-7'
        )
      })

      this.addMarkers(filterData)
      this.setMarkersView(filterData)
    },
    // 事件弹窗
    showEventDialog(eventId) {
      this.eventData = {
        eventId
      }
      this.eventDialogVisible = true
    },
    // 监控弹窗
    showMoniterDialog(data) {
      this.monitorData = data
      this.monitorDialogVisible = true
    },
    // 垃圾弹窗
    showRubbishDialog(data) {
      this.rubbishData = data
      this.rubbishDialogVisible = true
    },
    // 污水弹窗
    showSewageDialog(data) {
      this.sewageData = data
      this.sewageDialogVisible = true
    },
    // 智能电表弹窗
    showElectricityDialog(data) {
      this.electricityData = data
      this.electricityDialogVisible = true
    },
    // 公厕弹窗
    showToiletsDialog(data) {
      this.toiletsData = data
      this.toiletsDialogVisible = true
    },
    // 大喇叭弹窗
    showSuonaDialog(data) {
      this.suonaDialogVisible = true
      this.suonaData = data
      /*this.$nextTick(() => {
                    this.$refs['suona_detail'].data = data;
                });*/
    },
    // 人员（卡牌）弹窗
    showPersonnelDialog(data) {
      this.personnelData = data
      this.personnelDialogVisible = true
    },
    // 车辆弹窗
    showCarDialog(data) {
      this.carData = data
      this.carDialogVisible = true
    },
    setThemeColor() {
      // const el = document.documentElement
      const el = document.getElementById('om_home')

      // 获取 css 变量
      getComputedStyle(el).getPropertyValue(`--el-color-primary`)

      // 设置 css 变量
      el.style.setProperty('--el-color-primary', 'teal')
    }
  },
  mounted() {
    //this.setThemeColor()
    this.gridCodeList = [this.userInfo.gobalCode]
    this.cascaderOptions.push({
      name: this.gobalName,
      code: this.gobalCode,
      isLeaf: false
    })
    this.loadMap()
  }
}
</script>

<style lang="scss" scoped>
.om-home-page {
  font-size: 16px;
  width: 100%;
  height: 100%;
  position: relative;
}

.map-div {
  width: 100%;
  height: 100%;
}

.page-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 84px;
  background: url(@/assets/images/manageDispatch/bigData-header-bg-3.png) no-repeat top center /
    1886px 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.page-header .icon {
  width: 54px;
  height: 60px;
  background: url(@/assets/images/manageDispatch/pic_hd.png) no-repeat center center / 60% 60%;
  margin-top: 2px;
}

.page-header .title {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
}

/* 覆盖物类型切换 */
.marker-selector {
  position: fixed;
  bottom: 30px;
  left: calc(100px + 80px + 16px);
  z-index: 99;
  box-shadow: 0 0 6px #000;
}

/* 地图类型切换 */
.map-selector {
  position: fixed;
  bottom: 30px;
  left: 100px;
  z-index: 99;
  box-shadow: 0 0 6px #000;
}

.map-selector-item {
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;
  border: 1px solid #999;

  img {
    width: 100%;
    height: 100%;
  }
}

.map-type-name {
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

.selector-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
}

.page-nav {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(7, 19, 14, 1), rgba(244, 244, 244, 0));
  width: 60px;
}

.page-nav .nav-item {
  margin: 5px 0;
  cursor: pointer;
  color: #23b989;
  text-align: center;
  font-size: 16px;
  text-shadow: 2px 2px 3px #000;
  position: relative;
}

.page-nav .nav-item.sel {
  filter: hue-rotate(250deg);
}

.page-nav .nav-item:hover {
  left: 10px;
}

.page-nav .nav-item i {
  display: block;
  width: 60px;
  height: 60px;
}

.page-nav .nav-item.nav-sj i {
  background: url(@/assets/images/manageDispatch/icon-shijian2.png) no-repeat center center /
    contain;
}

.page-nav .nav-item.nav-ry i {
  background: url(@/assets/images/manageDispatch/icon-renkou.png) no-repeat center center / contain;
}

.page-nav .nav-item.nav-cl i {
  background: url(@/assets/images/manageDispatch/icon-car.png) no-repeat center center / contain;
}

.page-nav .nav-item.nav-jk i {
  background: url(@/assets/images/manageDispatch/icon-wu.png) no-repeat center center / contain;
}

.page-nav .nav-item.nav-lj i {
  background: url(@/assets/images/manageDispatch/icon-lajixiang.png) no-repeat center center /
    contain;
}

.page-nav .nav-item.nav-ws i {
  background: url(@/assets/images/manageDispatch/icon-shuiyuan.png) no-repeat center center /
    contain;
}

.page-nav .nav-item.nav-gc i {
  background: url(@/assets/images/manageDispatch/icon-gongcetubiao.png) no-repeat center center /
    contain;
}

.page-nav .nav-item.nav-lb i {
  background: url(@/assets/images/manageDispatch/icon-laba2.png) no-repeat center center / contain;
}

/*.grid-selector{
    position: absolute;
    top: 0.77rem;
    left: 1rem;
    width: 3rem;
    height: 0.4rem;
    background: rgba(13, 70, 61, 0.9);
    box-sizing: border-box;
    border: 1px solid #0a674f;
    box-shadow: 2px 2px 5px #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.grid-selector .icon-location{
    content: "\e711";
}*/

:deep(.grid-selector.el-cascader) {
  position: fixed;
  top: 84px;
  left: 100px;
  z-index: 99;
  width: 300px;
}

:deep(.grid-selector.el-cascader .el-input__inner) {
  color: #fff;
}

:deep(.grid-selector.el-cascader:not(.is-disabled):hover .el-input__inner) {
  border-color: transparent;
}

:deep(
    .grid-selector.el-cascader .el-input .el-input__inner:focus,
    .grid-selector.el-cascader .el-input.is-focus .el-input__inner
  ) {
  border: transparent;
}

:deep(.grid-selector.el-cascader .el-input__prefix, .grid-selector.el-cascader .el-input__suffix) {
  color: #fff;
}

:deep(.grid-selector.el-cascader .el-input__wrapper) {
  background: rgba(13, 70, 61, 0.9);
  box-shadow: 0 0 0 1px darkslategray inset;
}

.right-part {
  position: fixed;
  right: 15px;
  top: 84px;
  bottom: 50px;
  z-index: 99;
}

/* 弹窗通用样式 */
:deep(.common-dialog) {
  &.el-dialog {
    background: rgba(13, 70, 61, 0.9);
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
  }

  .el-dialog__header {
    border-left: 5px solid #0ade96;
    padding: 10px;
    background: rgba(17, 107, 84, 0.9);
    margin-right: 0;
  }

  .el-dialog__title {
    color: #d7fff5;
  }

  .el-dialog__headerbtn {
    top: 0;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }

  .el-dialog__body {
    padding: 20px;
    color: #fff;
    flex: 1;
    overflow: auto;
  }
}

.event-frame {
  width: 100%;
  height: 460px;
}

/* 轨迹弹窗样式 */
.trajectory-dialog.el-dialog {
  background: #fff;
}

.trajectory-dialog .el-dialog__header {
  border-left: 5px solid #0ade96;
  padding: 10px;
  background: rgba(17, 107, 84, 0.9);
}

.trajectory-dialog .el-dialog__body {
  padding: 20px;
  color: #fff;
}

.trajectory-dialog .el-dialog__title {
  color: #d7fff5;
}

.trajectory-dialog .el-dialog__headerbtn {
  top: 10px;
}

.trajectory-dialog .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
</style>
