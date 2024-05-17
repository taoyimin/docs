<template>
  <el-dropdown>
    <span class="dropdown-text">
      切换系统
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- <el-dropdown-item @click="jumpUrl('/cxgh/home')">长效管护</el-dropdown-item> -->
        <el-dropdown-item @click="jumpUrl('/cloudJudgment')">物联云判</el-dropdown-item>
        <el-dropdown-item @click="jumpUrl('/manage-dispatch')">管护调度</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

defineOptions({
  name: 'LivSwitchSystem'
})

const jumpUrl = (url: string) => {
  window.location.href = window.location.origin + url
}
</script>

<style lang="scss" scoped>
.dropdown-text {
  color: #ffffff;
  outline: none;
}
</style>
