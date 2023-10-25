<template>
    <el-card header="事件列表">
        <liv-data-form inline :fields="searchFields" @search="requestData($event)"
            @add="$router.push('/background/event/form')" />
        <liv-data-table height="620" :data="tableData" :fields="tableFields"
            @detail="$router.push('/background/event/descriptions/' + $event.id)"
            @edit="$router.push('/background/event/form/' + $event.id)" @delete="deleteClick" />
        <el-pagination background layout="total, sizes,prev, pager, next, jumper" :total="1000" />
    </el-card>
</template>
  

<script lang="ts" setup>
import { eventApi } from '@szxc/apis'
import { onMounted, ref } from 'vue';
import { tableFields, searchFields } from './EventFields'
import { ElMessageBox, ElMessage } from 'element-plus';

const tableData = ref([])

onMounted(() => {
    requestData()
})

const requestData = async (params = {}) => {
    let res = await eventApi.getList({
        gridCode: 36,
        type: '',
        pageNum: 1,
        pageSize: 10,
        hasPic: '1',
        ...params
    })
    tableData.value = res.data
}

const deleteClick = (data) => {
    ElMessageBox.confirm(
        '确定删除该条记录吗?',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        ElMessage({
            type: 'success',
            message: '点击了删除',
        })
    })
}
</script>

<style scoped>
.el-card {
    margin: 26px;

    .el-pagination {
        justify-content: end;
        margin-top: 20px;
    }
}
</style>