import { ref, watchEffect } from 'vue'
import { useCountUp } from './useCountUp'

/**
 * 计算时长
 * @returns 返回一个包含 duration、timer、start、pause 和 reset 的对象
 * - duration 是一个 ref 类型的字符串，表示时长
 * - timer 是一个 ref 类型的数字，表示定时器的 id
 * - start 是一个函数，用于启动计时
 * - pause 是一个函数，用于暂停计时
 * - reset 是一个函数，用于重置计时
 * @example
 * ```ts
 * import { useDuration } from '@szxc/utils'
 *
 * const { duration, timer, start, pause, reset } = useDuration()
 * ```
 */
export function useDuration(format: string = 'mm:ss') {
  const duration = ref('')

  const { count, timer, start, pause, reset } = useCountUp()

  watchEffect(() => {
    const hours = Math.floor(count.value / 3600)
    const minutes = Math.floor((count.value % 3600) / 60)
    const seconds = count.value % 60
    duration.value = format
      .replace('HH', hours.toString().padStart(2, '0'))
      .replace('mm', minutes.toString().padStart(2, '0'))
      .replace('ss', seconds.toString().padStart(2, '0'))
  })

  return { duration, timer, start, pause, reset }
}
