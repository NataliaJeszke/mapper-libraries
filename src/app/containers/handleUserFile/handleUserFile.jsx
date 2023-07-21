"use client";
import React, { useState, useEffect } from "react";
import Tag from "../../components/tag";
import BtnUserFile from "../../components/btnUserFile";
import {parseXML} from "../../utils/parseXML";
import {parsedRefValues} from "../../utils/traverse";
import style from "./handleUserFile.style..module.css"


function HandleUserFile() {
  const [fileValue, setFileValue] = useState("");
  const [refValues, setRefValues] = useState({});

  const handleClick = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileValue(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };

  };

  useEffect(() => {
    if (fileValue) {
      parseXML(fileValue);
      setRefValues(parsedRefValues)
    }
  }, [fileValue]);

  
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
