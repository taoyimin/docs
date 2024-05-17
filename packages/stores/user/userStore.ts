import { computed, ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import JSEncrypt from 'jsencrypt'
import {
  type UserInfo,
  type LoginParam,
  type AccountLoginParam,
  type PhoneLoginParam,
  type CodeLoginParam,
  type RefreshTokenLoginParam,
  type MpCodeLoginParam,
  type DayunTokenLoginParam,
  type UacCodeLoginParam,
  type UacTokenLoginParam,
  type ModifyPasswordParam,
  type UserConfig,
  login as loginApi,
  loginByAccount as loginByAccountApi,
  loginByPhone as loginByPhoneApi,
  loginByCode as loginByCodeApi,
  loginByRefreshToken as loginByRefreshTokenApi,
  loginByMpCode as loginByMpCodeApi,
  loginByDaYunToken as loginByDaYunTokenApi,
  loginByUacCode as loginByUacCodeApi,
  loginByUacToken as loginByUacTokenApi,
  modifyPassword as modifyPasswordApi,
  loginOut as loginOutApi,
  getUserConfig
} from '@szxc/apis'
import { envClearToken } from '@szxc/utils'

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userInfo = ref<UserInfo | null>(null)

    const userConfig = ref<UserConfig | null>(null)

    const accessToken = computed(() => userInfo.value?.access_token)

    const refreshToken = computed(() => userInfo.value?.refresh_token)

    const realName = computed(() => userInfo.value?.real_name)

    const userId = computed(() => userInfo.value?.user_id)

    const userName = computed(() => userInfo.value?.user_name)

    const tokenType = computed(() => userInfo.value?.token_type)

    const router = useRouter()

    async function login(params: LoginParam) {
      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(import.meta.env.VITE_PUBLIC_KEY)
      const encryptPassword = encrypt.encrypt(params.password)
      if (encryptPassword) {
        userInfo.value = await loginApi({
          username: params.username,
          password: encryptPassword
        })
        return userInfo.value
      } else {
        throw new Error('加密失败')
      }
    }

    async function loginByAccount(params: AccountLoginParam) {
      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(import.meta.env.VITE_PUBLIC_KEY)
      const encryptPassword = encrypt.encrypt(params.password)
      if (encryptPassword) {
        userInfo.value = await loginByAccountApi({
          username: params.username,
          password: encryptPassword,
          captchaKey: params.captchaKey,
          captchaCode: params.captchaCode
        })
        return userInfo.value
      } else {
        throw new Error('加密失败')
      }
    }

    async function loginByPhone(params: PhoneLoginParam) {
      userInfo.value = await loginByPhoneApi(params)
      return userInfo.value
    }

    async function loginByCode(params: CodeLoginParam) {
      userInfo.value = await loginByCodeApi(params)
      return userInfo.value
    }

    async function loginByRefreshToken(params: RefreshTokenLoginParam) {
      userInfo.value = await loginByRefreshTokenApi(params)
      return userInfo.value
    }

    async function loginByMpCode(params: MpCodeLoginParam) {
      userInfo.value = await loginByMpCodeApi(params)
      return userInfo.value
    }

    async function loginByDaYunToken(params: DayunTokenLoginParam) {
      userInfo.value = await loginByDaYunTokenApi(params)
      return userInfo.value
    }

    async function loginByUacCode(params: UacCodeLoginParam) {
      userInfo.value = await loginByUacCodeApi(params)
      return userInfo.value
    }

    async function loginByUacToken(params: UacTokenLoginParam) {
      userInfo.value = await loginByUacTokenApi(params)
      return userInfo.value
    }

    async function loginOut(path: string = '/login') {
      const res = await loginOutApi()
      if (envClearToken()) {
        userInfo.value = null
      }
      if (res?.loginUrl?.startsWith('http')) {
        window.location.href = res.loginUrl
      } else {
        router.replace(path)
      }
    }

    function modifyPassword(params: ModifyPasswordParam) {
      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(import.meta.env.VITE_PUBLIC_KEY)
      const encryptOldPassword = encrypt.encrypt(params.oldPassword)
      const encryptNewPassword = encrypt.encrypt(params.newPassword)
      if (encryptOldPassword && encryptNewPassword) {
        return modifyPasswordApi({
          oldPassword: encryptOldPassword,
          newPassword: encryptNewPassword
        })
      } else {
        throw new Error('加密失败')
      }
    }

    async function initUserConfig() {
      userConfig.value = await getUserConfig()
      return userConfig.value
    }

    return {
      userInfo,
      userConfig,
      accessToken,
      refreshToken,
      realName,
      userId,
      userName,
      tokenType,
      login,
      loginByAccount,
      loginByPhone,
      loginByCode,
      loginByRefreshToken,
      loginByMpCode,
      loginByDaYunToken,
      loginByUacCode,
      loginByUacToken,
      loginOut,
      modifyPassword,
      initUserConfig
    }
  },
  {
    persist: true
  }
)
