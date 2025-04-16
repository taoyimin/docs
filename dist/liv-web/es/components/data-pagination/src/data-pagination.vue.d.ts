import type { DataPaginationProps } from './data-pagination';
declare const _default: <T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((modelValue: T) => any) | undefined;
        readonly "onUpdate:current"?: ((current: number) => any) | undefined;
        readonly "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: T) => any) | undefined;
        "onUpdate:current"?: ((current: number) => any) | undefined;
        "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
    }>, never>, "onUpdate:modelValue" | "onUpdate:current" | "onUpdate:pageSize"> & ({
        modelValue?: T;
        current?: number;
        pageSize?: number;
    } & DataPaginationProps<T>)> & import("vue").PublicProps;
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
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
