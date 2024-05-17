import type { ExtractPropTypes } from 'vue'

export const loginFormProps = {
  /**
   * @description 登录表单标题
   */
  title: {
    type: String,
    default: import.meta.env.VITE_APP_NAME
  },
  /**
   * @description 登录表单宽度
   */
  width: {
    type: String,
    default: '360px'
  },
  /**
   * @description 主题颜色
   */
  color: String,
  /**
   * @description 登录成功后跳转的路由地址
   */
  path: {
    type: String,
    default: 'auto'
  },
  /**
   * @description 是否动态获取登录成功后的跳转页
   */
  dynamic: {
    type: Boolean,
    default: false
  }
}

export type LoginFormProps = ExtractPropTypes<typeof loginFormProps>
