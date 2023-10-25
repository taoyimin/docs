<template>
  <div class="demo">
    <h1>子应用首页</h1>
    <div>用户信息</div>
    <ul>
      <li>姓名：{{ userStore.userInfo.real_name }}</li>
      <li>user_name：{{ userStore.userInfo.user_name }}</li>
      <li>user_id：{{ userStore.userInfo.user_id }}</li>
      <li>token：{{ userStore.userInfo.access_token }}</li>
    </ul>
    <el-button type="primary" @click="$router.push('/background/event/table')">进入后台管理</el-button>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'
import { get, post } from '@szxc/http'

const userStore = ref(useUserStore())

function logout() {
  // 在 JavaScript 中需要 .value
  userStore.value.logout()
}

const { proxy }: any = getCurrentInstance()

onMounted(() => {
  //proxy.$get('http://127.0.0.1:8088/tCxghGrid/expandedTreeByCodeWithAuth', { code: '36' })

  get('/rjhj-system/role/getPage?current=1&size=10')
})
</script>

<style>
.demo {
  height: 100vh;
}
</style>
