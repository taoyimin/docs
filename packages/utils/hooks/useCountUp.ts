import { ref, onUnmounted } from 'vue'

/**
 * 计时器
 * @param second 需要计时的秒数
 * @returns 返回一个包含 count、timer、start、pause 和 reset 的对象
 * - count 是一个 ref 类型的数字，表示计时的秒数
 * - timer 是一个 ref 类型的数字，表示定时器的 id
 * - start 是一个函数，用于启动计时
 * - pause 是一个函数，用于暂停计时
 * - reset 是一个函数，用于重置计时
 * @example
 * ```ts
 * import { useCountUp } from '@szxc/utils'
 *
 * const { count, timer, start, pause, reset } = useCountUp()
 * ```
 */
export function useCountUp(second = Infinity) {
  const count = ref<number>(0)
  const timer = ref<NodeJS.Timeout | null>(null)

  function start() {
    timer.value = setInterval(() => {
      count.value++
      if (count.value === second) {
        if (timer.value) clearInterval(timer.value)
        timer.value = null
      }
    }, 1000)
  }

  function pause() {
    if (timer.value) clearInterval(timer.value)
  }

  function reset() {
    if (timer.value) clearInterval(timer.value)
    timer.value = null
    count.value = 0
  }

  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  })

  return { count, timer, start, pause, reset }
}
