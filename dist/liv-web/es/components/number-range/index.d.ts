export declare const LivNumberRange: import("liv-web/es/utils").SFCWithInstall<{
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{
        minValue?: number | undefined;
        maxValue?: number | undefined;
    } & import("./src/number-range").NumberRangeProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: [number | undefined, number | undefined]) => any) | undefined;
        "onUpdate:minValue"?: ((minValue: number | undefined) => any) | undefined;
        "onUpdate:maxValue"?: ((maxValue: number | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:minValue': (minValue: number | undefined) => any;
        'update:maxValue': (maxValue: number | undefined) => any;
        'update:modelValue': (value: [number | undefined, number | undefined]) => any;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{
        minValue?: number | undefined;
        maxValue?: number | undefined;
    } & import("./src/number-range").NumberRangeProps> & Readonly<{
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
    }, false, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        minValue?: number | undefined;
        maxValue?: number | undefined;
    } & import("./src/number-range").NumberRangeProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: [number | undefined, number | undefined]) => any) | undefined;
        "onUpdate:minValue"?: ((minValue: number | undefined) => any) | undefined;
        "onUpdate:maxValue"?: ((maxValue: number | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        min: number;
        max: number;
        disabled: boolean;
        rangeSeparator: string;
        minPlaceholder: string;
        maxPlaceholder: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    minValue?: number | undefined;
    maxValue?: number | undefined;
} & import("./src/number-range").NumberRangeProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: [number | undefined, number | undefined]) => any) | undefined;
    "onUpdate:minValue"?: ((minValue: number | undefined) => any) | undefined;
    "onUpdate:maxValue"?: ((maxValue: number | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:minValue': (minValue: number | undefined) => any;
    'update:maxValue': (maxValue: number | undefined) => any;
    'update:modelValue': (value: [number | undefined, number | undefined]) => any;
}, string, {
    min: number;
    max: number;
    disabled: boolean;
    rangeSeparator: string;
    minPlaceholder: string;
    maxPlaceholder: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        append?(_: {}): any;
    };
})> & Record<string, any>;
export default LivNumberRange;
export * from './src/number-range';
