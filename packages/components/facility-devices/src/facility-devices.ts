import type {ExtractPropTypes} from "vue";

/**
 *  监控查询字段
 */
export const searchMonitorFields = [
  {
    prop: 'deviceModel',
    label: '设备型号',
    fieldType: 'dict',
    dictType: 'monitorType',
    clearable: false
  },
  {
    prop: 'deviceNo',
    label: '设备编号',
    fieldType: 'input',
  },
  {
    prop: 'deviceName',
    label: '设备名称',
    fieldType: 'input',
  },
  {
    prop: 'deviceType',
    label: '视频分类',
    fieldType: 'dict',
    dictType: 'deviceType',
  },
  {
    prop: 'bind',
    label: '是否已绑设施',
    fieldType: 'dict',
    dictType: 'iotDeviceBindStatus',
  },
]

/**
 *  表格字段
 */
export const tableMonitorFields = [
  {
    prop: 'deviceModelStr',
    label: '设备类型',
  },
  {
    prop: 'deviceNo',
    label: '设备编号',
  },
  {
    prop: 'typeStr',
    label: '视频分类',
  },
  {
    prop: 'deviceName',
    label: '设备名称',
  },
]

export const tableLotFields = [
  {
    prop: 'facilityCategoryStr',
    label: '设备类型',
  },
  {
    prop: 'deviceNo',
    label: '设备编号',
  },
  {
    prop: 'deviceName',
    label: '设备名称',
  },
]

export const facilityDevicesProps = {
  /**
   * @description 返回按钮点击事件
   */
  onClose: {
    type: Function,
    default: null
  },
  /**
   * @description 确定按钮点击事件
   */
  facilityId: {
    type: String,
    default: null
  },
  facilityType: {
    type: [Number, String, Array],
    default: null
  },
  searchFields: {
    type: Array,
    default: null
  },
  tableFields: {
    type: Array,
    default: null
  },
  deviceList: {
    type: Object,
    default: null
  },
  facilityCategory: {
    type: String,
    default: ''
  }
}

export type FacilityDevicesProps = ExtractPropTypes<typeof facilityDevicesProps>;
