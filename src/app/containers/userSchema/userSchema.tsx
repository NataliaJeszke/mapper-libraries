import schemaData from '../../data/mockSchema.js'
import {showTags} from '../../utils/showTags'

export default function UserSchema(){

    const tagsData = schemaData.schema[0]

    const tagsObject = new showTags(
        tagsData.title,
        tagsData.subject,
        tagsData.date,
        tagsData.description
      );


      return (
        <div className="bg-slate-200 rounded basis-1/4 flex-auto flex-wrap shadow-sm">
          <h1>User Schema</h1>
          {Object.keys(tagsObject).map(key => (
            <div key={key}>
              {key}
            </div>
          ))}
        </div>
      );
      
}