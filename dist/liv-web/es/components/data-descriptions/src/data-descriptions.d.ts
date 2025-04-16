import type { ImageProps, LinkProps, descriptionProps, descriptionItemProps, TagProps } from 'element-plus';
import type { ExtractPropTypes, MaybeRef } from 'vue';
import type { QrCodeProps } from '../../qr-code';
import type { VerifyProps, VerifyResult } from '../../verify';
/**
 * 描述列表属性
 * @template T 描述列表的数据类型
 */
export interface DataDescriptionsProps<T = Record<string | number | symbol, any>> {
    /**
     * 描述列表数据
     * @template T 描述列表的数据类型
     */
    data?: T | Promise<T>;
    /**
     * 描述列表字段配置项集合
     * @template T 描述列表的数据类型
     */
    fields: DataDescriptionsFields<T>;
}
/**
 * 描述项字段类型
 */
export type DescriptionsItemFieldType = 'text' | 'ciphertext' | 'tag' | 'link' | 'image' | 'audio' | 'video' | 'file' | 'qrcode' | 'richText' | 'slot';
/**
 * 描述列表字段配置项
 * @template T 描述列表的数据类型
 */
export type DataDescriptionsField<T = Record<string | number | symbol, any>> = TextDescriptionsItemField<T> | CiphertextDescriptionsItemField<T> | TagDescriptionsItemField<T> | LinkDescriptionsItemField<T> | ImageDescriptionsItemField<T> | AudioDescriptionsItemField<T> | VideoDescriptionsItemField<T> | FileDescriptionsItemField<T> | QrCodeDescriptionsItemField<T> | RichTextDescriptionsItemField<T> | SlotDescriptionsItemField<T>;
/**
 * 描述列表字段配置项集合
 * @template T 描述列表的数据类型
 */
export type DataDescriptionsFields<T = Record<string | number | symbol, any>> = MaybeRef<DataDescriptionsField<T>>[];
/**
 * el-descriptions-item属性
 */
export type ElDescriptionsItemProps = ExtractPropTypes<typeof descriptionItemProps>;
/**
 * el-descriptions属性
 */
export type ElDescriptionsProps = ExtractPropTypes<typeof descriptionProps>;
/**
 * 描述项基类
 * @template T 描述列表的数据类型
 */
export interface DescriptionsItemField<T = Record<string | number | symbol, any>> extends Partial<ElDescriptionsItemProps> {
    /**
     * 字段名称
     */
    prop: string;
    /**
     * 描述项字段类型
     */
    fieldType?: DescriptionsItemFieldType;
    /**
     * 权限标识
     */
    authority?: string | string[];
    /**
     * 用来格式化内容
     * @template T 描述列表的数据类型
     * @param value 描述项数据对象对应的{@link prop}字段值
     * @param data 描述项数据对象
     * @returns 格式化后的内容
     */
    formatter?: (value: T[keyof T], data: T) => string;
}
/**
 * 文本描述项
 * @template T 描述列表的数据类型
 */
export type TextDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & {
    /**
     * 文本类型
     */
    fieldType?: 'text';
};
/**
 * 加密文本描述项
 * @template T 描述列表的数据类型
 */
export type CiphertextDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & VerifyProps & {
    /**
     * 加密文本类型
     */
    fieldType?: 'ciphertext';
    /**
     * 解密方法
     * @param params 验证成功后返回的参数
     * @param data 描述列表组件的数据对象
     * @returns 解密后的文本
     */
    decrypt: (params: VerifyResult, data: T) => string | Promise<string>;
};
/**
 * 标签类型
 */
type TagType = 'success' | 'warning' | 'info' | 'primary' | 'danger';
/**
 * 标签描述项
 * @template T 描述列表的数据类型
 */
export type TagDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & Partial<Omit<TagProps, 'type'>> & {
    /**
     * 标签类型
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
    type?: TagType | ((value: T[keyof T], data: T) => TagType);
};
/**
 * 链接描述项
 * @template T 描述列表的数据类型
 */
export type LinkDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & Partial<LinkProps> & {
    /**
     * 链接类型
     */
    fieldType: 'link';
};
/**
 * 图片描述项
 * @template T 描述列表的数据类型
 */
export type ImageDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & Partial<ImageProps> & {
    /**
     * 图片类型
     */
    fieldType: 'image';
};
/**
 * 音频描述项
 * @template T 描述列表的数据类型
 */
export type AudioDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & {
    /**
     * 音频类型
     */
    fieldType: 'audio';
};
/**
 * 视频描述项
 * @template T 描述列表的数据类型
 */
export type VideoDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & {
    /**
     * 视频类型
     */
    fieldType: 'video';
};
/**
 * 文件描述项
 * @template T 描述列表的数据类型
 */
export type FileDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & Partial<LinkProps> & {
    /**
     * 文件类型
     */
    fieldType: 'file';
};
/**
 * 二维码描述项
 * @template T 描述列表的数据类型
 */
export type QrCodeDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & Partial<QrCodeProps> & {
    /**
     * 二维码类型
     */
    fieldType: 'qrcode';
};
/**
 * 富文本描述项
 * @template T 描述列表的数据类型
 */
export type RichTextDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & {
    /**
     * 富文本类型
     */
    fieldType: 'richText';
    /**
     * 富文本展示高度
     * @defaultValue '200px'
     */
    richTextHeight?: string;
};
/**
 * 插槽描述项
 * @template T 描述列表的数据类型
 */
export type SlotDescriptionsItemField<T> = Omit<DescriptionsItemField<T>, 'fieldType'> & {
    /**
     * 插槽类型
     */
    fieldType: 'slot';
};
/**
 * 数据表述列表组件包含透传属性在内的全部属性
 * @template T 描述列表的数据类型
 */
export type DataDescriptionsFullProps<T> = Partial<ElDescriptionsProps & DataDescriptionsProps<T>>;
export {};
