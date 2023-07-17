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
      setLeftBoard((leftBoard) => {
        const index = leftBoard.findIndex((tag) => tag.id === id);
        if (index !== -1) {
          leftBoard.splice(index, 1);
          if (index < rightBoard.length) {
            setRightBoard((rightBoard) => {
              const updatedRightBoard = [...rightBoard];
              updatedRightBoard.splice(index, 1);
              return updatedRightBoard;
            });
          }
        }
        return [...leftBoard];
      });
    } else if (source === "right") {
      setRightBoard((rightBoard) => {
        const index = rightBoard.findIndex((tag) => tag.id === id);
        if (index !== -1) {
          rightBoard.splice(index, 1);
          if (index < leftBoard.length) {
            setLeftBoard((rightBoard) => {
              const updatedLeftBoard = [...rightBoard];
              updatedLeftBoard.splice(index, 1);
              return updatedLeftBoard;
            });
          }
        }
        return [...rightBoard];
      });
    }
  };

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

    return tags;
  };

  return (
    <div
      className="flex flex-col items-center bg-slate-200 rounded basis-1/2 w-64 shadow-sm"
      ref={drop}
    >
      <h1 className="mb-5">Mapper Window</h1>
      <div className="flex">{renderTags()}</div>
    </div>
  );
}
