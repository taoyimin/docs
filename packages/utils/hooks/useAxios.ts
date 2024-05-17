import { Ref, ref } from "vue";

// interface Options {
//   isPagination?: boolean;
// }

// const defaultOption: Options = {
//   isPagination: false
// };

// 正常get请求封装
export function useAxios<T>(
  fn: Function,
  defaultInfo?: any,
  formatData?: (res: any) => Ref<T>
): [Function, Ref, Ref] {
  const loading = ref(false);
  const result = ref<T>(defaultInfo ?? "");

  const run = (params = {}, onSuccess?: Function, onError?: Function) => {
    loading.value = true;
    fn(params)
      .then((data: any) => {
        loading.value = false;
        result.value = formatData ? formatData(data) : data;
        onSuccess && onSuccess(data);
      })
      .catch((err) => {
        loading.value = false;
        onError && onError(err);
      });
  };

  return [run, loading, result];
}
