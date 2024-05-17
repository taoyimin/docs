<template>
  <el-tree
    :key
    ref="treeRef"
    v-bind="$props"
    :load="$props.load ?? load"
    :default-expanded-keys="defaultExpandedKeys"
    @check-change="handleCheckChange"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
    <template v-if="!$slots['default']" #default="{ data }">
      <span
        >{{ data.gridName }}
        <span v-if="data.monitorCount" class="monitor-count"
          >({{ data.monitorCount }}路)</span
        >
      </span>
    </template>
  </el-tree>
</template>

<script lang="ts" setup>
import { watch, computed, onMounted, ref, nextTick } from "vue";
import Node from "element-plus/es/components/tree/src/model/node";
import type { TreeInstance } from "element-plus";
import type { TreeKey } from "element-plus/es/components/tree/src/tree.type";
import { useUserStore } from "@szxc/stores";
import {
  getGridById,
  getExpandedTree,
  getExpandedTreeById,
  getMonitorGridList,
  type MonitorGrid,
  type Grid,
} from "@szxc/apis";
import { monitorTreeProps } from "./monitor-tree";

defineOptions({
  name: "LivMonitorTree",
});

const userStore = useUserStore();

const key = computed(() => {
  return props.deviceModel || props.deviceType || props.status
    ? props.deviceModel + props.deviceType + props.status
    : Symbol();
});

const gridCode = defineModel<string>();

const gridId = defineModel<string>("gridId");

const gridName = defineModel<string>("gridName");

const grid = defineModel<Grid>("grid");

const props = defineProps(monitorTreeProps);

const treeRef = ref<TreeInstance | null>(null);

const defaultExpandedKeys = ref<TreeKey[]>(props.defaultExpandedKeys ?? []);

const expose = { ...treeRef.value };

defineExpose(expose);

onMounted(() => {
  Object.assign(expose, treeRef.value);
});

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
    const { codePath } = await initData();
    // 先清空展开节点，避免触发load方法
    defaultExpandedKeys.value = [];
    await nextTick();
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
  const rootCode = userStore.userInfo.globalCode;
  const rootId = userStore.userInfo.globalId;
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
  } else {
    // 返回用户所属网格
    return { codePath: [userStore.userInfo.globalCode] };
  }
}

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

// 加载树节点
async function load(node: Node, resolve: (data: MonitorGrid[]) => void) {
  if (node.level === 0) {
    const { codePath } = await initData();
    const monitorGrids = await getMonitorGridList({
      gridCode: "",
      deviceModel: props.deviceModel,
      deviceType: props.deviceType,
      status: props.status,
    });
    resolve(monitorGrids);
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
      const monitorGrids = await getMonitorGridList({
        gridCode: node.data.gridCode,
        deviceModel: props.deviceModel,
        deviceType: props.deviceType,
        status: props.status,
      });
      resolve(monitorGrids);
    }
  }
}
</script>

<style lang="scss" scoped>
.monitor-count {
  color: var(--el-color-primary);
}
</style>
