<template>
    <el-card header="事件详情">
        <liv-data-descriptions title="基础信息" :data="eventDetail" :fields="descriptionsFields" />
    </el-card>
</template>
  
<script lang="ts" setup>
import { eventApi } from '@szxc/apis'
import { onMounted, ref } from 'vue';
import { descriptionsFields } from './EventFields'
import { useRoute } from 'vue-router';

const eventDetail = ref({})

const route = useRoute()

onMounted(async () => {
    const res = await eventApi.getDetail({
        eventId: route.params.id
    })
    eventDetail.value = res.data
})

</script>

<style scoped>
.el-card {
    margin: 26px;
}
</style>