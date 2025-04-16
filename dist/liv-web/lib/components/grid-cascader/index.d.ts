export declare const LivGridCascader: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: import("element-plus").CascaderValue];
        'update:gridId': [gridId: import("element-plus").CascaderValue];
        'update:gridName': [gridName: import("element-plus").CascaderValue];
        'update:grid': [grid: T | T[] | T[][]];
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly "onUpdate:modelValue"?: ((modelValue: import("element-plus").CascaderValue) => any) | undefined;
        readonly "onUpdate:gridId"?: ((gridId: import("element-plus").CascaderValue) => any) | undefined;
        readonly "onUpdate:gridName"?: ((gridName: import("element-plus").CascaderValue) => any) | undefined;
        readonly "onUpdate:grid"?: ((grid: T | T[] | T[][]) => any) | undefined;
        modelValue?: import("element-plus").CascaderValue | undefined;
        gridId?: import("element-plus").CascaderValue | undefined;
        gridName?: import("element-plus").CascaderValue | undefined;
        grid?: (T | T[] | T[][]) | undefined;
        root?: boolean | undefined;
        rootCode?: string | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        togglePopperVisible: (visibile?: boolean) => void;
        getCheckedNodes: (leafOnly?: boolean) => import("element-plus").CascaderNode[] | undefined;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: import("element-plus").CascaderValue];
        'update:gridId': [gridId: import("element-plus").CascaderValue];
        'update:gridName': [gridName: import("element-plus").CascaderValue];
        'update:grid': [grid: T | T[] | T[][]];
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivGridCascader;
export * from './src/grid-cascader';
