<template>
  <div class="login-background">
    <liv-login-form
      class="login-form"
      :title="title"
      :width="width"
      :color="color"
      :path="path"
      :dynamic="dynamic"
    />
  </div>
</template>

<script lang="ts" setup>
import { loginViewProps } from './login-view'
import LivLoginForm from '../../login-form/src/login-form.vue'

defineOptions({
  name: 'LivLoginView'
})

defineProps(loginViewProps)
</script>

<style lang="scss" scoped>
.login-background {
  height: 100%;
  width: 100%;
  position: relative;
  background: url(../../assets/login-bg-spring.png) no-repeat center center;
  background-size: cover;

  .login-form {
    height: fit-content;
    position: absolute;
    right: 200px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: height(10) 0;
  }
}
</style>
