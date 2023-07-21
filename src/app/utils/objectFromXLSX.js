import * as XLSX from "xlsx";

export const parsedRefValuesExcel = {};

export const jsonDataXLSX = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  const values = jsonData.reduce((acc, row) => {
    if (row[0]) {
      acc[row[0]] = row[0];
    }
    return acc;
  }, {});

  Object.assign(parsedRefValuesExcel, values);
};
