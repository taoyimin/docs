import type { ExtractPropTypes } from "vue";
import { formProps } from "element-plus";
import DataForm from "./data-form.vue";

export const dataFormProps = {
  ...formProps,
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
};

export type DataFormProps = ExtractPropTypes<typeof dataFormProps>;

export type DataFormInstance = InstanceType<typeof DataForm>;
