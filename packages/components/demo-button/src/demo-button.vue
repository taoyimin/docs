<template>
    <el-button>我是自定义组件按钮</el-button>
</template>
  
<script lang="ts" setup>
import { demoButtonProps } from './demo-button';

defineOptions({
    name: 'LivDemoButton',
})

const props = defineProps(demoButtonProps)
</script>