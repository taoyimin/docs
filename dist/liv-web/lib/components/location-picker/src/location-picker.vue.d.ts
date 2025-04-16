import type { LocationPickerProps } from './location-picker';
/**
 * 组件属性
 */
declare let __VLS_typeProps: LocationPickerProps;
type __VLS_PublicProps = {
    modelValue?: (number | null)[];
    'longitude'?: number | null;
    'latitude'?: number | null;
    'address'?: string | null;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (modelValue: (number | null)[]) => any;
    'update:longitude': (longitude: number | null) => any;
    'update:latitude': (latitude: number | null) => any;
    'update:address': (address: string | null) => any;
    change: (location: [number | null, number | null]) => any;
    confirm: (location: [number, number]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: ((location: [number | null, number | null]) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: (number | null)[]) => any) | undefined;
    "onUpdate:longitude"?: ((longitude: number | null) => any) | undefined;
    "onUpdate:latitude"?: ((latitude: number | null) => any) | undefined;
    "onUpdate:address"?: ((address: string | null) => any) | undefined;
    onConfirm?: ((location: [number, number]) => any) | undefined;
}>, {
    type: "gcj02" | "wgs84";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
