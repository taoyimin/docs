import type { LoadDictListByIdFunction, LoadDictListFunction } from 'liv-web/es/utils';
import type { InjectionKey } from 'vue';
/**
 * 加载数据字典列表key
 */
export declare const LOAD_DICT_LIST_KEY: InjectionKey<LoadDictListFunction>;
/**
 * 加载子级数据字典列表key
 */
export declare const LOAD_DICT_LIST_BY_ID_KEY: InjectionKey<LoadDictListByIdFunction>;
