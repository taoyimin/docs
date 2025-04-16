import type { DictSelectProps } from './dict-select';
declare const _default: <T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((modelValue: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dictId"?: ((dictId: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dictName"?: ((dictName: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dict"?: ((dict: T | (T | undefined)[] | undefined) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{
        "onUpdate:modelValue"?: ((modelValue: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        "onUpdate:dictId"?: ((dictId: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        "onUpdate:dictName"?: ((dictName: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        "onUpdate:dict"?: ((dict: T | (T | undefined)[] | undefined) => any) | undefined;
    }>, never>, "onUpdate:modelValue" | "onUpdate:dictId" | "onUpdate:dictName" | "onUpdate:dict"> & ({
        modelValue?: T[keyof T] | (T[keyof T] | undefined)[];
        dictId?: T[keyof T] | (T[keyof T] | undefined)[];
        dictName?: T[keyof T] | (T[keyof T] | undefined)[];
        dict?: T | (T | undefined)[] | undefined;
    } & DictSelectProps<T>)> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        focus: () => void;
        blur: () => void;
    }>): void;
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dictId': [dictId: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dictName': [dictName: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dict': [dict: T | (T | undefined)[] | undefined];
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
