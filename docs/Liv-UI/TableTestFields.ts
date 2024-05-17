import { ref } from "vue";

export const buttonClick = ref();

export const switchChange = ref();

export const fields = [
  {
    prop: "no",
    label: "事件编号",
  },
  {
    prop: "statusName",
    label: "事件状态",
  },
  {
    prop: "desc",
    label: "事件描述",
  },
  {
    prop: "archiveFlag",
    label: "归档状态",
    fieldType: "tag",
    tagType: (row, column, cellValue, index) => {
      return cellValue === "0" ? "warning" : "success";
    },
    fieldFormat: (value, data) => {
      return value === "0" ? "未归档" : "已归档";
    },
  },
  {
    prop: "id",
    label: "操作",
    fieldType: "button",
    name: "删除",
    type: "danger",
    onClick: buttonClick,
  },
  {
    prop: "archiveFlag",
    label: "是否归档",
    fieldType: "switch",
    inactiveValue: "0",
    activeValue: "1",
    onChange: switchChange,
  },
  {
    prop: "imageUrl",
    label: "事件图片",
    fieldType: "image",
  },
];
