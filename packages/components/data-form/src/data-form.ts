import type { ExtractPropTypes } from "vue";

export const dataFormProps = {
    /**
     * @description 表单默认值
     */
    defaultValue: {
        type: Object,
        default: {}
    },
    /**
     * @description 表单项的字段
     */
    fields: {
        type: Array<any>,
        default: []
    },
    /**
     * @description 表单的操作按钮
     */
    buttons: {
        type: Array<any>,
        default: []
    },
    /**
     * @description 提交按钮点击事件
     */
    onSubmit: {
        type: Function,
        default: null
    },
    /**
     * @description 重置按钮点击事件
     */
    onReset: {
        type: Function,
        default: null
    },
    /**
     * @description 返回按钮点击事件
     */
    onBack: {
        type: Function,
        default: null
    },
    /**
     * @description 新增按钮点击事件
     */
    onAdd: {
        type: Function,
        default: null
    },
    /**
     * @description 查询按钮点击事件
     */
    onSearch: {
        type: Function,
        default: null
    }
}

export type DataFormProps = ExtractPropTypes<typeof dataFormProps>;