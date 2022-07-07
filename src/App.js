import './App.css';

import { useState, useEffect } from 'react';

function App() {

  const [test, setTest] = useState('');

  useEffect(()=>{
    fetch(`https://sneakerteam.herokuapp.com/api/users`).then(res=>res.json()).then(d=>{console.log(d)
      setTest(d);
    })
  },[])

  // console.log(test)
  return (
    <div className="App">
      <table>
        <thead>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
        </thead>
        <tbody>
          {(test!='')?test.map((m)=>(<tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.firstName}</td>
              <td>{m.lastName}</td>
              <td>{m.email}</td>
            </tr>)):(<tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
