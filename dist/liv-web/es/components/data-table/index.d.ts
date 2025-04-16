export declare const LivDataTable: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<string, (_: {
        $index: number;
        row: T;
        column: import("element-plus").TableColumnCtx<T>;
    }) => any>> & {
        default?(_: {}): any;
        empty?(_: {}): any;
    };
    emit: {};
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        data?: T[] | undefined;
        fields: import("./src/data-table").DataTableFields<T>;
        buttons?: import("./src/data-table").DataTableButtons<T> | undefined;
        showButtonCount?: number | undefined;
        onDetail?: ((row: T, index: number) => void) | undefined;
        onEdit?: ((row: T, index: number) => void) | undefined;
        onDelete?: ((row: T, index: number) => void) | undefined;
    } & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        tableRef: import("vue").Ref<any, any>;
    }>): void;
    attrs: any;
    slots: Partial<Record<string, (_: {
        $index: number;
        row: T;
        column: import("element-plus").TableColumnCtx<T>;
    }) => any>> & {
        default?(_: {}): any;
        empty?(_: {}): any;
    };
    emit: {};
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
})> & Record<string, any>;
export default LivDataTable;
export * from './src/data-table';
