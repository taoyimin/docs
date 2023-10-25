import type { ExtractPropTypes } from "vue";

export const gridCascaderProps = {
  modelValue: {
    type: [String, Number]
  }
};

export type GridCascaderProps = ExtractPropTypes<typeof gridCascaderProps>;
