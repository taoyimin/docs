import { defineStore } from 'pinia'
import { getSecretKey, loginByAccount, logout } from '@/api/user'
import { ElMessage } from 'element-plus'
import CryptoJS from 'crypto-js'
import router from '@/router'

interface State {
  userInfo: any
}

const defaultState: State = {
  userInfo: {}
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => defaultState,
  getters: {
    token: (state) => state.userInfo?.token
  },
  actions: {
    logout(): void {
      logout().then((res: any) => {
        if (res.success) {
          this.userInfo = {}
          router.push({ name: 'login' })
        } else {
          ElMessage({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    /**
     * Attempt to login a user
     */
    async login(params: any) {
      const password: string = await getSecretKey().then((res: any): string => {
        res = res.split('').reverse().join('')
        const key = CryptoJS.enc.Utf8.parse(res)
        const encrypted = CryptoJS.AES.encrypt(params.password, key, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })

        return encrypted.toString()
      })

      const { username, imageCode } = params
      loginByAccount({
        username,
        password,
        imageCode
      })
        .then((res: any) => {
          if (res.success) {
            ElMessage({
              message: '登录成功',
              type: 'success'
            })
            this.userInfo = res.data
            console.log(router)
            router.push({ name: 'demo' })
          } else {
            ElMessage({
              message: res.msg,
              type: 'error'
            })
          }
        })
        .catch((error: any) => { })
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userInfo',
        storage: localStorage
      }
    ]
  }
})

export default useUserStore
