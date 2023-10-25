<template>
  <el-select placeholder="请选择">
    <el-option v-for="item in options" :key="item['dicSubCode']" :label="item['dicSubName']"
      :value="item['dicSubCode']" />
  </el-select>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { getDictList } from "@szxc/apis/dict";
import { dictSelectProps } from "./dict-select";

defineOptions({
  name: "LivDictSelect"
});

const props = defineProps(dictSelectProps);

const options = ref([]);

getDictList({
  dicCode: props.dictType
}).then((res: any) => {
  options.value = res.data;
});
</script>
