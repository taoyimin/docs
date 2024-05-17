import { merge, sortBy, zipWith, orderBy } from "lodash-es";

type OrderType = "asc" | "desc";

export interface MergeStatisticsParams {
  key: string;
  orderKey?: string | string[];
  orderType?: OrderType | OrderType[];
}

/**
 * 合并统计结果方法
 * @param key 根据指定的键名进行合并
 * @param args 统计Promise
 */
export function mergeStatistics(
  params: string | MergeStatisticsParams,
  ...args: Promise<any>[]
) {
  const mergeKey = typeof params === "string" ? params : params.key;
  return Promise.all(args).then((results) => {
    const sortResults = results.map((res) => {
      return sortBy(res, [mergeKey]);
    });
    const mergeResults = zipWith(...sortResults, function (...args) {
      return merge({}, ...args);
    });
    if (typeof params === "string") {
      return mergeResults;
    } else {
      return orderBy(mergeResults, params.orderKey, params.orderType);
    }
  });
}
