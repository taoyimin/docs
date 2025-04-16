import type { LoadGridByCodeFunction, LoadGridByIdFunction, LoadGridChildrenByCodeFunction, LoadGridTreeByCodeFunction, LoadRootGridFunction, LoadUserGridFunction } from 'liv-web/es/utils';
import type { InjectionKey } from 'vue';
/**
 * 加载用户所属网格key
 */
export declare const LOAD_USER_GRID_KEY: InjectionKey<LoadUserGridFunction>;
/**
 * 加载根网格key
 */
export declare const LOAD_ROOT_GRID_KEY: InjectionKey<LoadRootGridFunction>;
/**
 * 根据网格编码查询网格key
 */
export declare const LOAD_GRID_BY_CODE_KEY: InjectionKey<LoadGridByCodeFunction>;
/**
 * 根据网格ID查询网格key
 */
export declare const LOAD_GRID_BY_ID_KEY: InjectionKey<LoadGridByIdFunction>;
/**
 * 根据网格编码查询子级网格key
 */
export declare const LOAD_GRID_CHILDREN_BY_CODE_KEY: InjectionKey<LoadGridChildrenByCodeFunction>;
/**
 * 查询从起始网格编码到目标网格编码对应的网格树key
 */
export declare const LOAD_GRID_TREE_BY_CODE_KEY: InjectionKey<LoadGridTreeByCodeFunction>;
