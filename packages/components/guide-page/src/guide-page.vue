<template>
  <div class="guide-page el-card">
    <div class="header">
      欢迎您，<span class="name">{{ userStore.realName || '-' }}</span>
      <div class="text">来到{{ appName }}管理系统</div>
    </div>
    <img class="img" src="../../assets/guide-page.png" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@szxc/stores'

defineOptions({
  name: 'LivGuidePage'
})

const appName = import.meta.env.VITE_APP_NAME
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.guide-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 40px;
  // background-color: var(--el-fill-color-blank);
  .img {
    margin-top: 40px;
    width: 50%;
  }
  .header {
    font-size: 22px;

    .name {
      font-size: 24px;
      font-weight: bold;
    }
    .text {
      font-size: 20px;
      font-weight: normal;
    }
  }
}
</style>
