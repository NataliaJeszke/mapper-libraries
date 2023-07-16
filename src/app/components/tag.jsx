'use client'
import { Tooltip } from "flowbite-react";
import { useDrag } from "react-dnd";

export default function Tag({ tagKey, className, tagValue, source, onRemove }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tag",
    item: { id: tagValue, source: source },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  const handleRemove = () => {
    onRemove(tagValue, source);
  };

  return (
    <div ref={drag}>
      <Tooltip content={tagValue}>
        <div
          className={`${className}`}
          onClick={handleRemove}
        >
          {tagKey}
        </div>
      </Tooltip>
    </div>
  );
}

