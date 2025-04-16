declare function __VLS_template(): {
    slots: Partial<Record<NonNullable<string | number>, (_: any) => any>>;
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<Partial<{
    readonly lazy: boolean;
    readonly hideOnClickModal: boolean;
    readonly src: string;
    readonly fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    readonly previewSrcList: string[];
    readonly previewTeleported: boolean;
    readonly initialIndex: number;
    readonly infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly zoomRate: number;
    readonly minScale: number;
    readonly maxScale: number;
    readonly showProgress: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
} & {
    readonly zIndex?: number | undefined;
    readonly loading?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown> | undefined;
    readonly crossorigin?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown> | undefined;
    readonly scrollContainer?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>;
} & import("./qr-code").QrCodeProps>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Partial<{
    readonly lazy: boolean;
    readonly hideOnClickModal: boolean;
    readonly src: string;
    readonly fit: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    readonly previewSrcList: string[];
    readonly previewTeleported: boolean;
    readonly initialIndex: number;
    readonly infinite: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly closeOnPressEscape: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
    readonly zoomRate: number;
    readonly minScale: number;
    readonly maxScale: number;
    readonly showProgress: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
} & {
    readonly zIndex?: number | undefined;
    readonly loading?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "lazy" | "eager", unknown> | undefined;
    readonly crossorigin?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials") | ((new (...args: any[]) => "" | "anonymous" | "use-credentials") | (() => "" | "anonymous" | "use-credentials"))[], unknown, unknown> | undefined;
    readonly scrollContainer?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined) | ((new (...args: any[]) => string | HTMLElement) | (() => string | HTMLElement | undefined))[], unknown, unknown>;
} & import("./qr-code").QrCodeProps>> & Readonly<{}>, {
    size: number;
    readonly previewTeleported: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
