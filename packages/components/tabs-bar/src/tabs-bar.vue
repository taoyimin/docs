<template>
  <div id="tabs-bar-container" class="tabs-bar-container">
    <el-tabs v-model="activeTabsValue" @contextmenu.prevent="openContextMenu($event)">
      <el-tab-pane
        v-for="tab in visitedViews"
        :key="tab.path"
        :label="tab.meta.title"
        :name="tab.path"
        :tab="tab"
        class="border-none"
      >
        <template #label>
          <div class="tab-item" :class="{ 'is-active': activeTabsValue === tab.path }">
            <span class="flex-row align-center">
              <span class="title" @click.stop="tabClick(tab.path)">{{ tab.meta.title }}</span>
              <el-icon
                size="12"
                v-if="!(tab.meta && tab.meta.affix)"
                @click.stop="removeTab(tab.path)"
                ><Close
              /></el-icon>
            </span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <div
      class="el-dropdown-menu context-drowdown-menu"
      v-if="contextMenuVisible"
      :style="{ left: drowdownPosition.left + 'px', top: drowdownPosition.top + 'px' }"
    >
      <div class="el-dropdown-menu__item" @click="closeOtherTab">
        <el-icon :size="14"><FolderRemove /></el-icon>
        关闭其他
      </div>
      <div class="el-dropdown-menu__item" @click="closeAllTab">
        <el-icon :size="14"><FolderDelete /></el-icon>
        关闭全部
      </div>
    </div>

    <el-dropdown trigger="hover" class="tabs-action">
      <el-icon color="rgba(0, 0, 0, 0.65)" :size="20">
        <Menu />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu class="el-dropdown-menu">
          <el-dropdown-item @click="closeOtherTab">
            <el-icon :size="14"><FolderRemove /></el-icon>
            关闭其他
          </el-dropdown-item>
          <el-dropdown-item @click="closeLeftTab">
            <el-icon :size="14"><CircleClose /></el-icon>
            关闭左侧
          </el-dropdown-item>
          <el-dropdown-item @click="closeRightTab">
            <el-icon :size="14"><CircleClose /></el-icon>
            关闭右侧
          </el-dropdown-item>
          <el-dropdown-item @click="closeAllTab">
            <el-icon :size="14"><FolderDelete /></el-icon>
            关闭全部
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import path from 'path-browserify'
import { onMounted, ref, watch, computed, getCurrentInstance } from 'vue'
import type { Router, RouteRecordRaw } from 'vue-router'
import { Menu, FolderRemove, CircleClose, FolderDelete, Close } from '@element-plus/icons-vue'
import { TabPaneName } from 'element-plus'
import { useAuthorityStore, useTabsBarStore } from '@szxc/stores'
import { DEFAULT_GUIDE_PAGE_NAME } from '@szxc/utils'

export type routersType = RouteRecordRaw & {
  title?: string
}

defineOptions({
  name: 'LivTabsBar'
})

const authorityStore = useAuthorityStore()
const tabsBarStore = useTabsBarStore()

const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router
let route = instance.appContext.config.globalProperties.$route

let affixTags = ref<RouteRecordRaw[]>([])

const routes = computed(() => authorityStore.dynamicRoutes)
const visitedViews = computed<routersType[]>(() => tabsBarStore.visitedViews)

const contextMenuVisible = ref(false)

const drowdownPosition = ref({
  top: 0,
  left: 0
})

function filterAffixTags(routes: RouteRecordRaw[], basePath = '/') {
  let tags = [] as any
  routes.forEach((route) => {
    if (route.meta && route.meta.affix) {
      // 获取 path
      const tagPath = path.resolve(basePath, route.path)
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  })
  return tags
}

// 添加当前路由
const addTags = () => {
  const { name } = route
  if (name === 'Login') {
    return
  }
  if (name) {
    const tag: any = {
      fullPath: route.fullPath,
      path: route.path,
      name: route.name,
      meta: { ...route.meta }
    }
    tabsBarStore.addView(tag)
  }
  return false
}

/**
 * @description: 拿到需要固定的路由表，添加进 store
 */
const initTags = () => {
  let routesNew = routes.value as unknown as RouteRecordRaw[]
  let affixTag = (affixTags.value = filterAffixTags(routesNew))
  for (const tag of affixTag) {
    if (tag.name) {
      tabsBarStore.addVisitedView(tag)
    }
  }
}

onMounted(() => {
  initTags()
  addTags()
})

watch(
  () => instance.appContext.config.globalProperties.$route,
  (newVal) => {
    route = newVal
    addTags()
  }
)

const activeTabsValue = computed({
  get: () => {
    return tabsBarStore.activeTabsValue
  },
  set: (val) => {
    tabsBarStore.setTabsMenuValue(val)
  }
})

// 删除以后切换到下一个
function toLastView(activeTabPath: string) {
  let index = visitedViews.value.findIndex((item) => item.path === activeTabPath)
  const nextTab = visitedViews.value[index + 1] || visitedViews.value[index - 1]
  if (!nextTab) return
  router.push(nextTab.path)
  tabsBarStore.addVisitedView(nextTab)
}

// 点击事件
const tabClick = (path: string) => {
  router.push(path)
}
const isActive = (path: string): boolean => {
  return path === route.path
}
const removeTab = async (activeTabPath: TabPaneName): Promise<any> => {
  if (isActive(activeTabPath as string)) {
    toLastView(activeTabPath as string)
  }
  await tabsBarStore.delView(activeTabPath)
}

// 按钮事件
const closeOtherTab = () => {
  tabsBarStore.delOtherViews(route.path)
}
const closeLeftTab = () => {
  tabsBarStore.delLeftView(route.path)
}
const closeRightTab = () => {
  tabsBarStore.delRightView(route.path)
}
const closeAllTab = async () => {
  tabsBarStore.delAllViews()
  // 跳转到默认首页
  router.replace({
    name: DEFAULT_GUIDE_PAGE_NAME
  })
}

const openContextMenu = (e) => {
  drowdownPosition.value = {
    top: e.clientY + 15,
    left: e.clientX
  }
  contextMenuVisible.value = true
}

watch(
  () => contextMenuVisible.value,
  () => {
    if (contextMenuVisible.value) {
      document.body.addEventListener('click', () => {
        contextMenuVisible.value = false
      })
    } else {
      document.body.removeEventListener('click', () => {
        contextMenuVisible.value = false
      })
    }
  }
)
</script>

<style lang="scss" scoped>
//默认paddiing
$base-padding: 20px;
//菜单li标签的高度
$base-tabs-bar-height: 56px;
$base-tab-bottom-border-height: 4px;

.flex-row {
  display: flex;
  flex-direction: row;
}

.align-center {
  align-items: center;
}

.tabs-bar-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--custom-card-padding);
  user-select: none;
  background: var(--el-menu-bg-color);
  border-radius: 8px;
  .el-tabs {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    height: $base-tabs-bar-height;
    --el-tabs-header-height: $base-tabs-bar-height;
    :deep(.el-tabs__nav-wrap) {
      width: 1500px;
      // display: flex;
      // align-items: center;
      &::after {
        content: '';
        display: none;
      }
    }
    :deep(.el-tabs__header) {
      margin-bottom: 0;
    }
    :deep(.el-tabs__active-bar) {
      display: none;
    }
    :deep(.el-tabs__item) {
      padding: 0 10px;
      &:not(:last-child) {
        &::after {
          content: '';
          margin-left: 20px;
          width: 2px;
          height: 24px;
          background: var(--custom-tab-border-color);
          border-radius: 100px 100px 100px 100px;
        }
      }
    }
    :deep(.el-tabs__nav-prev) {
      line-height: $base-tabs-bar-height;
    }
    :deep(.el-tabs__nav-next) {
      line-height: $base-tabs-bar-height;
    }
    .tab-item {
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: var(--el-font-size-base);
      color: var(--custom-table-header-text-color);
      // margin-right: 20px;
      height: 100%;
      cursor: pointer;
      .title {
        position: relative;
        margin-right: 10px;
        height: 100%;
        line-height: calc($base-tabs-bar-height - $base-tab-bottom-border-height);
      }
      .el-icon {
        border-radius: 50%;
        &:hover {
          background-color: var(--el-text-color-placeholder);
          color: #fff;
        }
      }

      &:not(:last-child) {
        &::after {
          content: '';
          margin-left: 20px;
          width: 2px;
          height: 24px;
          background: var(--custom-tab-border-color);
          border-radius: 100px 100px 100px 100px;
        }
      }
      &.is-active,
      &:hover {
        color: var(--el-color-primary);
        .title {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 2px;
            width: 100%;
            height: $base-tab-bottom-border-height;
            border-radius: 2px;
            background: var(--el-color-primary);
          }
        }
      }
    }
  }

  .more {
    display: flex;
    align-content: center;
    align-items: center;
    cursor: pointer;
  }
}

.tabs-action {
  margin-left: 20px;
  padding-bottom: 5px;
  cursor: pointer;

  :deep(.el-icon) {
    transition: all 0.3s;
  }

  :deep(.el-icon):hover {
    color: var(--el-color-primary);
    transform: rotate(90deg);
  }
}

.el-dropdown-menu {
  padding: 10px;
  :deep() {
    .el-dropdown-menu__item {
      padding: 5px 15px;
      border-radius: 4px;
      &:hover {
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9);
      }
    }
  }
}

.context-drowdown-menu {
  position: fixed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
}
</style>
