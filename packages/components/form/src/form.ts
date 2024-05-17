import type { ExtractPropTypes } from "vue";
import { formProps as elFormProps } from "element-plus";

export const formProps = {
  ...elFormProps,
};

export type FormProps = ExtractPropTypes<typeof formProps>;
