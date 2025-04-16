import '../../constants/index.mjs';
import { inject } from 'vue';
import { LOAD_USER_GRID_KEY, LOAD_ROOT_GRID_KEY, LOAD_GRID_BY_CODE_KEY, LOAD_GRID_BY_ID_KEY, LOAD_GRID_CHILDREN_BY_CODE_KEY, LOAD_GRID_TREE_BY_CODE_KEY } from '../../constants/inject/grid.mjs';

function injectLoadUserGrid() {
  const loadUserGrid = inject(LOAD_USER_GRID_KEY, void 0);
  if (loadUserGrid) {
    return loadUserGrid;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u52A0\u8F7D\u7528\u6237\u6240\u5C5E\u7F51\u683C\u65B9\u6CD5\u3002"));
  }
}
function injectLoadRootGrid() {
  const loadRootGrid = inject(LOAD_ROOT_GRID_KEY, void 0);
  if (loadRootGrid) {
    return loadRootGrid;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u52A0\u8F7D\u6839\u7F51\u683C\u65B9\u6CD5\u3002"));
  }
}
function injectLoadGridByCode() {
  const loadGridByCode = inject(LOAD_GRID_BY_CODE_KEY, void 0);
  if (loadGridByCode) {
    return loadGridByCode;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u901A\u8FC7\u7F51\u683C\u7F16\u7801\u67E5\u8BE2\u7F51\u683C\u65B9\u6CD5\u3002"));
  }
}
function injectLoadGridById() {
  const loadGridById = inject(LOAD_GRID_BY_ID_KEY, void 0);
  if (loadGridById) {
    return loadGridById;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u901A\u8FC7\u7F51\u683CID\u67E5\u8BE2\u7F51\u683C\u65B9\u6CD5\u3002"));
  }
}
function injectLoadGridChildrenByCode() {
  const loadGridChildrenByCode = inject(LOAD_GRID_CHILDREN_BY_CODE_KEY, void 0);
  if (loadGridChildrenByCode) {
    return loadGridChildrenByCode;
  } else {
    return () => Promise.reject(new Error("[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u901A\u8FC7\u7F51\u683C\u7F16\u7801\u67E5\u8BE2\u5B50\u7EA7\u7F51\u683C\u65B9\u6CD5\u3002"));
  }
}
function injectLoadGridTreeByCode() {
  const loadGridTreeByCode = inject(LOAD_GRID_TREE_BY_CODE_KEY, void 0);
  if (loadGridTreeByCode) {
    return loadGridTreeByCode;
  } else {
    return () => Promise.reject(
      new Error(
        "[liv-web/utils]\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u6CE8\u5165\u67E5\u8BE2\u4ECE\u8D77\u59CB\u7F51\u683C\u7F16\u7801\u5230\u76EE\u6807\u7F51\u683C\u7F16\u7801\u5BF9\u5E94\u7684\u7F51\u683C\u6811\u65B9\u6CD5\u3002"
      )
    );
  }
}

export { injectLoadGridByCode, injectLoadGridById, injectLoadGridChildrenByCode, injectLoadGridTreeByCode, injectLoadRootGrid, injectLoadUserGrid };
//# sourceMappingURL=grid.mjs.map
