import type { CascaderNode, CascaderValue } from 'element-plus';
import type { GridCascaderProps } from './grid-cascader';
declare const _default: <T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((modelValue: CascaderValue) => any) | undefined;
        readonly "onUpdate:gridId"?: ((gridId: CascaderValue) => any) | undefined;
        readonly "onUpdate:gridName"?: ((gridName: CascaderValue) => any) | undefined;
        readonly "onUpdate:grid"?: ((grid: T | T[] | T[][]) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: CascaderValue) => any) | undefined;
        "onUpdate:gridId"?: ((gridId: CascaderValue) => any) | undefined;
        "onUpdate:gridName"?: ((gridName: CascaderValue) => any) | undefined;
        "onUpdate:grid"?: ((grid: T | T[] | T[][]) => any) | undefined;
    }>, never>, "onUpdate:modelValue" | "onUpdate:gridId" | "onUpdate:gridName" | "onUpdate:grid"> & ({
        modelValue?: CascaderValue;
        gridId?: CascaderValue;
        gridName?: CascaderValue;
        grid?: T | T[] | T[][];
    } & GridCascaderProps<T>)> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        togglePopperVisible: (visibile?: boolean) => void;
        getCheckedNodes: (leafOnly?: boolean) => CascaderNode[] | undefined;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: CascaderValue];
        'update:gridId': [gridId: CascaderValue];
        'update:gridName': [gridName: CascaderValue];
        'update:grid': [grid: T | T[] | T[][]];
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
