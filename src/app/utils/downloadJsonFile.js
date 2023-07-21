export default function downloadJsonFile(jsonFile){
    const a = document.createElement('a');
    a.href = URL.createObjectURL(jsonFile);
    a.download = 'schema.json';
    a.click();
}