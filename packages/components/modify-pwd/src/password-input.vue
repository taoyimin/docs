<template>
  <el-input v-model="value" :type="view ? 'text' : 'password'">
    <template #prefix>
      <el-icon size="18" color="#999999"><Lock /></el-icon>
      <el-divider style="{color: #999999}" direction="vertical" />
    </template>
    <template #suffix>
      <el-icon
        style="cursor: pointer"
        size="18"
        color="#999999"
        @click="view = !view"
        ><View v-if="view" /><Hide v-else
      /></el-icon>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Lock, View, Hide } from "@element-plus/icons-vue";

defineOptions({
  name: "LivPasswordInput"
});

const value = defineModel();
// 密码是否可见
const view = ref<boolean>(false);
</script>
