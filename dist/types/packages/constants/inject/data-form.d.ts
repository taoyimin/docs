import type { InjectionKey, Ref } from 'vue';
/**
 * 表单组件数据模型key
 */
export declare const DATA_FORM_MODEL_KEY: InjectionKey<Ref<{
    [key: string]: boolean;
}>>;
/**
 * 密文表单项加解密状态key
 */
export declare const CIPHERTEXT_STATUS_KEY: InjectionKey<Ref<{
    [key: string]: boolean;
}>>;
/**
 * 表单组件地图实例key
 */
export declare const DATA_FORM_AMAP_KEY: InjectionKey<Ref<{
    [key: string]: any;
}>>;
