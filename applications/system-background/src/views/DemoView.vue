<template>
  <div class="demo">
    <h1>系统后台测试页</h1>
    <div>用户信息</div>
    <ul>
      <li>姓名：{{ userStore.userInfo.real_name }}</li>
      <li>user_name：{{ userStore.userInfo.user_name }}</li>
      <li>user_id：{{ userStore.userInfo.user_id }}</li>
      <li>token：{{ userStore.userInfo.access_token }}</li>
    </ul>
    <LivGridCascader v-model="cascaderValue" @change="change"></LivGridCascader>code:{{
      cascaderValue
    }}<br />

    <!-- info_source、eventType -->
    <LivDictSelect v-model="selectValue" @change="selectChange" dictType="info_source"></LivDictSelect><br />
    <liv-point-picker v-model:visible="pointPickerVisible" v-model:longitude="longitude"
      v-model:latitude="latitude"></liv-point-picker>

    经度：<el-input :value="longitude" placeholder="经度" /> 纬度：<el-input :value="latitude" placeholder="纬度" />
    <el-button type="primary" @click="pointPick">地图选点</el-button>
    <el-button type="primary" @click="toBackground">进入后台</el-button>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useUserStore } from '../stores/userStore'
import router from '@/router'

const userStore = useUserStore()
const cascaderValue = ref('3601'),
  selectValue = ref('')

function change(value, path) {
  console.log(value)
  console.log(path)
}

const selectChange = (value) => {
  console.log(value)
}

function logout() {
  // 在 JavaScript 中需要 .value
  userStore.logout()
}

function toBackground() {
  console.log(router)
  router.push('/background')
}

/* 地图选点 */
const lnglat = ref([]),
  pointPickerVisible = ref(false),
  longitude = ref(''),
  latitude = ref('')

const pointPick = (): void => {
  pointPickerVisible.value = true
}

const { proxy }: any = getCurrentInstance()

onMounted(() => {
  //proxy.$get('http://127.0.0.1:8088/tCxghGrid/expandedTreeByCodeWithAuth', { code: '36' })
})
</script>

<style>
.demo {
  min-height: 100vh;
}
</style>
