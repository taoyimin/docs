<template>
    <el-container>
        <el-header>
            <h1 class="header-title">主应用后台管理</h1>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu router>
                    <el-menu-item index="/excrement-main">子应用</el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <span>粪污资源化</span>
                        </template>
                        <el-menu-item index="/excrement-resource/totilet-list">厕所管理</el-menu-item>
                        <el-menu-item index="/excrement-resource/totilet-add">新增厕所</el-menu-item>
                        <el-menu-item index="/excrement-resource/totilet-update">修改厕所</el-menu-item>
                    </el-sub-menu>
                    <!-- <el-sub-menu index="2">
                        <template #title>
                            <span>污水可视化</span>
                        </template>
                        <el-menu-item index="2-1">厕所管理</el-menu-item>
                        <el-menu-item index="2-2">集中点管理</el-menu-item>
                    </el-sub-menu> -->
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