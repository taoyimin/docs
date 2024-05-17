import type { ExtractPropTypes } from "vue";
import { cascaderProps } from "element-plus";

export const gridCascaderProps = {
  ...cascaderProps,
  /**
   * 是否从根网格开始查询，默认从用户所属网格开始查询
   */
  root: {
    type: Boolean,
    default: false,
  },
  // 是否选择后自动关闭下拉面板 默认false
  togglePopperVisible: {
    type: Boolean,
    default: false,
  },
  // 展示到哪个网格级别，-1表示展示到最后一级
  showLevel: {
    type: Number,
    default: -1,
  },
};

export type GridCascaderProps = ExtractPropTypes<typeof gridCascaderProps>;
