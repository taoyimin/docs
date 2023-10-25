<template>
    <el-container>
        <el-header>
            <h1 class="header-title">系统后台管理</h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu router>
                    <el-menu-item index="/background/totilet-list">厕所管理</el-menu-item>
                    <el-menu-item index="/background/menu-table">菜单管理</el-menu-item>
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

.header-title {
    color: white;
}
</style>