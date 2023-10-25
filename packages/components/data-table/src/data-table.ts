import type { ExtractPropTypes } from "vue";

export const dataTableProps = {
    /**
     * @description 表格项的属性
     */
    fields: {
        type: Array<any>,
        default: []
    },
    /**
     * @description 表格项的操作按钮
     */
    buttons: {
        type: Array<any>,
        default: []
    },
    /**
     * @description 详情按钮点击事件
     */
    onDetail: {
        type: Function,
        default: null
    },
    /**
     * @description 编辑按钮点击事件
     */
    onEdit: {
        type: Function,
        default: null
    },
    /**
     * @description 删除按钮点击事件
     */
    onDelete: {
        type: Function,
        default: null
    }
}

export type DataTableProps = ExtractPropTypes<typeof dataTableProps>;