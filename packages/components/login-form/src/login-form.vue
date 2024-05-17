<template>
  <el-card class="login-card" :style="style">
    <div class="card-title">
      欢迎登录<span class="card-subtitle">{{ title }}</span>
    </div>
    <el-tabs v-model="formType">
      <el-tab-pane label="密码登录" name="password">
        <el-form
          :model="passwordForm"
          ref="passwordRef"
          :rules="passwordRules"
          @keyup.enter="passwordLogin"
        >
          <el-form-item prop="username">
            <el-input v-model="passwordForm.username" placeholder="请输入账号">
              <template #prefix>
                <el-icon size="18" color="#999999"><User /></el-icon>
                <el-divider direction="vertical" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="passwordForm.password"
              placeholder="请输入密码"
              :type="view ? 'text' : 'password'"
            >
              <template #prefix>
                <el-icon size="18" color="#999999"><Lock /></el-icon>
                <el-divider style="{color: #999999}" direction="vertical" />
              </template>
              <template #suffix>
                <el-icon style="cursor: pointer" size="18" color="#999999" @click="view = !view"
                  ><View v-if="view" /><Hide v-else
                /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="captchaCode">
            <div style="display: flex; flex-direction: row; width: 100%">
              <el-input v-model="passwordForm.captchaCode" placeholder="请输入验证码">
                <template #prefix>
                  <el-icon size="18" color="#999999"><Key /></el-icon>
                  <el-divider direction="vertical" />
                </template>
              </el-input>
              <img class="image-captcha" :src="captchaImage" @click="getCaptcha" />
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="passwordLoading" @click="passwordLogin"
              ><template #loading>
                <div class="custom-loading">
                  <svg class="circular" viewBox="-10, -10, 50, 50">
                    <path
                      class="path"
                      d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
                      style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                    />
                  </svg>
                </div> </template
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="短信登录" name="phone">
        <el-form :model="phoneForm" ref="phoneRef" :rules="phoneRules">
          <el-form-item prop="phone" required>
            <el-input v-model="phoneForm.phone" placeholder="请输入手机号">
              <template #prefix>
                <el-icon size="18" color="#999999"><Iphone /></el-icon>
                <el-divider direction="vertical" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="value" required>
            <div style="display: flex; flex-direction: row; width: 100%">
              <el-input v-model="phoneForm.value" placeholder="请输入验证码">
                <template #prefix>
                  <el-icon size="18" color="#999999"><Message /></el-icon>
                  <el-divider direction="vertical" />
                </template>
              </el-input>
              <el-button
                type="primary"
                class="send-button"
                :disabled="timer !== null"
                @click="sendSms"
                >{{ timer ? `${count}s后重新发送` : '发送验证码' }}</el-button
              >
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="phoneLoading" @click="phoneLogin"
              ><template #loading>
                <div class="custom-loading">
                  <svg class="circular" viewBox="-10, -10, 50, 50">
                    <path
                      class="path"
                      d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
                      style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                    />
                  </svg>
                </div> </template
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-divider content-position="center">支持浏览器如下</el-divider>
    <el-row justify="space-between">
      <el-row align="middle">
        <img class="browser-icon" src="../../assets/login-form/chrome.png" />
        <span class="browser-text">谷歌</span>
      </el-row>
      <el-row align="middle">
        <img class="browser-icon" src="../../assets/login-form/firefox.png" />
        <span class="browser-text">火狐</span>
      </el-row>
      <el-row align="middle">
        <img class="browser-icon" src="../../assets/login-form/360.png" />
        <span class="browser-text">360急速</span>
      </el-row>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, onMounted, computed } from 'vue'
import type { Router } from 'vue-router'
import { User, Lock, View, Hide, Key, Iphone, Message } from '@element-plus/icons-vue'
import { loginFormProps } from './login-form'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { validatePhone, validatePassword, useCountDown } from '@szxc/utils'
import { useUserStore } from '@szxc/stores'
import { getImageCaptcha, getSmsCaptcha } from '@szxc/apis'

defineOptions({
  name: 'LivLoginForm'
})

const props = defineProps(loginFormProps)

const style = computed(() => {
  if (props.color) {
    return {
      '--el-color-primary': props.color,
      width: props.width
    }
  } else {
    return {
      width: props.width
    }
  }
})

const instance = getCurrentInstance()!

const router = instance.appContext.config.globalProperties.$router as Router
const route = instance.appContext.config.globalProperties.$route

// 登录表单类型
const formType = ref('password')

// 密码是否可见
const view = ref<boolean>(false)

// 密码登录loading
const passwordLoading = ref(false)

// 手机号登录loading
const phoneLoading = ref(false)

// 密码登录表单实例
const passwordRef = ref<FormInstance>()

// 手机号登录表单实例
const phoneRef = ref<FormInstance>()

// 密码登录表单
const passwordForm = reactive({
  username: import.meta.env.VITE_USER_NAME,
  password: import.meta.env.VITE_PASS_WORD,
  captchaKey: '',
  captchaCode: ''
})

// 手机号登录表单
const phoneForm = reactive({
  phone: '',
  id: '',
  value: ''
})

// 密码登录表单校验规则
const passwordRules = ref<FormRules<typeof passwordForm>>({
  username: {
    message: '请输入账号',
    required: true,
    trigger: 'blur'
  },
  password: {
    validator: validatePassword,
    required: true,
    trigger: 'blur'
  },
  captchaCode: {
    message: '请输入验证码',
    required: true,
    trigger: 'blur'
  }
})

// 手机号登录表单校验规则
const phoneRules = ref<FormRules<typeof phoneForm>>({
  phone: {
    validator: validatePhone,
    required: true,
    trigger: 'blur'
  },
  value: {
    message: '请输入验证码',
    required: true,
    trigger: 'blur'
  }
})

// 用户Store
const userStore = useUserStore()

// 倒计时hook
const { count, timer, start } = useCountDown(60)

// 登录成功跳转地址, 有redirect则是token失效
async function jumpPath() {
  const redirect = route.query.redirect as string
  if (redirect) {
    location.href = redirect
  } else if (props.dynamic) {
    userStore
      .initUserConfig()
      .then((res) => {
        if (res.homeUrl) {
          router.push(res.homeUrl)
        } else {
          pushPath()
        }
      })
      .catch((err) => {
        console.error(err)
        pushPath()
      })
  } else {
    pushPath()
  }
}

function pushPath() {
  if (props.path) {
    router.push(props.path)
  } else {
    ElMessage.error('没有配置跳转地址')
  }
}

// 密码登录
function passwordLogin() {
  passwordRef.value?.validate((valid) => {
    if (valid) {
      passwordLoading.value = true
      userStore
        .loginByAccount(passwordForm)
        .then(jumpPath)
        .catch((err) => {
          getCaptcha()
          throw err
        })
        .finally(() => {
          passwordLoading.value = false
        })
    }
  })
}

// 手机号登录
function phoneLogin() {
  phoneRef.value?.validate((valid) => {
    if (valid) {
      phoneLoading.value = true
      userStore
        .loginByPhone(phoneForm)
        .then(jumpPath)
        .finally(() => {
          passwordLoading.value = false
        })
    }
  })
}

// 验证码图片
const captchaImage = ref('')

// 获取图片验证码
async function getCaptcha() {
  const { key, image } = await getImageCaptcha()
  captchaImage.value = image
  passwordForm.captchaKey = key
}

// 发送短信验证码
function sendSms() {
  phoneRef.value?.validateField('phone', async (valid) => {
    if (valid) {
      const { data } = await getSmsCaptcha({ phone: phoneForm.phone })
      phoneForm.id = data.id
      start()
    }
  })
}

onMounted(() => {
  getCaptcha()
})
</script>

<style lang="scss" scoped>
.login-card {
  height: fit-content;
  padding: height(10) 0;

  .card-title {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: height(20);
    font-family: Source Han Sans CN Bold;
    color: #333333;
  }

  .card-subtitle {
    font-size: 15px;
    font-weight: bold;
    font-family: Source Han Sans CN Bold;
    color: #999999;
    margin-left: 10px;
  }

  :deep(.el-tabs__item) {
    font-family: Source Han Sans CN;
    padding: 0 0.5rem;
    color: #666666;
  }

  // :deep(.el-tabs__item.is-active) {
  //   color: var(--liv-color-primary);
  // }

  :deep(.el-tabs__nav-wrap::after) {
    background-color: transparent;
  }

  // :deep(.el-tabs__active-bar) {
  //   background-color: var(--liv-color-primary);
  // }

  .el-input {
    height: height(46);
  }

  :deep(.el-input__inner) {
    color: #666666;
  }

  // :deep(.el-input .is-focus) {
  //   box-shadow: 0 0 0 1px var(--liv-color-primary) inset;
  // }

  // :deep(.el-input .is-focus .el-icon) {
  //   color: var(--liv-color-primary);
  //   transition: all 0.5s;
  // }

  // :deep(.el-input .is-focus .el-divider--vertical) {
  //   border-left-color: var(--liv-color-primary);
  //   transition: all 0.5s;
  // }

  :deep(.el-input__wrapper) {
    background-color: #f3f4f9;
    box-shadow: none;
    border-radius: 2px;
  }

  :deep(.el-input__inner::placeholder) {
    opacity: 0.6;
  }

  .image-captcha {
    width: 150px;
    height: height(46);
    margin-left: 10px;
    cursor: pointer;
  }

  .el-button {
    width: 100%;
    height: height(46);
    border-radius: 2px;

    .custom-loading .circular {
      margin-right: 6px;
      width: 18px;
      height: 18px;
      animation: loading-rotate 2s linear infinite;
    }
    .custom-loading .circular .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: var(--el-button-text-color);
      stroke-linecap: round;
    }
  }

  .send-button {
    width: fit-content;
    margin-left: 10px;
  }

  :deep(.el-divider__text) {
    color: #666666;
  }

  .browser-icon {
    width: 26px;
    margin-right: 10px;
  }

  .browser-text {
    font-size: 13px;
    color: #666666;
  }
}
</style>
