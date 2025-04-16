'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var lodashEs = require('lodash-es');
require('../../../utils/index.js');
require('../../../constants/index.js');
var grid = require('../../../utils/inject/grid.js');
var component = require('../../../constants/inject/component.js');
var index = require('../../../utils/component/index.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivGridTree"
  },
  __name: "grid-tree",
  props: /* @__PURE__ */ vue.mergeModels({
    root: { type: Boolean, required: false, default: () => false }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {},
    "gridId": { type: [String, Number] },
    "gridIdModifiers": {},
    "gridName": { type: String },
    "gridNameModifiers": {},
    "grid": { type: null },
    "gridModifiers": {}
  }),
  emits: ["update:modelValue", "update:gridId", "update:gridName", "update:grid"],
  setup(__props, { expose: __expose }) {
    const loadGridChildrenByCode = grid.injectLoadGridChildrenByCode();
    const loadUserGrid = grid.injectLoadUserGrid();
    const loadRootGrid = grid.injectLoadRootGrid();
    const loadGridById = grid.injectLoadGridById();
    const loadGridTreeByCode = grid.injectLoadGridTreeByCode();
    const globalProps = vue.inject(component.GRID_TREE_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const attrs = vue.useAttrs();
    const treeRef = vue.ref(null);
    const gridCode = vue.useModel(__props, "modelValue");
    const gridId = vue.useModel(__props, "gridId");
    const gridName = vue.useModel(__props, "gridName");
    const grid$1 = vue.useModel(__props, "grid");
    const treeProps = {
      id: "id",
      label: "label",
      children: "children",
      value: "value",
      isLeaf: "isLeaf",
      disabled: "disabled",
      ...globalProps == null ? void 0 : globalProps.props,
      ...attrs.props || {}
    };
    const defaultExpandedKeys = vue.ref([]);
    const expose = {
      ...treeRef.value
    };
    __expose(expose);
    vue.onMounted(() => {
      Object.assign(expose, treeRef.value);
    });
    function handleCheckChange(data, checked) {
      var _a, _b;
      if (checked) {
        (_a = treeRef.value) == null ? void 0 : _a.setCheckedKeys([data[treeProps.value]]);
        gridCode.value = data[treeProps.value];
      } else {
        if (((_b = treeRef.value) == null ? void 0 : _b.getCheckedNodes().length) == 0) {
          gridCode.value = "";
        }
      }
    }
    vue.watch(gridCode, (value) => {
      initTree(value);
    });
    vue.watch(
      gridId,
      async (newValue, oldValue) => {
        var _a, _b;
        if (newValue !== oldValue) {
          const checkNode = (_a = treeRef.value) == null ? void 0 : _a.getNode(gridCode.value);
          if (((_b = checkNode == null ? void 0 : checkNode.data) == null ? void 0 : _b[treeProps.id]) !== newValue) {
            if (newValue) {
              const grid2 = await loadGridById(newValue);
              gridCode.value = grid2[treeProps.value];
            } else {
              gridCode.value = newValue;
            }
          }
        }
      },
      {
        immediate: true
      }
    );
    async function initModelByGridCode() {
      var _a;
      const checkNode = (_a = treeRef.value) == null ? void 0 : _a.getNode(gridCode.value);
      if (gridCode.value && checkNode) {
        grid$1.value = checkNode.data;
        gridName.value = checkNode.data[treeProps.label];
        gridId.value = checkNode.data[treeProps.id];
      } else {
        grid$1.value = void 0;
        gridName.value = "";
        gridId.value = gridCode.value;
      }
    }
    async function initTree(gridCode2) {
      var _a, _b, _c, _d, _e, _f, _g;
      if (gridCode2) {
        const node = (_a = treeRef.value) == null ? void 0 : _a.getNode(gridCode2);
        if (!node) {
          const grids = await getInitData();
          defaultExpandedKeys.value = [];
          await vue.nextTick();
          const codes = getDeepestGridCodes(grids[0]);
          (_b = treeRef.value) == null ? void 0 : _b.updateKeyChildren(codes[0], grids[0][treeProps.children]);
          defaultExpandedKeys.value = codes;
          (_c = treeRef.value) == null ? void 0 : _c.setCheckedKeys([gridCode2]);
        } else {
          defaultExpandedKeys.value = [];
          await vue.nextTick();
          defaultExpandedKeys.value = [(_e = (_d = node == null ? void 0 : node.parent) == null ? void 0 : _d.data) == null ? void 0 : _e.gridCode];
          (_f = treeRef.value) == null ? void 0 : _f.setCheckedKeys([gridCode2]);
        }
        await vue.nextTick();
        initModelByGridCode();
      } else {
        (_g = treeRef.value) == null ? void 0 : _g.setCheckedKeys([]);
        initModelByGridCode();
      }
    }
    async function getInitData() {
      if (gridCode.value) {
        if (propsProxy.root) {
          const rootGrid = await loadRootGrid();
          return await loadGridTreeByCode(rootGrid[treeProps.value], gridCode.value);
        } else {
          const userGird = await loadUserGrid();
          return await loadGridTreeByCode(userGird[treeProps.value], gridCode.value);
        }
      } else if (propsProxy.root) {
        const grid2 = await loadRootGrid();
        return [grid2];
      } else {
        const grid2 = await loadUserGrid();
        return [grid2];
      }
    }
    async function load(node, resolve) {
      var _a, _b;
      if (node.level === 0) {
        const grids = await getInitData();
        resolve(grids);
        if (gridCode.value) {
          const codes = getDeepestGridCodes(grids[0]);
          defaultExpandedKeys.value = codes;
          (_a = treeRef.value) == null ? void 0 : _a.setCheckedKeys([gridCode.value]);
          await vue.nextTick();
          initModelByGridCode();
        }
      } else {
        if ((_b = node.data[treeProps.children]) == null ? void 0 : _b.length) {
          resolve(node.data[treeProps.children]);
        } else {
          const grids = await loadGridChildrenByCode(node.data[treeProps.value]);
          resolve(grids);
        }
      }
    }
    function getDeepestGridCodes(gridTree) {
      const deepestGridCodes = [];
      function traverse(grid2, gridCodes) {
        gridCodes.push(grid2[treeProps.value]);
        const children = grid2[treeProps.children];
        if (!children || Array.isArray(children) && children.length === 0) {
          if (gridCodes.length - 1 > deepestGridCodes.length) {
            deepestGridCodes.splice(0, deepestGridCodes.length, ...gridCodes.slice(0, -1));
          }
        } else {
          children.forEach((child) => {
            traverse(child, gridCodes);
          });
        }
        gridCodes.pop();
      }
      traverse(gridTree, []);
      return deepestGridCodes;
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTree), vue.mergeProps({
        ref_key: "treeRef",
        ref: treeRef,
        class: "liv-grid-tree",
        load,
        props: treeProps,
        lazy: "",
        showCheckbox: "",
        checkStrictly: "",
        defaultExpandedKeys: defaultExpandedKeys.value,
        "node-key": treeProps.value,
        onCheckChange: handleCheckChange
      }, vue.unref(lodashEs.omit)({ ...vue.unref(globalProps), ...vue.unref(attrs) }, "props")), vue.createSlots({
        _: 2
        /* DYNAMIC */
      }, [
        vue.renderList(_ctx.$slots, (_, name) => {
          return {
            name,
            fn: vue.withCtx((slotData) => [
              vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
            ])
          };
        })
      ]), 1040, ["defaultExpandedKeys", "node-key"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=grid-tree.vue2.js.map
