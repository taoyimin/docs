const vRemove = {
  mounted: (el, binding) => {
    var _a, _b;
    if (binding.value) {
      while (el.firstChild) {
        (_a = el.parentNode) == null ? void 0 : _a.insertBefore(el.firstChild, el);
      }
      (_b = el.parentNode) == null ? void 0 : _b.removeChild(el);
    }
  }
};

export { vRemove };
//# sourceMappingURL=index.mjs.map
