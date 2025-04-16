import { defineComponent, inject, useSlots, computed, h, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createVNode, renderList, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { ElCard } from 'element-plus';
import { omit } from 'lodash-es';
import '../../../constants/index.mjs';
import { DATA_CARD_KEY } from '../../../constants/inject/component.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivDataCard"
  },
  __name: "data-card",
  setup(__props) {
    const globalProps = inject(DATA_CARD_KEY, {});
    const slots = useSlots();
    const DefaultSlot = computed(() => {
      if (!slots.default) return null;
      return () => {
        var _a, _b;
        return (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b.map((vnode) => {
          var _a2;
          if (((_a2 = vnode.type) == null ? void 0 : _a2.name) === "LivDataTable") {
            return h("div", { class: "liv-data-card__table" }, [vnode]);
          }
          return vnode;
        });
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(ElCard),
        mergeProps({ class: "liv-data-card" }, unref(globalProps)),
        createSlots({
          default: withCtx(() => [
            createVNode(unref(DefaultSlot))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          renderList(unref(omit)(_ctx.$slots, "default"), (_, name) => {
            return {
              name,
              fn: withCtx((slotData) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData || {})))
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

export { _sfc_main as default };
//# sourceMappingURL=data-card.vue2.mjs.map
