import type { ExtractPropTypes } from "vue";

export const dictSelectProps = {
  /**
   * @description 字典类型
   */
  dictType: {
    type: [Number, String],
    required: true
  }
};

export type DictSelectProps = ExtractPropTypes<typeof dictSelectProps>;
