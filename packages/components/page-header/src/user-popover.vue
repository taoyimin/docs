<template>
  <el-popover
    width="11.7vw"
    popper-style="
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.1); padding: 20px 24px 10px; border-radius: 8px;border: 1px solid #F4F5F9;"
  >
    <template #reference>
      <liv-icon-font v-if="isDayunEnv" key="dayun" name="icon-a-bianzu8" size="40" />
      <liv-icon-font v-else key="normal" name="icon-gerenzhongxintouxiang" size="26" />
    </template>
    <template #default>
      <div class="user-popover">
        <div class="user-info flex-center">
          <liv-icon-font
            :name="isDayunEnv ? 'icon-a-bianzu8' : 'icon-gerenzhongxintouxiang'"
            size="40"
            class="avart"
          />
          <div class="user-desc">
            <div class="title">{{ userStore.realName || '-' }}</div>
            <div class="text" v-if="!isDayunEnv">{{ userStore.userName || '-' }}</div>
          </div>
        </div>
        <div v-if="!isDayunEnv" class="menu-item flex-center" @click="modifyPwdVisibel = true">
          <liv-icon-font name="icon-mima" size="24" />
          <span class="text">修改密码</span>
        </div>
        <div class="menu-item flex-center" @click="() => userStore.loginOut()">
          <liv-icon-font name="icon-tuichudenglu" size="24" />
          <span class="text">退出登录</span>
        </div>
      </div>
    </template>
  </el-popover>
</template>

<script setup lang="ts">
import { useUserStore } from '@szxc/stores'
import { checkDayunEnv } from '@szxc/utils'
import LivIconFont from '../../icon-font/src/icon-font.vue'

defineOptions({
  name: 'LivUserPopover'
})

const userStore = useUserStore()
const isDayunEnv = checkDayunEnv()

const modifyPwdVisibel = defineModel()
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-popover {
  .text {
    font-size: var(--el-font-size-medium);
    line-height: 19px;
  }
  .title {
    font-size: var(--el-font-size-large);
    line-height: 21px;
  }
  .user-info {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
    .avart {
      margin-right: 15px;
      color: var(--el-color-primary);
    }
    .user-desc {
      .title {
        margin-bottom: 3px;
      }
    }
  }
  .menu-item {
    padding: 15px 13px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
    .text {
      margin-left: 26px;
    }
  }
}
</style>
