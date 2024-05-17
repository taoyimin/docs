import { ref, onUnmounted } from "vue";

/**
 * 倒计时器
 * @param second 需要倒计时的秒数
 * @returns 返回一个包含 count、timer、start 和 reset 的对象
 * - count 是一个 ref 类型的数字，表示倒计时的秒数
 * - timer 是一个 ref 类型的数字，表示定时器的 id
 * - start 是一个函数，用于启动倒计时
 * - pause 是一个函数，用于暂停倒计时
 * - reset 是一个函数，用于重置倒计时
 * @example
 * ```ts
 * import { useCountDown } from '@szxc/utils'
 * 
 * const { count, timer, start, pause, reset } = useCountDown()
```
 */
export function useCountDown(second = 60) {
  const count = ref<number>(second);
  const timer = ref<number>(null);

  function start() {
    timer.value = setInterval(() => {
      count.value--;
      if (count.value === 0) {
        clearInterval(timer.value);
        timer.value = null;
      }
    }, 1000);
  }

  function pause() {
    clearInterval(timer.value);
  }

  function reset() {
    clearInterval(timer.value);
    timer.value = null;
    count.value = second;
  }

  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  });

  return { count, timer, start, pause, reset };
}
