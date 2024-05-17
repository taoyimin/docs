import XLSX from "exceljs";
import { ElMessage, dayjs } from "element-plus";

/**
 * excel 导出
 * style:excel表的样式配置
 * tableData:表的数据内容
 * headerColumns:表头配置
 * sheetName：工作表名
 */

interface excelParamsType {
  sheetName: string;
  style?: XLSX.StyleOptions;
  headerColumns: Array<any>;
  tableData: Array<any>;
}

// table 字段是索引时默认初始字段
const serialFieldName = "export_serial";

// 默认样式
const excelBaseStyle = {
  font: {
    size: 16,
    bold: true,
    color: { argb: "000000" }
  },
  alignment: { vertical: "middle", horizontal: "center" },
  fill: {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "e5e5e5" }
  },
  border: {
    top: { style: "thin", color: { argb: "9e9e9e" } },
    left: { style: "thin", color: { argb: "9e9e9e" } },
    bottom: { style: "thin", color: { argb: "9e9e9e" } },
    right: { style: "thin", color: { argb: "9e9e9e" } }
  }
};

export const excelJsExport = async (options: excelParamsType) => {
  let { sheetName, style, headerColumns, tableData } = options;
  if (tableData.length === 0) return ElMessage.error("暂无数据");
  style = style || excelBaseStyle;
  sheetName = sheetName || dayjs().format("YYYY-MM-DD") + ".xlsx";
  // 创建工作簿
  const workbook = new XLSX.Workbook();

  // 添加工作表
  const worksheet = workbook.addWorksheet(sheetName);

  if (headerColumns.length > 0) {
    // 设置列头
    const columnsData = headerColumns.map((column, index) => {
      const width = column.width;
      return {
        header: column.label,
        key: column.prop || serialFieldName,
        width: isNaN(width) ? 20 : width / 10
      };
    });
    worksheet.columns = columnsData;
    // 设置表头样式
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.style = style as Partial<XLSX.Style>;
    });
  }
  // 设置行数据
  const data = tableData.map((item, index) => {
    const obj = {};
    headerColumns.forEach((header, i) => {
      // 处理一些特殊字段
      if (header.fieldFormat && typeof header.fieldFormat === "function") {
        obj[header.prop || serialFieldName] = header.fieldFormat(
          item[header.prop],
          item
        );
      } else if (header.type === "index") {
        obj[header.prop || serialFieldName] = index + 1;
      } else {
        obj[header.prop] = item[header.prop];
      }
    });
    return obj;
  });

  // 添加行
  if (data) worksheet.addRows(data);
  // 获取每列数据，依次对齐
  worksheet.columns.forEach((column) => {
    column.alignment = style.alignment as Partial<XLSX.Alignment>;
  });
  // 设置每行的边框
  const dataLength = data.length as number;
  const tabeRows = worksheet.getRows(2, dataLength + 1);
  tabeRows.forEach((row) => {
    row.eachCell({ includeEmpty: true }, (cell) => {
      cell.border = style.border as Partial<XLSX.Borders>;
    });
  });

  const boldData = await workbook.xlsx.writeBuffer();
  let blob = new Blob([boldData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = sheetName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(a.href);
};
