import { ref, getCurrentInstance } from "vue";
import { useUserStore } from "@szxc/stores";

export function useGridCode() {
  const store = useUserStore();
  const instance = getCurrentInstance()!;

  const route = instance.appContext.config.globalProperties.$route;

  function getDefaultCode(): string {
    return (route.query.gridCode as string) || store.userInfo?.globalCode;
  }

  const code = ref<string>(getDefaultCode());
  return code;
}
