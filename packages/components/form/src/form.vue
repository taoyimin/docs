<template>
  <el-form ref="formRef" class="vp-raw" v-bind="props">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-form>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { FormInstance } from "element-plus";
import type {
  FormItemProp,
  FormValidateCallback,
  FormValidationResult,
} from "element-plus";
import { formProps } from "./form";
import { type Arrayable } from "@szxc/utils";

defineOptions({
  name: "LivForm",
});

// 组件属性
const props = defineProps(formProps);

// 表单实例
const formRef = ref<FormInstance>();

const validate = async (callback?: FormValidateCallback): Promise<void> => {
  await formRef.value?.validate(callback);
};

const validateField = (
  props?: Arrayable<FormItemProp> | undefined,
  callback?: FormValidateCallback | undefined
): FormValidationResult => {
  return formRef.value?.validateField(props, callback);
};

const resetFields = (props?: Arrayable<FormItemProp> | undefined): void => {
  formRef.value?.resetFields(props);
};

const scrollToField = (prop: FormItemProp) => {
  formRef.value?.scrollToField(prop);
};

const clearValidate = (props?: Arrayable<FormItemProp> | undefined): void => {
  formRef.value?.clearValidate(props);
};

defineExpose({
  validate,
  validateField,
  resetFields,
  scrollToField,
  clearValidate,
});
</script>
