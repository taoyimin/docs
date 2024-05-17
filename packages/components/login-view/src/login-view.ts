import type { ExtractPropTypes } from "vue";
import { loginFormProps } from "../../login-form/src/login-form";

export const loginViewProps = loginFormProps;

export type LoginViewProps = ExtractPropTypes<typeof loginViewProps>;
