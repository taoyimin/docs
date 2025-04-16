import { VerifyProps } from './verify';
/**
 * 组件属性
 */
declare let __VLS_typeProps: VerifyProps;
declare const __VLS_defaults: {
    modelValue: boolean;
};
type __VLS_PublicProps = {
    modelValue?: typeof __VLS_defaults['modelValue'];
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {
    clickShow: import("vue").ModelRef<boolean, string, boolean, boolean>;
    verifyType: import("vue").Ref<string | undefined, string | undefined>;
    componentType: any;
    instance: import("vue").Ref<any, any>;
    showBox: import("vue").ComputedRef<boolean>;
    closeBox: () => void;
    show: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (modelValue: boolean) => any;
    ready: (instance: any) => any;
    success: (result: import("./verify").VerifyResult) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSuccess?: ((result: import("./verify").VerifyResult) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    onReady?: ((instance: any) => any) | undefined;
}>, {
    mode: import("./verify").VerifyMode;
    type: import("./verify").VerifyType;
    vSpace: number;
    explain: string;
    imgSize: {
        width: string;
        height: string;
    };
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
