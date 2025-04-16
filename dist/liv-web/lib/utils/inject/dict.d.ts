/**
 * 通过dictType查询数据字典方法
 */
export type LoadDictListFunction<T = any> = (dictType: string) => Promise<T>;
/**
 * 通过parentId查询数据字典方法
 */
export type LoadDictListByIdFunction<T = any> = (parentId: number) => Promise<T>;
/**
 * 注入加载数据字典列表方法
 */
export declare function injectLoadDictList<T>(): LoadDictListFunction<T>;
/**
 * 注入加载子级数据字典列表方法
 */
export declare function injectLoadDictListById<T>(): LoadDictListByIdFunction<T>;
