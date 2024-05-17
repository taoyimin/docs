import type { ExtractPropTypes } from "vue";

export const pageSelectProps = {
  /**
   * @description 列表数据
   */
  data: {
    type: Array,
    default: []
  },
  /**
   * @description 远程搜索方法
   */
  remoteMethod: {
    type: Function,
    default() {}
  },
  /**
   * @description 数据总数
   */
  total: {
    type: Number,
    default: 0
  },
  /**
   * @description 选项值字段
   */
  valueField: {
    type: String,
    default: "value"
  },
  /**
   * @description 选项显示字段
   */
  labelField: {
    type: String,
    default: "label"
  },
  /**
   * @description 每页显示条数
   */
  pageSize: {
    type: Number,
    default: 5
  },
  /**
   * @description 远程搜索方法
   */
  optionFormatter: {
    type: Function
  },
  /**
   * @description 选项图标
   */
  optionIcon: {
    type: String,
    default: "User"
  },
  /**
   * @description 预加载数据，回显时用
   */
  preloadData: {
    type: Array,
    default: []
  }
};

export type PageSelectProps = ExtractPropTypes<typeof pageSelectProps>;
