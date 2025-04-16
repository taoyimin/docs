import { SelectProps as selectProps } from 'element-plus/es/components/select/src/select';
import type { ExtractPropTypes } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import { ElSelect } from 'element-plus';
import Select from './select.vue';
import type { LoadData } from 'liv-web/es/utils';
/**
 * 选择器属性
 * @template T 列表项的数据类型
 */
export interface SelectProps<T> {
    /**
     * 组件数据
     * @remarks 可以是数组、Promise、Callback函数、Getter函数
     * @defaultValue []
     */
    data?: LoadData<T> | (() => LoadData<T>);
    /**
     * 指定列表项文字为数据对象的某个属性值
     * @defaultValue 'label'
     */
    labelKey?: string;
    /**
     * 指定列表项选中后绑定值为数据对象的某个属性值
     * @defaultValue 'value'
     */
    valueKey?: string;
    /**
     * 是否懒加载数据
     * @remarks 只有通过Callback函数、Getter函数的方式传入组件数据时懒加载才会生效
     * @defaultValue false
     */
    lazy?: boolean;
}
/**
 * 选择器组件实例
 * @template T 列表项的数据类型
 */
export type SelectInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>> = ComponentExposed<typeof Select<T>>;
/**
 * el-select原生属性
 */
export type ElSelectProps = ExtractPropTypes<typeof selectProps>;
/**
 * el-select原生实例
 */
export type ElSelectInstance = InstanceType<typeof ElSelect>;
/**
 * 选择器包含透传属性在内的全部属性
 * @template T 列表项的数据类型
 */
export type SelectFullProps<T> = Partial<Omit<Omit<ElSelectProps, 'modelValue'>, 'valueKey'> & SelectProps<T>>;
