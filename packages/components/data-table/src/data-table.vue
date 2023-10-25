<template>
    <el-table>
        <template v-for="field in fields" :key="field.prop">
            <el-table-column v-if="!field.fieldType" v-bind="field" />
            <el-table-column v-else-if="field.fieldType === 'image'" v-bind="field">
                <template #default="scope">
                    <template v-if="scope.row[field.prop]">
                        <el-image v-for="image in getFileUrlList(scope.row[field.prop])" :key="image"
                            :preview-src-list="getFileUrlList(scope.row[field.prop])" :src="image" preview-teleported />
                    </template>
                    <template v-else>无</template>
                </template>
            </el-table-column>
        </template>
        <el-table-column v-if="defaultButtons.length + buttons.length > 0" fixed="right" label="操作"
            :width="(defaultButtons.length + buttons.length) * 72 + 12 + 4">
            <template #default="scope">
                <el-button v-for="button in defaultButtons.concat(buttons)" :key="button.name"
                    @click="button.onClick(scope.row)" v-bind="removeOnClick(button)">{{
                        button.name
                    }}</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
  
<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue';
import { dataTableProps } from './data-table';
import { getFileUrlList } from '@szxc/http'

defineOptions({
    name: 'LivDataTable'
})

const props = defineProps(dataTableProps)

const defaultButtons = reactive([])

onBeforeMount(() => {
    props.onDetail && defaultButtons.push({ name: '详情', type: 'primary', onClick: props.onDetail });
    props.onEdit && defaultButtons.push({ name: '编辑', type: 'warning', onClick: props.onEdit });
    props.onDelete && defaultButtons.push({ name: '删除', type: 'danger', onClick: props.onDelete });
})

// 移除onClick事件，避免触发两次
const removeOnClick = (button) => {
    const { onClick, ...otherProps } = button
    return otherProps
}

</script>

<style scoped>
.el-image {
    width: 30px;
    height: 30px;
}
</style>