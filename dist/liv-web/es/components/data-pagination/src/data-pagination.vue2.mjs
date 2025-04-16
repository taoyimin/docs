import { defineComponent, mergeModels, inject, useModel, ref, watchEffect, openBlock, createBlock, unref, withCtx, createVNode, mergeProps } from 'vue';
import { ElConfigProvider, ElPagination } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { DATA_PAGINATION_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';

var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivDataPagination"
  },
  __name: "data-pagination",
  props: /* @__PURE__ */ mergeModels({
    total: { type: Number, required: false, default: () => 0 },
    currentKey: { type: null, required: false, default: () => "current" },
    sizeKey: { type: null, required: false, default: () => "size" }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {},
    "current": { type: Number, ...{
      default: 1
    } },
    "currentModifiers": {},
    "pageSize": { type: Number, ...{
      default: 10
    } },
    "pageSizeModifiers": {}
  }),
  emits: ["update:modelValue", "update:current", "update:pageSize"],
  setup(__props) {
    const globalProps = inject(DATA_PAGINATION_KEY, {});
    const props = __props;
    const propsPoxy = getPropsPoxy(props, globalProps);
    const page = useModel(__props, "modelValue");
    const current = useModel(__props, "current");
    const pageSize = useModel(__props, "pageSize");
    const noEffect = ref(false);
    const updateModelValue = () => {
      noEffect.value = true;
    };
    watchEffect(() => {
      if (page.value) {
        current.value = page.value[propsPoxy.currentKey];
        pageSize.value = page.value[propsPoxy.sizeKey];
      }
      noEffect.value = false;
    });
    watchEffect(() => {
      if (!noEffect.value) return;
      if (page.value) {
        page.value[propsPoxy.currentKey] = current.value;
        page.value[propsPoxy.sizeKey] = pageSize.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElConfigProvider), { locale: unref(zhCn) }, {
        default: withCtx(() => [
          createVNode(unref(ElPagination), mergeProps({
            class: "liv-data-pagination",
            background: "",
            layout: "total, sizes, prev, pager, next, jumper",
            total: _ctx.total,
            "current-page": current.value,
            "onUpdate:currentPage": [
              _cache[0] || (_cache[0] = ($event) => current.value = $event),
              updateModelValue
            ],
            "page-size": pageSize.value,
            "onUpdate:pageSize": [
              _cache[1] || (_cache[1] = ($event) => pageSize.value = $event),
              updateModelValue
            ]
          }, { ...unref(globalProps), ..._ctx.$attrs }), null, 16, ["total", "current-page", "page-size"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["locale"]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=data-pagination.vue2.mjs.map
