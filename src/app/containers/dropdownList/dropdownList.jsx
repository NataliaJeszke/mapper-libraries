"use client";

import React, { useEffect, useState } from "react";
import PLMETschema from "../../data/PLMET.js";
import DCMESschema from "../../data/DCMES.js";
import Tag from "../../components/tag.jsx";
import BtnDefaultSchema from "../../components/btnDefaultSchema.jsx";
import style from "./dropdown.style.module.css"

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
      <div className={style.defaultSchema_header}>
      <h2 className="text-center m-2">Map To Schema</h2>
      <BtnDefaultSchema schema={schema} selectSchema={selectSchema} />
      </div>
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
