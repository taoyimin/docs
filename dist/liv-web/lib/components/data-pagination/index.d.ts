export declare const LivDataPagination: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: {};
    emit: {
        'update:modelValue': [modelValue: T];
        'update:current': [current: number];
        'update:pageSize': [pageSize: number];
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly "onUpdate:modelValue"?: ((modelValue: T) => any) | undefined;
        readonly "onUpdate:current"?: ((current: number) => any) | undefined;
        readonly "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
        modelValue?: T | undefined;
        current?: number | undefined;
        pageSize?: number | undefined;
        total?: number | undefined;
        currentKey?: keyof T | undefined;
        sizeKey?: keyof T | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {
        'update:modelValue': [modelValue: T];
        'update:current': [current: number];
        'update:pageSize': [pageSize: number];
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivDataPagination;
export * from './src/data-pagination';
