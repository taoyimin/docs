<template>
  <div class="login-view">
    <h2 class="login-title">主应用登录页面</h2>
    <LivDemoButton></LivDemoButton>
    <div class="form-area">
      <el-form label-position="right" label-width="100px" :model="formAccount" style="max-width: 460px">
        <el-form-item label="用户名">
          <el-input v-model="formAccount.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formAccount.password" />
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="formAccount.imageCode" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from '../stores/userStore'

export default {
  setup() {
    const userStore = useUserStore()
    return { userStore }
  },
  data() {
    return {
      formAccount: {
        username: '',
        password: '',
        imageCode: ''
      }
    }
  },
  methods: {
    login() {
      this.userStore.login(this.formAccount)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
}

.form-area {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
}

.login-title {
  width: 1920px;
  background-color: #ddd;
  font-size: 36px;
  height: height(100);
}
</style>
