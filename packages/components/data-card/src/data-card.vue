<template>
  <el-card class="vp-raw">
    <template #header v-if="$slots['header']">
      <slot name="header"></slot>
    </template>
    <template v-for="slot in $slots['default']()" :key="slot.scopeId">
      <div v-if="slot.type['name'] === 'LivDataTable'" class="table-container">
        <component :is="slot"></component>
      </div>
      <component v-else :is="slot"></component>
    </template>
  </el-card>
</template>

<script lang="ts" setup>
// import { defineEmits } from "vue";
// import { dataCardProps, dataCardEmits } from "./data-card";

defineOptions({
  name: "LivDataCard",
});

// const props = defineProps(dataCardProps);
// const emit = defineEmits(dataCardEmits);
</script>

<style lang="scss" scoped>
.el-card {
  height: 100%;
  display: flex;
  flex-direction: column;

  :deep(.el-card__body) {
    flex: 1;
    display: flex;
    flex-direction: column;

    .table-container {
      height: 100%;
      flex: 1;
      position: relative;

      .el-table {
        height: 100%;
        position: absolute;
      }
    }

    .el-pagination {
      margin-top: height(26);
      align-self: flex-end;
    }
  }
}
</style>
