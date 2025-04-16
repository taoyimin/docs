import type { TreeOptionProps, TreeProps } from 'element-plus/es/components/tree-v2/src/types';
import type { ComponentExposed } from 'vue-component-type-helpers';
import GridTree from './grid-tree.vue';
/**
 * 网格树组件属性
 * @template T 网格的数据类型
 */
export interface GridTreeProps<T = Record<string | number | symbol, any>> {
    /**
     * 是否从根网格开始查询，默认从用户所属网格开始查询。
     * @defaultValue false
     */
    root?: boolean;
}
/**
 * 网格树组件实例
 * @template T 网格的数据类型
 */
export type GridTreeInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>> = ComponentExposed<typeof GridTree<T>>;
/**
 * el-tree属性类型
 * @remarks 修改了原生`props`属性的类型。
 */
export type ElTreeProps = Omit<TreeProps, 'props'> & {
    /**
     * 配置选项, 请参阅[el-tree](https://element-plus.org/zh-CN/component/tree.html)组件的[props属性](https://element-plus.org/zh-CN/component/tree.html#props)。
     */
    props: TreePropsProps;
};
/**
 * 网格树组件配置选项
 * @remarks 扩展`id`属性。
 */
export type TreePropsProps = TreeOptionProps & {
    /**
     * 指定选项的id为选项对象的某个属性值。
     * @remarks el-tree没有提供该属性，为实现网格id的双向绑定，故扩展该属性。
     */
    id?: string;
    /**
     * 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效。
     */
    isLeaf?: string;
};
/**
 * 网格树组件包含透传属性在内的全部属性
 * @template T 网格的数据类型
 */
export type GridTreeFullProps<T> = Partial<ElTreeProps> & GridTreeProps<T>;
