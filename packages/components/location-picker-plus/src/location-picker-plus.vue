<template>
  <div class="picker-btn-wrap">
    <el-button type="primary" plain @click="locationDialog = true">
      <liv-icon-font name="icon-weibiaoti--" size="16" />
      <span style="margin-left: 4px">选择位置</span></el-button
    >
    <div class="location-val" v-if="location?.longitude || location?.latitude">
      <span :title="location?.longitude">经度：{{ location?.longitude }}</span>
      <span :title="location?.latitude">纬度：{{ location?.latitude }}</span>
    </div>
    <el-dialog title="选取经纬度" v-model="locationDialog">
      <liv-location-picker
        v-bind="$attrs"
        v-model="location"
        @closed="closeLocationDialog"
      ></liv-location-picker>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useFormItem } from "element-plus";

interface Location {
  longitude: number | string;
  latitude: number | string;
}

interface IProps {
  modelValue: Location;
  showVal?: boolean;
}

defineOptions({
  name: "LivLocationPickPlus"
});

const { formItem } = useFormItem();
const props = defineProps<IProps>();
const location = defineModel<Location>();

// 地图选点弹框
const locationDialog = ref(false);

const closeLocationDialog = () => {
  locationDialog.value = false;
  formItem?.validate("change");
};
</script>

<style lang="scss" scoped>
.picker-btn-wrap {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  .location-val {
    flex: 1;
    margin-left: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    span {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
