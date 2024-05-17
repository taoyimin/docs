<template>
  <el-config-provider :locale="zhCn">
    <el-pagination
      class="vp-raw"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="props.data?.total ?? 0"
      v-model:current-page="value.current"
      v-model:page-size="value.size"
      v-bind="$attrs"
    />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { dataPaginationProps, dataPaginationEmits } from "./data-pagination";

defineOptions({
  name: "LivDataPagination"
});

const props = defineProps(dataPaginationProps);
const emit = defineEmits(dataPaginationEmits);

const value = computed<PageParam>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});
</script>

<style scoped></style>
