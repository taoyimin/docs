import type { ExtractPropTypes } from "vue";

export const dataDescriptionsProps = {
    /**
     * 描述列表项的数据
     */
    data: {
        type: Object,
        default: {}
    },
    /**
     * @description 描述列表项的属性
     */
    fields: {
        type: Array<any>,
        default: []
    }
}

export type DataDescriptionsProps = ExtractPropTypes<typeof dataDescriptionsProps>;