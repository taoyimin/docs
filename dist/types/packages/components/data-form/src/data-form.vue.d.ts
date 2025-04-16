import { VNode } from 'vue';
import { type FormItemProp, type FormValidateCallback, type FormValidationResult } from 'element-plus';
import type { DataFormFields, DataFormProps } from './data-form';
declare const _default: <T extends Record<string | number | symbol, any>, U extends DataFormFields<T>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, never>, never> & DataFormProps<T, U>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        validate: (callback?: FormValidateCallback) => FormValidationResult;
        validateField: (props?: FormItemProp | FormItemProp[] | undefined, callback?: FormValidateCallback | undefined) => FormValidationResult;
        resetFields: (props?: FormItemProp | FormItemProp[] | undefined) => void;
        scrollToField: (prop: FormItemProp) => void;
        clearValidate: (props?: FormItemProp | FormItemProp[] | undefined) => void;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {};
}>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
