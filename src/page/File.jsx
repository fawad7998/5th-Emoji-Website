import React from 'react'
import jsonData from './Data/Data.json';

function File() {
  return (
    <div>
      <div>
      <h2>JSON Data from File</h2>
      <ul>
        {jsonData.map(item => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default File;
