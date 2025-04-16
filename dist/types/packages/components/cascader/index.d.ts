export declare const LivCascader: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: import("element-plus").CascaderValue];
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly "onUpdate:modelValue"?: ((modelValue: import("element-plus").CascaderValue) => any) | undefined;
        modelValue?: import("element-plus").CascaderValue | undefined;
        data?: import("liv-web/es/utils").LoadData<T> | (() => import("liv-web/es/utils").LoadData<T>) | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: import("element-plus").CascaderValue];
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivCascader;
export * from './src/cascader';
