<template>
  <svg class="icon" aria-hidden="true" :style="getStyle">
    <use :xlink:href="iconName" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { CSSProperties } from "vue";
import { iconFontProps } from "./icon-font";
import { pxToRem } from "@szxc/utils";

defineOptions({
  name: "LivIconFont"
});

const props = defineProps(iconFontProps);

const iconName = computed(() => `#${props.name}`);

const getStyle = computed((): CSSProperties => {
  const { size } = props;
  let s = `${size}`;
  s = `${pxToRem(s.replace("px", ""))}px`;
  return {
    fontSize: s
  };
});
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  outline: none;
}
</style>
