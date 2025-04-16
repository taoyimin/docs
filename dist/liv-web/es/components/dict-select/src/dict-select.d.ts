import type { ElSelectProps, SelectProps } from '../../select';
/**
 * 字段选择器属性
 * @template T 字典类型
 */
export interface DictSelectProps<T> {
    /**
     * 字典类型
     */
    dictType?: string;
    /**
     * 父字典id
     */
    parentId?: number;
    /**
     * 指定列表项文字为数据对象的某个属性值
     * @defaultValue "label"
     */
    labelKey?: string;
    /**
     * 指定列表项选中后绑定值为数据对象的某个属性值
     * @defaultValue "value"
     */
    valueKey?: string;
    /**
     * 指定列表项选中后绑定id为数据对象的某个属性值
     * @defaultValue "id"
     */
    idKey?: string;
}
/**
 * 字典选择器包含透传属性在内的全部属性
 * @template T 字典类型
 */
export type DictSelectFullProps<T> = Partial<Omit<Omit<ElSelectProps & SelectProps<T>, 'modelValue'>, 'valueKey'> & DictSelectProps<T>>;
