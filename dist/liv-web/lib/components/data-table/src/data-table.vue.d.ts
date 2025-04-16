import { type Ref, type VNode } from 'vue';
import type { DataTableProps } from './data-table';
declare const _default: <T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, never>, never> & DataTableProps<T>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        tableRef: Ref<any, any>;
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
}>) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
