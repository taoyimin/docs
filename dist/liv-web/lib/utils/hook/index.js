'use strict';

var vue = require('vue');

function useDarkModeObserver() {
  const isDarkMode = vue.ref(false);
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const htmlElement = document.documentElement;
        isDarkMode.value = htmlElement.classList.contains("dark");
      }
    }
  });
  vue.onMounted(() => {
    const htmlElement = document.documentElement;
    isDarkMode.value = htmlElement.classList.contains("dark");
    observer.observe(htmlElement, { attributes: true });
  });
  vue.onUnmounted(() => {
    observer.disconnect();
  });
  return {
    isDarkMode
  };
}

exports.useDarkModeObserver = useDarkModeObserver;
//# sourceMappingURL=index.js.map
