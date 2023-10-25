<template>
    <el-card :header="route.params.id ? '修改事件' : '新增事件'">
        <liv-data-form :default-value="defaultValue" :fields="formFields" @submit="submitClick"
            @reset="(form, formEl) => formEl.resetFields()" @back="$router.back" />
    </el-card>
</template>
  

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { formFields } from './EventFields'
import { eventApi } from '@szxc/apis';
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';

const defaultValue = ref({})

const route = useRoute()

onMounted(async () => {
    if (route.params.id) {
        const res = await eventApi.getDetail({
            eventId: route.params.id
        })
        defaultValue.value = res.data
    }
})

const submitClick = (data, formEl) => {
    ElMessage({
        message: '提交的表单内容：' + JSON.stringify(data),
        type: 'success',
        duration: 5000
    })
    console.log(data, formEl)
}

</script>

<style scoped>
.el-card {
    margin: 26px;
}
</style>