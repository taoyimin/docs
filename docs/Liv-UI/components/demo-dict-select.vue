<template>
  <el-select>
    <el-option label="待处理" value="0"></el-option>
    <el-option label="待评价" value="1"></el-option>
    <el-option label="已办结" value="2"></el-option>
  </el-select>
</template>
<script lang="ts" setup>
defineOptions({
  name: "LivDictSelect",
});

defineProps({
  dictType: {
    type: [Number, String],
    required: true,
  },
});
</script>
