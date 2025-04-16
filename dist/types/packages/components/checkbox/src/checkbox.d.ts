import type { LoadData } from 'liv-web/es/utils';
import type { CheckboxGroupProps as ElCheckboxGroupProps } from 'element-plus';
/**
 * 多选框组件属性
 * @template T 多选按钮数据类型
 */
export interface CheckboxProps<T> {
    /**
     * 组件数据
     * @remarks 可以是数组、Promise、Callback函数、Getter函数
     * @defaultValue []
     */
    data?: LoadData<T> | (() => LoadData<T>);
    /**
     * 指定多选按钮文字为数据对象的某个属性值
     * @defaultValue 'label'
     */
    labelKey?: keyof T;
    /**
     * 指定多选按钮绑定值为数据对象的某个属性值
     * @defaultValue 'value'
     */
    valueKey?: keyof T;
    /**
     * 多选框类型
     * @defaultValue 'default'
     */
    type?: 'default' | 'button';
}
/**
 * 多选框组件包含透传属性在内的全部属性
 * @template T 多选按钮数据类型
 */
export type CheckboxFullProps<T> = Partial<ElCheckboxGroupProps & CheckboxProps<T>>;
