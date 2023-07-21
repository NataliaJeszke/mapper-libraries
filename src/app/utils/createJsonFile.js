import  downloadJsonFile  from './downloadJsonFile';

export default function createJSONfile(objMappedSchema){
    const MappedJSON = JSON.stringify(objMappedSchema, null, 2);

    const jsonFile = new Blob([MappedJSON], { type: 'application/json' });
    
    downloadJsonFile(jsonFile);
}