import type { LoadData } from 'liv-web/es/utils';
import type { RadioGroupProps as ElRadioGroupProps } from 'element-plus';
/**
 * 单选按钮组件属性
 * @template T 单选按钮数据类型
 */
export interface RadioProps<T> {
    /**
     * 组件数据
     * @remarks 可以是数组、Promise、Callback函数、Getter函数
     * @defaultValue []
     */
    data?: LoadData<T> | (() => LoadData<T>);
    /**
     * 指定单选按钮文字为数据对象的某个属性值
     * @defaultValue 'label'
     */
    labelKey?: keyof T;
    /**
     * 指定单选按钮绑定值为数据对象的某个属性值
     * @defaultValue ''value
     */
    valueKey?: keyof T;
    /**
     * 单选框类型
     * @defaultValue 'default'
     */
    type?: 'default' | 'button';
}
/**
 * 单选按钮组件包含透传属性在内的全部属性
 * @template T 单选按钮数据类型
 */
export type RadioFullProps<T> = Partial<ElRadioGroupProps & RadioProps<T>>;
