import DropdownList from "../dropdownList/dropdownList";

export default function DefaultSchema() {
  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <h3 className="text-center m-5">Choose Schema</h3>
      <div className="flex justify-center">
        <DropdownList />
      </div>
    </div>
  );
}
