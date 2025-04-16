declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    captchaType: {
        type: StringConstructor;
    };
    vSpace: {
        type: NumberConstructor;
        default: number;
    };
    imgSize: {
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
    checkNum: import("vue").Ref<number, number>;
    fontPos: import("vue").Reactive<never[]>;
    checkPosArr: import("vue").Reactive<never[]>;
    num: import("vue").Ref<number, number>;
    pointBackImgBase: import("vue").Ref<string, string>;
    poinTextList: import("vue").Reactive<never[]>;
    backToken: import("vue").Ref<string, string>;
    setSize: {
        imgHeight: number;
        imgWidth: number;
        barHeight: number;
        barWidth: number;
    };
    tempPoints: import("vue").Reactive<never[]>;
    text: import("vue").Ref<string, string>;
    barAreaColor: import("vue").Ref<undefined, undefined>;
    barAreaBorderColor: import("vue").Ref<undefined, undefined>;
    showRefresh: import("vue").Ref<boolean, boolean>;
    bindingClick: import("vue").Ref<boolean, boolean>;
    init: () => void;
    canvas: import("vue").Ref<null, null>;
    canvasClick: (e: any) => void;
    getMousePos: (obj: any, e: any) => {
        x: any;
        y: any;
    };
    createPoint: (pos: any) => number;
    refresh: () => void;
    getPictrue: () => void;
    pointTransfrom: (pointArr: any, imgSize: any) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: StringConstructor;
        default: string;
    };
    captchaType: {
        type: StringConstructor;
    };
    vSpace: {
        type: NumberConstructor;
        default: number;
    };
    imgSize: {
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
    vSpace: number;
    imgSize: Record<string, any>;
    barSize: Record<string, any>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
