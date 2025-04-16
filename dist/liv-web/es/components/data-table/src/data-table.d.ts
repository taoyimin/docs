import type { MaybeRef } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type { TableProps as ElTableProps, ButtonProps as ElButtonProps, ImageProps as ElImageProps, SwitchProps as ElSwitchProps, TableColumnCtx as ElTableColumnCtx, TagProps as ElTagProps } from 'element-plus';
import type { QrCodeProps } from '../../qr-code';
import DataTable from './data-table.vue';
import { Writable } from 'element-plus/es/utils';
import { VerifyProps, VerifyResult } from '../../verify';
/**
 * 表格组件属性
 * @template T 表格的数据类型
 */
export interface DataTableProps<T = Record<string | number | symbol, any>> {
    /**
     * 表格数据
     * @template T 表格的数据类型
     */
    data?: T[];
    /**
     * 表格字段配置项集合
     * @template T 表格的数据类型
     */
    fields: DataTableFields<T>;
    /**
     * 右侧操作列按钮
     * @template T 表格的数据类型
     * @defaultValue []
     */
    buttons?: DataTableButtons<T>;
    /**
     * 右侧操作列展示按钮的个数
     * @remarks 超过的按钮会隐藏并显示展开图标
     * @defaultValue 3
     */
    showButtonCount?: number;
    /**
     * 右侧操作栏详情按钮点击事件
     * @remarks 传入该属性后会自动渲染详情按钮
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     */
    onDetail?: (row: T, index: number) => void;
    /**
     * 右侧操作栏编辑按钮点击事件
     * @remarks 传入该属性后会自动渲染编辑按钮
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     */
    onEdit?: (row: T, index: number) => void;
    /**
     * 右侧操作栏删除按钮点击事件
     * @remarks 传入该属性后会自动渲染删除按钮
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     */
    onDelete?: (row: T, index: number) => void;
}
/**
 * 数据表格组件实例
 * @template T 表格的数据类型
 */
export type DataTableInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>> = ComponentExposed<typeof DataTable<T>>;
/**
 * 表格列字段类型
 */
export type TableColumnFieldType = 'text' | 'ciphertext' | 'button' | 'switch' | 'tag' | 'image' | 'qrcode' | 'slot';
/**
 * 表格字段配置项
 * @template T 表格的数据类型
 */
export type DataTableField<T = Record<string | number | symbol, any>> = TextTableColumnField<T> | CiphertextTableColumnField<T> | ButtonTableColumnField<T> | SwitchTableColumnField<T> | TagTableColumnField<T> | ImageTableColumnField<T> | QRCodeTableColumnField<T> | SlotTableColumnField<T>;
/**
 * 表格字段配置项集合
 * @template T 表格的数据类型
 */
export type DataTableFields<T = Record<string | number | symbol, any>> = MaybeRef<DataTableField<T>>[];
/**
 * 表格右侧列操作按钮
 * @template T 表格的数据类型
 */
export interface DataTableButton<T = Record<string | number | symbol, any>> extends Partial<ElButtonProps> {
    /**
     * 按钮名称
     */
    name?: string;
    /**
     * 是否显示按钮
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     */
    show?: boolean | ((row: T, index: number) => boolean);
    /**
     * 按钮权限
     */
    authority?: string | string[];
    /**
     * 展示顺序
     * @remarks 组件内置的详情、编辑、删除按钮order分别为10、20、30，如果想要让自定义按钮显示在详情和编辑按钮之间，order可以设置为10~20之间，如果不设置order则默认展示在内置按钮后面。
     */
    order?: number;
    /**
     * 按钮点击事件
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     */
    onClick?: (row: T, index: number) => void;
}
/**
 * 表格右侧列操作按钮集合
 * @template T 表格的数据类型
 */
export type DataTableButtons<T = Record<string | number | symbol, any>> = DataTableButton<T>[];
/**
 * 表格插槽作用域数据
 * @template T 表格的数据类型
 */
export type DataTableScope<T = Record<string | number | symbol, any>> = {
    /**
     * 当前行的索引
     */
    $index: number;
    /**
     * 当前行数据
     */
    row: T;
    /**
     * 当前列的上下文
     * @template T 表格的数据类型
     */
    column: ElTableColumnCtx<T>;
};
/**
 * 表格列基类
 * @template T 表格的数据类型
 */
interface TableColumnField<T> extends Partial<Omit<ElTableColumnCtx<T>, 'prop'>> {
    /**
     * 字段名称，对应列内容的字段名
     */
    prop: string;
    /**
     * 表格列类型
     */
    type?: 'default' | 'selection' | 'index' | 'expand';
    /**
     * 表格列字段类型
     */
    fieldType?: TableColumnFieldType;
    /**
     * 权限标识
     */
    authority?: string | string[];
}
/**
 * 文本表格列
 * @template T 表格的数据类型
 */
export type TextTableColumnField<T> = Omit<Omit<TableColumnField<T>, 'fieldType'>, 'prop'> & {
    /**
     * 表格列类型为selection、index、expand时，允许不设置prop属性
     */
    prop?: string;
    /**
     * 文本字段
     */
    fieldType?: 'text';
};
/**
 * 加密文本表格列
 * @template T 表格的数据类型
 */
export type CiphertextTableColumnField<T> = Omit<Omit<TableColumnField<T>, 'fieldType'>, 'type'> & VerifyProps & {
    /**
     * @remarks 加密文本类型
     */
    fieldType?: 'ciphertext';
    /**
     * 解密方法
     * @param params 验证成功后返回的参数
     * @param row 行数据
     * @returns 解密后的文本
     */
    decrypt: (params: VerifyResult, row: T) => string | Promise<string>;
};
/**
 * 按钮类型
 */
type ButtonType = 'success' | 'warning' | 'info' | 'primary' | 'danger';
/**
 * 按钮表格列
 * @template T 表格的数据类型
 */
export type ButtonTableColumnField<T> = Omit<Omit<TableColumnField<T>, 'fieldType'> & Partial<Writable<ElButtonProps>>, 'type'> & {
    /**
     * @remarks 按钮类型，内部实现为[el-button](https://element-plus.org/zh-CN/component/button.html)组件，可以透传[el-button的所有属性](https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7)。
     */
    fieldType: 'button';
    /**
     * 按钮名称
     */
    name?: string;
    /**
     * 按钮的类型
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     * @param cellValue 列数据
     * @returns { ButtonType } 按钮的类型
     */
    type?: ButtonType | ((row: T, index: number, cellValue: T[keyof T]) => ButtonType);
    /**
     * 按钮点击的回调函数
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     * @param cellValue 列数据
     * @returns { void | Promise<any> } 如果返回`Promise`则会自动给按钮加上`loading`状态，并在执行完成后移除loading状态
     */
    onClick?: (row: T, index: number, cellValue: T[keyof T]) => void | Promise<any>;
};
/**
 * 开关表格列
 * @template T 表格的数据类型
 */
export type SwitchTableColumnField<T> = Omit<TableColumnField<T>, 'fieldType'> & Partial<Writable<Omit<ElSwitchProps, 'onChange' | 'beforeChange'>>> & {
    /**
     * @remarks 开关类型
     */
    fieldType: 'switch';
    /**
     * 开关状态切换后的回调函数
     * @template T 表格的数据类型
     * @param value 开关绑定值
     * @param row 行数据
     * @param index 数据索引
     * @param cellValue 列数据
     */
    onChange?: (value: string | number | boolean, row: T, index: number, cellValue: T[keyof T]) => void;
    /**
     * 开关状态切换前的回调函数
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     * @param cellValue 列数据
     * @returns { boolean | Promise<any> } 返回`false`或者返回`Promise`且被`reject`则停止切换
     */
    beforeChange?: (row: T, index: number, cellValue: T[keyof T]) => boolean | Promise<any>;
};
/**
 * 标签类型
 */
type TagType = 'success' | 'warning' | 'info' | 'primary' | 'danger';
/**
 * 标签表格列
 * @template T 表格的数据类型
 */
export type TagTableColumnField<T> = Omit<Omit<TableColumnField<T>, 'fieldType'> & Partial<Writable<ElTagProps>>, 'type'> & {
    /**
     * @remarks 标签类型
     */
    fieldType: 'tag';
    /**
     * 标签的类型
     * @template T 表格的数据类型
     * @param row 行数据
     * @param index 数据索引
     * @param cellValue 列数据
     * @returns { TagType } 标签的类型
     */
    type?: TagType | ((row: T, index: number, cellValue: T[keyof T]) => TagType);
};
/**
 * 图片表格列
 * @template T 表格的数据类型
 */
export type ImageTableColumnField<T> = Omit<TableColumnField<T>, 'fieldType'> & Partial<Writable<ElImageProps>> & {
    /**
     * @remarks 图片类型
     */
    fieldType: 'image';
};
/**
 * 二维码表格列
 * @template T 表格的数据类型
 */
export type QRCodeTableColumnField<T> = Omit<TableColumnField<T>, 'fieldType'> & Partial<QrCodeProps> & {
    /**
     * @remarks 二维码类型
     */
    fieldType: 'qrcode';
};
/**
 * 插槽表格列
 * @template T 表格的数据类型
 */
export type SlotTableColumnField<T> = Omit<TableColumnField<T>, 'fieldType'> & {
    /**
     * @remarks 插槽类型
     */
    fieldType: 'slot';
};
/**
 * 数据表格组件包含透传属性在内的全部属性
 * @template T 表格的数据类型
 */
export type DataTableFullProps<T> = Partial<ElTableProps<T> & DataTableProps<T>>;
export {};
