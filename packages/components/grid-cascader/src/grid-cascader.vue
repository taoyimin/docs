<template>
  <el-cascader
    ref="cascaderRef"
    class="vp-raw"
    @change="handleChange"
    v-bind="attrProps"
    v-model="selectVal"
    :options="options"
    :props="cascaderProps"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-cascader>
</template>

<script lang="ts" setup>
import { computed, watch, ref } from "vue";
import { cascaderProps as elCascaderProps } from "element-plus";
import type { CascaderProps } from "element-plus";
import {
  getGrid,
  getGridChildren,
  getExpandedTree,
  getGridById,
  type Grid,
} from "@szxc/apis";
import type { Arrayable } from "@szxc/utils";
import { useUserStore } from "@szxc/stores";
import { gridCascaderProps } from "./grid-cascader";
import { pick } from "lodash-es";

defineOptions({
  name: "LivGridCascader",
});

const props = defineProps(gridCascaderProps);

const attrProps = computed(() => {
  return pick(props, Object.keys(elCascaderProps));
});

const cascaderRef = ref(null);
const options = ref([]);
const selectVal = ref(props.props?.multiple ? [] : "");

const gridCode = defineModel();
const gridId = defineModel<Arrayable<string>>("gridId");
const gridName = defineModel<Arrayable<string>>("gridName");

const cascaderProps: CascaderProps = {
  multiple: false,
  checkStrictly: true,
  value: "gridCode",
  label: "gridName",
  lazy: true,
  emitPath: false,
  lazyLoad: async (node, resolve) => {
    const { level, value } = node;
    if (node?.children?.length || !level) return resolve([]);
    if (level) {
      // 加载下一级数据
      const grids = await getGridChildren({
        gridCode: value,
      });
      resolve(convertData(grids) as any);
    }
  },
  ...(props.props || {}),
};

function convertData(grids: Grid[]): Grid[] {
  if (grids && props.showLevel !== -1) {
    return grids.map((grid) => {
      if (parseInt(grid.level) >= props.showLevel) {
        grid.leaf = true;
        grid.hasChildren = false;
        grid.children = [];
      } else {
        grid.children = convertData(grid.children);
      }
      return grid;
    });
  } else {
    return grids;
  }
}

const handleChange = (val: any) => {
  gridCode.value = val;
  if (cascaderRef.value.getCheckedNodes()?.length !== 0) {
    if (cascaderProps.multiple) {
      let idArr = [];
      let gridNameArr = [];
      cascaderRef.value
        .getCheckedNodes(!cascaderProps.checkStrictly)
        .forEach((item) => {
          idArr.push(item.data.gridId);
          gridNameArr.push(item.data.gridName);
        });
      gridId.value = idArr;
      gridName.value = gridNameArr;
    } else {
      gridId.value = cascaderRef.value.getCheckedNodes()[0].data.gridId;
      gridName.value = cascaderRef.value.getCheckedNodes()[0].data.gridName;
    }
  } else {
    gridId.value = "";
    gridName.value = "";
  }
  if (props.togglePopperVisible) {
    cascaderRef.value.togglePopperVisible();
  }
};

const rootAreaTree = ref([]);
const getRootAreaTree = async () => {
  if (!rootAreaTree.value.length) {
    // 获取根节点网格树
    rootAreaTree.value = await getGrid({
      gridCode: props.root ? "" : useUserStore().userInfo.globalCode,
    });
  }
  options.value = convertData([rootAreaTree.value]);
  selectVal.value = cascaderProps.multiple ? [] : "";
};

// 单选逻辑
const getSelectVal = async (gridCode, gridId) => {
  let newVal = gridCode;
  // 首先要判断是否是修改gridId
  if (
    gridId &&
    gridId !== cascaderRef.value?.getCheckedNodes()[0]?.data?.gridId
  ) {
    const { gridCode: code } = await getGridById({ id: gridId });
    newVal = code;
  }
  if (newVal === selectVal.value) return;
  if (newVal) {
    // 修改了默认值，重新加载整颗网格树
    const { areaTree } = await getExpandedTree({
      rootCode: props.root ? "" : useUserStore().userInfo.globalCode,
      targetCode: newVal,
    });
    options.value = convertData([areaTree]);
    // 设置选中值数组
    selectVal.value = newVal;
  } else {
    getRootAreaTree();
  }
};

// 拼接两个层级树
const concatTree = (target, source) => {
  function formatArr(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      const item = arr1[i];
      const item2 = arr2.find((item2) => item2.gridCode === item.gridCode);
      if (!item2) continue;
      if (item.children && item2.children) {
        formatArr(item.children, item2.children);
      } else if (!item.children && item2.children) {
        return (item.children = item2.children);
      }
    }
  }
  formatArr(target, source);
  return target;
};

// 多选逻辑 需要判断当前是修改了gridCodeArr还是gridArr
const getMultipleSelectVal = async (gridCodeArr = [], gridIdArr = []) => {
  const idArr =
    cascaderRef.value
      ?.getCheckedNodes?.(!cascaderProps.checkStrictly)
      .map((item) => item.data.gridId) || [];
  // 首先要判断是否是修改gridId
  if (
    gridIdArr?.length &&
    gridIdArr.sort().toString() !== idArr.sort().toString()
  ) {
    gridCodeArr = [];
    for (let i = 0; i < gridIdArr.length; i++) {
      const { gridCode: code } = await getGridById({ id: gridIdArr[i] });
      gridCodeArr.push(code);
    }
  }

  if (
    gridCodeArr.sort().toString() ===
    (selectVal.value as Array<any>).sort().toString()
  )
    return;

  let cascaderOptions = [];
  for (let i = 0; i < gridCodeArr.length; i++) {
    const { areaTree } = await getExpandedTree({
      rootCode: props.root ? "" : useUserStore().userInfo.globalCode,
      targetCode: gridCodeArr[i],
    });
    if (i === 0) {
      cascaderOptions = [areaTree];
    } else {
      concatTree(cascaderOptions, [areaTree]);
    }
  }
  selectVal.value = gridCodeArr;
  options.value = convertData(cascaderOptions);
};

watch(
  [gridCode, gridId],
  (newVal) => {
    const [gridCode, gridId] = newVal;
    if (cascaderProps.multiple) {
      // 多选
      if (!gridCode?.length && !gridId?.length) return getRootAreaTree();
      getMultipleSelectVal(gridCode as Array<string>, gridId as Array<string>);
    } else {
      // 单选
      if (!gridCode && !gridId) return getRootAreaTree();
      getSelectVal(gridCode, gridId);
    }
  },
  {
    immediate: true,
  }
);
</script>
