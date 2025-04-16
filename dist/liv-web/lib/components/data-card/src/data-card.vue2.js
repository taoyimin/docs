'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var lodashEs = require('lodash-es');
require('../../../constants/index.js');
var component = require('../../../constants/inject/component.js');

var _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "LivDataCard"
  },
  __name: "data-card",
  setup(__props) {
    const globalProps = vue.inject(component.DATA_CARD_KEY, {});
    const slots = vue.useSlots();
    const DefaultSlot = vue.computed(() => {
      if (!slots.default) return null;
      return () => {
        var _a, _b;
        return (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.map((vnode) => {
          var _a2;
          if (((_a2 = vnode.type) == null ? void 0 : _a2.name) === "LivDataTable") {
            return vue.h("div", { class: "liv-data-card__table" }, [vnode]);
          }
          return vnode;
        });
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(
        vue.unref(elementPlus.ElCard),
        vue.mergeProps({ class: "liv-data-card" }, vue.unref(globalProps)),
        vue.createSlots({
          default: vue.withCtx(() => [
            vue.createVNode(vue.unref(DefaultSlot))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          vue.renderList(vue.unref(lodashEs.omit)(_ctx.$slots, "default"), (_, name) => {
            return {
              name,
              fn: vue.withCtx((slotData) => [
                vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.guardReactiveProps(slotData || {})))
              ])
            };
          })
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      );
    };
  }
});

exports.default = _sfc_main;
//# sourceMappingURL=data-card.vue2.js.map
