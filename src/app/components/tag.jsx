"use client";
import { Tooltip } from "flowbite-react";
import { useDrag } from "react-dnd";

export default function Tag({ tagKey, tagValue, source, onRemove }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tag",
    item: { id: tagValue, source: source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = () => {
    onRemove(tagValue, source);
  };

  return (
    <div ref={drag}>
      <Tooltip content={tagValue}>
        <div
          className="flex m-3 p-4 shadow-lg rounded-md text-center flex-wrap hover:bg-blue-400 hover:text-white hover:cursor-pointer"
          onClick={handleRemove}
        >
          {tagKey}
        </div>
      </Tooltip>
    </div>
  );
}
