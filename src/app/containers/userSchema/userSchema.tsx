import HandleUserFile from "../handleUserFile/handleUserFile";

export default function UserSchema() {
  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <h3 className="text-center m-5">Library Schema</h3>
      <div className="flex justify-center">
      <HandleUserFile />
      </div>
    </div>
  );
}
