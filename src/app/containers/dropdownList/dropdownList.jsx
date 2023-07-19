"use client";

import React, { useEffect, useState } from "react";
import PLMETschema from "../../data/PLMET.js";
import DCMESschema from "../../data/DCMES.js";
import Tag from "../../components/tag.jsx";

export default function DropdownList() {
  const [schema, setSchema] = useState("PLMET");
  const [tagsData, setTagsData] = useState({});

  const selectSchema = (e) => {
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
      <select value={schema} onChange={selectSchema} className="mb-4">
        <option value="PLMET">PLMET</option>
        <option value="DC">DC</option>
      </select>
      {Object.entries(tagsData).map(([key, value]) => (
        <Tag
          key={key}
          tagKey={key}
          tagValue={value}
          source= "right"
        />
      ))}
    </div>
  );
}
