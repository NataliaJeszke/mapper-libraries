"use client";
import React, { useState, useEffect } from "react";
import Tag from "../../components/tag";
import BtnUserFile from "../../components/btnUserFile";
import { parseXML } from "../../utils/parseXML";
import parseXLSX from "../../utils/parseXLSX";
import { parsedRefValues } from "../../utils/traverse";
import style from "./handleUserFile.style..module.css";
import { parsedRefValuesExcel } from "@/app/utils/objectFromXLSX";

function HandleUserFile() {
  const [fileValue, setFileValue] = useState("");
  const [refValues, setRefValues] = useState({});
  const [fileExcel, setFileExcel] = useState("");

  const handleClick = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file.name.endsWith(".xml" || ".xsd")) {
      reader.readAsText(file);
      reader.onload = () => {
        setFileValue(reader.result);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    } else if (file.name.endsWith(".xlsx")) {
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        setFileExcel(reader.result);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    } else {
      console.log("Nieobsługiwany typ pliku");
    }
    // reader.readAsText(file);
    // reader.onload = () => {
    //   setFileValue(reader.result);
    // };
    // reader.onerror = () => {
    //   console.log(reader.error);
    // };
  };

  useEffect(() => {
    if (fileValue) {
      parseXML(fileValue);
      setRefValues(parsedRefValues);
    } else if (fileExcel) {
      parseXLSX(fileExcel);
      setRefValues(parsedRefValuesExcel);
      console.log(refValues);
    }
  }, [fileValue, fileExcel]);

  return (
    <div>
      <div className={style.user_header}>
        <h2 className="text-center m-2">Library Schema</h2>
        <BtnUserFile onChange={handleClick} buttonText="Upload Schema" />
      </div>
      <ul>
        {Object.entries(refValues).map(([ref, values]) => (
          <li key={ref}>
            <Tag key={ref} tagKey={values} tagValue={ref} source="left" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HandleUserFile;
