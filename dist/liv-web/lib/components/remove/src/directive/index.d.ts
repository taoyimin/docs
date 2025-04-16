import type { ObjectDirective } from 'vue';
/**
 * 自定义remove指令
 * 用于移除某一个dom元素，同时保留该dom元素所有的子元素
 * @example
 * ```html
 * <div class="container" v-remove="true">
 *   <div class="content">内容1</div>
 *   <div class="content">内容2</div>
 *   <div class="content">内容3</div>
 * </div>
 * ```
 * 最终将渲染：
 * ```html
 * <div class="content">内容1</div>
 * <div class="content">内容2</div>
 * <div class="content">内容3</div>
 * ```
 */
export declare const vRemove: ObjectDirective;
