import type { ExtractPropTypes } from "vue";
import type DataCard from "./data-card.vue";

export const dataCardProps = {};

export const dataCardEmits = {};

export type DataCardEmits = typeof dataCardEmits;
export type DataCardProps = ExtractPropTypes<typeof dataCardProps>;
export type DataCardInstance = InstanceType<typeof DataCard>;
