"use client";
import Tag from "../../components/tag";
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";

export default function MapperWindow(tagValue, source) {
  const [leftBoard, setLeftBoard] = useState([]);
  const [rightBoard, setRightBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "tag",
    drop: (item) => {
      addTagToBoard(item.id, item.source);
      updateBoard(item.id, item.source);
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

  const updateBoard = (id, source) => {

    if (source === "left") {
      setLeftBoard((leftBoard) => {
      const newArray = [...leftBoard];
      const index = newArray.findIndex((element) => element.id === id);
  
      if (index !== -1) {
        const element = newArray.splice(index, 1)[0]; 
        newArray.push(element);
      }
  
      return newArray;
    });
  } else if (source === "right") {
    setRightBoard((rightBoard) => {
      const newArray = [...rightBoard];
      const index = newArray.findIndex((element) => element.id === id);

      if (index !== -1) {
        const element = newArray.splice(index, 1)[0];
        newArray.push(element);
      }

      return newArray;
    });
  }
}

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

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tag",
    item: { id: tagValue, source: source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div className="bg-white rounded-lg basis-1/2 flex-auto flex-wrap shadow-lg" ref={drop}>
      <h2 className="text-center m-2">Mapping Window</h2>
      <div className="flex gap-10 justify-center">
        <div ref={drag}>
          <h2 className="m-2">Your Tag</h2>
          {leftBoard.map((tag) => (
            <Tag
              key={tag.id}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              onRemove={removeTagFromBoard}
            />
          ))}
        </div>
        <div ref={drag}>
          <h2 className="m-2">Mapp To</h2>
          {rightBoard.map((tag) => (
            <Tag
              key={tag.id}
              tagKey={tag.tagKey}
              tagValue={tag.tagValue}
              source={tag.source}
              onRemove={removeTagFromBoard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
