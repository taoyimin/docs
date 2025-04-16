import type { Plugin } from 'vue';
/**
 * 转换为二维数组类型，第二维元素不一定为数组
 */
export type TwoDimensionArrayable<T> = (T | T[])[];
/**
 * 组件加载数据方法类型
 * @remarks 可以是数组、Promise、Callback函数
 */
export type LoadData<T> = T[] | Promise<T[]> | ((resolve: (data: T[]) => void, reject: (reason: any) => void) => void);
/**
 * 将两个类型中公共的属性设置为Required
 * @remarks 目标类型中定义的属性如果在源类型中也存在，则将源类型中的改属性设置为Required
 * @template T 源类型
 * @template V 目标类型
 */
export type CommonRequired<T, V> = Omit<T, Extract<keyof T, keyof V>> & Required<Pick<T, Extract<keyof T, keyof V>>>;
export type SFCWithInstall<T> = T & Plugin;
/**
 * 将指定属性设置为必填
 * @template T 源类型
 * @template K 需要改为必填的属性
 */
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
