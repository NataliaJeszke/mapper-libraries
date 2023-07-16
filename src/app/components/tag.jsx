import { Button, Tooltip } from 'flowbite-react';

export default function Tag({ tagKey, className, tagValue }) {



  return(
    <div> 
    <Tooltip content={tagValue}>
    <div className={`${className}`}>{tagKey}</div>
    </Tooltip>
  </div>
  )

}
