export const getDictList = (
  params: { dicCode: string },
  config: { fieldsMap: Record<string, string> }
) => {
  return Promise.resolve([
    {
      label: "公众号上报",
      value: "1",
    },
    {
      label: "网格员上报",
      value: "2",
    },
    {
      label: "物联网设备自动上报",
      value: "3",
    },
    {
      label: "APP上报",
      value: "4",
    },
    {
      label: "群众上报",
      value: "5",
    },
    {
      label: "AI智能识别上报",
      value: "7",
    },
    {
      label: "巡查员上报",
      value: "8",
    },
    {
      label: "督查上报",
      value: "9",
    },
    {
      label: "其他平台",
      value: "10",
    },
    {
      label: "管理员上报",
      value: "21",
    },
    {
      label: "管护员上报",
      value: "22",
    },
    {
      label: "监督员上报",
      value: "23",
    },
    {
      label: "上级转办",
      value: "31",
    },
  ]);
};
