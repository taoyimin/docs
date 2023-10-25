const plugins = [
  {
    // 解决vite4子应用切换样式丢失问题（https://github.com/Tencent/wujie/issues/434）
    patchElementHook(element, iframeWindow) {
      if (element.nodeName === "STYLE") {
        element.insertAdjacentElement = function (_position, ele) {
          iframeWindow.document.head.appendChild(ele);
        };
      }
    },
  },
];

export default plugins;
