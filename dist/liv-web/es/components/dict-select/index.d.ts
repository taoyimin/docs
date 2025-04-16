export declare const LivDictSelect: import("liv-web/es/utils").SFCWithInstall<(<T extends Record<string | number | symbol, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
    attrs: any;
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    emit: {
        'update:modelValue': [modelValue: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dictId': [dictId: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dictName': [dictName: T[keyof T] | (T[keyof T] | undefined)[]];
        'update:dict': [dict: T | (T | undefined)[] | undefined];
    };
}, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: {
        readonly "onUpdate:modelValue"?: ((modelValue: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dictId"?: ((dictId: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dictName"?: ((dictName: T[keyof T] | (T[keyof T] | undefined)[]) => any) | undefined;
        readonly "onUpdate:dict"?: ((dict: T | (T | undefined)[] | undefined) => any) | undefined;
        modelValue?: (T[keyof T] | (T[keyof T] | undefined)[]) | undefined;
        dictId?: (T[keyof T] | (T[keyof T] | undefined)[]) | undefined;
        dictName?: (T[keyof T] | (T[keyof T] | undefined)[]) | undefined;
        dict?: T | (T | undefined)[] | undefined;
        dictType?: string | undefined;
        parentId?: number | undefined;
        labelKey?: string | undefined;
        valueKey?: string | undefined;
        idKey?: string | undefined;
    } & import("vue").PublicProps;
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
})> & Record<string, any>;
export default LivDictSelect;
export * from './src/dict-select';
