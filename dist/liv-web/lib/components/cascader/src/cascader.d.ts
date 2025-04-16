import type { ComponentExposed } from 'vue-component-type-helpers';
import { cascaderProps } from 'element-plus';
import Cascader from './cascader.vue';
import type { LoadData } from 'liv-web/es/utils';
import type { ExtractPropTypes } from 'vue';
/**
 * 级联选择器属性
 * @template T 列表项的数据类型
 */
export interface CascaderProps<T> {
    /**
     * 组件数据
     * @remarks 可以是数组、Promise、Callback函数、Getter函数
     * @defaultValue []
     */
    data?: LoadData<T> | (() => LoadData<T>);
}
/**
 * 级联选择器组件实例
 * @template T 列表项的数据类型
 */
export type CascaderInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>> = ComponentExposed<typeof Cascader<T>>;
/**
 * el-cascader原生属性类型
 */
export type ElCascaderProps = ExtractPropTypes<typeof cascaderProps>;
/**
 * 级联选择器包含透传属性在内的全部属性
 * @template T 列表项的数据类型
 */
export type CascaderFullProps<T> = Partial<ElCascaderProps & CascaderProps<T>>;
