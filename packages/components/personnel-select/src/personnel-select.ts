import type { ExtractPropTypes } from "vue";

export const personnelSelectProps = {
  modelValue: {
    type: [String, Number, Array]
  },
  /**
   * @description 额外参数
   */
  extraParams: {
    type: Object,
    default: {}
  },
  showGrid: {
    type: Boolean,
    default: false
  }
};

export type personnelSelectProps = ExtractPropTypes<
  typeof personnelSelectProps
>;
