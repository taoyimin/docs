<template>
  <el-tabs v-model="activeName" tab-position="top" type="border-card">
    <el-tab-pane v-for="item in tabData" :label="item.dicSubName" :key="item.dicSubName" :name="item.dicSubCode">
      <el-row v-if="activeName == item.dicSubCode">
        <el-col>
          <liv-data-form 
          inline 
          :fields="SearchFields" 
          @search="searchDeviceData(1)"
          :model="searchParam" 
          @reset="reset" />
          <liv-data-table 
          v-loading="tableLoading" 
          :data="tableData"
          :fields="TableFields" 
          :buttons="buttons"
          height="calc(45000vh / 1080)"
          />
          <!-- 分页 -->
          <liv-data-pagination v-model="pageParam" :data="pageData"></liv-data-pagination>
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
  facilitySelectionProps, 
  SearchFields,
  TableFields, 
} from './facility-selection'
import { onMounted, reactive, ref, watch } from 'vue';
import LivDataForm from '../../data-form/src/data-form.vue'
import LivDataTable from '../../data-table/src/data-table.vue'
import LivDataPagination from '../../data-pagination/src/data-pagination.vue'
import { facilityBindApi } from "@szxc/apis"

defineOptions({
  name: 'LivFacilitySelection'
})

const props = defineProps(facilitySelectionProps)
const emits = defineEmits([ 'closed'])
const model = defineModel()

const tabData = ref([])
const activeName = ref('')
const tableData = ref([])
// 列表加载提示
const tableLoading = ref(false)
// 列表查询参数
const searchParam = ref<facilityBindApi.FacilityBindParams>({})
// 列表分页参数
const pageParam = ref<PageParam>({size: 10, current: 1})
// 列表分页数据
const pageData = ref({})

const defaultButtons = reactive([])

onMounted(() => {
  getUsefulFacilityTypeList()
})

const buttons = [
  {
    name: '绑定',
    type: 'success',
    onClick: data => {
      const nData = {
        // 设施id
        facilityId: data.id,
        // 设施名称
        facilityName: data.name,
        // 设施类别-name
        facilityTypeName: tabData.value.filter(item => item.dicSubCode == activeName.value)[0].dicSubName,
        // 设施类别-value
        facilityType: data.facilityCategory
      }
      model.value = nData
      emits('closed')
    }
  },
]

const getUsefulFacilityTypeList = async () => {
  const res = await facilityBindApi.getUsefulFacilityTypeList()
  console.log(11, res)
  tabData.value = res
  if (res.length) {
      // 默认激活第一个，根据下标激活
      activeName.value = res[0].dicSubCode
  }
}

//查询设施列表
const getList = async () => {
  tableLoading.value = true
  const facilityCategory = activeName.value
  const res = await facilityBindApi.getList({
    facilityCategory,
    ...searchParam.value,
    ...pageParam.value,
  })
  pageData.value = res
  tableData.value = res.records
  tableLoading.value = false
}

const searchDeviceData = (flag: number = 0) => {
  if (flag) {
    pageParam.value.current = 1
  }
  getList()
}

const reset = (form, formEl) => {
  formEl.resetFields();
  searchDeviceData(1)
}

const removeOnClick = (button) => {
  const { onClick, ...otherProps } = button
  return otherProps
}

watch(activeName, (nVal, oVal) => {
  console.log('activeName', nVal, oVal)
  if (nVal != oVal) {
    searchParam.value = {}
    searchDeviceData(1)
  }
})

// 首次进入加载列表数据，pageParam改变重新加载列表数据
watch(pageParam.value, () => {
  searchDeviceData()
}, { deep: true })

</script>

<style scoped>
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