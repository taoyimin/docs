import type { CheckboxProps } from './checkbox';
declare const _default: <T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((modelValue: (string | number)[]) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: (string | number)[]) => any) | undefined;
    }>, never>, "onUpdate:modelValue"> & ({
        modelValue?: (string | number)[];
    } & CheckboxProps<T>)> & import("vue").PublicProps;
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
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
