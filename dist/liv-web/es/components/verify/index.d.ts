export declare const LivVerify: import("liv-web/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue?: boolean;
} & import("./src/verify").VerifyProps, {
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
    success: (result: import("./src/verify").VerifyResult) => any;
}, string, import("vue").PublicProps, Readonly<{
    modelValue?: boolean;
} & import("./src/verify").VerifyProps> & Readonly<{
    onSuccess?: ((result: import("./src/verify").VerifyResult) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: boolean) => any) | undefined;
    onReady?: ((instance: any) => any) | undefined;
}>, {
    mode: import("./src/verify").VerifyMode;
    type: import("./src/verify").VerifyType;
    vSpace: number;
    explain: string;
    imgSize: {
        width: string;
        height: string;
    };
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default LivVerify;
export * from './src/verify';
