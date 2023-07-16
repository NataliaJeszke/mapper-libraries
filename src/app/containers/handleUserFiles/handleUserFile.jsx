"use client";
import React, { useState, useEffect } from "react";
import { parseString } from "xml2js";
import Tag from "../../components/tag";

function HandleUserFile() {
  const [fileValue, setFileValue] = useState("");
  const [refValues, setRefValues] = useState({});

  const excludedRefs = ["DC", "value", "xml:lang"];

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
    }
  }, [fileValue]);

  const parseXML = (xmlString) => {
    parseString(xmlString, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      const parsedRefValues = {};

      const traverse = (obj) => {
        for (const key in obj) {
          if (key === "ref") {
            const ref = obj[key];
            const value = obj[key];

            if (ref && !excludedRefs.includes(ref)) {
              if (!parsedRefValues[ref]) {
                parsedRefValues[ref] = [];
              }
              parsedRefValues[ref].push(value);
            }
          } else if (typeof obj[key] === "object") {
            traverse(obj[key]);
          }
        }
      };

      traverse(result);

      setRefValues(parsedRefValues);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleClick} />
      <ul>
        {Object.entries(refValues).map(([ref, values]) => (
          <li key={ref}>
            <Tag
              key={ref}
              tagKey={values}
              className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HandleUserFile;
