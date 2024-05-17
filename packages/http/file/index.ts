/**
 * 导出文件
 * @param response 响应数据
 */
export const exportFile = (response: any) => {
  const blob = new Blob([response.data]);
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = decodeURI(
    response.headers["content-disposition"].replace(/\w+;filename=(.*)/, "$1")
  ); //下载后文件名
  document.body.appendChild(link);
  link.click(); //点击下载
  link.remove(); //下载完成移除元素
  window.URL.revokeObjectURL(link.href); //用完之后使用URL.revokeObjectURL()释放；
};
