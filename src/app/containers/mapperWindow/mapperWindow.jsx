"use client";
import Tag from "../../components/tag";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from 'uuid';

export default function MapperWindow() {
  const [leftBoard, setLeftBoard] = useState([]);
  const [rightBoard, setRightBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tag",
    drop: (item) => {
      addTagToBoard(item.id, item.source);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTagToBoard = (id, source) => {
    const newTag = { id: id, tagKey: id, tagValue: id, source: source };

    if (source === "left") {
      setLeftBoard((leftBoard) => [...leftBoard, newTag]);
    } else if (source === "right") {
      setRightBoard((rightBoard) => [...rightBoard, newTag]);
    }
  };

  const removeTagFromBoard = (id, source) => {
    if (source === "left") {
      setLeftBoard((leftBoard) => leftBoard.filter((tag) => tag.id !== id));
    } else if (source === "right") {
      setRightBoard((rightBoard) => rightBoard.filter((tag) => tag.id !== id));
    }
  };

  console.log("Left Board:", leftBoard);
  console.log("Right Board:", rightBoard);

  const renderTags = () => {
    const tags = [];
    const maxLength = Math.max(leftBoard.length, rightBoard.length);

    for (let i = 0; i < maxLength; i++) {
      const leftTag = leftBoard[i];
      const rightTag = rightBoard[i];

      if (leftTag) {
        tags.push(
          <Tag
            key={leftTag.id}
            tagKey={leftTag.tagKey}
            tagValue={leftTag.tagValue}
            source={leftTag.source}
            className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer"
            onRemove={removeTagFromBoard}
          />
        );
      }

      if (rightTag) {
        tags.push(
          <Tag
            key={rightTag.id}
            tagKey={rightTag.tagKey}
            tagValue={rightTag.tagValue}
            source={rightTag.source}
            className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-blue-700 hover:text-white hover:cursor-pointer"
            onRemove={removeTagFromBoard}
          />
        );
      }
    }

    const uniqueId = uuidv4()
    return <div className="flex" id={uniqueId}>{tags}</div>
  };

  return (
    <div className="flex flex-col items-center bg-slate-200 rounded basis-1/2 w-64 shadow-sm" ref={drop}>
      <h1 className="mb-5">Mapper Window</h1>
      <div className="bg-red-100">
        <h1>Tags</h1>
        {renderTags()}
      </div>
    </div>
  );
}




