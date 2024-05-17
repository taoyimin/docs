import type { ExtractPropTypes } from "vue";

export const eventDetailProps = {
  /**
   * @description 事件id
   */
  eventId: {
    type: String
    // required: true
  }
};

export type EventDetailProps = ExtractPropTypes<typeof eventDetailProps>;

export const descriptionsFields = [
  {
    prop: "no",
    label: "事件编号"
  },
  {
    prop: "typeName",
    label: "事件类别"
  },
  {
    prop: "detailGridName",
    label: "所属网格"
  },
  {
    prop: "addTime",
    label: "上报时间"
  },
  {
    prop: "sourceName",
    label: "事件来源"
  },
  {
    prop: "typeName",
    label: "标题",
    fieldFormat: (value: string) => value + "事件"
  },
  {
    prop: "contactName",
    label: "上报人"
  },
  {
    prop: "contactTelephone",
    label: "联系电话"
  },
  {
    prop: "desc",
    label: "详细描述",
    width: 100,
    span: 2
  },
  {
    prop: "voiceUrl",
    label: "录音内容",
    fieldType: "audio",
    span: 2
  },
  {
    prop: "imageUrl",
    label: "图片",
    fieldType: "slot",
    span: 2
  }
];
