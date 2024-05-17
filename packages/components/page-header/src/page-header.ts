import type { ExtractPropTypes } from "vue";

export const pageHeaderProps = {
  bus: {
    type: Object
  }
};

export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>;
