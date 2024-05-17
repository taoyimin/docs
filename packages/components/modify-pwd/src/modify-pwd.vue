<template>
  <div class="modify-pwd-card">
    <el-form
      :model="passwordForm"
      ref="passwordRef"
      :rules="passwordRules"
      @keyup.enter="onModifyPwd"
    >
      <el-form-item prop="oldPassword">
        <liv-password-input
          v-model="passwordForm.oldPassword"
          placeholder="请输入当前密码"
        ></liv-password-input>
      </el-form-item>
      <el-form-item prop="newPassword">
        <liv-password-input
          v-model="passwordForm.newPassword"
          placeholder="请输入新密码"
        ></liv-password-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <liv-password-input
          v-model="passwordForm.confirmPassword"
          placeholder="请确认新密码"
        ></liv-password-input>
      </el-form-item>
      <el-form-item :style="{ marginBottom: 0 }">
        <el-button type="primary" :loading="loading" @click="onModifyPwd"
          >确认修改</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import LivPasswordInput from "./password-input.vue";
import { validatePassword } from "@szxc/utils";
import { modifyPwdProps } from "./modify-pwd";
import { useUserStore } from "@szxc/stores";

defineOptions({
  name: "LivModifyPwd"
});

defineProps(modifyPwdProps);

const userStore = useUserStore();
const loading = ref(false);

const passwordForm = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: ""
});
const passwordRef = ref<FormInstance>();

const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (!value) {
    rule.required ? callback(rule?.message ?? "请输入密码") : callback();
  } else if (value !== passwordForm.newPassword) {
    callback(new Error("两次输入的密码不一致"));
  } else {
    callback();
  }
};

// 密码登录表单校验规则
const passwordRules = ref<FormRules<typeof passwordForm>>({
  oldPassword: {
    validator: validatePassword,
    required: true,
    trigger: "blur"
  },
  newPassword: {
    validator: validatePassword,
    required: true,
    trigger: "blur"
  },
  confirmPassword: {
    validator: validateConfirmPassword,
    required: true,
    trigger: "blur"
  }
});

const onModifyPwd = () => {
  passwordRef.value.validate((valid) => {
    if (!valid) return;
    loading.value = true;
    userStore
      .modifyPassword({
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.newPassword
      })
      .then((res) => {
        ElMessage.success(res.msg);
        userStore?.loginOut();
      })
      .finally(() => {
        loading.value = false;
      });
  });
};
</script>

<style lang="scss" scoped>
.modify-pwd-card {
  .el-input {
    height: height(46);
  }
  .el-button {
    width: 100%;
    height: height(46);
    border-radius: 2px;
  }
}
</style>
