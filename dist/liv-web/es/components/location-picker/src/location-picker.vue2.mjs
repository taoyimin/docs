import { defineComponent, mergeModels, inject, ref, useModel, watchEffect, watch, openBlock, createElementBlock, createVNode, unref, mergeProps, withCtx, withModifiers, createTextVNode, createElementVNode } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import '../../../utils/index.mjs';
import '../../a-map/src/a-map.vue.mjs';
import '../../../constants/index.mjs';
import gcoord from 'gcoord';
import { clone } from 'lodash-es';
import { LOCATION_PICKER_KEY } from '../../../constants/inject/component.mjs';
import { getPropsPoxy } from '../../../utils/component/index.mjs';
import { validateLongitude, validateLatitude } from '../../../utils/validate/index.mjs';
import _sfc_main$1 from '../../a-map/src/a-map.vue2.mjs';

const _hoisted_1 = { class: "liv-location-picker" };
const _hoisted_2 = { class: "liv-location-picker__map" };
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "LivLocationPicker"
  },
  __name: "location-picker",
  props: /* @__PURE__ */ mergeModels({
    type: { type: String, required: false, default: () => "gcj02" },
    loadOptions: { type: Object, required: false },
    mapOptions: { type: null, required: false },
    layers: { type: Array, required: false },
    layersControl: { type: Boolean, required: false },
    layersButtons: { type: Array, required: false }
  }, {
    "modelValue": { type: Array, ...{
      default: [null, null]
    } },
    "modelModifiers": {},
    "longitude": { type: [Number, null], ...{
      default: null
    } },
    "longitudeModifiers": {},
    "latitude": { type: [Number, null], ...{
      default: null
    } },
    "latitudeModifiers": {},
    "address": { type: [String, null], ...{
      default: null
    } },
    "addressModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change", "confirm"], ["update:modelValue", "update:longitude", "update:latitude", "update:address"]),
  setup(__props, { emit: __emit }) {
    const globalProps = inject(LOCATION_PICKER_KEY, {});
    const props = __props;
    const propsProxy = getPropsPoxy(props, globalProps);
    const emit = __emit;
    const formRef = ref();
    const form = ref([null, null]);
    const search = ref("");
    const coordinateMap = {
      wgs84: gcoord.WGS84,
      gcj02: gcoord.GCJ02
    };
    const model = useModel(__props, "modelValue");
    const longitude = useModel(__props, "longitude");
    const latitude = useModel(__props, "latitude");
    const address = useModel(__props, "address");
    const rules = {
      0: [
        { required: true, message: "\u8BF7\u8F93\u5165\u7ECF\u5EA6", trigger: "blur" },
        { validator: validateLongitude, trigger: "blur" }
      ],
      1: [
        { required: true, message: "\u8BF7\u8F93\u5165\u7EAC\u5EA6", trigger: "blur" },
        { validator: validateLatitude, trigger: "blur" }
      ]
    };
    let map = null;
    let AMap = null;
    let placeSearch = null;
    let geocoder = null;
    let marker = null;
    watchEffect(() => {
      if (form.value[0] && form.value[1]) {
        UpdateMarker(form.value[0], form.value[1]);
      }
    });
    watch(form, (newValue, oldValue) => {
      if (newValue[0] !== oldValue[0] || newValue[1] !== oldValue[1]) {
        emit("change", [form.value[0], form.value[1]]);
      }
    });
    watch(model, () => {
      form.value = clone(model.value);
      if (model.value && model.value[0] && model.value[1]) {
        const targetPoint = convertToOriginCoordinate([model.value[0], model.value[1]]);
        map == null ? void 0 : map.setCenter(targetPoint, true);
        geocoder == null ? void 0 : geocoder.getAddress(targetPoint, (status, result) => {
          if (status === "complete" && result.info === "OK") {
            address.value = result.regeocode.formattedAddress;
          } else {
            console.error("[liv-web/location-picker]\u9006\u5730\u7406\u7F16\u7801\u5931\u8D25\uFF01", result);
          }
        });
      } else {
        address.value = "";
      }
    });
    function handleConfirm() {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate((valid) => {
        if (valid) {
          model.value = clone(form.value);
          longitude.value = form.value[0];
          latitude.value = form.value[1];
          emit("confirm", [form.value[0], form.value[1]]);
        }
      });
    }
    function mapLoaded(mapInstance, AMapInstance) {
      map = mapInstance;
      AMap = AMapInstance;
      form.value = clone(model.value);
      if (model.value && model.value[0] && model.value[1]) {
        map == null ? void 0 : map.setCenter(convertToOriginCoordinate([model.value[0], model.value[1]]), true);
      }
      map.on("click", (e) => {
        form.value = convertToTargetCoordinate([e.lnglat.getLng(), e.lnglat.getLat()]);
      });
      AMap.plugin(["AMap.PlaceSearch", "AMap.Geocoder"], function() {
        placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          pageIndex: 1,
          citylimit: true,
          map,
          panel: "panel",
          autoFitView: true
        });
        AMap == null ? void 0 : AMap.Event.addListener(placeSearch, "markerClick", function(e) {
          form.value = convertToTargetCoordinate([e.data.location.lng, e.data.location.lat]);
        });
        AMap == null ? void 0 : AMap.Event.addListener(placeSearch, "listElementClick", function(e) {
          form.value = convertToTargetCoordinate([e.data.location.lng, e.data.location.lat]);
        });
        geocoder = new AMap.Geocoder({
          radius: 1e3,
          extensions: "all"
        });
      });
    }
    function UpdateMarker(longitude2, latitude2) {
      if (marker) {
        marker.setPosition(convertToOriginCoordinate([longitude2, latitude2]));
      } else {
        if (AMap) {
          marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: convertToOriginCoordinate([longitude2, latitude2]),
            anchor: "bottom-center",
            zIndex: 9999
          });
          marker.setMap(map);
        }
      }
    }
    function handleSearch() {
      if (search.value) {
        placeSearch.search(search.value);
      } else {
        placeSearch.clear();
      }
    }
    function convertToTargetCoordinate(lnglat) {
      return gcoord.transform(lnglat, coordinateMap.gcj02, coordinateMap[propsProxy.type]);
    }
    function convertToOriginCoordinate(lnglat) {
      return gcoord.transform(lnglat, coordinateMap[propsProxy.type], coordinateMap.gcj02);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElForm), mergeProps({
          inline: true,
          model: form.value,
          ref_key: "formRef",
          ref: formRef,
          class: "liv-location-picker__form",
          rules
        }, _ctx.$attrs), {
          default: withCtx(() => [
            createVNode(unref(ElFormItem), {
              prop: "search",
              label: "\u8F93\u5165\u5173\u952E\u5B57"
            }, {
              default: withCtx(() => [
                createVNode(unref(ElInput), {
                  modelValue: search.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
                  placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
                  clearable: "",
                  onChange: handleSearch
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(unref(ElFormItem), {
              prop: "0",
              label: "\u7ECF\u5EA6"
            }, {
              default: withCtx(() => [
                createVNode(unref(ElInput), {
                  modelValue: form.value[0],
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value[0] = $event),
                  modelModifiers: { number: true },
                  placeholder: "\u8BF7\u8F93\u5165\u7ECF\u5EA6",
                  clearable: "",
                  type: "number",
                  onMousewheel: _cache[2] || (_cache[2] = withModifiers(() => {
                  }, ["prevent"]))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(unref(ElFormItem), {
              prop: "1",
              label: "\u7EAC\u5EA6"
            }, {
              default: withCtx(() => [
                createVNode(unref(ElInput), {
                  modelValue: form.value[1],
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value[1] = $event),
                  modelModifiers: { number: true },
                  placeholder: "\u8BF7\u8F93\u5165\u7EAC\u5EA6",
                  clearable: "",
                  type: "number",
                  onMousewheel: _cache[4] || (_cache[4] = withModifiers(() => {
                  }, ["prevent"]))
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(unref(ElFormItem), null, {
              default: withCtx(() => [
                createVNode(unref(ElButton), {
                  type: "primary",
                  onClick: handleConfirm
                }, {
                  default: withCtx(() => _cache[5] || (_cache[5] = [
                    createTextVNode("\u786E\u5B9A")
                  ])),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 16, ["model"]),
        createElementVNode("div", _hoisted_2, [
          createVNode(
            _sfc_main$1,
            mergeProps({ class: "liv-location-picker__map-container" }, unref(propsProxy), { onLoaded: mapLoaded }),
            null,
            16
            /* FULL_PROPS */
          ),
          _cache[6] || (_cache[6] = createElementVNode(
            "div",
            {
              id: "panel",
              class: "liv-location-picker__search-panel"
            },
            null,
            -1
            /* HOISTED */
          ))
        ])
      ]);
    };
  }
});

export { _sfc_main as default };
//# sourceMappingURL=location-picker.vue2.mjs.map
