import type { ButtonProps as ElButtonProps, FormInstance as ElFormInstance, FormProps as ElFormProps } from 'element-plus';
import type { CascaderFormItemField, CheckboxFormItemField, DateFormItemField, DictFormItemField, GridFormItemField, InputFormItemField, NumberFormItemField, NumberRangeFormItemField, RadioFormItemField, RenderlessFormItemField, SelectFormItemField, SlotFormItemField, SwitchFormItemField, TimeFormItemField } from '../../form-item';
import type { ComponentExposed } from 'vue-component-type-helpers';
import SearchForm from './search-form.vue';
import { Writable } from 'element-plus/es/utils';
/**
 * 搜索表单组件属性
 * @template T 表单的数据类型
 */
export interface SearchFormProps<T = Record<string | number | symbol, any>, U = SearchFormFields<T>> {
    /**
     * 表单数据
     * @template T 表单的数据类型
     */
    model: T;
    /**
     * 表单字段配置项
     * @template U 表单配置项类型
     */
    fields?: U;
    /**
     * 表单列数
     * @defaultValue 3
     */
    column?: number;
    /**
     * 表单操作按钮
     * @remarks 如果表单inline属性为true，则按钮展示在最后一个表单项右侧。如果inline属性为false，则按钮居中展示在最后一个表单项底部
     * @template T 表单的数据类型
     * @defaultValue []
     */
    buttons?: SearchFormButton<T>[];
    /**
     * 是否显示重置按钮
     * @defaultValue true
     */
    showReset?: boolean;
    /**
     * 导入配置
     */
    importOptions?: ImportOptions;
    /**
     * 表单搜索按钮点击事件
     * @remarks 传入该属性后会自动渲染搜索按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onSearch?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 表单重置按钮点击事件
     * @remarks 传入该属性后会自动渲染重置按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onReset?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 表单新增按钮点击事件
     * @remarks 传入该属性后会自动渲染新增按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onAdd?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 表单批量删除按钮点击事件
     * @remarks 传入该属性后会自动渲染批量删除按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onBatchDelete?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 表单导入逻辑
     * @remarks 传入该属性后会自动渲染导入按钮
     * @param file 文件对象
     */
    onImport?: (file: File) => void | Promise<any>;
    /**
     * 表单导出按钮点击事件
     * @remarks 传入该属性后会自动渲染导出按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onExport?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 导入弹窗下载导入模板按钮点击事件
     * @remarks 传入该属性后会自动渲染下载导入模板按钮
     */
    onTemplate?: () => void | string | Promise<any>;
}
/**
 * 搜索表单组件实例
 * @template T 表单的数据类型
 * @template U 表单配置项类型
 */
export type SearchFormInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>, U extends SearchFormFields<T> = SearchFormFields<T>> = ComponentExposed<typeof SearchForm<T, U>>;
/**
 * 表单字段配置项
 * @template T 表单的数据类型
 */
export type SearchFormField<T = Record<string | number | symbol, any>> = RenderlessFormItemField<T> | InputFormItemField<T> | SelectFormItemField<T> | CascaderFormItemField<T> | RadioFormItemField<T> | CheckboxFormItemField<T> | DateFormItemField<T> | TimeFormItemField<T> | SwitchFormItemField<T> | NumberFormItemField<T> | NumberRangeFormItemField<T> | DictFormItemField<T> | GridFormItemField<T> | SlotFormItemField<T>;
/**
 * 表单组件字段配置项集合
 * @template T 表单的数据类型
 */
export type SearchFormFields<T = Record<string | number | symbol, any>> = SearchFormField<T>[];
/**
 * 表单操作按钮
 * @template T 表单的数据类型
 */
export interface SearchFormButton<T = Record<string | number | symbol, any>> extends Partial<Writable<ElButtonProps>> {
    /**
     * 按钮名称
     */
    name: string;
    /**
     * 按钮权限
     */
    authority?: string | string[];
    /**
     * 展示顺序
     * @remarks 组件内置的新增、批量删除、导入、导出按钮`order`属性分别为10、20、30、40，如果想要让自定义按钮显示在新增和批量删除按钮之间，`order`属性可以设置为10~20之间，如果不设置`order`属性则默认展示在内置按钮后面
     */
    order?: number;
    /**
     * 展示位置
     * @remarks 组件内置的新增、批量删除、导入按钮`position`属性默认为`left`，导出按钮`position`属性默认为`right`
     * @defaultValue 'left'
     */
    position?: 'left' | 'right';
    /**
     * 是否显示按钮
     * @defaultValue true
     */
    show?: boolean;
    /**
     * 加载状态
     * @defaultValue false
     */
    loading?: boolean;
    /**
     * 是否需要校验表单
     * @remarks 如果为true，点击按钮会自动触发表单校验，并且校验通过后才会执行{@link onClick}事件，组件内置的查询按钮`validate`属性默认为`true`
     * @defaultValue false
     */
    validate?: boolean;
    /**
     * 唯一标识
     * @remark 主要用于组件内部区分不同按钮
     */
    key?: string | symbol;
    /**
     * 按钮点击事件
     * @template T 表格的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onClick?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 按钮副作用
     * @remarks 可以在回调函数中拿到表单数据及实例，并动态修改按钮配置
     * @template T 表单的数据类型
     */
    watchEffect?: (form: T, formRef: ElFormInstance | null) => void;
}
/**
 * 表单内置导入按钮
 */
export interface SearchFormImportButton<T> extends SearchFormButton<T> {
    /**
     * 按钮点击事件
     */
    onClick?: () => void;
    /**
     *
     * @param file 选中的文件对象
     * @returns
     */
    handleImport?: (file: File) => void | Promise<any>;
}
/**
 * 导入配置
 */
export interface ImportOptions {
    /**
     * 提示说明文字
     */
    tip?: string;
    /**
     * 文件大小限制，单位为字节
     */
    maxSize?: number;
    /**
     * 允许上传的文件类型，例如`['xls', '.xlsx']`
     * @defaultValue ['xls', '.xlsx']
     */
    extensions?: string[];
}
/**
 * 表单操作按钮集合
 * @template T 表单的数据类型
 */
export type SearchFormButtons<T = Record<string | number | symbol, any>> = SearchFormButton<T>[];
/**
 * 搜索表单组件包含透传属性在内的全部属性
 * @template T 表单的数据类型
 */
export type SearchFormFullProps<T> = Partial<ElFormProps & SearchFormProps<T>>;
