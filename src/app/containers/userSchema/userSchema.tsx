import HandleUserFile from "../handleUserFile/handleUserFile";

export default function UserSchema() {
  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <div className="flex justify-center">
      <HandleUserFile />
      </div>
    </div>
  );
}
