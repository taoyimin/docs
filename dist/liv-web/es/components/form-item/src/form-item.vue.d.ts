import { type Ref, nextTick } from 'vue';
import type { FormItemRule } from 'element-plus';
import { FormItemProps } from './form-item';
/**
 * 组件属性
 */
declare let __VLS_typeProps: FormItemProps;
declare const __VLS_defaults: {
    modelValue: undefined;
};
type __VLS_PublicProps = {
    modelValue?: typeof __VLS_defaults['modelValue'];
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: Readonly<{
        [key: string]: any;
    }> & {
        [key: string]: any;
    };
    refs: {
        formItemRef: ({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly required: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
                readonly inlineMessage: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }> & Omit<{
                readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "top" | "right" | "left", unknown>;
                readonly inlineMessage: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly label?: string | undefined;
                readonly required?: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown> | undefined;
                readonly size?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown> | undefined;
                readonly error?: string | undefined;
                readonly rules?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>))[], unknown, unknown> | undefined;
                readonly prop?: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp))[], unknown, unknown> | undefined;
                readonly validateStatus?: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown> | undefined;
                readonly for?: string | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                readonly label: StringConstructor;
                readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
                readonly prop: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly required: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                readonly rules: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly error: StringConstructor;
                readonly validateStatus: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly for: StringConstructor;
                readonly inlineMessage: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, "required" | "labelWidth" | "labelPosition" | "inlineMessage" | "showMessage">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot<any> | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly label: StringConstructor;
                readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
                readonly prop: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly required: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
                readonly rules: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly error: StringConstructor;
                readonly validateStatus: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly for: StringConstructor;
                readonly inlineMessage: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
                readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
                validateMessage: import("vue").Ref<string>;
                validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
                validate: (trigger: string, callback?: import("element-plus/es/components/form/src/types").FormValidateCallback) => import("element-plus").FormValidationResult;
                clearValidate: () => void;
                resetField: () => void;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                readonly required: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
                readonly inlineMessage: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
                readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            readonly required: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly labelWidth: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly labelPosition: import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "top" | "left" | "right", unknown>;
            readonly inlineMessage: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
            readonly showMessage: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly label: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly labelPosition: import("element-plus/es/utils").EpPropFinalized<StringConstructor, "" | "top" | "left" | "right", unknown, "", boolean>;
            readonly prop: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp) | ((new (...args: any[]) => string | string[]) | (() => import("element-plus").FormItemProp))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly required: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
            readonly rules: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>) | ((new (...args: any[]) => FormItemRule | FormItemRule[]) | (() => import("element-plus/es/utils").Arrayable<FormItemRule>))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly error: StringConstructor;
            readonly validateStatus: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "error" | "success" | "validating", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly for: StringConstructor;
            readonly inlineMessage: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, BooleanConstructor], unknown, unknown, "", boolean>;
            readonly showMessage: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "small" | "default" | "large", unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, "required" | "size" | "labelWidth" | "labelPosition" | "inlineMessage" | "showMessage" | "validateState" | "validate" | "clearValidate" | "validateMessage" | "resetField"> & import("vue").ShallowUnwrapRef<{
            size: import("vue").ComputedRef<"" | "small" | "default" | "large">;
            validateMessage: import("vue").Ref<string>;
            validateState: import("vue").Ref<"" | "error" | "success" | "validating">;
            validate: (trigger: string, callback?: import("element-plus/es/components/form/src/types").FormValidateCallback) => import("element-plus").FormValidationResult;
            clearValidate: () => void;
            resetField: () => void;
        }> & {} & import("vue").ComponentCustomProperties & {} & {
            $slots: {
                label?(_: {
                    label: string;
                }): any;
                default?(_: {}): any;
                error?(_: {
                    error: string;
                }): any;
            };
        }) | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (modelValue: undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
