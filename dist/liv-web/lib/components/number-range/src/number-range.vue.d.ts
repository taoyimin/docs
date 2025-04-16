import type { NumberRangeProps } from './number-range';
/**
 * 组件属性
 */
declare let __VLS_typeProps: NumberRangeProps;
type __VLS_PublicProps = {
    'minValue'?: number | undefined;
    'maxValue'?: number | undefined;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        prepend?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:minValue': (minValue: number | undefined) => any;
    'update:maxValue': (maxValue: number | undefined) => any;
    'update:modelValue': (value: [number | undefined, number | undefined]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: [number | undefined, number | undefined]) => any) | undefined;
    "onUpdate:minValue"?: ((minValue: number | undefined) => any) | undefined;
    "onUpdate:maxValue"?: ((maxValue: number | undefined) => any) | undefined;
}>, {
    min: number;
    max: number;
    disabled: boolean;
    rangeSeparator: string;
    minPlaceholder: string;
    maxPlaceholder: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
