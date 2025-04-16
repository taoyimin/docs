import type { MaybeRef } from 'vue';
import type { ComponentExposed } from 'vue-component-type-helpers';
import type { ButtonProps as ElButtonProps, FormInstance as ElFormInstance, FormProps as ElFormProps } from 'element-plus';
import type { Writable } from 'element-plus/es/utils';
import type { CascaderFormItemField, CheckboxFormItemField, CiphertextFormItemField, ColorFormItemField, DateFormItemField, DictFormItemField, GridFormItemField, InputFormItemField, LocationFormItemField, NumberFormItemField, NumberRangeFormItemField, RadioFormItemField, RateFormItemField, RenderlessFormItemField, RichTextFormItemField, SelectFormItemField, SlotFormItemField, SwitchFormItemField, TextareaFormItemField, TimeFormItemField, UploadFormItemField } from '../../form-item';
import type { TwoDimensionArrayable } from 'liv-web/es/utils';
import DataForm from './data-form.vue';
/**
 * 表单组件属性
 * @template T 表单的数据类型
 */
export interface DataFormProps<T = Record<string | number | symbol, any>, U = DataFormFields<T>> {
    /**
     * 表单数据
     * @template T 表单的数据类型
     */
    model: T;
    /**-
     * 表单字段配置项
     * @template U 表单配置项类型
     */
    fields?: U;
    /**
     * 行内表单模式
     * @defaultValue false
     */
    inline?: boolean;
    /**
     * 表单操作按钮
     * @remarks 如果表单inline属性为true，则按钮展示在最后一个表单项右侧。如果inline属性为false，则按钮居中展示在最后一个表单项底部
     * @template T 表单的数据类型
     * @defaultValue []
     */
    buttons?: DataFormButtons<T>;
    /**
     * 是否显示重置按钮
     * @remarks 组件内置的重置按钮已经实现了重置表单逻辑，设置`showReset`属性为`true`即可，也可以手动传入组件的@reset方法以覆盖表单的重置逻辑
     * @defaultValue false
     */
    showReset?: boolean;
    /**
     * 表单提交按钮点击事件
     * @remarks 传入该属性后会自动渲染提交按钮，并且会自动触发表单校验，校验通过后才会触发{@link onSubmit}属性传入的回调方法
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onSubmit?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
    /**
     * 表单查询按钮点击事件
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
     * 表单返回按钮点击事件
     * @remarks 传入该属性后会自动渲染返回按钮
     * @template T 表单的数据类型
     * @param form 表单数据
     * @param formRef 表单实例
     */
    onBack?: (form: T, formRef: ElFormInstance | null) => void | Promise<any>;
}
/**
 * 数据表单组件实例
 * @template T 表单的数据类型
 * @template U 表单配置项类型
 */
export type DataFormInstance<T extends Record<string | number | symbol, any> = Record<string | number | symbol, any>, U extends DataFormFields<T> = DataFormFields<T>> = ComponentExposed<typeof DataForm<T, U>>;
/**
 * 表单字段配置项
 * @template T 表单的数据类型
 */
export type DataFormField<T = Record<string | number | symbol, any>> = RenderlessFormItemField<T> | InputFormItemField<T> | CiphertextFormItemField<T> | TextareaFormItemField<T> | SelectFormItemField<T> | CascaderFormItemField<T> | RadioFormItemField<T> | CheckboxFormItemField<T> | DateFormItemField<T> | TimeFormItemField<T> | SwitchFormItemField<T> | NumberFormItemField<T> | NumberRangeFormItemField<T> | RateFormItemField<T> | ColorFormItemField<T> | UploadFormItemField<T> | DictFormItemField<T> | GridFormItemField<T> | LocationFormItemField<T> | RichTextFormItemField<T> | SlotFormItemField<T>;
/**
 * 表单组件字段配置项集合
 * @template T 表单的数据类型
 */
export type DataFormFields<T = Record<string | number | symbol, any>> = TwoDimensionArrayable<MaybeRef<DataFormField<T>>>;
/**
 * 表单操作按钮
 * @template T 表单的数据类型
 */
export interface DataFormButton<T = Record<string | number | symbol, any>> extends Partial<Writable<ElButtonProps>> {
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
     * @remarks 组件内置的提交、搜索、重置、新增、批量删除、返回按钮order分别为10、20、30、40、50、60，如果想要让自定义按钮显示在提交和重置按钮之间，order可以设置为10~30之间，如果不设置order则默认展示在内置按钮后面
     */
    order?: number;
    /**
     * 是否显示按钮
     * @defaultValue true
     */
    show?: boolean;
    /**
     * 是否需要校验表单
     * @remarks 如果为true，点击按钮会自动触发表单校验，并且校验通过后才会执行{@link onClick}事件
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
 * 表单操作按钮集合
 * @template T 表单的数据类型
 */
export type DataFormButtons<T = Record<string | number | symbol, any>> = DataFormButton<T>[];
/**
 * 数据表单组件包含透传属性在内的全部属性
 * @template T 表单的数据类型
 */
export type DataFormFullProps<T> = Partial<ElFormProps & DataFormProps<T>>;
