<template>
  <el-select
    placeholder="请选择"
    collapse-tags
    collapse-tags-tooltip
    :max-collapse-tags="3"
    ref="select"
  >
    <template #header>
      <slot name="header">
        <el-input
          v-model="input"
          placeholder="请输入搜索内容"
          clearable
          @keyup.enter="search"
        >
          <template #append>
            <el-button @click="search">
              <i-ep-search />
            </el-button>
          </template>
        </el-input>
      </slot>
    </template>

    <template #default>
      <el-option
        class="hidden"
        v-for="item in preloadData"
        :key="item[props.valueField]"
        :label="item[props.labelField]"
        :value="item[props.valueField]"
      />
      <el-option
        v-for="item in props.data"
        :key="item[props.valueField]"
        :label="item[props.labelField]"
        :value="item[props.valueField]"
      >
        <div class="flex-start">
          <el-icon class="option-icon"
            ><component :is="iconInstance"
          /></el-icon>
          <span>{{
            props.optionFormatter
              ? props.optionFormatter(item)
              : item[props.labelField]
          }}</span>
        </div>
      </el-option>
    </template>

    <template #loading>
      <div
        class="loading-area"
        v-loading="true"
        element-loading-text="加载中..."
      ></div>
    </template>

    <template #empty>
      <el-empty :image-size="80" description="暂无数据" />
    </template>

    <template #footer>
      <div class="pagin-area">
        <el-pagination
          :hide-on-single-page="false"
          :total="props.total"
          :page-size="pageSize"
          v-model:current-page="pageNo"
          layout="prev, pager, next"
          :pager-count="5"
          @current-change="currentChange"
        />
      </div>
    </template>
  </el-select>
</template>

<script lang="ts" setup>
import { onMounted, ref, createVNode, watchEffect, watch, nextTick } from "vue";
import { pageSelectProps } from "./page-select";
import * as Icons from "@element-plus/icons-vue";

defineOptions({
  name: "LivPageSelect"
});

// interface ListItem {
//   [property: string]: any;
// }
const select = ref();
const props = defineProps(pageSelectProps);
const input = ref("");
const searchText = ref("");
const pageNo = ref<number>(1);
const pageSize = ref<number>(props.pageSize);
const preloadData = ref([]);

// 创建按icon实例
const createIconInstance = (props: { icon: string }) => {
  const { icon } = props;
  // 创建icon标签
  return createVNode(Icons[icon as keyof typeof Icons]);
};

const iconInstance = createIconInstance({ icon: props.optionIcon });

// 分页改变事件
const currentChange = (value) => {};

const search = () => {
  pageNo.value = 1;
  searchText.value = input.value;
};

// 提供给外部手动触发远程搜索
const triggerRemote = () => {
  if (pageNo.value === 1 && searchText.value === input.value) {
    props.remoteMethod(searchText.value, pageNo.value, pageSize.value);
  } else {
    pageNo.value = 1;
    searchText.value = input.value;
  }
};

watch(
  [pageNo, searchText],
  () => {
    props.remoteMethod(searchText.value, pageNo.value, pageSize.value);
  },
  {
    immediate: true
  }
);

watch(
  () => props.preloadData,
  async (newValue) => {
    //preloadData.value = newValue;

    preloadData.value = newValue.filter((objOuter) => {
      return !Boolean(
        // 匹配列表数据中是否包含预览数据
        props.data.find((objInner) => {
          return (
            Object.entries(objOuter).toString() ===
            Object.entries(objInner).toString()
          );
        })
      );
    });

    await nextTick();
    preloadData.value = [];
  },
  {
    immediate: true
  }
);

onMounted(() => {});

defineExpose({
  triggerRemote
});
</script>

<style lang="scss" scoped>
.loading-area {
  height: 162px;
}

.empty-area {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}

.pagin-area {
  display: flex;
  justify-content: flex-end;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.option-icon {
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
}

.hidden {
  display: none;
}
</style>
