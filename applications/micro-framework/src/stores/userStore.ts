import { defineStore } from 'pinia'
import { loginByAccount, logout } from '@szxc/apis/user'
import { ElMessage } from 'element-plus'
import CryptoJS from 'crypto-js'
import JSEncrypt from 'jsencrypt'
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
      // const password: string = await "getSecretKey()".then((res: any): string => {
      const res: string = "ada242f9c63af6c5";//res.split('').reverse().join('')
      const key = CryptoJS.enc.Utf8.parse(res)
      const encrypted = CryptoJS.AES.encrypt(params.password, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });

      const encrypt = new JSEncrypt();
      const publicKey: string = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlQ3s76Hc7/Qf/hvtqUMbd12XZFVS4J2fbhUqWm6ZvI/TY24pIkYCAQHb1ew3nL8YMTMZbRXKWTkNEte1zAnJIKb153yK3T/6Noh7eioKaoh8w5kIHg5fcCN7y9F+aDQfdzsXE3xuZ9JQbY1Fw+U4j8kOZjjgDIRML44TjMNIbushon0v8TsYkhMj+CIg+eESPPhe7z6YXZOjnv+uArvBMjeP4puMGh7LvImD18cB6KUCXmnbAssriWcrhtIn0krQ9I53Fyvx/hu+TplOqRCQE1ZlH+KBw6a8z9R/gIno3shk6ElpqqmBQz5ftXKexs1+sGN3nMDK7+s8LN7kOrGPiwIDAQAB";
      encrypt.setPublicKey(publicKey);
      const password: string = encrypt.encrypt(params.password);
      // })

      const { username, imageCode } = params
      loginByAccount({
        username,
        password,
        scope: 'all',
        grant_type: 'password'
      })
        .then((res: any) => {
          ElMessage({
            message: '登录成功',
            type: 'success'
          })
          this.userInfo = res
          console.log('111', res)
          console.log(router)
          router.push({ name: 'demo' })
          // if (res.success) {
          //   ElMessage({
          //     message: '登录成功',
          //     type: 'success'
          //   })
          //   this.userInfo = res.data
          //   console.log(router)
          //   router.push({ name: 'demo' })
          // } else {
          //   ElMessage({
          //     message: res.msg,
          //     type: 'error'
          //   })
          // }
        })
        .catch((error: any) => {
          ElMessage({
            message: error.message,
            type: 'error'
          })
        })
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
