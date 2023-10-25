<template>
  <el-card header="菜单列表">
    <liv-data-form inline
                   :fields="searchFields"
                   @add=""
                   @search=""/>
    <liv-data-table height="620"
                    :fields="tableFields"
                    :data="tableData"
                    @detail=""
                    @edit=""
                    @delete=""/>
  </el-card>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {getList} from '@/api/menu';
import {tableFields, searchFields} from "./MenuFields";

const tableData = ref([])

onMounted(() => {
  requestData()
})

const requestData = async (params = {}) => {
  let res = await getList({
    sysId: 1,
    name: '',
    url: ''
  })
  tableData.value = res.data
}

</script>


<style scoped>

</style>