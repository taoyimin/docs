import type { RendererNode } from 'vue'

/**
 * 多维数组转一维数组
 * @param arr 需要转换的数组
 * @returns 新数组
 * @example
 * ```ts
 * const multiArray = [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]
 * ];
 *
 * const flattenedArray = flattenArray(multiArray);
 * console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 */
export const flattenArray = (arr) => {
  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      return flat.concat(flattenArray(item))
    } else {
      return flat.concat(item)
    }
  }, [])
}

/**
 * 毫秒转相差的时间格式
 * @param arr 需要转换的时间戳
 * @returns 返回xx天xx小时xx分钟xxx秒
 */
export const getTimeParse = (millisecond) => {
  const dayDiff = Math.floor(millisecond / (24 * 3600 * 1000)) //计算出相差天数
  const leave1 = millisecond % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
  //计算相差分钟数
  const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
  //计算相差秒数
  const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000)
  // var leave4=leave3%(60*1000)   //计算分钟数后剩余的毫秒数
  // var minseconds=Math.round(leave4/1000)
  let timeFn = ''
  if (dayDiff > 0) {
    timeFn += dayDiff + ' 天 '
  }
  if (hours > 0) {
    timeFn += hours + ' 小时 '
  }
  if (minutes > 0) {
    timeFn += minutes + ' 分钟 '
  }
  if (seconds > 0) {
    timeFn += seconds + ' 秒 '
  }
  return timeFn
}
/**
 * hex颜色转rgb颜色
 * @param str 颜色值字符串
 * @returns 返回处理后的颜色值
 */
export function hexToRgb(str: any) {
  let hexs: any = ''
  const reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(str)) return console.error('输入错误的hex')
  str = str.replace('#', '')

  hexs = str.match(/../g)

  for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16)
  return hexs
}

/**
 * rgb颜色转Hex颜色
 * @param r 代表红色
 * @param g 代表绿色
 * @param b 代表蓝色
 * @returns 返回处理后的颜色值
 */
export function rgbToHex(r: any, g: any, b: any) {
  const reg = /^\d{1,3}$/
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) return console.error('输入错误的rgb颜色值')
  const hexs = [r.toString(16), g.toString(16), b.toString(16)]

  for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`

  return `#${hexs.join('')}`
}

/**
 * 加深颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getDarkColor(color: string, level: number) {
  const reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(color)) return console.error('输入错误的hex颜色值')
  const rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level))
  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

/**
 * 变浅颜色值
 * @param color 颜色值字符串
 * @param level 加深的程度，限0-1之间
 * @returns 返回处理后的颜色值
 */
export function getLightColor(color: string, level: number) {
  const reg = /^\#?[0-9A-Fa-f]{6}$/
  if (!reg.test(color)) return console.error('输入错误的hex颜色值')
  const rgb = hexToRgb(color)

  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(255 * level + rgb[i] * (1 - level))
  }

  return rgbToHex(rgb[0], rgb[1], rgb[2])
}

/**
 * px跟随屏幕转换像素
 * @param px 原像素
 * @returns 返回转换后的像素
 */
export function pxToRem(px: number): number {
  const clientWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth) {
    return px
  }
  // 此处的1920 为设计稿的宽度，记得修改！
  const scale = clientWidth / 1920
  return px * scale
}

/**
 * 一维数组转二维数组
 * @param arr 原数组
 * @returns 返回转换后的二维数组
 */
export function arrayToMatrix(arr, column) {
  const newArr = []
  let i = 0
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + column))
    i += column
  }
  return newArr
}

// 打印
export function printJS(...arg) {
  import('print-js').then((module) => {
    module.default(...arg)
  })
}

// token失效后重定向地址
export function getRedirectUrl() {
  return location.pathname + location.search
}

/**
 * 从自身递归向父级获取某个属性
 * @param el
 * @param attributeName
 * @returns
 */
export function getAttributeFromParents(el: RendererNode | null, attributeName: string) {
  if (el) {
    const attr = el.getAttribute(attributeName)
    if (attr) {
      return attr
    } else {
      return getAttributeFromParents(el.parentElement, attributeName)
    }
  } else {
    return ''
  }
}

/**
 * 通过百分比来计算固定范围内的颜色值
 * @param percentage 百分比
 * @param maxColor
 * @param middleColor
 * @param minColor
 * @returns
 */
export function getComputedColor(
  percentage: number,
  maxColor: string,
  middleColor: string,
  minColor: string
) {
  let rgb1 = hexToRgb(minColor)
  let rgb2 = hexToRgb(middleColor)
  let rgb3 = hexToRgb(maxColor)
  if (percentage * 2 < 1) {
    // 在两个颜色之间进行插值
    let r = Math.round(rgb1[0] + percentage * 2 * (rgb2[0] - rgb1[0]))
    let g = Math.round(rgb1[1] + percentage * 2 * (rgb2[1] - rgb1[1]))
    let b = Math.round(rgb1[2] + percentage * 2 * (rgb2[2] - rgb1[2]))
    // 将RGB值转换回十六进制颜色代码
    return rgbToHex(r, g, b)
  } else {
    // 在两个颜色之间进行插值
    let r = Math.round(rgb2[0] + (percentage * 2 - 1) * (rgb3[0] - rgb2[0]))
    let g = Math.round(rgb2[1] + (percentage * 2 - 1) * (rgb3[1] - rgb2[1]))
    let b = Math.round(rgb2[2] + (percentage * 2 - 1) * (rgb3[2] - rgb2[2]))
    // 将RGB值转换回十六进制颜色代码
    return rgbToHex(r, g, b)
  }
}
