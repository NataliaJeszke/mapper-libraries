const BtnDefaultSchema = ({ schema, selectSchema}) => {
  return (
    <select
      value={schema}
      onChange={selectSchema}
      className="shadow-lg bg-blue-400 rounded-md p-2 w-40 text-center text-white font-semibold cursor-pointer"
    >
      <option value="PLMET" className="bg-white text-black">PLMET</option>
      <option value="DC" className="bg-white text-black">DC</option>
    </select>
  );
};

export default BtnDefaultSchema;
