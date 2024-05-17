<template>
  <el-tree
    ref="treeRef"
    v-bind="$props"
    :load="$props.load ?? load"
    :default-expanded-keys="defaultExpandedKeys"
    @check-change="handleCheckChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-tree>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from "vue";
import Node from "element-plus/es/components/tree/src/model/node";
import type { TreeInstance } from "element-plus";
import type { TreeKey } from "element-plus/es/components/tree/src/tree.type";
import { useUserStore } from "@szxc/stores";
import {
  getExpandedTree,
  getExpandedTreeById,
  getGrid,
  getGridById,
  getGridChildren,
  getRootGrid,
  type Grid,
} from "@szxc/apis";
import { gridTreeProps } from "./grid-tree";

defineOptions({
  name: "LivGridTree",
});

const userStore = useUserStore();

const gridCode = defineModel<string>();

const gridId = defineModel<string>("gridId");

const gridName = defineModel<string>("gridName");

const grid = defineModel<Grid>("grid");

const props = defineProps(gridTreeProps);

const treeRef = ref<TreeInstance | null>(null);

const defaultExpandedKeys = ref<TreeKey[]>(props.defaultExpandedKeys ?? []);

const expose = { ...treeRef.value };

defineExpose(expose);

onMounted(() => {
  Object.assign(expose, treeRef.value);
});

function handleCheckChange(data: Grid, checked: boolean) {
  if (checked) {
    // 设置只能选中单个
    treeRef.value?.setCheckedKeys([data.gridCode]);
    gridCode.value = data.gridCode;
    gridId.value = data.gridId;
    gridName.value = data.gridName;
    grid.value = data;
  } else {
    if (treeRef.value?.getCheckedNodes().length == 0) {
      gridCode.value = "";
      gridId.value = "";
      gridName.value = "";
      grid.value = null;
    }
  }
}

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      initTree(value);
    }
  }
);

watch(
  () => props.gridId,
  async (value) => {
    if (value) {
      const { gridCode } = await getGridById({
        id: value,
      });
      initTree(gridCode);
    }
  }
);

/**
 * 初始化树
 */
async function initTree(gridCode) {
  const node = treeRef.value?.getNode(gridCode);
  if (!node) {
    // 当前节点不存在
    const { areaTree, codePath } = await initData();
    // 先清空展开节点，避免触发load方法
    defaultExpandedKeys.value = [];
    await nextTick();
    treeRef.value?.updateKeyChildren(codePath[0], areaTree.children);
    defaultExpandedKeys.value = codePath.slice(0, -1);
    treeRef.value?.setCheckedKeys(codePath.slice(-1));
  } else {
    // 当前节点存在
    defaultExpandedKeys.value = [];
    await nextTick();
    defaultExpandedKeys.value = [node?.parent?.data?.gridCode];
    treeRef.value?.setCheckedKeys([gridCode]);
  }
}

/**
 * 初始化数据
 */
async function initData() {
  const rootCode = props.root ? "" : userStore.userInfo.globalCode;
  const rootId = props.root ? "" : userStore.userInfo.globalId;
  if (props.modelValue) {
    return await getExpandedTree({
      rootCode: rootCode,
      targetCode: props.modelValue,
    });
  } else if (props.gridId) {
    return await getExpandedTreeById({
      rootId: rootId,
      targetId: props.gridId,
    });
  } else if (props.root) {
    // 查询根网格
    const grid = await getRootGrid();
    return { areaTree: grid, codePath: [grid.gridCode] };
  } else {
    // 查询用户所属网格
    const grid = await getGrid({
      gridCode: userStore.userInfo.globalCode,
    });
    return { areaTree: grid, codePath: [grid.gridCode] };
  }
}

// 加载树节点
async function load(node: Node, resolve: (data: Grid[]) => void) {
  if (node.level === 0) {
    const { areaTree, codePath } = await initData();
    resolve([areaTree]);
    await nextTick();
    if (props.modelValue || props.gridId) {
      defaultExpandedKeys.value = codePath.slice(0, -1);
      treeRef.value?.setCheckedKeys(codePath.slice(-1));
    }
  } else {
    if (node.data.children?.length) {
      // 已有children
      resolve(node.data.children);
    } else {
      // 加载children
      const grids = await getGridChildren({
        gridCode: node.data.gridCode,
      });
      resolve(grids);
    }
  }
}
</script>
