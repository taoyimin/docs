import { defineComponent, mergeModels, inject, shallowRef, useModel, computed, watch, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, createBlock, unref, withCtx, normalizeStyle, toDisplayString, Fragment, renderList, createCommentVNode } from 'vue';
import { ElPopover } from 'element-plus';
import img from '../../assets/a-map/vector.png.mjs';
import img$1 from '../../assets/a-map/satellite.png.mjs';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import { A_MAP_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';
import { useDarkModeObserver } from '../../../utils/hook/index.mjs';

const _hoisted_1 = { class: "liv-a-map" };
const _hoisted_2 = { class: "liv-a-map__layers-button--title" };
const _hoisted_3 = { class: "liv-a-map__control-container" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "liv-a-map__layers-button--title" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivAMap"
  },
  __name: "a-map",
  props: /* @__PURE__ */ mergeModels({
    loadOptions: { type: Object, required: false },
    mapOptions: { type: null, required: false },
    layers: { type: Array, required: false, default: () => ["default"] },
    layersControl: { type: Boolean, required: false },
    layersButtons: { type: Array, required: false, default: () => [
      {
        name: "\u77E2\u91CF",
        image: img,
        layers: ["default"]
      },
      {
        name: "\u536B\u661F",
        image: img$1,
        layers: ["default", "satellite"]
      }
    ] }
  }, {
    "layersIndex": {
      default: 0
    },
    "layersIndexModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["loaded"], ["update:layersIndex"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const globalProps = inject(A_MAP_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const emit = __emit;
    let AMapInstance = shallowRef(null);
    let map = null;
    let defaultLayer = null;
    let satelliteLayer = null;
    let roadNetLayer = null;
    let trafficLayer = null;
    const layersIndex = useModel(__props, "layersIndex");
    const mapId = "map" + (/* @__PURE__ */ new Date()).getTime();
    const { isDarkMode } = useDarkModeObserver();
    const mapStyle = computed(() => {
      return isDarkMode.value ? "amap://styles/dark" : "amap://styles/normal";
    });
    watch(isDarkMode, () => {
      map == null ? void 0 : map.setMapStyle(mapStyle.value);
    }, {
      immediate: true
    });
    __expose({
      map
    });
    watch(
      () => props.layers,
      (newValue, oldValue) => {
        hideLayers(getLayers(oldValue));
        showLayers(getLayers(newValue));
      }
    );
    watch(layersIndex, (newValue, oldValue) => {
      var _a, _b, _c, _d;
      hideLayers(getLayers((_b = (_a = props.layersButtons[oldValue]) == null ? void 0 : _a.layers) != null ? _b : []));
      showLayers(getLayers((_d = (_c = props.layersButtons[newValue]) == null ? void 0 : _c.layers) != null ? _d : []));
    });
    watch(
      () => props.layersButtons,
      (newValue, oldValue) => {
        var _a, _b, _c, _d;
        hideLayers(getLayers((_b = (_a = oldValue[layersIndex.value]) == null ? void 0 : _a.layers) != null ? _b : []));
        showLayers(getLayers((_d = (_c = newValue[layersIndex.value]) == null ? void 0 : _c.layers) != null ? _d : []));
      }
    );
    function showLayers(layers) {
      layers.forEach((layer) => {
        layer.show();
      });
    }
    function hideLayers(layers) {
      layers.forEach((layer) => {
        layer.hide();
      });
    }
    function getLayers(layers) {
      return layers.map((layer) => {
        var _a, _b;
        if (typeof layer === "string") {
          const layerType = layer;
          switch (layerType) {
            case "default":
              if (defaultLayer === null) {
                defaultLayer = (_a = AMapInstance.value) == null ? void 0 : _a.createDefaultLayer();
                map == null ? void 0 : map.addLayer(defaultLayer);
              }
              return defaultLayer;
            case "satellite":
              if (satelliteLayer === null) {
                satelliteLayer = new AMapInstance.value.TileLayer.Satellite();
                map == null ? void 0 : map.addLayer(satelliteLayer);
              }
              return satelliteLayer;
            case "roadNet":
              if (roadNetLayer === null) {
                roadNetLayer = new AMapInstance.value.TileLayer.RoadNet();
                map == null ? void 0 : map.addLayer(roadNetLayer);
              }
              return roadNetLayer;
            case "traffic":
              if (trafficLayer === null) {
                trafficLayer = new AMapInstance.value.TileLayer.Traffic();
                map == null ? void 0 : map.addLayer(trafficLayer);
              }
              return trafficLayer;
            default:
              const n = layerType;
              console.warn(`[LivAMap]\u4F20\u5165\u4E86\u4E0D\u5B58\u5728\u7684\u56FE\u5C42\u7C7B\u578BlayerType=${n}\uFF0C\u5C06\u4F7F\u7528\u9ED8\u8BA4\u56FE\u5C42\u4EE3\u66FF\u3002`);
              if (defaultLayer === null) {
                defaultLayer = (_b = AMapInstance.value) == null ? void 0 : _b.createDefaultLayer();
                map == null ? void 0 : map.addLayer(defaultLayer);
              }
              return defaultLayer;
          }
        } else {
          if (layer) {
            if (!layer.map) {
              map == null ? void 0 : map.add(layer);
            }
          } else {
            console.warn(`[LivAMap]\u4F20\u5165\u4E86\u4E00\u4E2A\u7A7A\u7684\u56FE\u5C42\uFF0C\u8BF7\u786E\u4FDD\u56FE\u5C42\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\u518D\u4F20\u5165\u3002`);
          }
          return layer;
        }
      });
    }
    function getLayersButtonImage(layers) {
      if (layers.includes("satellite")) {
        return img$1;
      } else {
        return img;
      }
    }
    onMounted(() => {
      import('@amap/amap-jsapi-loader').then((module) => {
        module.default.load({
          key: "",
          version: "2.0",
          ...propsProxy.loadOptions
        }).then((aMap) => {
          AMapInstance.value = aMap;
          map = new AMapInstance.value.Map(mapId, {
            viewMode: "3D",
            mapStyle: mapStyle.value,
            ...propsProxy.mapOptions,
            layers: initLayers()
          });
          emit("loaded", map, AMapInstance.value, typeof Loca !== "undefined" ? Loca : void 0);
        });
      });
    });
    function initLayers() {
      var _a, _b, _c, _d;
      if (props.layersControl) {
        return getLayers((_b = (_a = props.layersButtons[layersIndex.value]) == null ? void 0 : _a.layers) != null ? _b : []);
      } else if ((_c = props.mapOptions) == null ? void 0 : _c.layers) {
        if (typeof props.mapOptions.layers === "function") {
          return getLayers(props.mapOptions.layers(AMapInstance.value));
        } else {
          return getLayers((_d = props.mapOptions) == null ? void 0 : _d.layers);
        }
      } else {
        return getLayers(props.layers);
      }
    }
    onUnmounted(() => {
      map == null ? void 0 : map.destroy();
      map = null;
      defaultLayer = null;
      satelliteLayer = null;
      roadNetLayer = null;
      trafficLayer = null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          id: mapId,
          class: "liv-a-map__container"
        }),
        _ctx.layersControl && _ctx.layersButtons.length > 0 ? (openBlock(), createBlock(unref(ElPopover), {
          key: 0,
          placement: "right",
          width: "fit-content",
          trigger: "hover"
        }, {
          reference: withCtx(() => {
            var _a;
            return [
              createElementVNode(
                "div",
                {
                  class: "liv-a-map__layers-control",
                  style: normalizeStyle({
                    backgroundImage: `url(${(_a = _ctx.layersButtons[layersIndex.value].image) != null ? _a : getLayersButtonImage(_ctx.layersButtons[layersIndex.value].layers)})`
                  })
                },
                [
                  createElementVNode(
                    "span",
                    _hoisted_2,
                    toDisplayString(_ctx.layersButtons[layersIndex.value].name),
                    1
                    /* TEXT */
                  )
                ],
                4
                /* STYLE */
              )
            ];
          }),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.layersButtons, (button, index) => {
                  var _a;
                  return openBlock(), createElementBlock("div", {
                    class: "liv-a-map__layers-button",
                    style: normalizeStyle({
                      backgroundImage: `url(${(_a = button.image) != null ? _a : getLayersButtonImage(button.layers)})`
                    }),
                    key: index,
                    onClick: ($event) => layersIndex.value = index
                  }, [
                    createElementVNode(
                      "span",
                      _hoisted_5,
                      toDisplayString(button.name),
                      1
                      /* TEXT */
                    )
                  ], 12, _hoisted_4);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true)
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=a-map.vue2.mjs.map
