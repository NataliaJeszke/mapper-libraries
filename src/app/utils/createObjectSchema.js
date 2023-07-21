export function createObjectSchema(leftBoard, rightBoard){
    const objMappedSchema = leftBoard.reduce((acc, key, index)=>{
        acc[key.tagKey] = rightBoard[index].tagKey;
        return acc;
      }, {});
    return objMappedSchema;
}