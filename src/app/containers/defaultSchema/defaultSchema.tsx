import schemaDefault from '../../data/mockDefaultSchema.js';
import Tag from '../tag/tag';


export default function DefaultSchema() {
  const tagsData = schemaDefault.schema[0];


  return (
    <div className="bg-slate-200 rounded basis-1/4 flex-auto flex-wrap shadow-sm card">
      <h1>Choose Schema</h1>
      {Object.keys(tagsData).map(key => (
        <Tag key={key} tagKey={key} className='flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-sky-700 hover:text-white hover:cursor-pointer' />
      ))}
    </div>
  );
}
