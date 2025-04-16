/**
 * 观察页面是否进入深色模式
 * @remarks 仅观察页面html的class属性变化，当检测到'dark'类被添加或移除时，会改变isDarkMode的值
 * @returns {Object} 返回包含isDarkMode响应式引用的对象
 * @property {Ref<boolean>} isDarkMode 表示当前是否为深色模式的布尔值引用
 */
export declare function useDarkModeObserver(): {
    isDarkMode: import("vue").Ref<boolean, boolean>;
};
