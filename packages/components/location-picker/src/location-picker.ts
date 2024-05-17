import type { ExtractPropTypes, PropType } from "vue";

interface Location {
  longitude: string | number;
  latitude: string | number;
}
export const locationPickerProps = {
  search: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Object as PropType<Location>,
    default: (): Location => ({ longitude: "", latitude: "" }),
  },
  longitude: [String, Number],
  latitude: [String, Number],
};

export const locationPickerEmits = {
  ["update:modelValue"]: (location: Location) => {},
  ["update:longitude"]: (longitude: string | number) => {},
  ["update:latitude"]: (latitude: string | number) => {},
  ["close"]: () => {},
  ["change"]: (location: Location) => {},
};

export type LocationPickerEmits = typeof locationPickerEmits;
export type LocationPickerProps = ExtractPropTypes<typeof locationPickerProps>;
