import type { ExtractPropTypes } from "vue";

export const modifyPwdProps = {
  bus: {
    type: Object
  }
};

export type ModifyPwdProps = ExtractPropTypes<typeof modifyPwdProps>;
