export const addTagToBoard = (
  id,
  source,
  setLeftBoard,
  setRightBoard,
  getNextId
) => {
  const identifier = getNextId();
  const newTag = { id, identifier, tagKey: id, tagValue: id, source };

  if (source === "left") {
    setLeftBoard((leftBoard) => [...leftBoard, newTag]);
  } else if (source === "right") {
    setRightBoard((rightBoard) => [...rightBoard, newTag]);
  }
};

export const removeTagFromBoard = (identifier, source, setLeftBoard, setRightBoard, leftBoard, rightBoard) => {
  if (source === "left") {
    setLeftBoard((prevLeftBoard) => {
      const updatedLeftBoard = [...prevLeftBoard];
      const index = updatedLeftBoard.findIndex(
        (tag) => tag.identifier === identifier
      );
      if (index !== -1) {
        updatedLeftBoard.splice(index, 1);
        if (index < rightBoard.length) {
          setRightBoard((prevRightBoard) => {
            const updatedRightBoard = [...prevRightBoard];
            updatedRightBoard.splice(index, 1);
            return updatedRightBoard;
          });
        }
      }
      return updatedLeftBoard;
    });
  } else if (source === "right") {
    setRightBoard((prevRightBoard) => {
      const updatedRightBoard = [...prevRightBoard];
      const index = updatedRightBoard.findIndex(
        (tag) => tag.identifier === identifier
      );
      if (index !== -1) {
        updatedRightBoard.splice(index, 1);
        if (index < leftBoard.length) {
          setLeftBoard((prevLeftBoard) => {
            const updatedLeftBoard = [...prevLeftBoard];
            updatedLeftBoard.splice(index, 1);
            return updatedLeftBoard;
          });
        }
      }
      return updatedRightBoard;
    });
  }
};
