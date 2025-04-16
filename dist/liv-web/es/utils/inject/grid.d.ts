/**
 * 加载用户所属网格方法
 */
export type LoadUserGridFunction<T = any> = () => Promise<T>;
/**
 * 加载根网格方法
 */
export type LoadRootGridFunction<T = any> = () => Promise<T>;
/**
 * 通过网格编码查询网格信息方法
 */
export type LoadGridByCodeFunction<T = any> = (gridCode: string | number) => Promise<T>;
/**
 * 通过网格ID查询网格信息方法
 */
export type LoadGridByIdFunction<T = any> = (gridId: string | number) => Promise<T>;
/**
 * 通过网格编码查询子级网格信息方法
 */
export type LoadGridChildrenByCodeFunction<T = any> = (gridCode: string | number) => Promise<T>;
/**
 * 查询从起始网格编码到目标网格编码对应的网格树方法
 */
export type LoadGridTreeByCodeFunction<T = any> = (
/**
 * 起始网格编码
 */
rootCode: string | number, 
/**
 * 目标网格编码
 */
targetCode: string | number) => Promise<T>;
/**
 * 注入加载用户所属网格方法
 */
export declare function injectLoadUserGrid<T>(): LoadUserGridFunction<T>;
/**
 * 注入加载根网格方法
 */
export declare function injectLoadRootGrid<T>(): LoadRootGridFunction<T>;
/**
 * 注入通过网格编码查询网格方法
 */
export declare function injectLoadGridByCode<T>(): LoadGridByCodeFunction<T>;
/**
 * 注入通过网格ID查询网格方法
 */
export declare function injectLoadGridById<T>(): LoadGridByIdFunction<T>;
/**
 * 注入通过网格编码查询子级网格方法
 */
export declare function injectLoadGridChildrenByCode<T>(): LoadGridChildrenByCodeFunction<T>;
/**
 * 注入查询从起始网格编码到目标网格编码对应的网格树方法
 */
export declare function injectLoadGridTreeByCode<T>(): LoadGridTreeByCodeFunction<T>;
