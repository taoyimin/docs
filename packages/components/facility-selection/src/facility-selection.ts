import type {ExtractPropTypes} from "vue";

/**
 *  查询字段
 */
export const SearchFields = [
  {
    prop: 'facilityName',
    label: '设施名称',
    fieldType: 'input',
  },
  {
    prop: 'gridCode',
    label: '所属网格',
    fieldType: 'grid'
  },
  // {
  //   prop: 'deviceType',
  //   label: '视频分类',
  //   fieldType: 'dict',
  //   dictType: 'deviceType',
  // },
  // {
  //   prop: 'bind',
  //   label: '是否已绑设施',
  //   fieldType: 'dict',
  //   dictType: 'iotDeviceBindStatus',
  // },
]

/**
 *  表格字段
 */
export const TableFields = [
  {
    prop: 'detailGridName',
    label: '网格名称',
  },
  {
    prop: 'name',
    label: '设施名称',
  }
]

export const facilitySelectionProps = {
  /**
   * @description 返回按钮点击事件
   */
  onClose: {
    type: Function,
    default: null
  },
}

export type FacilitySelectionProps = ExtractPropTypes<typeof facilitySelectionProps>;
