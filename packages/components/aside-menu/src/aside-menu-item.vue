<template>
  <el-sub-menu
    v-if="
      dynamicRoute.meta.hasChild === '1' &&
      dynamicRoute.children?.filter((item) => item.meta.hasActionConfig === '0')?.length !== 0
    "
    :index="dynamicRoute.name"
  >
    <template #title>
      <liv-icon-font class="icon" :name="dynamicRoute.icon" size="24" />
      <span class="title">{{ dynamicRoute.meta.title }}</span>
    </template>
    <template v-if="dynamicRoute.meta.hasChild === '1'">
      <aside-menu-item
        v-for="child in dynamicRoute.children?.filter((item) => item.meta.hasActionConfig === '0')"
        :key="child.name"
        :dynamicRoute="child"
        >{{ child.meta.title }}</aside-menu-item
      >
    </template>
  </el-sub-menu>
  <el-menu-item v-else :index="dynamicRoute.name" :route="dynamicRoute">
    <template #title>
      <liv-icon-font class="icon" :name="dynamicRoute.icon" size="24" />
      <span class="title">
        {{ dynamicRoute.meta.title }}
      </span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import AsideMenuItem from './aside-menu-item.vue'
import { asideMenuItemProps } from './aside-menu-item'
import LivIconFont from '../../icon-font/src/icon-font.vue'

defineOptions({
  name: 'LivAsideMenuItem'
})

defineProps(asideMenuItemProps)
</script>

<style>
/** 默认其它主题配置 例如 theme-chalk='green' theme-chalk='blue'*/
/** 主题色配置在 themeSetting.ts文件中配置 */
:root {
  --custom-el-sub-menu-hover-color: var(--el-color-primary);
  --custom-el-sub-menu-hover-bg: transparent;
  --custom-el-menu-item-open-color: var(--el-color-primary);
  --custom-el-menu-item-open-bg: var(--el-color-primary-light-9);
}

/** 龘云主题色配置 */
[theme-chalk='dayun'] {
  --custom-el-sub-menu-hover-color: var(--el-color-white);
  --custom-el-sub-menu-hover-bg: var(--el-color-primary);
  --custom-el-menu-item-open-color: var(--el-color-white);
  --custom-el-menu-item-open-bg: var(--el-color-primary);
}
</style>
<style lang="scss" scoped>
.el-sub-menu {
  :deep(.el-sub-menu__title) {
    font-size: var(--el-font-size-large);
    &:hover {
      color: var(--custom-el-sub-menu-hover-color);
      background: var(--custom-el-sub-menu-hover-bg);
    }
    .icon {
      flex-shrink: 0;
    }
    .title {
      margin-left: 10px;
      font-weight: bold;
      font-family: Alibaba PuHuiTi;
    }
    .el-sub-menu__icon-arrow {
      font-size: 16px;
    }
  }
  .el-menu-item {
    font-size: var(--el-font-size-large);
  }
  .el-menu-item {
    padding-left: 20px !important;
    &::before {
      content: '';
      margin-right: 24px;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
  .el-sub-menu__icon-arrow {
    font-size: var(--el-font-size-large);
  }
}
.is-opened {
  .el-menu-item {
    background: var(--custom-el-menu-item-open-bg);
    &:hover,
    &.is-active {
      color: var(--el-color-white);
      background: var(--custom-el-menu-item-active-bg);
      &::before {
        background: var(--el-color-white);
      }
    }
  }
  :deep(.el-sub-menu__title) {
    color: var(--custom-el-menu-item-open-color);
  }
}
</style>
