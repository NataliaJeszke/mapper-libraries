'use client'
// import React, { useState } from 'react';

// function HandleUserFile() {
//   const [filevalue, setFileValue] = useState('');

//   const handleClick = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsText(file);
//     reader.onload = () => {
//       setFileValue(reader.result);
//     };
//     reader.onerror = () => {
//       console.log(reader.error);
//     };
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleClick} />
//       <h2>File Content</h2>
//       <pre>{filevalue}</pre>
//     </div>
//   );
// }

// export default HandleUserFile;
import React, { useState } from 'react';

function HandleUserFile() {
  const [fileValue, setFileValue] = useState('');

  const handleClick = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileValue(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  const parseXML = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const elements = xmlDoc.getElementsByTagName('*');
    const refValues = {};

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const ref = element.getAttribute('ref');
      const value = element.textContent;
      if (ref) {
        if (!refValues[ref]) {
          refValues[ref] = [];
        }
        refValues[ref].push(value);
      }
    }

    return refValues;
  };

  const parsedValues = parseXML(fileValue);

  return (
    <div>
      <input type="file" onChange={handleClick} />
      <h2>File Content</h2>
      <pre>{fileValue}</pre>

      <h2>Values of "ref" Elements</h2>
      <ul>
        {Object.entries(parsedValues).map(([ref, values]) => (
          <li key={ref}>
            <strong>{ref}</strong>
            <ul>
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HandleUserFile;
