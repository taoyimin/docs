import type { ExtractPropTypes } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import { cascaderProps, type CascaderProps as ElCascaderPropsProps } from 'element-plus';
import GridCascader from './grid-cascader.vue';
/**
 * 网格级联选择器属性
 * @template T 网格的数据类型
 */
export interface GridCascaderProps<T = Record<string | number | symbol, any>> {
    /**
     * 是否从根网格开始查询，默认从用户所属网格开始查询。
     * @defaultValue false
     */
    root?: boolean;
    /**
     * 指定起始节点的网格编码
     */
    rootCode?: string;
}
/**
 * 网格级联选择器实例
 * @template T 网格类型
 */
export type GridCascaderInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>> = ComponentExposed<typeof GridCascader<T>>;
/**
 * el-cascader属性类型
 * @remarks 修改了原生`props`属性的类型。
 */
type ElCascaderProps = Omit<ExtractPropTypes<typeof cascaderProps>, 'props'> & {
    /**
     * 配置选项, 请参阅[el-cascader](https://element-plus.org/zh-CN/component/cascader.html)组件的[props属性](https://element-plus.org/zh-CN/component/cascader.html#cascaderprops)。
     */
    props: CascaderPropsProps;
};
/**
 * 网格级联选择器组件配置选项
 * @remarks 扩展`id`属性。
 */
export type CascaderPropsProps = ElCascaderPropsProps & {
    /**
     * 指定选项的id为选项对象的某个属性值。
     * @remarks el-cascader没有提供该属性，为实现网格id的双向绑定，故扩展该属性。
     */
    id?: string;
};
/**
 * 网格级联选择器包含透传属性在内的全部属性
 * @template T 网格的数据类型
 */
export type GridCascaderFullProps<T> = Partial<ElCascaderProps & GridCascaderProps<T>>;
export {};
