"use client";
import React, { useState, useEffect } from "react";
import Tag from "../../components/tag";
import {parseXML} from "../../utils/parseXML";
import {parsedRefValues} from "../../utils/traverse";


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
      <input type="file" onChange={handleClick} className="mb-4" />
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
