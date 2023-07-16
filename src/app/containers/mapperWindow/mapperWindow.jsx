"use client";
import Tag from "../../components/tag";
import { useState } from "react";
import { useDrop } from "react-dnd";

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

  return (
    <div className="bg-slate-200 rounded basis-1/2 w-64 shadow-sm" ref={drop}>
      <h1>Mapper Window</h1>
      <div className="flex gap-10">
        <div>
          <h1>Left</h1>
          {leftBoard.map((tag) => (
            <Tag
              key={tag.id}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer"
              onRemove={removeTagFromBoard}
            />
          ))}
        </div>
        <div>
          <h1>Right</h1>
          {rightBoard.map((tag) => (
            <Tag
              key={tag.id}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              className="flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer"
              onRemove={removeTagFromBoard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



