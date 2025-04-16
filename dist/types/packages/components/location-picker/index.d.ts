export declare const LivLocationPicker: import("liv-web/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    modelValue?: (number | null)[];
    longitude?: number | null;
    latitude?: number | null;
    address?: string | null;
} & import("./src/location-picker").LocationPickerProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (modelValue: (number | null)[]) => any;
    'update:longitude': (longitude: number | null) => any;
    'update:latitude': (latitude: number | null) => any;
    'update:address': (address: string | null) => any;
    change: (location: [number | null, number | null]) => any;
    confirm: (location: [number, number]) => any;
}, string, import("vue").PublicProps, Readonly<{
    modelValue?: (number | null)[];
    longitude?: number | null;
    latitude?: number | null;
    address?: string | null;
} & import("./src/location-picker").LocationPickerProps> & Readonly<{
    onChange?: ((location: [number | null, number | null]) => any) | undefined;
    "onUpdate:modelValue"?: ((modelValue: (number | null)[]) => any) | undefined;
    "onUpdate:longitude"?: ((longitude: number | null) => any) | undefined;
    "onUpdate:latitude"?: ((latitude: number | null) => any) | undefined;
    "onUpdate:address"?: ((address: string | null) => any) | undefined;
    onConfirm?: ((location: [number, number]) => any) | undefined;
}>, {
    type: "gcj02" | "wgs84";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default LivLocationPicker;
export * from './src/location-picker';
