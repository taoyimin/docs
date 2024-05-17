<template>
  <el-image
    :style="{ width: size + 'px', height: size + 'px' }"
    :src="img"
    :preview-src-list="[img]"
    :preview-teleported="previewTeleported"
    fit="cover"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { qrCodeProps } from "./qr-code";
import { qrCode } from "@szxc/utils";
import { ElMessage } from "element-plus";

defineOptions({
  name: "LivQrCode",
});

const props = defineProps(qrCodeProps);
const img = ref("");

watch(
  () => props.content,
  async (newVal) => {
    if (!newVal) return (img.value = "");
    try {
      img.value = await qrCode.toDataURL(newVal, {
        width: 300,
        ...props.options,
      });
    } catch (err) {
      console.log("--err", err);
      ElMessage.error("获取二维码失败");
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped></style>
