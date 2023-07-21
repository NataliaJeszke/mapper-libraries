const BtnJSON = ({ onClick, buttonText }) => {
  return (
    <button
      className="shadow-lg bg-blue-400 rounded-md p-2 w-40 text-center text-white font-semibold active:shadow-inner"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default BtnJSON;