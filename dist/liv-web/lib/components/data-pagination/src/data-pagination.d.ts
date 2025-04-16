import type { PaginationProps as ElPaginationProps } from 'element-plus';
/**
 * 数据分页组件属性
 * @template T 分页类型
 */
export interface DataPaginationProps<T> {
    /**
     * 数据总数
     */
    total?: number;
    /**
     * 当前页字段名
     * @defaultValue 'current'
     */
    currentKey?: keyof T;
    /**
     * 每页个数字段名
     * @defaultValue 'size'
     */
    sizeKey?: keyof T;
}
/**
 * 数据分页组件包含透传属性在内的全部属性
 * @template T 分页类型
 */
export type DataPaginationFullProps<T> = Partial<ElPaginationProps & DataPaginationProps<T>>;
