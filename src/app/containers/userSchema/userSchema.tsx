import schemaData from '../../data/mockSchema.js'
import Tag from '../tag/tag';
import HandleUserFile from '@/app/handleUserFiles/handleUserFile.jsx';

export default function UserSchema(){

    const tagsData = schemaData.schema[0]

    return (
        <div className="bg-white rounded-lg basis-1/4 flex-auto flex-wrap shadow-lg">
          <h1>User Schema</h1>
          <HandleUserFile />
          {Object.keys(tagsData).map(key => (
            <Tag key={key} tagKey={key} className='flex m-2 border-solid border-2 border-slate-950 rounded-md justify-center flex-wrap hover:bg-red-700 hover:text-white hover:cursor-pointer' />
          ))}
        </div>
      );
    }