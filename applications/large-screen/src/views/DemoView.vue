<template>
  <div class="demo">
    <h1>This is an demo page</h1>
    <div>用户信息</div>
    <ul>
      <li>姓名：{{ userStore.userInfo.realName }}</li>
      <li>gobalCode：{{ userStore.userInfo.gobalCode }}</li>
      <li>gobalName：{{ userStore.userInfo.gobalName }}</li>
      <li>token：{{ userStore.userInfo.token }}</li>
    </ul>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'

const userStore = ref(useUserStore())

function logout() {
  // 在 JavaScript 中需要 .value
  userStore.value.logout()
}

const { proxy }: any = getCurrentInstance()

onMounted(() => {
  proxy.$get('http://127.0.0.1:8088/tCxghGrid/expandedTreeByCodeWithAuth', { code: '36' })
})
</script>

<style>
.demo {
  min-height: 100vh;
}
</style>
