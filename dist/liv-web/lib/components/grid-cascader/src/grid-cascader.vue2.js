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
    name: "LivGridCascader",
    // 关闭属性透传，手动通过v-bind实现属性透传。因为开启属性透传后，外部透传的props优先级最高，即使内部处理props重新赋值给el-cascader也不生效。
    inheritAttrs: false
  },
  __name: "grid-cascader",
  props: /* @__PURE__ */ vue.mergeModels({
    root: { type: Boolean, required: false, default: () => false },
    rootCode: { type: String, required: false }
  }, {
    "modelValue": { type: [String, Number, Array] },
    "modelModifiers": {},
    "gridId": { type: [String, Number, Array] },
    "gridIdModifiers": {},
    "gridName": { type: [String, Number, Array] },
    "gridNameModifiers": {},
    "grid": { type: null },
    "gridModifiers": {}
  }),
  emits: ["update:modelValue", "update:gridId", "update:gridName", "update:grid"],
  setup(__props, { expose: __expose }) {
    const loadGridChildrenByCode = grid.injectLoadGridChildrenByCode();
    const loadUserGrid = grid.injectLoadUserGrid();
    const loadRootGrid = grid.injectLoadRootGrid();
    const loadGridByCode = grid.injectLoadGridByCode();
    const loadGridById = grid.injectLoadGridById();
    const loadGridTreeByCode = grid.injectLoadGridTreeByCode();
    const globalProps = vue.inject(component.GRID_CASCADER_KEY, {});
    const props = __props;
    const propsProxy = index.getPropsPoxy(props, globalProps);
    const attrs = vue.useAttrs();
    const cascaderRef = vue.ref(null);
    const options = vue.ref([]);
    const gridCode = vue.useModel(__props, "modelValue");
    const gridId = vue.useModel(__props, "gridId");
    const gridName = vue.useModel(__props, "gridName");
    const grid$1 = vue.useModel(__props, "grid");
    const cascaderProps = {
      multiple: false,
      checkStrictly: true,
      lazy: true,
      emitPath: false,
      label: "label",
      value: "value",
      id: "id",
      children: "children",
      leaf: "leaf",
      lazyLoad: async (node, resolve) => {
        var _a;
        const { isLeaf, children, level, value } = node;
        if (((_a = node == null ? void 0 : node.children) == null ? void 0 : _a.length) || !level) return resolve([]);
        if (!isLeaf && children.length === 0) {
          resolve(await loadGridChildrenByCode(value));
        }
      },
      ...globalProps == null ? void 0 : globalProps.props,
      ...attrs.props || {}
    };
    const noEffectGridCode = vue.ref(false);
    const noEffectGridId = vue.ref(false);
    function updateModelValue(value) {
      noEffectGridCode.value = true;
      gridCode.value = value;
    }
    function togglePopperVisible(visibile) {
      var _a;
      (_a = cascaderRef.value) == null ? void 0 : _a.togglePopperVisible(visibile);
    }
    function getCheckedNodes(leafOnly = false) {
      var _a;
      return (_a = cascaderRef.value) == null ? void 0 : _a.getCheckedNodes(leafOnly);
    }
    function getCheckedNodesAsync() {
      return new Promise((resolve) => {
        if (!Array.isArray(gridCode.value) && gridCode.value || Array.isArray(gridCode.value) && gridCode.value.length > 0) {
          const timer = setInterval(() => {
            var _a, _b, _c, _d, _e;
            if ((_c = (_b = (_a = cascaderRef.value) == null ? void 0 : _a.getCheckedNodes(false)) == null ? void 0 : _b.length) != null ? _c : 0 > 0) {
              clearInterval(timer);
              resolve((_e = (_d = cascaderRef.value) == null ? void 0 : _d.getCheckedNodes(false)) != null ? _e : []);
            }
          }, 10);
        } else {
          resolve([]);
        }
      });
    }
    vue.watchEffect(async () => {
      if (!noEffectGridCode.value) {
        if (cascaderProps.multiple && cascaderProps.emitPath) {
          if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
            initDataByGridCodes(gridCode.value.map((codes) => codes.slice(-1)[0]));
          } else {
            initData();
          }
        } else if (cascaderProps.multiple && !cascaderProps.emitPath) {
          if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
            initDataByGridCodes(gridCode.value);
          } else {
            initData();
          }
        } else if (!cascaderProps.multiple && cascaderProps.emitPath) {
          if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
            initDataByGridCodes(gridCode.value.slice(-1));
          } else {
            initData();
          }
        } else {
          if (gridCode.value && !Array.isArray(gridCode.value)) {
            initDataByGridCodes([gridCode.value]);
          } else {
            initData();
          }
        }
      } else {
        noEffectGridCode.value = false;
      }
    });
    vue.watch(gridCode, (newValue, oldValue) => {
      if ((newValue == null ? void 0 : newValue.toString()) !== (oldValue == null ? void 0 : oldValue.toString())) {
        initModelByGridCode();
      }
    });
    async function initModelByGridCode() {
      noEffectGridId.value = true;
      const checkNodes = await getCheckedNodesAsync();
      if (cascaderProps.multiple && cascaderProps.emitPath) {
        if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
          grid$1.value = checkNodes.map((node) => node.pathNodes.map((node2) => node2.data));
          gridName.value = checkNodes.map(
            (node) => node.pathNodes.map((node2) => node2.data[cascaderProps.label])
          );
          gridId.value = checkNodes.map(
            (node) => node.pathNodes.map((node2) => node2.data[cascaderProps.id])
          );
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridId.value = [];
        }
      } else if (cascaderProps.multiple && !cascaderProps.emitPath) {
        if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
          grid$1.value = checkNodes.map((node) => node.data);
          gridName.value = checkNodes.map((node) => node.data[cascaderProps.label]);
          gridId.value = checkNodes.map((node) => node.data[cascaderProps.id]);
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridId.value = [];
        }
      } else if (!cascaderProps.multiple && cascaderProps.emitPath) {
        if (Array.isArray(gridCode.value) && gridCode.value.length > 0) {
          grid$1.value = checkNodes[0].pathNodes.map((node) => node.data);
          gridName.value = checkNodes[0].pathNodes.map((node) => node.data[cascaderProps.label]);
          gridId.value = checkNodes[0].pathNodes.map((node) => node.data[cascaderProps.id]);
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridId.value = [];
        }
      } else {
        if (gridCode.value && !Array.isArray(gridCode.value)) {
          grid$1.value = checkNodes[0].data;
          gridName.value = checkNodes[0].data[cascaderProps.label];
          gridId.value = checkNodes[0].data[cascaderProps.id];
        } else {
          grid$1.value = void 0;
          gridName.value = "";
          gridId.value = gridCode.value;
        }
      }
    }
    vue.watch(
      gridId,
      async (newValue, oldValue) => {
        if (!noEffectGridId.value && newValue !== oldValue) {
          if (cascaderProps.multiple && cascaderProps.emitPath) {
            if (Array.isArray(gridId.value) && gridId.value.length > 0) {
              Promise.all(
                gridId.value.map(async (ids) => {
                  return Promise.all(
                    ids.map(async (id) => {
                      return (await loadGridById(id))[cascaderProps.value];
                    })
                  );
                })
              ).then((res) => {
                gridCode.value = res;
              });
            } else {
              gridCode.value = [];
            }
          } else if (cascaderProps.multiple && !cascaderProps.emitPath || !cascaderProps.multiple && cascaderProps.emitPath) {
            if (Array.isArray(gridId.value) && gridId.value.length > 0) {
              Promise.all(
                gridId.value.map(async (id) => {
                  return (await loadGridById(id))[cascaderProps.value];
                })
              ).then((res) => {
                gridCode.value = res;
              });
            } else {
              gridCode.value = [];
            }
          } else {
            if (gridId.value && !Array.isArray(gridId.value)) {
              gridCode.value = (await loadGridById(gridId.value))[cascaderProps.value];
            } else {
              gridCode.value = gridId.value;
            }
          }
        } else {
          noEffectGridId.value = false;
        }
      },
      {
        immediate: true
      }
    );
    vue.watch(gridId, (newValue, oldValue) => {
      if ((newValue == null ? void 0 : newValue.toString()) !== (oldValue == null ? void 0 : oldValue.toString())) {
        initModelByGridId();
      }
    });
    async function initModelByGridId() {
      noEffectGridCode.value = true;
      const checkNodes = await getCheckedNodesAsync();
      if (cascaderProps.multiple && cascaderProps.emitPath) {
        if (Array.isArray(gridId.value) && gridId.value.length > 0) {
          grid$1.value = checkNodes.map((node) => node.pathNodes.map((node2) => node2.data));
          gridName.value = checkNodes.map(
            (node) => node.pathNodes.map((node2) => node2.data[cascaderProps.label])
          );
          gridCode.value = checkNodes.map(
            (node) => node.pathNodes.map((node2) => node2.data[cascaderProps.value])
          );
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridCode.value = [];
        }
      } else if (cascaderProps.multiple && !cascaderProps.emitPath) {
        if (Array.isArray(gridId.value) && gridId.value.length > 0) {
          grid$1.value = checkNodes.map((node) => node.data);
          gridName.value = checkNodes.map((node) => node.data[cascaderProps.label]);
          gridCode.value = checkNodes.map((node) => node.data[cascaderProps.value]);
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridCode.value = [];
        }
      } else if (!cascaderProps.multiple && cascaderProps.emitPath) {
        if (Array.isArray(gridId.value) && gridId.value.length > 0) {
          grid$1.value = checkNodes[0].pathNodes.map((node) => node.data);
          gridName.value = checkNodes[0].pathNodes.map((node) => node.data[cascaderProps.label]);
          gridCode.value = checkNodes[0].pathNodes.map((node) => node.data[cascaderProps.value]);
        } else {
          grid$1.value = [];
          gridName.value = [];
          gridCode.value = [];
        }
      } else {
        if (gridId.value && !Array.isArray(gridId.value)) {
          grid$1.value = checkNodes[0].data;
          gridName.value = checkNodes[0].data[cascaderProps.label];
          gridCode.value = checkNodes[0].data[cascaderProps.value];
        } else {
          grid$1.value = void 0;
          gridName.value = "";
          gridCode.value = gridId.value;
        }
      }
    }
    async function initData() {
      if (propsProxy.rootCode) {
        loadGridByCode(propsProxy.rootCode).then((res) => {
          options.value = [res];
        });
      } else if (propsProxy.root) {
        loadRootGrid().then((res) => {
          options.value = [res];
        });
      } else {
        loadGridByCode((await loadUserGrid())[cascaderProps.value]).then((res) => {
          options.value = [res];
        });
      }
    }
    async function initDataByGridCodes(gridCodes) {
      const rootCode = propsProxy.rootCode ? propsProxy.rootCode : (propsProxy.root ? await loadRootGrid() : await loadUserGrid())[cascaderProps.value];
      Promise.all(
        gridCodes.map((targetCode) => {
          return loadGridTreeByCode(rootCode, targetCode);
        })
      ).then((res) => {
        options.value = mergeGridTrees(res);
        if (gridCodes.length > 0) {
          initModelByGridCode();
        }
      });
    }
    function mergeGridTrees(trees) {
      return trees.reduce((pre, cur, index) => {
        if (index === 0) {
          return cur;
        } else {
          return mergeChildren(pre, cur);
        }
      }, []);
    }
    function mergeChildren(children1, children2) {
      for (const child1 of children1) {
        const child2 = children2.find(
          (child22) => child1[cascaderProps.value] === child22[cascaderProps.value]
        );
        if (!child2) continue;
        if (child1[cascaderProps.children] && child2[cascaderProps.children]) {
          mergeChildren(child1[cascaderProps.children], child2[cascaderProps.children]);
        } else if (!child1[cascaderProps.children] && child2[cascaderProps.children]) {
          child1[cascaderProps.children] = child2[cascaderProps.children];
        }
      }
      return children1;
    }
    __expose({
      togglePopperVisible,
      getCheckedNodes
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElCascader), vue.mergeProps({
        ref_key: "cascaderRef",
        ref: cascaderRef,
        class: "liv-grid-cascader",
        modelValue: gridCode.value,
        "onUpdate:modelValue": updateModelValue,
        options: options.value,
        props: cascaderProps,
        placeholder: "\u8BF7\u9009\u62E9"
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
      ]), 1040, ["modelValue", "options"]);
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=grid-cascader.vue2.js.map
