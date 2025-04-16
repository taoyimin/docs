export declare const LivCheckbox: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: {
        default?(_: T): any;
        default?(_: T): any;
    };
    emit: {
        'update:modelValue': [modelValue: (string | number)[]];
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly "onUpdate:modelValue"?: ((modelValue: (string | number)[]) => any) | undefined;
        modelValue?: (string | number)[] | undefined;
        data?: import("liv-web/es/utils").LoadData<T> | (() => import("liv-web/es/utils").LoadData<T>) | undefined;
        labelKey?: keyof T | undefined;
        valueKey?: keyof T | undefined;
        type?: ("default" | "button") | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        default?(_: T): any;
        default?(_: T): any;
    };
    emit: {
        'update:modelValue': [modelValue: (string | number)[]];
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivCheckbox;
export * from './src/checkbox';
