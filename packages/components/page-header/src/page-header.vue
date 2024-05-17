<template>
  <el-header>
    <div class="header-title flex-center">
      <img class="logo" :src="envLogo()" alt="logo" />
      {{ appName }}后台
      <div class="fullscreen-collapse-btn" v-if="isDayunEnv">
        <liv-icon-font
          class="el-icon"
          :name="isCollapse ? 'icon-zhankaicaidan' : 'icon-zhediecaidan'"
          size="20"
          @click="toggleCollapse"
        />
        <liv-icon-font
          class="el-icon"
          :name="isFullscreen ? 'icon-cancel-full-screen' : 'icon-full-screen'"
          size="18"
          @click="toggle"
        />
      </div>
    </div>
    <div class="el-header-right">
      <!-- <liv-setting-theme :bus="bus" /> -->
      <template v-if="!isDayunEnv">
        <div class="icon-item home-item" title="首页">
          <liv-icon-font name="icon-shouye2" size="22" />
        </div>
        <div class="icon-item msg-item" title="消息">
          <liv-icon-font name="icon-tongzhi" size="24" />
        </div>
      </template>
      <div
        class="icon-item system-item flex-center"
        v-if="isDayunEnv && isShowSwitchSys"
        title="切换系统"
      >
        <liv-switch-system />
      </div>
      <div class="icon-item">
        <user-popover v-model="modifyPwdVisibel" />
      </div>
    </div>
    <el-dialog v-model="modifyPwdVisibel" title="修改密码" width="30vw" destroy-on-close>
      <liv-modify-pwd />
    </el-dialog>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { envLogo, checkDayunEnv } from '@szxc/utils'
import LivSettingTheme from '../../setting-theme/src/setting-theme.vue'
import LivIconFont from '../../icon-font/src/icon-font.vue'
import UserPopover from './user-popover.vue'
import LivModifyPwd from '../../modify-pwd/src/modify-pwd.vue'
import LivSwitchSystem from './switch-system.vue'
import { pageHeaderProps } from './page-header'
import { useFullscreen } from '@vueuse/core'

defineProps(pageHeaderProps)

const appName = import.meta.env.VITE_APP_NAME

const isShowSwitchSys = import.meta.env.VITE_SHOW_SWITCH_SYSTEM

const modifyPwdVisibel = ref(false)

defineOptions({
  name: 'LivPageHeader'
})

const isCollapse = defineModel()
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
const { isFullscreen, toggle } = useFullscreen()

const isDayunEnv = checkDayunEnv()
</script>

<style>
/** 默认其它主题配置 例如 theme-chalk='green' theme-chalk='blue'*/
/** 主题色配置在 themeSetting.ts文件中配置 */
:root {
  --custom-page-header-bg: linear-gradient(
    90deg,
    var(--el-color-primary) 30%,
    var(--el-color-primary-light-8) 100%
  );
  --custom-header-right-bg: url(../../assets/header_bg.png);
  --custom-header-font-color: var(--el-color-primary);
  --custom-header-title-font-bg: linear-gradient(
    180deg,
    var(--el-color-white) 35%,
    var(--el-color-primary-light-6) 87%
  );
  --custom-header-title-font-size: 38px;
  --custom-header-title-font-style: oblique;
  --custom-header-title-font-family: YouSheBiaoTiHei;
  --custom-header-title-font-weight: 100;
}

/** 龘云主题色配置 */
[theme-chalk='dayun'] {
  --custom-page-header-bg: var(--el-color-primary);
  --custom-header-right-bg: var(--el-color-primary);
  --custom-header-font-color: var(--el-color-white);
  --custom-header-title-font-bg: var(--el-color-white);
  --custom-header-title-font-size: 18px;
  --custom-header-title-font-style: normal;
  --custom-header-title-font-family: none;
  --custom-header-title-font-weight: bold;
}
</style>
<style lang="scss" scoped>
.flex-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.el-header {
  position: relative;
  height: var(--custom-common-page-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--custom-page-header-bg);

  .header-title {
    padding-right: 2px;
    color: var(--el-color-white);
    font-size: var(--custom-header-title-font-size);
    font-family: var(--custom-header-title-font-family);
    line-height: 45px;
    letter-spacing: 3px;
    font-weight: var(--custom-header-title-font-weight);
    font-style: var(--custom-header-title-font-style);
    background: var(--custom-header-title-font-bg);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    .logo {
      margin-right: 10px;
      height: 42px;
    }
    .fullscreen-collapse-btn {
      position: absolute;
      left: 14.5vw;
      top: 0;
      bottom: 0;
      height: 100%;
      padding-left: 10px;
      border-left: 1px solid #3e84f6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .el-icon {
        margin: 4px 0;
        cursor: pointer;
      }
    }
  }
  .el-header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 1254px;
    height: 100%;
    background: var(--custom-header-right-bg) no-repeat right bottom;
    background-size: 1254px 68px;
    color: var(--custom-header-font-color);
    .icon-item {
      cursor: pointer;
      margin-left: 10px;
    }
  }
}
</style>
