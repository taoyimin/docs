<template>
  <div class="setting-theme">
    <el-color-picker
      v-model="themeConfig.primary"
      :predefine="colorList"
      @change="handlePrimary"
    />
    <el-switch
      class="setting-switch"
      size="large"
      v-model="themeConfig.isDark"
      @change="onAddDarkChange"
      inline-prompt
      :active-icon="Sunny"
      :inactive-icon="Moon"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeSettingStore } from "@szxc/stores";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { settingThemeProps } from "./setting-theme";
import {
  useTheme,
  DEFAULT_PRIMARY,
  THEME_CHANGE_COLOR,
  THEME_CHANGE_DRAK,
} from "@szxc/utils";

// 预定义主题颜色
const colorList = [
  DEFAULT_PRIMARY,
  "#DAA96E",
  "#0C819F",
  "#722ed1",
  "#27ae60",
  "#ff5c93",
  "#e74c3c",
  "#fd726d",
  "#f39c12",
  "#9b59b6",
];

defineOptions({
  name: "LivSettingTheme",
});

const { switchDark, changePrimary } = useTheme();
const settingsStore = useThemeSettingStore();

const themeConfig = computed(() => settingsStore.themeConfig);

const props = defineProps(settingThemeProps);

const handlePrimary = (val: string) => {
  changePrimary(val);
  // 通知子应用修改主题
  props.bus?.$emit(THEME_CHANGE_COLOR, val);
};

const onAddDarkChange = (isDark) => {
  switchDark();
  // 通知子应用修改主题
  props.bus?.$emit(THEME_CHANGE_DRAK, isDark);
};
</script>

<style lang="scss" scoped>
.setting-switch {
  margin-left: 10px;
}
</style>
