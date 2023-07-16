import HandleUserFile from "../handleUserFiles/handleUserFile";

export default function UserSchema() {
  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <h1>User Schema</h1>
      <HandleUserFile />
    </div>
  );
}
