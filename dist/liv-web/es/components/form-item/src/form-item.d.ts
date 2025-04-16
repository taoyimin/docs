import type { CSSProperties } from 'vue';
import type { DatePickerProps as ElDatePickerProps, CheckboxGroupProps as ElCheckboxGroupProps, FormItemProps as ElFormItemProps, InputProps as ElInputProps, RadioGroupProps as ElRadioGroupProps, TimePickerDefaultProps as ElTimePickerDefaultProps, SwitchProps as ElSwitchProps, InputNumberProps as ElInputNumberProps, RateProps as ElRateProps, ColorPickerProps as ElColorPickerProps, UploadProps as ElUploadProps, FormInstance as ElFormInstance } from 'element-plus';
import type { Writable } from 'element-plus/es/utils';
import type { ElSelectProps, SelectProps } from '../../select';
import type { GridCascaderProps } from '../../grid-cascader';
import type { RadioProps } from '../../radio';
import type { CheckboxProps } from '../../checkbox';
import type { ElCascaderProps, CascaderProps } from '../../cascader';
import type { DictSelectProps } from '../../dict-select';
import type { RichTextProps } from '../../rich-text';
import type { NumberRangeProps } from '../../number-range';
import type { LocationPickerProps } from '../../location-picker';
import type { VerifyProps, VerifyResult } from '../../verify';
/**
 * 表单项组件属性
 */
export interface FormItemProps {
    /**
     * 表单项类型
     */
    fieldType?: FormItemFieldType;
}
/**
 * 表单项字段类型
 */
export type FormItemFieldType = undefined | 'input' | 'ciphertext' | 'textarea' | 'select' | 'cascader' | 'radio' | 'checkbox' | 'date' | 'time' | 'switch' | 'number' | 'numberRange' | 'rate' | 'color' | 'image' | 'audio' | 'video' | 'file' | 'dict' | 'dictId' | 'grid' | 'gridCode' | 'gridId' | 'location' | 'richText' | 'slot';
/**
 * 表单项字段基类
 * @template T 表单的数据类型
 */
interface FormItemField<T = Record<string | number | symbol, any>> extends Partial<Writable<Omit<ElFormItemProps, 'prop'>>> {
    /**
     * 表单数据model属性的键名
     */
    prop: string;
    /**
     * 表单项字段类型
     */
    fieldType?: FormItemFieldType;
    /**
     * 表单项展示位置，仅在DataForm组件中使用有效
     */
    fieldIndex?: number;
    /**
     * 表单项占据的列数
     * @remarks 对应[el-col](https://element-plus.org/zh-CN/component/layout.html#col-attributes)组件的span属性，24表示占满整行，仅在DataForm组件中使用有效
     * @defaultValue 24 / 行内表单项个数
     */
    span?: number;
    /**
     * 权限标识
     * @remarks 仅在用户通过权限校验后，才显示该表单项
     */
    authority?: string | string[];
    /**
     * 是否展示
     * @remarks 为`false`则不会渲染该表单项，并且`prop`属性对应的数据不会存在于表单数据中，常用于实现动态表单
     * @defaultValue true
     */
    show?: boolean;
    /**
     * 表单项样式
     * @remarks 该样式将绑定在表单项具体的实现组件上
     */
    style?: string | CSSProperties;
    /**
     * 表单项副作用
     * @param form 表单数据
     * @param formRef 表单组件实例
     * @remarks 可以在回调函数中拿到表单数据及实例，并动态修改表单项配置，通常用于实现动态表单功能
     * @template T 表单的数据类型
     */
    watchEffect?: (form: T, formRef: ElFormInstance | null) => void;
    /**
     * 表单项提示信息
     */
    tooltip?: string;
    /**
     * 表单项提示信息出现的位置
     * @defaultValue 'top'
     */
    placement?: 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
}
/**
 * 无渲染表单项
 * @template T 表单的数据类型
 */
export type RenderlessFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & {
    /**
     * 无渲染表单项
     * @remarks 不设置`fieldType`属性或设置为`undefined`则为无渲染表单项，但是`prop`属性对应的数据仍然存在于表单数据中，常用于实现编辑功能时，部分字段需要随表单提交但是不需要生成表单项组件
     */
    fieldType?: undefined;
};
/**
 * 输入框表单项
 * @template T 表单的数据类型
 */
export type InputFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElInputProps>> & {
    /**
     * 输入框类型
     * @remarks 输入框表单项内部实现为[el-input](https://element-plus.org/zh-CN/component/input.html)组件，可以透传[el-input的所有属性](https://element-plus.org/zh-CN/component/input.html#attributes)。
     */
    fieldType: 'input';
    /**
     * 输入框头部内容
     */
    prefix?: string;
    /**
     * 输入框尾部内容
     */
    suffix?: string;
    /**
     * 输入框前置内容
     */
    prepend?: string;
    /**
     * 输入框后置内容
     */
    append?: string;
};
/**
 * 密文输入框表单项
 * @template T 表单的数据类型
 */
export type CiphertextFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<Omit<ElInputProps, 'type'>>> & VerifyProps & {
    /**
     * 输入框类型
     * @remarks 密文输入框表单项内部实现为[el-input](https://element-plus.org/zh-CN/component/input.html)组件，可以透传[el-input的所有属性](https://element-plus.org/zh-CN/component/input.html#attributes)。
     */
    fieldType: 'ciphertext';
    /**
     * 解密方法
     * @param params 验证成功后返回的参数
     * @param form 表单组件的数据对象
     * @returns 解密后的文本
     */
    decrypt: (params: VerifyResult, form: T) => string | Promise<string>;
};
/**
 * 文本域表单项
 * @template T 表单的数据类型
 */
export type TextareaFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElInputProps>> & {
    /**
     * 文本域类型
     * @remarks 文本域表单项内部实现为[el-input](https://element-plus.org/zh-CN/component/input.html)组件，可以透传[el-input的所有属性](https://element-plus.org/zh-CN/component/input.html#attributes)。
     */
    fieldType: 'textarea';
};
/**
 * 选择器表单项
 * @template T 表单的数据类型
 */
export type SelectFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & SelectProps<any> & Partial<Writable<ElSelectProps>> & {
    /**
     * 选择器类型
     * @remarks 内部实现为[liv-select]()组件，可以透传[liv-select的所有属性]()。
     */
    fieldType: 'select';
};
/**
 * 级联选择器表单项
 * @template T 表单的数据类型
 */
export type CascaderFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & CascaderProps<any> & Partial<Writable<ElCascaderProps>> & {
    /**
     * @remarks 级联选择器类型
     */
    fieldType: 'cascader';
};
/**
 * 单选框表单项
 * @template T 表单的数据类型
 */
export type RadioFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & RadioProps<any> & Partial<Writable<ElRadioGroupProps>> & {
    /**
     * @remarks 单选框类型
     */
    fieldType: 'radio';
};
/**
 * 多选框表单项
 * @template T 表单的数据类型
 */
export type CheckboxFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & CheckboxProps<any> & Partial<Writable<ElCheckboxGroupProps>> & {
    /**
     * @remarks 单选框类型
     */
    fieldType: 'checkbox';
};
/**
 * 日期选择器表单项
 * @template T 表单的数据类型
 */
export type DateFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElDatePickerProps>> & {
    /**
     * @remarks 日期选择器类型
     */
    fieldType: 'date';
};
/**
 * 时间选择器表单项
 * @template T 表单的数据类型
 */
export type TimeFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElTimePickerDefaultProps>> & {
    /**
     * @remarks 时间选择器类型
     */
    fieldType: 'time';
};
/**
 * 开关表单项
 * @template T 表单的数据类型
 */
export type SwitchFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElSwitchProps>> & {
    /**
     * @remarks 开关类型
     */
    fieldType: 'switch';
};
/**
 * 数字输入框表单项
 * @template T 表单的数据类型
 */
export type NumberFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElInputNumberProps>> & {
    /**
     * @remarks 数字输入框类型
     */
    fieldType: 'number';
    /**
     * 输入框头部内容
     */
    prefix?: string;
    /**
     * 输入框尾部内容
     */
    suffix?: string;
};
/**
 * 数字范围表单项
 * @template T 表单的数据类型
 */
export type NumberRangeFormItemField<T> = Omit<Omit<FormItemField<T>, 'fieldType'>, 'prop'> & NumberRangeProps & {
    /**
     * @remarks 数字范围类型
     */
    fieldType: 'numberRange';
    /**
     * @remarks 当`fieldType`为`numberRange`时，`prop`属性可以传入字符串数组，数组第一个元素绑定最小值，数组第二个元素绑定最大值，如果`prop`属性传入的是字符串，则该字符串绑定的是包含最小值和最大值的的数组
     */
    prop: string | string[];
};
/**
 * 评分表单项
 * @template T 表单的数据类型
 */
export type RateFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElRateProps>> & {
    /**
     * @remarks 评分类型
     */
    fieldType: 'rate';
};
/**
 * 取色器表单项
 * @template T 表单的数据类型
 */
export type ColorFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElColorPickerProps>> & {
    /**
     * @remarks 取色器类型
     */
    fieldType: 'color';
};
/**
 * 文件上传表单项
 * @template T 表单的数据类型
 */
export type UploadFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & Partial<Writable<ElUploadProps>> & {
    /**
     * @remarks 文件上传类型
     */
    fieldType: 'image' | 'audio' | 'video' | 'file';
    /**
     * 提示说明文字
     */
    tip?: string;
    /**
     * 文件大小限制，单位为字节
     */
    maxSize?: number;
    /**
     * 允许上传的文件类型，例如`['.jpg', '.png']`
     */
    extensions?: string[];
    /**
     * 是否开启分块上传
     * @defaultValue false
     */
    chunk?: boolean;
};
/**
 * 数据字典选择器表单项
 * @template T 表单的数据类型
 */
export type DictFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & DictSelectProps<any> & Partial<Writable<ElSelectProps>> & {
    /**
     * @remarks 数据字典选择器类型
     */
    fieldType: 'dict' | 'dictId';
};
/**
 * 网格级联选择器表单项
 * @template T 表单的数据类型
 */
export type GridFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & GridCascaderProps<any> & Partial<Writable<ElCascaderProps>> & {
    /**
     * @remarks 网格级联选择器类型
     */
    fieldType: 'grid' | 'gridCode' | 'gridId';
};
/**
 * 地图选点表单项
 * @template T 表单的数据类型
 */
export type LocationFormItemField<T> = Omit<Omit<FormItemField<T>, 'fieldType'>, 'prop'> & LocationPickerProps & {
    /**
     * @remarks 地图选点类型
     */
    fieldType: 'location';
    /**
     * @remarks 当`fieldType`为`location`时，`prop`属性可以传入字符串数组，数组第一个元素绑定经度，数组第二个元素绑定纬度，如果`prop`属性传入的是字符串，则该字符串绑定的是包含经纬度信息的对象
     */
    prop: string | string[];
};
/**
 * 富文本表单项
 * @template T 表单的数据类型
 */
export type RichTextFormItemField<T> = Omit<Omit<FormItemField<T>, 'fieldType'>, 'style'> & RichTextProps & {
    /**
     * @remarks 富文本类型
     */
    fieldType: 'richText';
};
/**
 * 插槽表单项
 * @template T 表单的数据类型
 */
export type SlotFormItemField<T> = Omit<FormItemField<T>, 'fieldType'> & {
    /**
     * @remarks 插槽类型
     */
    fieldType: 'slot';
};
/**
 * 表单项组件包含透传属性在内的全部属性
 * @template T 表单的数据类型
 */
export type FormItemFullProps<T> = Partial<ElFormItemProps & FormItemProps>;
export {};
