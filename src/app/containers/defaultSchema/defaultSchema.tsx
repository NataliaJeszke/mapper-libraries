import DropdownList from "../dropdownList/dropdownList";


export default function DefaultSchema() {

  return (
    <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
      <h3>Choose Schema</h3>
      <DropdownList />
    </div>
  );
}
