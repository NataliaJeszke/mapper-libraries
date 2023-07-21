const BtnUserFile = ({ onChange, buttonText }) => {
    return (
      <label
        className="shadow-lg bg-blue-400 rounded-md p-2 w-40 text-center text-white font-semibold cursor-pointer"
      >
        {buttonText}
        <input
          type="file"
          className="hidden"
          onChange={onChange}
        />
      </label>
    );
  };
  
  export default BtnUserFile;