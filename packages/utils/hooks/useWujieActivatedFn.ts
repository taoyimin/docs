import { ref, nextTick, onActivated } from 'vue'

// https://github.com/Tencent/wujie/issues/516
export function useWujieActivatedFn(bus: any, name: string, route: any, eventName: string) {
  const isFirst = ref(true)
  const loading = ref(false)

  onActivated(() => {
    if (!isFirst.value) loading.value = true
    const subAppName = `/${name}`
    const path = route.path.replace(subAppName, '')
    // 将子应用需要跳转的地址传递过去
    bus.$emit(eventName, path)

    nextTick(() => {
      loading.value = false
      isFirst.value = false
    })
  })

  return {
    loading
  }
}
