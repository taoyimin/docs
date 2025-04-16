declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    captchaType: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    vSpace: {
        type: NumberConstructor;
        default: number;
    };
    explain: {
        type: StringConstructor;
        default: string;
    };
    imgSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    blockSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    barSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    reqGet: {
        type: FunctionConstructor;
        required: true;
    };
    reqCheck: {
        type: FunctionConstructor;
        required: true;
    };
}>, {
    secretKey: import("vue").Ref<string, string>;
    passFlag: import("vue").Ref<string, string>;
    backImgBase: import("vue").Ref<string, string>;
    blockBackImgBase: import("vue").Ref<string, string>;
    backToken: import("vue").Ref<string, string>;
    startMoveTime: import("vue").Ref<string, string>;
    endMovetime: import("vue").Ref<string, string>;
    tipsBackColor: import("vue").Ref<string, string>;
    tipWords: import("vue").Ref<string, string>;
    text: import("vue").Ref<string, string>;
    finishText: import("vue").Ref<string, string>;
    setSize: {
        imgHeight: number;
        imgWidth: number;
        barHeight: number;
        barWidth: number;
    };
    top: import("vue").Ref<number, number>;
    left: import("vue").Ref<number, number>;
    moveBlockLeft: import("vue").Ref<undefined, undefined>;
    leftBarWidth: import("vue").Ref<undefined, undefined>;
    moveBlockBackgroundColor: import("vue").Ref<undefined, undefined>;
    leftBarBorderColor: import("vue").Ref<string, string>;
    iconColor: import("vue").Ref<undefined, undefined>;
    iconClass: import("vue").Ref<string, string>;
    status: import("vue").Ref<boolean, boolean>;
    isEnd: import("vue").Ref<boolean, boolean>;
    showRefresh: import("vue").Ref<boolean, boolean>;
    transitionLeft: import("vue").Ref<string, string>;
    transitionWidth: import("vue").Ref<string, string>;
    barArea: import("vue").ComputedRef<any>;
    refresh: () => void;
    start: (e: any) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    captchaType: {
        type: StringConstructor;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    vSpace: {
        type: NumberConstructor;
        default: number;
    };
    explain: {
        type: StringConstructor;
        default: string;
    };
    imgSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    blockSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    barSize: {
        type: ObjectConstructor;
        default(): {
            width: string;
            height: string;
        };
    };
    reqGet: {
        type: FunctionConstructor;
        required: true;
    };
    reqCheck: {
        type: FunctionConstructor;
        required: true;
    };
}>> & Readonly<{}>, {
    mode: string;
    type: string;
    vSpace: number;
    explain: string;
    imgSize: Record<string, any>;
    barSize: Record<string, any>;
    blockSize: Record<string, any>;
}, {}, {
    ElIcon: import("element-plus/es/utils/index.js").SFCWithInstall<{
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils/index.js").EpPropMergeType<(new (...args: any[]) => string | number) | (() => string | number) | ((new (...args: any[]) => string | number) | (() => string | number))[], unknown, unknown>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly color: {
            readonly type: import("vue").PropType<string>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    })>;
    RefreshRight: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ArrowRightBold: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Select: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CloseBold: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
