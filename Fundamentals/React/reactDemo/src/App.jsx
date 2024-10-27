import React, { useState } from 'react';
import Greeting from './Greeting';
import './App.css';

function App() {

  const objects = [{
    name: 'obj1',
    id: 1
},
{
    name: 'obj2',
    id: 2,
},
{
    name: 'obj3',
    id: 3
}
];
  const [object] = useState(objects);

  

  return (
    <div className="app-container">
      <h1>objects</h1>
      <ul>
        {objects.map(obj => (
          <li key={obj.id}>
            name = {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
