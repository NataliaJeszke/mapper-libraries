import {jsonDataXLSX} from './objectFromXLSX'
import * as XLSX from "xlsx";

export default function parseXLSX(fileExcel) {
const workbook = XLSX.read(fileExcel, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      
      jsonDataXLSX(worksheet);
    }