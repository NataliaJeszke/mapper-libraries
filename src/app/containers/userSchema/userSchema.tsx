import HandleUserFile from "../handleUserFile/handleUserFile";

export default function UserSchema() {
  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <h3>Library Schema</h3>
      <HandleUserFile />
    </div>
  );
}
