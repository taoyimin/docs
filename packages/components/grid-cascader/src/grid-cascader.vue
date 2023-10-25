<template>
  <el-cascader v-model="valueArray" :props="cascaderProps" :options="options" @change="handleChange" />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import type { CascaderProps } from "element-plus";
import {
  queryGridZtreeList,
  expandedTreeByCodeWithAuth
} from "@szxc/apis/grid";
import { gridCascaderProps } from "./grid-cascader";

defineOptions({
  name: "LivGridCascader"
});

const props = defineProps(gridCascaderProps);
const emits = defineEmits(["update:modelValue", "change"]);

const valueArray = ref([props.modelValue]);
const value: any = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  }
});



/* let defalutValue: [{ value: string | number; label: string }] = [
  { value: userStore.value.userInfo.gobalCode, label: userStore.value.userInfo.gobalName }
] */

let options = ref();

watchEffect(() => {
  if (props.modelValue && props.modelValue !== "") {
    expandedTreeByCodeWithAuth({ code: props.modelValue }).then((res: any) => {
      if (res.code === "0") {
        options.value = [res.data.areaTree];
        valueArray.value = res.data.areaPath.map((item) => {
          return item.gridCode;
        });
      }
    });
  }
})

const handleChange = (val) => {
  value.value = val[val.length - 1];
  emits("change", val[val.length - 1], val);
};

const cascaderProps: CascaderProps = {
  checkStrictly: true,
  value: "gridCode",
  label: "gridName",
  //leaf: 'isParent',
  lazy: true,
  lazyLoad(node, resolve) {
    const { value, isLeaf } = node;
    queryGridZtreeList({
      //code: value
      gridCode: 36
    }).then((res: any) => {
      let arr = res.map((item: any) => {
        return {
          gridCode: item.code,
          gridName: item.name,
          isParent: item.isParent
        };
      });
      resolve(arr);
    });
    /* if (!isLeaf) {
      queryGridZtreeList({
        code: value
      }).then((res: any) => {
        let arr = res.map((item: any) => {
          return {
            gridCode: item.code,
            gridName: item.name,
            isParent: item.isParent
          }
        })
        resolve(arr)
      })
    } else {
      resolve()
    } */
  }
};
</script>
