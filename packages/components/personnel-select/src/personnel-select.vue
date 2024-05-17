<template>
  <page-select
    ref="pageSelect"
    v-model="compValue"
    :loading="loading"
    :remoteMethod="remoteMethod"
    :data="data"
    :total="total"
    valueField="id"
    labelField="realName"
    optionIcon="UserFilled"
    :preload-data="preloadData"
    :optionFormatter="formatOption"
  >
    <template v-if="props.showGrid" #header>
      <el-space>
        <grid-cascader
          v-model="searchParams.gridCode"
          ref="gridCascader"
          :teleported="false"
          placeholder="请选择网格"
          toggle-popper-visible
          clearable
        ></grid-cascader>
        <el-input
          style="width: 200px"
          v-model="searchParams.userRealName"
          placeholder="请输入用户名或账号"
          clearable
        ></el-input>
        <el-button type="primary" :plain="true" @click="search">
          <icon-font name="icon-zonghechaxun1" style="margin-right: 6px" />
          查询
        </el-button>
      </el-space>
    </template>
  </page-select>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, nextTick, computed } from "vue";
import { personnelSelectProps } from "./personnel-select";
import { getUserPage, getUserList } from "@szxc/apis/personnel";
import { useAttrs } from "vue";
import PageSelect from "../../page-select/src/page-select.vue";
import GridCascader from "../../grid-cascader/src/grid-cascader.vue";
import IconFont from "../../icon-font/src/icon-font.vue";

defineOptions({
  name: "LivPersonnelSelect"
});

const gridCascader = ref(null);
const pageSelect = ref(null);
const emit = defineEmits(["update:modelValue"]);

const props = defineProps(personnelSelectProps);
const attrs = useAttrs();
const loading = ref(false);
const total = ref<number>(0);
const data = ref([]);
const preloadData = ref([]);
const searchParams = ref({
  gridCode: "",
  userRealName: ""
});

let remoteParams = {
  gridCode: "",
  userRealName: ""
};

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  }
});

const compValue = ref(modelValue.value);

const formatOption = (row) => {
  return `${row.realName}（${row.userName}）`;
};

const getUsers = () => {
  const multiple = attrs.multiple;
  let ids;
  if (
    Array.isArray(modelValue.value) &&
    ![undefined, false].includes(multiple as boolean as undefined) &&
    modelValue.value.length
  ) {
    ids = (modelValue.value as string[] | number[]).join(",");
  } else if (
    ["string", "number"].includes(typeof modelValue.value) &&
    [undefined, false].includes(multiple as boolean as undefined) &&
    modelValue.value
  ) {
    ids = modelValue.value;
  } else {
    return;
  }

  getUserList(ids).then((res) => {
    preloadData.value = res;
  });
};

getUsers();

watch(modelValue, (newValue) => {
  if (newValue != compValue.value) {
    compValue.value = modelValue.value;
    getUsers();
  }
});

// 监听组件绑定
watch(compValue, (newValue: string | number | any[]) => {
  modelValue.value = newValue;
});

//onMounted(() => {});

const remoteMethod = (inputValue, pageNo, pageSize) => {
  loading.value = true;

  let params;
  if (props.showGrid) {
    params = {
      size: pageSize,
      current: pageNo,
      ...remoteParams
    };

    console.log(params);
  } else {
    params = {
      size: pageSize,
      current: pageNo,
      userRealName: inputValue
    };
  }

  getUserPage({
    ...params,
    ...props.extraParams
  })
    .then((res) => {
      total.value = res.total;
      data.value = res.records;
    })
    .finally(() => {
      loading.value = false;
    });
};

const search = () => {
  remoteParams = JSON.parse(JSON.stringify(searchParams.value));
  pageSelect.value.triggerRemote();
};
</script>

<style lang="scss" scoped></style>
