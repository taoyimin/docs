<template>
    <el-container>
        <el-header>
            <h1 class="header-title">长效管护后台管理</h1>
        </el-header>
        <el-container>
            <el-aside width="250px">
                <el-menu router>
                    <el-sub-menu index="1">
                        <template #title>
                            <span>事件管理</span>
                        </template>
                        <el-menu-item index="/background/event/table">辖区事件</el-menu-item>
                        <el-menu-item index="">待办事件</el-menu-item>
                        <el-menu-item index="">已办事件</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <span>网格管理</span>
                        </template>
                        <el-menu-item index="">新增网格</el-menu-item>
                        <el-menu-item index="">编辑网格</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
  

<script lang="ts" setup>
</script>

<style scoped>
.el-container {
    padding: 0;
    margin: 0;
    height: 100vh;
}

.el-menu {
    height: 100%;
}

.el-header {
    background-color: #1c9399;
    display: flex;
    align-items: center;
}

.el-main {
    padding: 0;
}

.header-title {
    color: white;
}
</style>