import type { ExtractPropTypes, PropType } from "vue";
import type DataPagination from "./data-pagination.vue";

export const dataPaginationProps = {
  modelValue: {
    type: Object as PropType<PageParam>,
    default: (): PageParam => ({ current: 1, size: 10 }),
  },
  data: {
    type: Object as PropType<Page>,
    default: (): Page => ({ total: 0, records: [] }),
  },
};

export const dataPaginationEmits = {
  ["update:modelValue"]: (pageParam: PageParam) => {},
};

export type DataPaginationEmits = typeof dataPaginationEmits;
export type DataPaginationProps = ExtractPropTypes<typeof dataPaginationProps>;
export type DataPaginationInstance = InstanceType<typeof DataPagination>;
