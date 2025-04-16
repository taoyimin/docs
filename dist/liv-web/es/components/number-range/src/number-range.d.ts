/**
 * 数字范围组件属性
 */
export interface NumberRangeProps {
    /**
     * 绑定值
     */
    modelValue?: number[];
    /**
     * 最小值
     * @defaultValue -Infinity
     */
    min?: number;
    /**
     * 最大值
     * @defaultValue Infinity
     */
    max?: number;
    /**
     * 输入范围时最小值的占位内容
     * @defaultValue '最小值'
     */
    minPlaceholder?: string;
    /**
     * 输入范围时最大值的占位内容
     * @defaultValue '最大值'
     */
    maxPlaceholder?: string;
    /**
     * 输入范围时的分隔符
     * @defaultValue '至'
     */
    rangeSeparator?: string;
    /**
     * 是否禁用
     * @defaultValue false
     */
    disabled?: boolean;
}
