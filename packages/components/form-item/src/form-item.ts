import type { ExtractPropTypes, PropType } from "vue";
import { formItemProps as elFormItemProps } from "element-plus";

export type FieldType =
  | "input"
  | "textarea"
  | "select"
  | "cascader"
  | "radio"
  | "checkbox"
  | "date"
  | "switch"
  | "number"
  | "rate"
  | "color"
  | "image"
  | "audio"
  | "video"
  | "file"
  // | "image64"
  | "dict"
  | "dictId"
  | "grid"
  | "gridCode"
  | "gridId"
  | "pageSelect"
  | "personnel"
  | "location";

export const formItemProps = {
  ...elFormItemProps,
  /**
   * @description 表单项类型
   */
  fieldType: String as PropType<FieldType>,
  /**
   * @description 表单项下标
   */
  fieldIndex: [Number, String],
};

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;
