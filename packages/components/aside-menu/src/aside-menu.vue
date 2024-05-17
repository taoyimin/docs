<template>
  <el-menu
    class="vp-raw"
    router
    :default-active="activeRouter"
    :collapse="isCollapse"
    popper-class="custom-aside-menu-popper"
  >
    <aside-menu-item
      v-for="dynamicRoute in dynamicRoutes"
      :key="dynamicRoute.name"
      :dynamicRoute="dynamicRoute"
    >
    </aside-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { watchEffect, ref, watch, getCurrentInstance } from 'vue'
import AsideMenuItem from './aside-menu-item.vue'
import { useAuthorityStore, type DynamicRoute } from '@szxc/stores'
import { asideMenuProps } from './aside-menu'

defineOptions({
  name: 'LivAsideMenu'
})

defineProps(asideMenuProps)

const dynamicRoutes = ref<DynamicRoute[]>([])

const authorityStore = useAuthorityStore()

const instance = getCurrentInstance()!
let route = instance.appContext.config.globalProperties.$route
const activeRouter = ref(route.name)

watchEffect(async () => {
  await authorityStore.initAuthority()
  dynamicRoutes.value = authorityStore.dynamicRoutes
})

watch(
  () => instance.appContext.config.globalProperties.$route,
  (newRoute) => {
    activeRouter.value = newRoute.name
  }
)
</script>

<style>
.custom-aside-menu-popper {
  border: none;
  .el-menu {
    background-color: var(--custom-el-menu-bg-color);
    .el-menu-item {
      color: var(--custom-el-menu-text-color);
      &:hover {
        background-color: var(--custom-el-menu-item-active-bg);
      }
      &.is-active {
        background-color: var(--custom-el-menu-item-active-bg);
      }
    }
  }
}

.el-menu--vertical {
  .el-sub-menu {
    &.is-active {
      background-color: var(--custom-el-menu-item-active-bg);
      .el-sub-menu__title {
        color: var(--custom-el-menu-text-color);
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.el-menu {
  background-color: var(--custom-el-menu-bg-color);
  color: var(--custom-el-menu-text-color);
  & > li {
    font-size: var(--el-font-size-large);
    font-weight: bold;
    font-family: Alibaba PuHuiTi;
  }
  :deep(.el-menu) {
    background-color: var(--custom-el-menu-bg-color);
  }
  :deep(.el-sub-menu__title) {
    color: var(--custom-el-menu-text-color);
  }
  :deep(.el-menu-item) {
    color: var(--custom-el-menu-text-color);
  }
}
</style>
