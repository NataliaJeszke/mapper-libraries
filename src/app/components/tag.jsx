import {Tooltip } from 'flowbite-react';
import {useDrag} from 'react-dnd';

export default function Tag({ tagKey, className, tagValue }) {

  const [{isDragging}, drag] = useDrag(() => ({
    type: "tag",
    item: {id: tagValue},
    collect: (monitor)=>({
      isDragging: !!monitor.isDragging(),
    })
  }))


  return(
    <div ref={drag}> 
    <Tooltip content={tagValue}>
    <div className={`${className}`}>{tagKey}</div>
    </Tooltip>
  </div>
  )

}
