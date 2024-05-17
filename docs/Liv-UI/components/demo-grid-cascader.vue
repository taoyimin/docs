@ -1,160 +0,0 @@
<template>
  <el-cascader
    ref="cascaderRef"
    :options="options"
    :props="props1"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const props1 = {
  checkStrictly: true,
  label: "gridName",
  value: "gridCode",
  children: "childList",
};

const cascaderRef = ref(null);
const emit = defineEmits(["update:id"]);

const handleChange = (val: Array<string | number>) => {
  if (cascaderRef.value.getCheckedNodes()?.length !== 0) {
    emit("update:id", cascaderRef.value.getCheckedNodes()[0].data.gridId);
  } else {
    emit("update:id", "");
  }
};

const options = [
  {
    gridName: "江西省",
    gridCode: "36",
    childList: [
      {
        gridId: "423642",
        gridName: "南昌市",
        gridCode: "3601",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423640",
        gridName: "景德镇市",
        gridCode: "3602",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423643",
        gridName: "萍乡市",
        gridCode: "3603",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423641",
        gridName: "九江市",
        gridCode: "3604",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423644",
        gridName: "新余市",
        gridCode: "3605",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423646",
        gridName: "鹰潭市",
        gridCode: "3606",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423638",
        gridName: "赣州市",
        gridCode: "3607",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423639",
        gridName: "吉安市",
        gridCode: "3608",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423645",
        gridName: "宜春市",
        gridCode: "3609",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423637",
        gridName: "抚州市",
        gridCode: "3610",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
      {
        gridId: "423616",
        gridName: "上饶市",
        gridCode: "3611",
        parentId: "423615",
        level: "2",
        last: false,
        spread: null,
        checkArr: "0",
        childList: null,
      },
    ],
  },
];
</script>
