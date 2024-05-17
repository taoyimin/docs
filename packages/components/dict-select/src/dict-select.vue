<template>
  <el-select
    :modelValue="modelValue ? model : dictId"
    @update:model-value="updateModelValue"
    class="vp-raw"
    placeholder="请选择"
    :value-key="fieldsMap.dictId"
  >
    <el-option
      v-for="item in options"
      :key="item[fieldsMap.dictCode]"
      :label="item[fieldsMap.dictName]"
      :value="item"
    />
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-select>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { type Dict, getDictList, getDictListById } from "@szxc/apis";
import { dictSelectProps } from "./dict-select";
import type { Arrayable } from "@szxc/utils";
import { computed } from "vue";

defineOptions({
  name: "LivDictSelect",
});

const props = defineProps(dictSelectProps);

const fieldsMap = computed<Record<string, string>>(() => {
  if (options.value.length !== 0) {
    if (options.value[0].dicCode) {
      return {
        dictId: "dicId",
        dictCode: "dicCode",
        dictName: "dicName",
      };
    } else if (options.value[0].dicSubCode) {
      return {
        dictId: "dicSubId",
        dictCode: "dicSubCode",
        dictName: "dicSubName",
      };
    } else if (options.value[0].dicThrCode) {
      return {
        dictId: "dicThrId",
        dictCode: "dicThrCode",
        dictName: "dicThrName",
      };
    }
  } else {
    return {};
  }
});

const model = defineModel<Arrayable<Dict> | Arrayable<string>>({
  set(value: Arrayable<Dict>) {
    return setValue(value, fieldsMap.value.dictCode);
  },
  get(value: Arrayable<string>) {
    return getValue(value, fieldsMap.value.dictCode);
  },
});

const dictId = defineModel<Arrayable<Dict> | Arrayable<number>>("dictId", {
  set(value: Arrayable<Dict>) {
    return setValue(value, fieldsMap.value.dictId);
  },
  get(value: Arrayable<number>) {
    return getValue(value, fieldsMap.value.dictId);
  },
});

const dictName = defineModel<Arrayable<string>>("dictName");

const dict = defineModel<Arrayable<Dict>>("dict");

const options = ref<Dict[]>([]);

function setValue(value: Arrayable<Dict>, key: string) {
  if (value) {
    if (Array.isArray(value)) {
      dictName.value = value.map((dict) => dict[fieldsMap.value.dictName]);
      dict.value = value;
      return value.map((dict) => dict[key]);
    } else {
      dictName.value = value[fieldsMap.value.dictName];
      dict.value = value;
      return value[key];
    }
  } else {
    return value;
  }
}

function getValue(value: Arrayable<string | number>, key: string) {
  if (value) {
    if (Array.isArray(value)) {
      return options.value.filter((dict) => value.includes(dict[key]));
    } else {
      return options.value.find((dict) => dict[key] == value);
    }
  } else {
    return value;
  }
}

function updateModelValue(value) {
  model.value = value;
  dictId.value = value;
}

watchEffect(() => {
  if (!props.dictType && !props.parentId) {
    options.value = [];
    model.value = undefined;
    dictId.value = undefined;
    dictName.value = undefined;
    dict.value = undefined;
  }
});

watchEffect(async () => {
  if (props.parentId) {
    options.value = await getDictListById({ id: props.parentId, subLevel: 3 });
  }
});

watchEffect(async () => {
  if (props.dictType) {
    options.value = await getDictList({ dicCode: props.dictType });
  }
});
</script>
