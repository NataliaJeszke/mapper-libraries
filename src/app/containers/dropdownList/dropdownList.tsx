"use client";

import React, { useEffect, useState } from "react";
import PLMETschema from "../../data/PLMET.js";
import DCMESschema from "../../data/DCMES.js";
import Tag from "../../components/tag.jsx";

export default function DropdownList() {
  const [schema, setSchema] = useState("PLMET");
  const [tagsData, setTagsData] = useState({});

  const selectSchema = (e: any) => {
    setSchema(e.target.value);
  };

  console.log(schema);

  useEffect(() => {
    if (schema === "PLMET") {
      setTagsData(PLMETschema.schema[0]);
    } else if (schema === "DC") {
      setTagsData(DCMESschema.schema[0]);
    }
  }, [schema]);

  return (
    <div>
      <select value={schema} onChange={selectSchema}>
        <option value="PLMET">PLMET</option>
        <option value="DC">DC</option>
      </select>
      {Object.entries(tagsData).map(([key, value]) => (
        <Tag
          key={key}
          tagKey={key}
          tagValue={value}
          className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-sky-700 hover:text-white hover:cursor-pointer"
        />
      ))}
    </div>
  );
}
