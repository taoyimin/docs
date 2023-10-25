<template>
    <el-descriptions :column="2" border>
        <template v-for="field in fields" :key="field.prop">
            <el-descriptions-item v-if="!field.fieldType" v-bind="field">{{ data[field.prop]
            }}</el-descriptions-item>
            <el-descriptions-item v-else-if="field.fieldType === 'image'" v-bind="field">
                <el-image v-for="image in getFileUrlList(data[field.prop])" :key="image"
                    :preview-src-list="getFileUrlList(data[field.prop])" :src="image" preview-teleported />
            </el-descriptions-item>
            <!-- TODO 语音项 -->
        </template>
    </el-descriptions>
</template>

  
<script lang="ts" setup>
import { dataDescriptionsProps } from './data-descriptions'
import { getFileUrlList } from '@szxc/http'

defineOptions({
    name: 'LivDataDescriptions'
})

const props = defineProps(dataDescriptionsProps)
</script>

<style lang="scss" scoped>
.el-image {
    width: 100px;
    height: 100px;
}

:deep(.el-image) {
    img {
        object-fit: cover;
    }
}
</style>