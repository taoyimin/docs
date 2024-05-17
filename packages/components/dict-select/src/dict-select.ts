import type { ExtractPropTypes } from "vue";

export const dictSelectProps = {
  /**
   * @description 字典类型
   */
  dictType: String,
  /**
   * @description 父字典id
   */
  parentId: Number,
};

export type DictSelectProps = ExtractPropTypes<typeof dictSelectProps>;
