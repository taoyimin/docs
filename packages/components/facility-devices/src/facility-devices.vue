<template>
  <el-tabs v-model="activeName" tab-position="top" type="border-card">
    <el-tab-pane label="物联网设备" name="物联网设备" v-if="tabFlag.tab1">
      <el-row>
        <el-col :span="16">
          <liv-data-form inline :fields="searchLotDeviceFields"
          :model="searchParam" @search="searchDeviceData" @reset="reset" />
          <liv-data-table 
          v-loading="tableLoading" 
          :data="tableLotData" 
          :fields="tableLotFields" 
          :buttons="buttons"
          height="calc(45000vh / 1080)"
          />
          <liv-data-pagination v-model="pageParam" :data="pageData"></liv-data-pagination>
        </el-col>
        <el-divider direction="vertical" class="devider-line" />
        <el-col :span="7">
          <div class="selected-name">已绑定的设备</div>
          <div class="tag-content" style="height: calc(60000vh / 1080); overflow-y: auto;">
            <el-tag v-for="tag in selectedList" :key="tag.id" class="mx-1 tag-wrap" closable :type="'success'" @close="handleClose(tag)">
              <div class="tag-list">设备编号：{{ tag.deviceNo }}</div>
              <div class="tag-list">设备类型：{{ tag.deviceTypeStr || '无' }}</div>
            </el-tag>
            <el-empty v-if="!selectedList.length" description="暂无数据" />
          </div>
        </el-col>
      </el-row>

      <div style="text-align: center; margin-top: 20px">
        <el-button v-for="button in defaultButtons" :key="button.name" @click="button.onClick()"
          v-bind="removeOnClick(button)">{{ button.name }}
        </el-button>
      </div>
    </el-tab-pane>

    <el-tab-pane label="监控" name="监控" v-if="tabFlag.tab2">
      <el-row>
        <el-col :span="16">
          <liv-data-form 
          inline 
          :fields="searchMonitorFields" 
          @search="searchDeviceData"
          :model="searchParam" 
          @reset="reset" />
          <liv-data-table 
          v-loading="tableLoading" 
          :data="tableMonitorData" 
          :fields="tableMonitorFields" 
          :buttons="buttons"
          height="calc(45000vh / 1080)"
          />
          <!-- 分页 -->
          <liv-data-pagination v-model="pageParam" :data="pageData"></liv-data-pagination>
        </el-col>
        <el-divider direction="vertical" class="devider-line" />
        <el-col :span="7">
          <div class="selected-name">已绑定的设备</div>
          <div class="tag-content" style="height: calc(60000vh / 1080); overflow-y: auto;">
            <el-tag v-for="tag in selectedList" :key="tag.id" class="mx-1 tag-wrap" closable :type="'success'" @close="handleClose(tag)">
              <div class="tag-list">设备编号：{{ tag.deviceNo }}</div>
              <div class="tag-list">设备类型：{{ tag.deviceTypeStr || '无' }}</div>
            </el-tag>
            <el-empty v-if="!selectedList.length" description="暂无数据" />
          </div>
        </el-col>
      </el-row>

      <div style="text-align: center; margin-top: 20px">
        <el-button v-for="button in defaultButtons" :key="button.name" @click="button.onClick()"
          v-bind="removeOnClick(button)">{{ button.name }}
        </el-button>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { 
  facilityDevicesProps, 
  searchMonitorFields,
  tableMonitorFields, 
  tableLotFields
} from './facility-devices'
import { dealTypeData } from './utils'
import { onMounted, reactive, ref, watch } from 'vue'
import LivDataForm from '../../data-form/src/data-form.vue'
import LivDataTable from '../../data-table/src/data-table.vue'
import LivDataPagination from '../../data-pagination/src/data-pagination.vue'
import { internetDevApi } from "@szxc/apis"

defineOptions({
  name: 'LivFacilityDevices'
})

const props = defineProps(facilityDevicesProps)
const emits = defineEmits(['close'])

const activeName = ref('物联网设备')

const tabFlag = ref({
  tab1: true,
  tab2: true
})

const searchLotDeviceFields = [
  {
    prop: 'facilityCategory',
    label: '设备类型',
    fieldType: 'select',
    // 传入异步getter方法
    fieldData: async () => {
      // 耗时操作
      const data = await getDeviceTypeList()
      return data
    },
    clearable: false
  },
  {
    prop: 'deviceNo',
    label: '设备编号',
    fieldType: 'input',
  },
  {
    prop: 'bind',
    label: '是否已绑设施',
    fieldType: 'dict',
    dictType: 'iotDeviceBindStatus',
  },
]

const tableMonitorData = ref([])
const tableLotData = ref([])
// 列表加载提示
const tableLoading = ref(false)
// 列表查询参数
const searchParam = ref<internetDevApi.InterDevicesParam | internetDevApi.MonitorDevicesParam>({})
// 列表分页参数
const pageParam = ref<PageParam>({size: 10, current: 1})
// 列表分页数据
const pageData = ref({})

// 已绑定设备列表
const selectedList = ref([])

const defaultButtons = reactive([])

onMounted(() => {})

const buttons = [
  {
    name: '绑定',
    type: 'success',
    onClick: data => {
      console.log('绑定--', data)
      ElMessageBox.confirm('确定绑定该设备吗？').then(() => {
        const params = {
          /** 设备id */
          netDeviceId: data.id,
          /** 设施id */
          facilityId: props.facilityId,
          /** 设施类型 */
          facilityType: props.facilityCategory,
          /** 设备类型 */
          deviceType: data.facilityCategory,
        }
        postBindDevices(params)
      })
    }
  },
]

// 得到动态物联网的设备类型，并在此判断否则要加载监控tab栏，未来还可能控制更多的tab
const getDeviceTypeList = async () => {
  const res = await internetDevApi.getUsefulDeviceTypeList({
    dicParentCode: 'facilityCategory',
    dicThreeCode: props.facilityCategory
  })
  if (res.simpleDicts && res.simpleDicts.length) { // 针对物联网设备默认选中第一个设备类型
    searchParam.value.facilityCategory = res.simpleDicts[0].value
    searchDeviceData()
  }
  // enableBindMonitor：0为不能绑定监控，1为可绑定监控
  if (res.enableBindMonitor) {
    tabFlag.value.tab2 = true
  } else {
    tabFlag.value.tab2 = false
    activeName.value = '物联网设备'
  }

  if (!res.simpleDicts.length && tabFlag.value.tab2) { // 没有物联网设备，且可绑定监控的时候
    tabFlag.value.tab1 = false
    activeName.value = '监控'
    searchDeviceData()
  }

  return res.simpleDicts
}

//查询监控设备列表
const getMonitorList = async () => {
  tableLoading.value = true
  const res = await internetDevApi.getMonitorList({
    ...searchParam.value,
    ...pageParam.value,
  })
  console.log(res)
  pageData.value = res
  tableMonitorData.value = dealTypeData(res.records)
  tableLoading.value = false
}

//查询物联网设备列表
const getLotDevicesList = async () => {
  tableLoading.value = true
  const res = await internetDevApi.getLotDevicesList({
    ...searchParam.value,
    ...pageParam.value,
  })
  console.log(res)
  pageData.value = res
  tableLotData.value = res.records
  tableLoading.value = false
}

const searchDeviceData = () => {
  switch (activeName.value) {
    case '物联网设备':
      getLotDevicesList();
      getBindInternetDevicesList({facilityId: props.facilityId, facilityCategory: props.facilityCategory})
      break;
    case '监控':
      getMonitorList();
      getBindInternetDevicesList({facilityId: props.facilityId, facilityCategory: props.facilityCategory, deviceType: '8'})
      break;
    default:
      getLotDevicesList();
      getBindInternetDevicesList({facilityId: props.facilityId, facilityCategory: props.facilityCategory})
      break;
  }
}

// 绑定设备
const postBindDevices = async (params: internetDevApi.BindParams) => {
  try {
    await internetDevApi.postBindDevices(params)
    ElMessage.success('绑定成功！')
    searchDeviceData()
  } catch(error) {
    ElMessage.error(error.message)
    tableLoading.value = false
  }
}

// 解绑设备
const postUnBindDevices = async (params: internetDevApi.UnBindParams) => {
  try {
    await internetDevApi.postUnBindDevices(params)
    ElMessage.success('操作成功！')
    searchDeviceData()
  } catch (error) {
    ElMessage.error(error.message)
  }
}

// tag解绑的方法
const handleClose = (data) => {
  console.log(data)
  ElMessageBox.confirm('确定解除绑定该设备吗？').then(() => {
    const params = {
      /** 设备id */
      id: data.id,
    }
    postUnBindDevices(params)
  })
}

// 已绑定设备列表
const getBindInternetDevicesList = async (params: internetDevApi.BoundDevices) => {
  const res = await internetDevApi.getBindInternetDevicesList(params)
  selectedList.value = res
}

const reset = (form, formEl) => {
  if (activeName.value !== '物联网设备') {
    formEl.resetFields();
  } else {
    // 物联网设备类型不重置
    searchParam.value.deviceNo = ''
    searchParam.value.bind = ''
  }
  searchDeviceData()
}

const removeOnClick = (button) => {
  const { onClick, ...otherProps } = button
  return otherProps
}

// 首次进入加载列表数据，pageParam改变重新加载列表数据
watch(pageParam.value, searchDeviceData, { deep: true })

watch(activeName, () => {
  pageParam.value.current = 1
  searchParam.value = {}
  getDeviceTypeList()
})
//
// watch(
//     () => buttonName,
//     (newval, oldval) => {
//       console.log('props.flag', newval, oldval);
//       removeOnClick(props.onSubmit);
//       props.onSubmit && defaultButtons.push({name: newval.value, type: 'success', onClick: props.onSubmit});
//     }, {immediate: true, deep: true}
// );
</script>

<style scoped>
/* 修改滚动条轨道的样式 */
::-webkit-scrollbar-track {
    background: #034786;
    /* 设置轨道的背景色 */
    margin: height(20) 0;
    border-radius: 3px;
}

/* 修改滚动条滑块的样式 */
::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, rgba(0, 240, 255, 0.73), #00D5FF);
    /* 设置滑块的背景色 */
    border-radius: 3px;
    /* 设置滑块的圆角 */
}

/* 修改滚动条滑块在被鼠标悬停时的样式 */
::-webkit-scrollbar-thumb:hover {
    background-color: #555;
    /* 设置悬停时的背景色 */
}

/* 修改滚动条的尺寸 */
::-webkit-scrollbar {
    width: 6px;
    /* 设置滚动条的宽度 */
    height: 6px;
    /* 设置滚动条的高度 */
}

:deep(.el-pagination) {
  justify-content: end;
  margin-top: 20px;
}

.devider-line {
  margin: 0 20px;
  min-height: calc(58000vh / 1080);
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.selected-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.tag-wrap {
  padding: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.tag-list {
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
