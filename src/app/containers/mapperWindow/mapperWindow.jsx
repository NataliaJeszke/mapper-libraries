"use client";

import Tag from "../../components/tag";
import BtnJSON from "../../components/btnJSON";
import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { getNextId } from "../../utils/uniqueID";
import { addTagToBoard, removeTagFromBoard } from "../../utils/tagFunctions";
import style from "./mapper.style.module.css";
import { createObjectSchema } from "@/app/utils/createObjectSchema";
import  createJsonFile  from "@/app/utils/createJsonFile";

export default function MapperWindow(tagValue, source) {
  const [leftBoard, setLeftBoard] = useState([]);
  const [rightBoard, setRightBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tag",
    drop: (item) => {
      addTagToBoard(
        item.id,
        item.source,
        setLeftBoard,
        setRightBoard,
        getNextId
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tag",
    item: { id: tagValue, source: source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    const objMappedSchema = createObjectSchema(leftBoard, rightBoard);

    createJsonFile(objMappedSchema);
  };

  return (
    <div
      className="bg-white rounded-lg basis-1/2 flex-auto flex-wrap shadow-lg"
      ref={drop}
    >
      <div className={style.mapper_header}>
        <h2 className="text-center m-2">Mapping Window</h2>
        <BtnJSON onClick={handleClick} buttonText="Create JSON" />
      </div>

      <div className="flex gap-10 justify-center">
        <div ref={drag}>
          <h2 className="m-2">Your Tag</h2>
          {leftBoard.map((tag) => (
            <Tag
              key={tag.identifier}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              identifier={tag.identifier}
              onRemove={() =>
                removeTagFromBoard(
                  tag.identifier,
                  tag.source,
                  setLeftBoard,
                  setRightBoard,
                  leftBoard,
                  rightBoard
                )
              }
            />
          ))}
        </div>
        <div ref={drag}>
          <h2 className="m-2">Mapp To</h2>
          {rightBoard.map((tag) => (
            <Tag
              key={tag.identifier}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              identifier={tag.identifier}
              onRemove={() =>
                removeTagFromBoard(
                  tag.identifier,
                  tag.source,
                  setLeftBoard,
                  setRightBoard,
                  leftBoard,
                  rightBoard
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
