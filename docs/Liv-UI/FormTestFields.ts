import { ref } from "vue";

// 动态表单项
export const dynamicFields = ref({});

export const fields = [
  {
    prop: "no",
    label: "编号",
    fieldType: "input",
  },
  {
    prop: "formType",
    label: "表单类型",
    fieldType: "radio",
    fieldData: [
      {
        label: "事件类型",
        value: "eventType",
      },
      {
        label: "事件来源",
        value: "eventSource",
      },
    ],
  },
  dynamicFields,
  {
    prop: "time",
    label: "上报时间",
    fieldType: "date",
  },
];
