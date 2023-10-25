import type { ExtractPropTypes } from "vue";

export const demoButtonProps = {
    /**
     * @description 按钮大小
     */
    size: {
        type: Number,
        default: 10
    },
    /**
     * @description 按钮颜色
     */
    color: {
        type: String,
        color: 'red'
    }
}

export type DemoButtonProps = ExtractPropTypes<typeof demoButtonProps>;