export declare const LivDataForm: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>, U extends import("./src/data-form").DataFormFields<T>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {};
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        model: T;
        fields?: U | undefined;
        inline?: boolean | undefined;
        buttons?: import("./src/data-form").DataFormButtons<T> | undefined;
        showReset?: boolean | undefined;
        onSubmit?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
        onSearch?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
        onReset?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
        onAdd?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
        onBatchDelete?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
        onBack?: ((form: T, formRef: import("element-plus").FormInstance | null) => void | Promise<any>) | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        validate: (callback?: import("element-plus").FormValidateCallback) => import("element-plus").FormValidationResult;
        validateField: (props?: import("element-plus").FormItemProp | import("element-plus").FormItemProp[] | undefined, callback?: import("element-plus").FormValidateCallback | undefined) => import("element-plus").FormValidationResult;
        resetFields: (props?: import("element-plus").FormItemProp | import("element-plus").FormItemProp[] | undefined) => void;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
        clearValidate: (props?: import("element-plus").FormItemProp | import("element-plus").FormItemProp[] | undefined) => void;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {};
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivDataForm;
export * from './src/data-form';
