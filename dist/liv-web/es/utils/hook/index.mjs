import { ref, onMounted, onUnmounted } from 'vue';

function useDarkModeObserver() {
  const isDarkMode = ref(false);
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const htmlElement = document.documentElement;
        isDarkMode.value = htmlElement.classList.contains("dark");
      }
    }
  });
  onMounted(() => {
    const htmlElement = document.documentElement;
    isDarkMode.value = htmlElement.classList.contains("dark");
    observer.observe(htmlElement, { attributes: true });
  });
  onUnmounted(() => {
    observer.disconnect();
  });
  return {
    isDarkMode
  };
}

export { useDarkModeObserver };
//# sourceMappingURL=index.mjs.map
