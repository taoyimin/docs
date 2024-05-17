import type { ExtractPropTypes } from "vue";

export const searchFormProps = {
  model: {
    required: true,
    type: Object,
    default: {},
  },
  /**
   * @description inline (历史原因，之前搜索表单都有加inline，现在要去掉，故单独从$attrs里提出来去掉)
   */
  inline: {
    type: Boolean,
  },
  /**
   * @description 列的数量
   */
  column: {
    type: Number,
    default: 3,
  },
  /**
   * @description 表单项的字段
   */
  fields: {
    type: Array<any>,
    default: [],
  },
  /**
   * @description 表单的操作按钮
   */
  buttons: {
    type: Array<any>,
    default: [],
  },
  /**
   * @description 提交按钮点击事件
   */
  onSubmit: {
    type: Function,
    default: null,
  },
  /**
   * @description 重置按钮点击事件
   */
  onReset: {
    type: Function,
    default: null,
  },
  /**
   * @description 返回按钮点击事件
   */
  onBack: {
    type: Function,
    default: null,
  },
  /**
   * @description 新增按钮点击事件
   */
  onAdd: {
    type: Function,
    default: null,
  },
  /**
   * @description 查询按钮点击事件
   */
  onSearch: {
    type: Function,
    default: null,
  },
  /**
   * @description 批量删除按钮点击事件
   */
  onBatchDelete: {
    type: Function,
    default: null,
  },
  /**
   * @description 导出
   */
  onExport: {
    type: Function,
    default: null,
  },
};

export type SearchFormProps = ExtractPropTypes<typeof searchFormProps>;
