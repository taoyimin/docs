<template>
  <el-menu>
    <el-menu-item index="1">一级菜单</el-menu-item>
    <el-sub-menu>
      <template #title>父菜单</template>
      <el-menu-item index="2-1">子菜单1</el-menu-item>
      <el-menu-item index="2-2">子菜单2</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
defineOptions({
  name: "LivAsideMenu",
});
</script>
